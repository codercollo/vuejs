# Rendering Content Conditionally

Use the : v-if= ""
v-if="goals.length === 0"

# v-if

The 'v-if' directive is used to conditionally render an element.
The element will only be added to the DOM if the condition evaluates to 'true'

## Syntax

```html
<p v-if="condition">Content shown when condition is true</p>
```

# v-else-if

The 'v-else-if' directive provides another conditional branch when the previous 'v-if' condition is false

## Syntax

```html
<p v-if="score > 80">Excellent</p>
<p v-else-if="score > 50">Average</p>
```

# v-else

The 'v-else' directive acts as the "default fallback block" when all previous conditions are false

## Syntax

```html
<p v-if="condition">Shown if true</p>
<p v-else>Shown if false</p>
``
```

# v-show

The 'v-show' directive is used to toggle the visibility of an element
Unlike 'v-if' the element is always rendered in the DOM but Vue controls its visibility using CSS ("display: none")

## Syntax

```html
<p v-show="condition">Content visible when condition is true</p>
```

# v-for

The "v-for" directive is used to render a list of elements by iterating over data
-It works with: Arrays, Objects, Numbers(numbers)

## Basic Syntax

```html
<li v-for="item in items">{{ item }}</li>
```

# v-for with Array

Used to loop through an array.

Example:

```html
<ul v-else>
  <li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>
</ul>
```

# v-for with Object

You can iterate through **object properties**.

Example:

````html
<ul>
  <li v-for="(value, key, index) in {name: 'Max', age: 31}">
    {{ key }}: {{ value }} - {{ index }}
  </li>
</ul>

# v-for with Range (Numbers) Vue can generate a sequence of numbers. Example:
```html
<ul>
  <li v-for="num in 10">{{ num }}</li>
</ul>
````

# Removing Items from a v-for List

Vue allows you to attach events to list items and modify the underlying datya
You can use the "@click" directive to call a method the that removes an item from the list

```html
<ul v-else>
  <li v-for="(goal, index) in goals" @click="removeGoal(index)">
    {{ goal }} - {{ index }}
  </li>
</ul>
```

# Using :key in v-for

Vue recommends using the :key attribute when rendering lists with v-for
The :key helps Vue track each element uniquely so it can update the DOM
Common keys: database id, unique value, index

```html
<ul v-else>
  <li v-for="(goal, index) in goals" :key="goal">{{ goal }} - {{ index }}</li>
</ul>
```

# Event modifiers in v-for (@click.stop)

Vue provides event modifiers that change how events behave
The .stop modifier prevents the event from propagating to parent elements

```html
<ul v-else>
  <li v-for="(goal, index) in goals" :key="goal" @click="removeGoal(index)">
    {{ goal }} - {{ index }}
    <input type="text" @click.stop />
  </li>
</ul>
```

## RULES

1. Must Be Adjacent

- Vue requires these directives to be placed directly next to each other
  Correct:

```html
<p v-if="a">A</p>
<p v-else-if="b">B</p>
<p v-else>C</p>
```

2. Only one v-else

- A conditional block can only have one 'v-else'

3. v-else and v-else-if cannot stand alone

- They must follow a v-if
