# Our application has now been upgraded to 2.x.
## In our application code we can see quite some revelant changes.

### Hibernate validator has been replaced with Javax.

```shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/model/Person.java
```

```diff
diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java
index 4cb7481..5d23523 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/Person.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/Person.java
@@ -17,8 +17,7 @@ package org.springframework.samples.petclinic.model;
 
 import javax.persistence.Column;
 import javax.persistence.MappedSuperclass;
-
-import org.hibernate.validator.constraints.NotEmpty;
+import javax.validation.constraints.NotEmpty;
 
 /**
  * Simple JavaBean domain object representing an person.
```