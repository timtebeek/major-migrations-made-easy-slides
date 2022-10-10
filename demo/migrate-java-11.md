# Next we will upgrade to Java 11 using a different module.
## The Migrate Java module contains recipes to adopt new language features.

```shell {maxHeight: '100'}
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \
    -DactiveRecipes=org.openrewrite.java.migrate.Java8toJava11

[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.Java8toJava11]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.Java8toJava11
[WARNING]         org.openrewrite.java.migrate.javax.AddJaxbDependencies
[WARNING]             org.openrewrite.java.migrate.javax.AddJaxbRuntime: {runtime=sun}
[WARNING]         org.openrewrite.java.migrate.AddJDeprScanPlugin
[WARNING]         org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
[WARNING]             org.openrewrite.maven.RemovePlugin: {groupId=org.codehaus.mojo, artifactId=cobertura-maven-plugin}
[WARNING]         org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
[WARNING]             org.openrewrite.maven.UpgradePluginVersion: {groupId=ro.isdc.wro4j, artifactId=wro4j-maven-plugin, newVersion=1.10.1}
[WARNING]         org.openrewrite.java.migrate.JavaVersion11
[WARNING]             org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=11, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  23.821 s
[INFO] Finished at: 2022-10-10T11:05:42+01:00
[INFO] ------------------------------------------------------------------------
```