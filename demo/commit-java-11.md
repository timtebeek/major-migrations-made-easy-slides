# Individually, these might be simple changes.

## But by automating these changes, we can run them at scale,
## to upgrade our entire application landscape in minutes.
<br/>

# We update our JDK to now use Java 11

```shell
$ sdk use java 11.0.16-tem

Using java version 11.0.16-tem in this shell.
```

# And we again commit the results

```shell
$ git commit -a -m Spring\ Boot\ 2.5\ on\ Java\ 11

[openrewrite-migration-demo 36a5b5d] Spring Boot 2.5 on Java 11
 1 file changed, 28 insertions(+), 29 deletions(-)
 ```