---
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://source.unsplash.com/collection/94734566/1920x1080

# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
#highlighter: prism
# use UnoCSS
css: unocss
# Better contrast on beamer & IDE preview
colorSchema: 'light'
# show line numbers in code blocks
lineNumbers: true


layout: image
image: /devoxx-ma-cover.png
---



<!--
Hi all, and welcome to Major Migrations Made Easy.

My name is Tim te Beek, and I'm a Java consultant at JDriven, in the Netherlands.
-->

---
layout: image-right
#image: https://source.unsplash.com/1600x900/?timetravel
image: https://images.unsplash.com/photo-1615053835081-4218b100dae9
---
# ~~Consultant~~ Time traveler

- Switch assignments often
- Outdated technology stacks

<!--
Now as a consultant, I often switch assignments,
and whenever I do, I feel a bit like a time traveler.

One moment I'm working with Java 17 and all the latest frameworks & technologies.
And then the next, I'm thrown ten years back in time, to Java 7 or 8 and outdated frameworks.
My assignments typically see me bring these outdated technology stacks, back up to date.

And perhaps you face the same challenges as I do;
at a conference like this you hear all about new framwwork & language features,
yet back at work, you're stuck using Java 8 and JUnit 4.
And migrating all of that by hand can seem daunting, and rarely gets priority.

-->
---

# Automate migrations

- More fun to work with
- Increased performance
- Adopted with ease

<!--
I want to show you how easy it can be to perform major migrations,
such that you too can adopt all the latest language & framework features.

And it can be fun, to pick up new language features such as records and text blocks.
But you don't want to adopt these features manually, or only on a single project.

Instead, we will look into automation, to make old projects feel like new again.
-->

---
layout: two-cols
---

# Types of migrations

Java 8 -> 11 -> 17 -> ...

Spring Boot 1.x -> 2.x -> 3.x

JUnit 4 -> JUnit Jupiter -> AssertJ

Log4j 1.x to SLF4J 1.x

Javax -> Jakarta

Zip Slip -> Log4Shell -> Spring4Shell -> ...



::right::

<Tweet id="1528259740224077824" />

<!--
Here’s  a very brief overview of the types of migrations I’ll be talking about.

Likely you already performed some of these migrations in the past.
And other migrations are always just around the corner.

If you look back over time, there’s a near constant stream of worthwhile improvements to pick up.

And I like the challenge; I still get excited whenever a new version comes out.
I just don’t like the repetitive elements that come with upgrading.

And if you try to keep up by hand, you will hardly get anything else done!
Especially as micro services mean you’re now not upgrading just once, but dozens of times.

Automation may be the only option, especially for large companies maintaining thousands of services.
-->
---
layout: center
---

![OpenRewrite](/rewrite-logo.png)

<!--
So imagine my excitement last year, when I discovered OpenRewrite.
OpenRewrite promises to make light work of all such migrations.

With a simple command, you can now upgrade between versions of Java and Spring.
You can even migrate between frameworks, such as from JUnit to AssertJ, and even from Java EE to Spring.

In this talk I’ll tell you all about OpenRewrite; how it came about; how it works, and what you can do with it.

Finally we’ll look briefly at who is developing these recipes and how to apply them to Open Source projects.
-->
---

# Origin

- Internal logging framework → SLF4J
- Perfect transformation required
- Abstract Syntax Tree parser & manipulation
- Produce minimal changes

![Netflix](/netflix-logo-2015.svg)
![Netflix](/slf4j-logo.png)

<!--
OpenRewrite was started at Netflix; Initially to aid in the migration of an internal logging framework to SLF4J.

You can probably imagine any logging framework is going to be pervasive throughout an organisation.
To even consider migrating you would need perfectly accurate automation, especially when usage is spread across hundreds of services.

So they developed a parser to accurately read Java, and turn source code into an Abstract Syntax Tree.
This model can then be modified to replace the old logging statements with calls to SLF4J. 

Next the migrated model is written out as close as possible to the original source code.
This way the applied changes are minimal, leaving surrounding code untouched.
-->
---

# Broader application

- Onboarding stalled
- Struggle with outdated libraries & frameworks
- Spring Boot 1.x → 2.x
- JUnit 4 → JUnit 5
- Apache license 2.0

<!--
Later, the same developers moved on to work on Spinnaker.
While trying to onboard teams and organisations there,
they found teams often struggled with the same outdated libraries and frameworks.

To help these teams adopt the latest versions,
they applied a different set of transformations,
through the same Abstract Syntax Tree parser.

This allowed them to quickly reduce this technical debt,
bringing teams from Spring Boot 1 to 2, and from JUnit 4 to JUnit 5.

The project has since been Open Sourced,
with the company behind it committed
to making all recipes available
under the Apache licence for Open Source Software.
-->
---
layout: image-right
image: tech-logos.png
---

# Early focus on JVM

- Search & transformation
- Refactoring ecosystem

<!--
The initial focus for OpenRewrite is on Java Virtual Machine languages and surrounding technologies.

There are parsers for Java, Groovy, Yaml and XML.

These in turn unlock support for build tools such as Maven and Gradle, and libraries such as JUnit, AssertJ and Guava.

Ultimately, refactoring entire frameworks and platforms is supported,
with recipes available for application frameworks such as Micronaut, Quarkus and Spring.
-->
---
layout: image-right
image: /syntax-tree.png
---

# Abstract syntax tree

Type attribution

Format preservation

<!--
OpenRewrite is not the only parser capable of understanding and manipulating Java.
However, two features set OpenRewrite apart from the competition.

The first is their focus on exact type attribution.
By having the exact type available on any tree element, they can be sure to only manipulate exact matches.

The second characteristic that sets OpenRewrite apart is their format preservation.
Their parser not only takes into account the functional code, but also the surrounding code style and indentation.

This allows them to accurately reproduce your source file, regardless of further changes.
Any changes made through OpenRewrite, look just like a colleague worked on your code.

Together, these features make OpenRewrite exceptionally good at safe code transformations.
Their changes are minimally invasive, and guaranteed to work, in part due to their do no harm mentality.

By manipulating the full Abstract Syntax Tree, OpenRewrite can far exceed simple search and replace operations.
-->
---


# Recipes
Search & Refactor

Composition

<!--
With the full abstract syntax tree built, we need to instruct OpenRewrite what operations to apply, where in your code.

Recipes are how you define such a group of search and refactoring operations.
Together they accomplish a higher level task, such as a framework migration.

Recipes can consist of a single, stand-alone operation, or be linked together with other recipes.
OpenRewrite comes with a large collection of fine grained recipes out of the box,
that can be combined for common migration steps.

You can think of these as lego building blocks, ready to be applied with the proper parameters.
There are hundreds of these building blocks to for instance:
change types
change methods
change arguments
manipulate properties
and alter dependencies & plugins.

-->
---


# Visitors

Match & modify elements

<!--
Individual recipes are implemented as Java visitors
that first match
and then modify
elements of the abstract syntax tree.

There are plenty of examples available,
but note that you only need a Java visitor
when none of the existing recipes can already achieve your goals.

Typically, you can get very far only configuring,
combining and applying existing recipes through a yaml description file.
-->
---


# Modules

Specific purpose

Complete migrations

<!--
Modules combine and group together these fine grained recipes,
into more coarse grained, application specific recipes.

There are modules for example for logging frameworks, testing frameworks and application frameworks such as Spring.
Think of these as lego sets, with build plans for common migrations and fixes, ready to be used.

In my opinion, the Abstract Syntax Tree, combined with the large collection of Open Source recipes,
is what sets OpenRewrite apart from other similar tools, such as Google ErrorProne’s Refaster.
-->
---


# JUnit 5 recipe

```yaml {1-6}
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit4to5Migration
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Test
      newFullyQualifiedTypeName: org.junit.jupiter.api.Test
  - org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.AssertToAssertions
  - org.openrewrite.java.testing.junit5.StaticImports
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - …
```


<!--
Now I want to show you how migration recipes are configured in OpenRewrite.

Let us briefly look at a migration from JUnit 4 to JUnit 5.
I want you to imagine what steps would be needed for a JUnit 5 migration.

You likely know a couple of the steps already.

Among others you would have to
- update the test annotations
-->
---


# JUnit 5 recipe

```yaml {7-}
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit4to5Migration
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Test
      newFullyQualifiedTypeName: org.junit.jupiter.api.Test
  - org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.AssertToAssertions
  - org.openrewrite.java.testing.junit5.StaticImports
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - …
```

<!--
But you would also have to 
- update the assertions, and sometimes argument order
- update all imports
- update any test rules
and that’s just getting started

Notice how each step is reflected as a separate Recipe in this YAML configuration file.

Some refer to and configure generic steps, such as the ChangeType recipe.

Others are implemented as an imperative step;
a dedicated Java visitor that changes the abstract syntax tree.

All these steps combine to achieve a complete JUnit 5 migration.
-->
---
layout: statement
---

# Large migrations in
# small reusable steps
<!--
This is a common pattern with OpenRewrite:

Large migrations are broken up into small reusable steps.
-->
---


# JUnit 5 imports

```diff {5-15,18-19,22-23}
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -1,19 +1,20 @@
 package org.springframework.samples.petclinic.owner;
 
-import static org.junit.Assert.assertEquals;
-
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import static org.junit.jupiter.api.Assertions.assertEquals;
+import static org.junit.jupiter.api.Assertions.assertThrows;
+
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
+import org.junit.jupiter.api.extension.ExtendWith;
 import org.mockito.Mock;
 import org.mockito.Mockito;
-import org.mockito.runners.MockitoJUnitRunner;
+import org.mockito.junit.jupiter.MockitoExtension;

@@ -23,7 +24,7 @@
-@RunWith(MockitoJUnitRunner.class)
+@ExtendWith(MockitoExtension.class)
 public class PetTypeFormatterTests {
```

<!--
When we run this Recipe, we get predictable results.

Our imports are converted as we would expect.

And our Mockito Runner is converted into using the Extension.

Life cycle annotations such as @Before are correctly replaced.
-->
---


# JUnit 5 tests

```diff {6-}
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
index f332257..1d5e072 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -31,13 +32,13 @@ public class PetTypeFormatterTests {
-    @Test(expected = ParseException.class)
-    public void shouldThrowParseException() throws ParseException {
-        Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
-        petTypeFormatter.parse("Fish", Locale.ENGLISH);
+    @Test
+    void shouldThrowParseException() throws ParseException {
+        assertThrows(ParseException.class, () -> {
+            Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
+            petTypeFormatter.parse("Fish", Locale.ENGLISH);
+        });
     }
```

<!--
Now interestingly, we can see how OpenRewrite shines through when it comes to converting expected exceptions.

Having the full power of an abstract syntax tree, combined with a Java visitor, allows us to adopt Assert Throws.
This would not be possible with a regular expression approach.

And this is just a small sample of what types of transformations are possible.
-->
---


# Running recipes

1. Apply OpenRewrite plugin
2. With Module dependency
3. Run migration recipe

```shell {1,3,5}
./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run
	-Drewrite.recipeArtifactCoordinates=
		org.openrewrite.recipe:rewrite-spring:4.27.0
	-DactiveRecipes=
		org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
```

<!--
Running migration recipes is fairly straightforward.

First, apply a build tool plugin for OpenRewrite.
	I’ve used Maven in my example, but Gradle works just as well.

Then, depending on the changes you want to make,
	add a dependency on the respective OpenRewrite module.

Lastly, run the OpenRewrite plugin
	with the migration Recipe that you want to execute.

The command seen here will  migrate a Spring Boot application to the latest version.
This works all the way back to Spring Boot 1.5.

This will update dependencies, properties, and deprecations from any older versions.
And it includes the JUnit 5 migration seen before, as well as any Spring specific test constructs.
-->
---


# 

<!--
-->
---


# 

<!--
-->
---


# 

<!--
-->
---


# 

<!--
-->
---


# 

<!--
-->
---
