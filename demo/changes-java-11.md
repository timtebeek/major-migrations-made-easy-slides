# The compiler source and target versions are updated.

## Dependencies have been added for jaxb.

## Wro4j has been upgraded to be compatible.

## Cobertura has been dropped, as it is incompatible.

```shell
$ git --no-pager diff pom.xml
```

```diff
diff --git a/pom.xml b/pom.xml
index 6c68c9f..6680c33 100644
--- a/pom.xml
+++ b/pom.xml
@@ -17,7 +17,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>1.8</java.version>
+    <java.version>11</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
 
@@ -25,7 +25,7 @@
     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
-    <wro4j.version>1.8.0</wro4j.version>
+    <wro4j.version>1.10.1</wro4j.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -116,6 +116,24 @@
       <artifactId>jquery-ui</artifactId>
       <version>${webjars-jquery-ui.version}</version>
     </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>bootstrap</artifactId>
@@ -170,22 +188,6 @@
           </execution>
         </executions>
       </plugin>
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>${cobertura.version}</version>
-        <configuration>
-          <check />
-        </configuration>
-        <executions>
-          <execution>
-            <goals>
-              <goal>clean</goal>
-              <goal>check</goal>
-            </goals>
-          </execution>
-        </executions>
-      </plugin>
 
       <!-- Spring Boot Actuator displays build-related information if a git.properties
         file is present at the classpath -->
@@ -236,22 +238,19 @@
           </dependency>
         </dependencies>
       </plugin>
+      <plugin>
+        <groupId>org.apache.maven.plugins</groupId>
+        <artifactId>maven-jdeprscan-plugin</artifactId>
+        <version>3.0.0-alpha-1</version>
+        <configuration>
+          <release>11</release>
+        </configuration>
+      </plugin>
     </plugins>
   </build>
   <reporting>
     <plugins>
       <!-- integrate maven-cobertura-plugin to project site -->
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>${cobertura.version}</version>
-        <configuration>
-          <formats>
-            <format>html</format>
-          </formats>
-          <check />
-        </configuration>
-      </plugin>
     </plugins>
   </reporting>
```