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
canvasHeight: 720
canvasWidth: 1280

# Cover slide
layout: cover
background: /fosdem-logo.png
---

# Major migrations made easy
<div/>

tim@moderne.io

<!--
My name is Tim te Beek, and I'm a staff software engineer at Moderne.io
-->

---
layout: image-right
image: /ice.jpg
---

# ~~Consultant~~ → tim@moderne.io

## Migrate outdated technology
<br/>

## Focus on JVM & Automation
<br/>

## Maintain the Golden path
<br/>

## Discovered OpenRewrite

<!--
Now before I switched to Moderne; I was a consultant for five years,
perhaps much like yourselves.

I specialized in migration engineering,
which is a way of saying
I would walk into organizations;
familiarize myself with all the old technology they were still using;
and then hack away at lifting everything up to the latest versions.

I would frequently find five to ten year old versions of Java, JUnit and Spring,
which is not great from a security or even developer experience point of view.

Initially I would migrate these services by hand,
and gradually introduce more and more crude automation.

So imagine my excitement last year, when I discovered OpenRewrite.
OpenRewrite promises to make light work of all such migrations.

I got so excited about this technology,
that I started to contribute & present about OpenRewrite,
and eventually quit my job to work on OpenRewrite full time

So, after a nice sabbatical, that brings us here today!

Perhaps you face the same challenges as I did;
at a conference you'll hear all about new framework & language features.

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

### Make old _feel_ like new again
<br/>

### JVM & language improvements

<!--
I want to show you how easy it can be to perform major migrations.
That way, you too can adopt all the latest language & framework features.

And it can be fun, to pick up new language features such as records and text blocks.
But you don't want to adopt these features manually, or only on a single project.

Instead we will look into automation,
to make old projects _FEEL_ like new again.
So you can benefit from JVM, language and framework improvements.
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
name: OpenRewrite logo
layout: center
---

![OpenRewrite](/rewrite-logo.png)

<!--
Through OpenRewrite, you can now upgrade between versions of Java and Spring, with a simple command.

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

- Lossless Semantic Tree parser & manipulation

- Produce minimal changes

::right::

![Netflix](/netflix-logo-2015.svg)

<br/><br/><br/><br/>

![Netflix](/slf4j-logo.png)

<!--
OpenRewrite was started at Netflix; Initially to aid in the migration of an internal logging framework to SLF4J.

You can probably imagine any logging framework is going to be pervasive throughout an organisation.
To even consider migrating you would need perfectly accurate automation, especially when usage is spread across hundreds of services.

So they developed a parser to accurately read Java, and turn source code into an Lossless Semantic Tree.
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
through the same Lossless Semantic Tree parser.

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

<img src="/tech-logos.png" style="width:350px;"/>

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

# Lossless Semantic Tree
<br/>

## Fully type attributed
<br/>

## Format-preserving
<br/>

## Serializable

::right::

![AST](/ast.png)

<!--
OpenRewrite is not the only parser capable of understanding and manipulating Java.
However, three features set OpenRewrite apart from the competition.

The first is the focus on exact type attribution.
By having the exact type available on any tree element, we can be sure to only manipulate exact matches.

The second characteristic that sets OpenRewrite apart is the format preservation.
The parser not only takes into account the functional code, but also the surrounding code style and indentation.

This allows us to accurately reproduce your source file, regardless of further changes.
Any changes made through OpenRewrite, look just like a colleague worked on your code.

And finally, our serialization format ensures you're able to query and refactor your code faster, and at scale.

Together, these features make OpenRewrite exceptionally good at safe code transformations.
The changes are minimally invasive, and guaranteed to work, in part due to our do no harm mentality.

By manipulating the full Lossless Semantic Tree, OpenRewrite can far exceed simple search and replace operations.
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
With the full Lossless Semantic Tree built, we need to instruct OpenRewrite what operations to apply, where in your code.

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
elements of the Lossless Semantic Tree.

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

In my opinion, the Lossless Semantic Tree, combined with the large collection of Open Source recipes,
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
a dedicated Java visitor that changes the Lossless Semantic Tree.

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

Having the full power of an Lossless Semantic Tree, combined with a Java visitor, allows us to adopt Assert Throws.
This would not be possible with a regular expression approach.

And this is just a small sample of what types of transformations are possible.
-->
---

# Running recipes

1. Apply OpenRewrite plugin
2. With Module dependency
3. Run migration recipe

```shell {1,3,5}
./mvnw -U org.openrewrite.maven:rewrite-maven-plugin:run
	-Drewrite.recipeArtifactCoordinates=
		org.openrewrite.recipe:rewrite-spring:LATEST
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

The command seen here will  migrate a Spring Boot application to the latest 2.7 version.
This works all the way back to Spring Boot 1.5.

This will update dependencies, properties, and deprecations from any older versions.
And it includes the JUnit 5 migration seen before, as well as any Spring specific test constructs.
-->

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

## Java 18+
<br/>

## Kotlin
<br/>

## Dataflow
<br/>

## Spring Boot Migrator

<!--
So, now that we have seen how it works, and what it can do, let’s briefly look ahead at what is still to come.

As you have seen, OpenRewrite has dedicated parsers for multiple languages already.
But, as you can imagine, we have some catching up to do still.

We are working on a parser for both Java 18 and up and Kotlin.
Note that you are perfectly able to run on Java 17, but you can not yet migrate to some of the new language features.
The interesting thing about Kotlin is going to be that Java migration recipes will just work, even though the languages look very different.

Another subject we are working on is data flow analysis.
This not only takes into account individual code statements,
but also how data flows through an appliction.
This will allow recipes to for instance add immutability or detailed security fixes.

Another interesting development, is the Spring Boot Migrator project from VMWare.
It builds upon OpenRewrite, to migrate projects towards Spring from other frameworks.
It takes a slightly different, more interactive approach,
which will be helpful to migrate to Spring Boot 3.

All of these features are in active development.
It is not yet clear when you can use any of this,
but interesting developments nonetheless.
-->

---
name: Moderne numbers
layout: center
---

![Numbers](/moderne.io-numbers.png)

<!--
As a last subject, I want to tell you a bit about the company behind OpenRewrite.
As I said before, Moderne has committed to making all recipes available Open Source.

Our focus is on applying recipes at scale.

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
you can still use the web interface to browse available recipes,
and even apply them to Open Source projects.

This can be a great way to start contributing back to Open Source software.

And if you find any migration steps are missing,
OpenRewrite itself is very accepting of new contributions.

The community plays a large role in the development of new recipes.
-->
---
layout: two-cols
---

# Community

## VMWare → Spring
<br/>

## Red Hat → Quarkus, Java 17
<br/>

## Oracle → Micronaut
<br/>

## JHipster → JHipster
<br/>

## Linux foundation → Java Security
<br/>

## ...

::right::

<Tweet id="1618981528222191616" />

<!--
Now, as you could probably tell from my email address; we're not exactly a big company.
But, we're pretty well connected to the broader Java community.

Through collaborations, other companies contribute migration recipes for their frameworks.
These ensure users are able to migrate easily, and timely with new releases.

And if you maintain, or merely enjoy a particular library or framework,
you can help all other users by providing migration recipes.
-->

---
class: text-4xl
---

# Where to learn more
<div></div>
<br/>
<img src="/rewrite-logo-only.png" width="60" display="inline"/> docs.openrewrite.org
<br/>
<br/>
<logos-github-icon class="text-5xl align-middle"/> github.com/openrewrite
<br/>
<br/>
<img src="/moderne-logo-only.png" width="60" display="inline"/> public.moderne.io
<br/>
<br/>
<logos-slack-icon  class="text-5xl align-middle"/> RewriteOSS.slack.com
<br/>
<br/>
<logos-google-gmail class="text-5xl align-middle"/> tim@moderne.io

<!--
So with that, we are getting near the end of my presentation.
Before I send you on your way, I want to recommend a few resources where you can learn more.

There’s extensive documentation and tutorials available on OpenRewrite.

Development is all on GitHub, with new suggestions picked up with surprising speed.
And as we have already seen, it’s quite easy to contribute minor migration steps.

If you want to try some Recipes quickly,
on Open Source projects,
have a look at public.moderne.io

And if you have any questions, you can reach out on our public Slack or via email.
-->
---

# _"This could have been a blogpost"_
<nbsp/>

![Blogpost](/blogpost.png)

<!--
And finally, if you would like to play around with the commands shown before,
I’ve written a blogpost to accompany this presentation.

The blogpost migrates an old Spring PetClinic branch from Spring Boot 1.5 on Java 8 to 2.x on Java 17.
That way you can play around with the commands and see the changes made at every step.

For your own projects, I recommend you start with the testing framework migrations.
They are an easy way to gain confidence in the tool, and see what it can do for your projects.
-->

---
name: Thank you!
layout: cover
background: /fosdem-logo.png
---
# Thank you!

<!--
And with that; I'd like to thank you all for your attention!
-->

---
name: End
layout: end
---
