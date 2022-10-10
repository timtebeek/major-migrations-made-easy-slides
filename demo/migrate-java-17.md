# Next we run the recipe for the Java 17 migration.
```shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \
    -DactiveRecipes=org.openrewrite.java.migrate.JavaVersion17
```
```shell
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.JavaVersion17]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.JavaVersion17
[WARNING]         org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=17, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  14.908 s
[INFO] Finished at: 2022-10-10T11:12:29+01:00
[INFO] ------------------------------------------------------------------------
```