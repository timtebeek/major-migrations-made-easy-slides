# The change is minimal

```diff
diff --git a/pom.xml b/pom.xml
index 6680c33..ed3ce9b 100644
--- a/pom.xml
+++ b/pom.xml
@@ -1,7 +1,5 @@
 <?xml version="1.0" encoding="UTF-8"?>
-<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-  xmlns="http://maven.apache.org/POM/4.0.0"
-  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
+<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>org.springframework.samples</groupId>
   <artifactId>spring-petclinic</artifactId>
@@ -17,7 +15,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>11</java.version>
+    <java.version>17</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
```