# Vue Monster Slayer Game

This file documents the core Vue and JS concepts used

# ---

# Helper Functions

Helper function are regular JS functions defined outside Vue and used inside Vue methods.

```javascript
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
```

- Generates a random decimal and converts to integer between a range of numbers

# ---

# Creating a Vue App

Vue apps start with Vue.createApp()
This creates the **Vue instance that controls part of the DOM**.

```javascript
const app = Vue.createApp({});
```

# ----

# Mount the Vue App

Vue needs to know where it should control the HTML

```javascript
app.mount("#game");
```

Vue controls everything inside the div ; id = dame

# ---

# Vue Data Option

The `data()` function stores **reactive state** for the application.

Example:

```javascript
data() {
  return {
    playerHealth: 100,
    monsterHealth: 100,
    currentRound: 0,
    winner:null,
    logMessages: [],
  };
}
```

Reactivity - Vue updates the UI automatically

# ---

# Vue Watchers (`watch`)

Watchers observe a specific `data` properly and run a function when it changes
They are used when you need to react to a data change with side effects(ie: determining a winner)

```javascript
watch: {
  playerHealth(value) {
    if (value <= 0 && this.monsterHealth <= 0) {
      this.winner = 'draw';
    } else if (value <= 0) {
      this.winner = 'monster';
    }
  },
  monsterHealth(value) {
    if (value <= 0 && this.playerHealth <= 0) {
      this.winner = 'draw';
    } else if (value <= 0) {
      this.winner = 'player';
    }
  },
},
```

# Vue Methods

Methods contain the **logic that runs when the user interacts with the app**.

```javascript
methods: {
  attackMonster() {
    this.currentRound++
    const attackValue = getRandomValue(5, 12)
    this.monsterHealth -= attackHealth,
    this.attackPlayer,
  },
  attackPlayer() {...},
  specialAttackMonster() {...},
  healPlayer() {....},
  startNewGame() {....},
  surrender() {...},
  addLogMessage(who, what, value) {...},

}
```

# Event Binding (@click)

Vue uses **event binding** to connect HTML interactions to Vue methods

```html
<button @click="attackMonster">ATTACK</button>
<button @click="specialAttackMonster" :disabled="!mayUseSpecialAttack">
  SPECIAL ATTACK
</button>
```

- `@click` is shorthand for `v-on:click`
- `:disables` binding is dynamic:true or false

# Computed Properties

Computed properties are \*_functions that calculate values on reactive data_
They automatically update when the data they depend on changes

```javascript
computed: {
  monsterBarStyles() {
    return { width: this.monsterHealth + "%" };
  },

  playerBarStyles() {
    return { width: this.playerHealth + "%" };
  }
}
```

# The _this_ Keyword in Vue

In Vue methods 'this' refers to the _Vue instance_
It allows you to: access data properties, computed properties, and other methods in the same vue App ie: this.currentRound

# Conditional Rendering (`v-if` , `v-else-if`, `v-else`)

Vue conditionally renders DOM elementes base on truthy/falsy expressions

```html
<section class="container" v-if="winner">...</section>
<section id="controls" v-else>...</section>
```

# List Rendering (`v-for`)

`v-for` loops over an array and renders an element for each item

```html
<ul>
  <li v-for="logMessage in logMessages">
    <span>{{ logMessage.actionBy === 'player' ? 'Player' : 'Monster' }}</span>
    <span v-if="logMessage.actionType === 'heal'">
      heals himself for
      <span class="log--heal">{{ logMessage.actionValue }}</span>
    </span>
    <span v-else>
      attacks and deals
      <span class="log--damage">{{ logMessage.actionValue }}</span>
    </span>
  </li>
</ul>
```

# Dynamic Class Binding (`:class`)

Vue allows conditional CSS classes using `:class` with object syntax

```html
<span
  :class="{ 'log--player': logMessage.actionBy === 'player', 'log--monster': logMessage.actionBy === 'monster' }"
></span>
```

# Dynamic Style Binding (:style)

Vue allows binding _CSS styles dynamically_ using `:style`

```html
<div class="healthbar__value" :style="monsterBarStyles"></div>
```

# Template Interpolation (`{{}}`)

Double curly braces render reactive `data` or JS expressions directly in HTML

```html
<span>{{ logMessage.actionValue }}</span>
<span>{{ logMessage.actionBy === 'player' ? 'Player' : 'Monster' }}</span>
```
