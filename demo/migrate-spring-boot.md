# We will migrate the Spring PetClinic to Spring Boot 2.
## These recipes are in the added Rewrite Spring Module.

```shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.26.0 \
    -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
```

```shell {maxHeight:'100'}
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot2.SpringBoot1To2Migration]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] org.openrewrite.maven.internal.MavenParsingException: No version provided for dependency org.webjars:webjars-locator
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.0.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}
[WARNING]             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
[WARNING]                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.1.x, overrideManagedVersion=true}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.3.x, overrideManagedVersion=true}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.5.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.BeanMethodsNotPublic
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}
[WARNING]                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                         org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  30.631 s
[INFO] Finished at: 2022-10-10T10:40:19+01:00
[INFO] ------------------------------------------------------------------------
```
