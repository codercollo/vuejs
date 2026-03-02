# Creating a Vue App

Using: const app = Vue.createApp({})

This initializes a new Vue instance where we define:

- data
- computed properties
- methods

# Mount the app to an HTML element using:

Everything under this section/div is controlled

- app.mount("#events")

# "this" Keyword in Vue

Inside Vue (methods, computed, watch)
this - refers to the Vue instance : this.name, this.counter
It gives access to reactive data properties

# Data properties

- data() function returns an object that holds reactive state.

data() {
return {
counter: 0,
name: "",
};
}

# Methods

Methods are regular fucntions used to change data or perform action . i.e :add(num), reduce(num)
Use with event binding or data binding.
Data binding: Method is executed for every "render" cycle of the component
Use for events or data that really needs to be re-evaluated all the time

# Computed Properties

Computed properties are reactive and cached
Use with data binding
Computed properties are only re-evaluated if one of their 'used values changed'
Use for data that depends on other data
fullname() {
if (this.name === "") {
return " ";
}
return this.name + " " + "Maina";
}

- Automatically recalculates when "name" changes
- Used in template as: {{ fullname }}
- Preferred over methods when deriving values from existing state

# Difference between Methods and Computed

-Computed:
Cached
Only re-runs when dependencies change
Used for derived values

# Watchers

Watchers observe changes in data and execute logic when data changes
Not used directy in template
Allows you to run any code, in reaction to some changed data (ie: send HTTP requests)
Use for any non-data update you want to make
watch: {
counter(value) {
if (value > 50) {
const that = this;
setTimeout(function () {
that.counter = 0;
}, 2000);
}
}
}
What this does:

- Watches counter
- If counter becomes greater than 50
- After 2 seconds, resets counter to 0

Watch is useful when:

- You need side effects
- You need async operations
- You need timers
- You need API calls

# Difference Between Computed and Watch

Computed:

- Returns a value
- Cached
- Used for derived data
- No side effects

Watch:

- Performs side effects
- Not cached
- Used for async operations or complex reactions
- Does not return a value for template use

# Event Handling

Vue uses v-on directives to listen to events
-Examples:
v-on:click="add(10)"
v-on:click="reduce(5)"
v-on:click="resetInput"

vShorthand syntax:
@click="add(10)"

v-bind:value="..." shorthand :value="..."
eg: v-bind:style === :style="{}"

no shorthand for v-model .
NB: use on signature throughtout

# Adding CSS styling dynamically

:class = allows reactive CSS class toggling based on Vue state
:class="{
active: boxCSelected,
highlighted: boxASelected
}"

-Dynamic Classes Array Syntax
:class="['demo', {active: boxBSelected}]"

# Two-Way Data Binding (v-model)

<input type="text" v-model="name" />
v-model:
- Binds input value to data property
- Automatically updates name when user types
- Replaces manual event handling like setName()

# Template Interpolation

Vue uses double curly braces to display data:
{{ counter }}
{{ fullname }}

# Mounting Vue to HTML

<section id="events">
Vue controls everything inside this section after:
app.mount("#events")
