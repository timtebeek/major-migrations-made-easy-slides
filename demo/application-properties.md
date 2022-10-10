# Our application.properties have also been updated.

## Database initialization properties have been moved.

## Actuator properties have also undergone changes.
```shell
$ git --no-pager diff src/main/resources/
```

```diff
diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties
index fb07c6c..20ab139 100644
--- a/src/main/resources/application.properties
+++ b/src/main/resources/application.properties
@@ -1,7 +1,7 @@
 # database init, supports mysql too
 database=hsqldb
-spring.datasource.schema=classpath*:db/${database}/schema.sql
-spring.datasource.data=classpath*:db/${database}/data.sql
+spring.sql.init.schema-locations=classpath*:db/${database}/schema.sql
+spring.sql.init.data-locations=classpath*:db/${database}/data.sql
 
 # Web
 spring.thymeleaf.mode=HTML
@@ -13,7 +13,7 @@ spring.jpa.hibernate.ddl-auto=none
 spring.messages.basename=messages/messages
 
 # Actuator / Management
-management.contextPath=/manage
+management.server.servlet.context-path=/manage
 # Spring Boot 1.5 makes actuator secure by default
 management.security.enabled=false
```