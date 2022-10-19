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

# https://sli.dev/custom/#frontmatter-configures
defaults:
  layout: 'default'

# https://sli.dev/guide/faq.html#scale-the-canvas
canvasWidth: 1280

# Cover slide
layout: image
image: /cover-baselone.png
---



<!--
Hi everyone!

First off I'd like to thank the organizers and sponsors of BaselOne for having me.

I'm excited to be here to present Major Migrations Made Easy.
-->

---
layout: image
image: /title-baselone.png
---



<!--
My name is Tim te Beek, and I'm a Java consultant at JDriven, in the Netherlands.
-->

---
layout: image-right
image: https://images.unsplash.com/photo-1615053835081-4218b100dae9?h=900&w=800
---

# ~~Java Consultant~~
# Time traveler

## Migrate outdated technology
<br/>

## Switch assignments often
<br/>

## Focus on JVM & Automation

<!--
Now as a consultant, I often switch assignments,
and whenever I do, I feel a bit like a time traveler.

One moment I'm working with Java 17 and all the latest frameworks & technologies.

And then the next, I'm thrown ten years back in time, to Java 7 or 8 and outdated frameworks.

My assignments typically see me bring these outdated technology stacks, back up to date.

And perhaps you face the same challenges as I do;
at a conference like this you hear all about new framework & language features.

Yet back at work, you're stuck using Java 8 and JUnit 4.
And migrating all of that by hand can seem daunting, if it ever gets priority.
-->

---
layout: image-right
image: >-
  https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?fit=crop&h=900&w=800
---

# Automate migrations

### More fun to work with
<br/>

### Adopted with ease
<br/>

### Make old feel like new again
<br/>

### JVM & language improvements

<!--
I want to show you how easy it can be to perform major migrations.
That way, you too can adopt all the latest language & framework features.

And it can be fun, to pick up new language features such as records and text blocks.
But you don't want to adopt these features manually, or only on a single project.

Instead we will look into automation,
to make old projects FEEL like new again.
So you can benefit from JVM,  language and framework improvements.
-->

---
layout: two-cols
---

# Types of migrations

- Java 8 → 11 → 17+

- Spring Boot 1.x → 2.x → 3.x

- JUnit 4 → JUnit Jupiter → AssertJ

- Log4j → SLF4J

- Javax → Jakarta

- Zip Slip → Log4Shell → Spring4Shell → ...

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

In this talk I’ll tell you all about OpenRewrite;
- how it came about;
- how it works,
- and what you can do with it.

Finally we’ll look briefly at who is developing these recipes and how to apply them to Open Source projects.
-->

---
layout: two-cols
---

# Origin

- Internal logging framework → SLF4J

- Perfect transformation required

- Abstract Syntax Tree parser & manipulation

- Produce minimal changes

::right::

![Netflix](/netflix-logo-2015.svg)

<br/><br/><br/><br/>

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
layout: image-right
#image: https://source.unsplash.com/800x900/?arrow
image: https://images.unsplash.com/photo-1518623001395-125242310d0c?fit=crop&h=900&w=800
---

# Broader application

- Spinnaker onboarding stalled

- Struggle with outdated libraries & frameworks

  - Spring Boot 1.x → 2.x

  - JUnit 4 → JUnit 5

- Apache licensed

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
layout: two-cols
---

# Early focus on JVM
<br/>

## Search & transformation
<br/>

## Refactoring ecosystem

::right::

![Technologies](/tech-logos.png)

<!--
The initial focus for OpenRewrite is on Java Virtual Machine languages and surrounding technologies.

There are parsers for Java, Groovy, Yaml and XML.

These in turn unlock support for build tools such as Maven and Gradle, and libraries such as JUnit, AssertJ and Guava.

Ultimately, refactoring entire frameworks and platforms is supported,
with recipes available for application frameworks such as Micronaut, Quarkus and Spring.
-->
---
layout: two-cols
---

# Abstract syntax tree
<br/>

## Type attribution
<br/>

## Format preservation

::right::

![AST](/ast.png)

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
# https://duotone.shapefactory.co/?f=e17d00&t=193569&q=lego%20house
layout: cover
background: https://images.unsplash.com/photo-1560961911-ba7ef651a56c?fit=crop&h=900&w=800
---

# Recipes
<br/>

## Search & Refactor
<br/>

## Composition

<!--
With the full abstract syntax tree built, we need to instruct OpenRewrite what operations to apply, where in your code.

Recipes are how you define such a group of search and refactoring operations.
Together they accomplish a higher level task, such as a framework migration.

Recipes can consist of a single, stand-alone operation, or be linked together with other recipes.
OpenRewrite comes with a large collection of fine grained recipes out of the box,
that can be combined for common migration steps.

You can think of these as lego building blocks, ready to be applied with the proper parameters.
There are hundreds of these building blocks to for instance:
- change types
- change methods
- change arguments
- manipulate properties
- and alter dependencies & plugins.
-->

---
layout: image-right
image: https://images.unsplash.com/photo-1533557213878-99cda20b1400?fit=crop&h=900&w=800
---

# Visitors
<br/>

## Match & modify elements

<!--
Individual recipes are implemented as Java visitors
that first match
and then modify
elements of the abstract syntax tree.

There are plenty of examples available,
but note that you only need a dedicated Java visitor
when none of the existing recipes can already achieve your goals.

Typically, you can get very far only configuring,
combining and applying existing recipes through a yaml description file.
-->

---
layout: cover
background: https://images.unsplash.com/photo-1663173775686-d1529e901713?fit=crop&h=900&w=800
---

# Modules
<br/>

## Specific purpose
<br/>

## Complete migrations

<!--
Modules combine and group together these fine grained recipes,
into more coarse grained, application specific recipes.

There are modules for example for 
- logging frameworks, 
- testing frameworks 
- and application frameworks such as Spring.

Think of these as lego sets, with build plans for common migrations and fixes, ready to be used.

In my opinion, the Abstract Syntax Tree, combined with the large collection of Open Source recipes,
is what sets OpenRewrite apart from other similar tools, such as Google ErrorProne’s Refaster.
-->

---


# JUnit 5 recipe

```yaml {1-6|7-}
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
- But you would also have to 
  - update the assertions, and sometimes argument order
  - update all imports
  - update any test rules
  - and that’s just getting started

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
+        assertThrows(ParseException.class, () → {
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
layout: image-left
image: /petclinic.png
---

# PetClinic migration
<br/>

## Spring Boot 1.5 → 2.7
<br/>

## Java 8 → Java 17
<br/>

## JUnit 4 → JUnit 5


<!--
To show you just how easy it is to migrate a project, I’ve prepared a small demo.

For this demo, we will upgrade an old Spring PetClinic branch from Spring Boot 1.5 on Java 8, all the way to Spring Boot 2 on Java 17.

We will look at the commands and changes made in more detail along the way.
-->
---
layout: section
---

# Demo

![Demonstration](https://images.unsplash.com/photo-1590962467161-2555c3b99cf9?crop=entropy&fit=crop&h=900&w=1600)

---
layout: image-right
#image: https://source.unsplash.com/800x900/?tools
image: https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&fit=crop&h=900&w=800
---
# Applications
<br/>

## Migrate
<br/>

## Fix
<br/>

## Enforce


<!--
Now that we have seen how OpenRewrite works,
Let’s have a look at what you can do with it.

Obviously by now we have seen that it is well suited to migrations.
You have mostly seen migrations from one version to another.
But you can also migrate from one framework to another.

If you want to switch from Log4J to SLF4J, you can.
Same thing for switching between JUnit and AssertJ.
And even larger migrations are in development.

Another application is fixing static analysis findings.
A large collection of CheckStyle, Sonar and Security findings are supported,
to allow you to reduce your technical debt in minutes.

Finally there is a whole class of recipes to enforce code style.
Rather than merely apply a formatter, these style recipes go a step further to actually change your code.
This ensures your code style reads consistently from project to project.

And in addition to what is already available, it’s fairly easy to add custom recipes specific to your projects.
-->
---
layout: image-right
image: >-
  https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?fit=crop&fm=jpg&h=900&w=800
---

# Future
<br/>

## Java 17+
<br/>

## Kotlin
<br/>

## Dataflow
<br/>

## Spring Boot Migrator

<!--
So, now that we have seen how it works, and what it can do, let’s briefly look ahead at what is still to come.

As you have seen, OpenRewrite has dedicated parsers for multiple languages already.
But, as you can imagine, they have some catching up to do still.

They are working on a parser for both Java 17+ and Kotlin.
Note that you are perfectly able to run on Java 17, but you can not yet migrate to some of the new language features.
The interesting thing about Kotlin is going to be that Java migration recipes will just work, even though the languages look very different.

Another subject they are working on is data flow analysis.
This not only takes into account individual code statements,
but also how data flows through an appliction.
This will allow recipes to for instance add immutability or detailed security fixes.

Another interesting development, is the Spring Boot Migrator project from VMWare.
It builds upon OpenRewrite, to migrate projects towards Spring from other frameworks.
It takes a slightly different, more interactive approach,
which will be helpful when Spring Boot 3 arrives in November.

All of these features are in active development.
It is not yet clear when you can use any of this,
but interesting developments nonetheless.
-->

---
layout: center
---

![Numbers](/moderne.io-numbers.png)

<!--
As a last subject, I think it’s only fair to tell you a bit about the company behind OpenRewrite.
As I said before, they have committed to making all recipes available Open Source.

Their focus is on applying recipes at scale.

Through Moderne, clients can discover code patterns across an entire organisation,
and target these for transformation.
-->
---
layout: two-cols
---

# public.moderne.io
<div></div>

![Recipes left](/moderne.io-left.png)

::right::

![Recipes right](/moderne.io-right.png)

<!--
And even if you’re not a paying customer,
you can still use their web interface to browse available recipes,
and even apply them to Open Source projects.

This can be a great way to start contributing back to Open Source software.

And if you find any migration steps are missing,
OpenRewrite itself is very accepting of new contributions.

The community plays a large role in the development of new recipes.
-->
---
class: text-4xl
---

# Where to learn more
<div></div>

<img src="/rewrite-logo-only.png" width="60" display="inline"/> docs.openrewrite.org

<logos-github-icon class="text-5xl align-middle"/> github.com/openrewrite

<br/>
<br/>
<logos-spring-icon class="text-5xl align-middle"/> github.com/spring-projects-experimental/spring-boot-migrator

<img src="/moderne-logo-only.png" width="60" display="inline"/> public.moderne.io

<logos-slack-icon  class="text-5xl align-middle"/> RewriteOSS.slack.com

<img src="/jdriven-logo.png" width="60" display="inline"/> blog.jdriven.com

<!--
So with that, we are getting near the end of my presentation.
Before I send you on your way, I want to recommend a few resources where you can learn more.

There’s extensive documentation and tutorials available on OpenRewrite.

Development is all on GitHub, with new suggestions picked up with surprising speed.
And as we have already seen, it’s quite easy to contribute minor migration steps.

If you want to try some Recipes quickly,
on Open Source projects,
have a look at public.moderne.io

And if you have any questions, I’ve found the team behind OpenRewrite to be very friendly and responsive.
-->
---

# _"This could have been a blogpost"_
<nbsp/>

![Blogpost](/blogpost.png)

<!--
And finally, if you would like to play around with the commands shown before,
I’ve written a blogpost to accompany this presentation.

The blogpost migrates the same old Spring PetClinic branch.
That way you can play around with the commands and see the changes made at every step.

For your own projects, I recommend you start with the testing framework migrations.
They are an easy way to gain confidence in the tool, and see what it can do for your projects.
-->
---
layout: cover
background: https://images.unsplash.com/photo-1544535830-9df3f56fff6a?h=900&w=1600
---

# Questions

<!--
And with that we get to my favorite part of any presentation.

If you have any questions feel free raise your hand to ask them right now.

Or reach out after this presentation either in person or online.
-->

---
layout: image
#image: https://source.unsplash.com/1600x900/?thanks
image: https://images.unsplash.com/photo-1608363808030-f58d9f02b06a?fit=crop&fm=jpg&h=900&w=1600
---
<div></div>
<!--
And with that; I'd like to thank you all for your attention!
-->

---
layout: image
image: /cover-baselone.png
---
---
layout: end
---

---
src: ./demo/checkout.md
---
---
src: ./demo/sdkman-java-8.md
---
---
src: ./demo/maven-wrapper.md
---
---
src: ./demo/commit-1.5-java-8.md
---
---
src: ./demo/migrate-spring-boot.md
---
---
src: ./demo/notice-changes.md
---
---
src: ./demo/hibernate-validator.md
---
---
src: ./demo/unnecessary-autowired.md
---
---
src: ./demo/webparameter-arguments.md
---
---
src: ./demo/application-properties.md
---
---
src: ./demo/pom-2.5.md
---
---
src: ./demo/commit-2.5.md
---

---
src: ./demo/migrate-java-11.md
---
---
src: ./demo/changes-java-11.md
---
---
src: ./demo/commit-java-11.md
---

---
src: ./demo/migrate-java-17.md
---
---
src: ./demo/changes-java-17.md
---
---
src: ./demo/commit-java-17.md
---
---
src: ./demo/mvn-verify.md
---
