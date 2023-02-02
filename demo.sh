#!/bin/bash
clear;
set -e
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Quick run through start to finish without prompt/clear
#function read { echo "read"; }
#function clear { echo "clear"; }

function wrap {
	echo
	echo $ $(printf "%q " "$@")
	read -p ""
	eval $(printf "%q " "$@")
	read -p "
	OK
"
}


clear
echo '# First we start a new branch from the 1.5.x tag of the Spring PetClinic project'
wrap cd /home/tim/Documents/workspace/spring-petclinic
git reset --hard
git clean -f
git checkout main
! git branch -D openrewrite-migration-demo
git switch -c openrewrite-migration-demo 1.5.x
git log -n 1
echo '
# You can see the last commit was in 2017'
read -p ""


echo '
# Next we ensure we are running Java 8 for now.'
wrap sdk use java 8.0.352-tem

echo '# Then we upgrade the Maven wrapper for compatibility, and to add some color.'
wrap ./mvnw wrapper:wrapper -Dmaven=3.8.7


echo '# And we commit the results to have a clean slate.'
wrap git commit -a -m 'Spring Boot 1.5 on Java 8'



clear
echo '# We will migrate the Spring PetClinic to Spring Boot 2.
# These recipes are in the added Rewrite Spring Module.
'
wrap ./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=\
org.openrewrite.recipe:rewrite-spring:LATEST \
  -DactiveRecipes=\
org.openrewrite.java.spring.boot2.SpringBoot1To2Migration

wrap echo "# Notice how each file lists the changes made by recipes."

clear
echo '# Our application has now been upgraded to 2.x.
# In our application code we can see quite some revelant changes.
'
echo '# - Hibernate validator has been replaced with Javax.'
wrap git --no-pager diff src/main/java/org/springframework/samples/petclinic/model/Person.java

echo '# - Unnecessary @AutoWired annotations have been removed.'
wrap git --no-pager diff src/main/java/org/springframework/samples/petclinic/vet/VetController.java

echo '# - and web parameter arguments have also been removed.'
wrap git --no-pager diff src/main/java/org/springframework/samples/petclinic/owner/PetController.java

wrap echo '# These types of changes will make your application FEEL more recent'


clear
echo '# Our application.properties have also been updated.
# - Database initialization properties have been moved.
# - Actuator properties have also undergone changes.'
wrap git --no-pager diff src/main/resources/


clear
echo '# Our pom.xml file now contains updated plugins and dependencies'
wrap git --no-pager diff pom.xml


echo '# Our tests have also been migrated to JUnit 5,
# with similar changes to what we have seen before.
'
#clear
#echo '# Our tests have also been migrated to JUnit 5.
# - Our imports have been converted as you would expect.
# - Notice how Mockito now uses the extension.
# - Our test life cycle annotations have been converted.
# - Visibility modifiers are only removed where applicable.
# - Expected exceptions have been converted into assertThrows.'
#wrap git --no-pager diff src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java


echo '# Satisfied with our changes, we commit the results.'
wrap git commit -a -m "Spring Boot 2.7 on Java 8"


# Quick hack to drop Wro4j with unresolvable conflict
xml ed -P -L -N x="http://maven.apache.org/POM/4.0.0" -d '//x:build/x:plugins/x:plugin/x:artifactId[text()="wro4j-maven-plugin"]/..' pom.xml


clear
echo '# Next we will upgrade to Java 17 using a different module.
# The Migrate Java module contains recipes to adopt new language features.'
wrap ./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=\
org.openrewrite.recipe:rewrite-migrate-java:LATEST \
  -DactiveRecipes=\
org.openrewrite.java.migrate.UpgradeToJava17

echo '# - The compiler source and target versions are updated.
# - Dependencies have been added for jaxb.
# - Cobertura & Wro4j have been dropped, as they are incompatible.'
wrap git --no-pager diff pom.xml

echo '# Individually, these might be simple changes.
# But by automating these changes, we can run them at scale,
# to upgrade our entire application landscape in minutes.

# We update our JDK to now use Java 17'
wrap sdk use java 17.0.5-tem
echo '
# And with a final commit, we complete the migration.'
wrap git commit -a -m "Spring Boot 2.7 on Java 17"

clear
echo '# Now finally, we run Maven verify to see how we did on the migration.

# There will be two test failures that we have to fix by hand.
# These are caused by the validator migration & a response type change.
# Not a bad result for an automated migration!'
wrap ./mvnw verify

