# Our pom.xml file now contains updated plugins and dependencies

```shell
$ git --no-pager diff pom.xml
```

```diff
diff --git a/pom.xml b/pom.xml
index 6fdc4d1..6c68c9f 100644
--- a/pom.xml
+++ b/pom.xml
@@ -10,7 +10,7 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
-    <version>1.5.4.RELEASE</version>
+    <version>2.5.14</version>
   </parent>
   <name>petclinic</name>
 
@@ -26,7 +26,6 @@
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
     <wro4j.version>1.8.0</wro4j.version>
-    <thymeleaf.version>3.0.6.RELEASE</thymeleaf.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -37,6 +36,16 @@
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-actuator</artifactId>
+      <exclusions>
+        <exclusion>
+          <groupId>junit</groupId>
+          <artifactId>junit</artifactId>
+        </exclusion>
+        <exclusion>
+          <groupId>org.junit.vintage</groupId>
+          <artifactId>junit-vintage-engine</artifactId>
+        </exclusion>
+      </exclusions>
     </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
@@ -54,12 +63,16 @@
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
       <exclusions>
-      	<exclusion>
-      		<groupId>nz.net.ultraq.thymeleaf</groupId>
-      		<artifactId>thymeleaf-layout-dialect</artifactId>
-      	</exclusion>
+        <exclusion>
+          <groupId>nz.net.ultraq.thymeleaf</groupId>
+          <artifactId>thymeleaf-layout-dialect</artifactId>
+        </exclusion>
       </exclusions>
     </dependency>
+    <dependency>
+      <groupId>org.springframework.boot</groupId>
+      <artifactId>spring-boot-starter-validation</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
@@ -83,16 +96,16 @@
       <groupId>javax.cache</groupId>
       <artifactId>cache-api</artifactId>
     </dependency>
+    <dependency>
+      <groupId>javax.validation</groupId>
+      <artifactId>validation-api</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.ehcache</groupId>
       <artifactId>ehcache</artifactId>
     </dependency>
 
     <!-- webjars -->
-    <dependency>
-      <groupId>org.webjars</groupId>
-      <artifactId>webjars-locator</artifactId>
-    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>jquery</artifactId>
@@ -115,6 +128,23 @@
       <artifactId>spring-boot-devtools</artifactId>
       <scope>runtime</scope>
     </dependency>
+    <dependency>
+      <groupId>org.hamcrest</groupId>
+      <artifactId>hamcrest</artifactId>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.junit.jupiter</groupId>
+      <artifactId>junit-jupiter</artifactId>
+      <version>5.9.1</version>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.mockito</groupId>
+      <artifactId>mockito-junit-jupiter</artifactId>
+      <version>4.8.0</version>
+      <scope>test</scope>
+    </dependency>
   </dependencies>
 
   <build>
```