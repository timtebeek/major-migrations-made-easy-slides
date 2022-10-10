# Then we upgrade the Maven wrapper for compatibility, and to add some color.

```shell
$ ./mvnw wrapper:wrapper -Dmaven=3.8.6

[INFO] Scanning for projects...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building petclinic 1.5.1
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-wrapper-plugin:3.1.1:wrapper (default-cli) @ spring-petclinic ---
[INFO] Unpacked bin type wrapper distribution org.apache.maven.wrapper:maven-wrapper-distribution:zip:bin:3.1.1
[INFO] Configuring .mvn/wrapper/maven-wrapper.properties to use Maven 3.8.6 and download from https://repo.maven.apache.org/maven2
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 0.679 s
[INFO] Finished at: 2022-10-10T10:23:20+00:00
[INFO] Final Memory: 19M/298M
[INFO] ------------------------------------------------------------------------
```