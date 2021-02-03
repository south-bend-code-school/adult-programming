---
layout: default
---

# Intro to JS

## Overview (2 min)

- Hello!
- Discuss what class will look like for the day.
  - JS
  - How it incorporates into HTML and CSS
- Any questions?
- Reminder to ask questions or let me know to slow down
- How much content I get through isn't important. The only important thing is that you actually understanding what is being said.

## Getting started (13 min) (prev 2 min)

(3 min)
### Introduce concept broadly
- Click on the link at the bottom of the page
- [https://codepen.io/jorymullet/pen/rNWVQrQ](https://codepen.io/jorymullet/pen/rNWVQrQ){: target='_blank'}

- brief reminder about codepen
- Verbally go thru the house analogy
  - JavaScript is the functional part (like plumbing or electrical)
  - emphasize that the students could build an informational website with their knowledge


(2.5 min)
### A little bit of JavaScript
- reminder that this will have a different syntax
- the code still executes from top to bottom
- Use 1 alert and then 2 alerts to show some basic JS functionality

(1.5 min)
### Types
- explain how talking about this now will make our lives easier in the future
- numbers
- strings
  - Never have words without the quotes


### Variables

(4.5 min)
- explain what variables are
  - hold other values
  - can be named whatever
    - best practices say to use a name that reminds us what the value is
- asign 5 to `five`
  - alert it
  - put quotes around `five` to demonstrate the difference between strings and variables
  - change value
  - change name

(1.5 min)
- create 2 variables
- add them
- alert total
- show multiply

## Changing the DOM (11 min) (prev 15 min)

(5.5 min)
### Change innerText
- create element
  - give it an ID
- discuss referencing elements
- use getElementById
- explain THOROUGHLY what the following things are 
  - document
  - getElementById
  - changing innerText
- get to this in your code

```
<h1 id='title'>Some words</h1>

document.getElementById('title').innerText = "literally anything"
```
- any questions?

(5.5 min)
### Change CSS
- create div#box
- make #box look like a box with CSS
- reference it and change it in the JS
- first change color
- then change height
- width
- then height and width
- then all 3
- get to here:

```
<div id='box'></div>


#box {
  height: 100px;
  width: 100px;
  background: blue;
}


document.getElementById('box').style.width = '300px'

document.getElementById('box').style.height = '300px'

document.getElementById('box').style.background = 'purple'
```

- any questions?

## Functions (15.5 min) (prev 26 min)

(1 min)
### Analogy
- explain functions using an analogy
  - Robbing a bank
  - You first give instructions to your distraction person that, when I call you, create a distraction
    - This is making the function
  - Then, later, call the function you made in order for you instructions to be executed

(3 min)
### Basic function and call
- create a very basic function
  - explain syntax
    - name
    - parameters
    - function body
- call function
- get here:

```
function createDistraction () {
  alert("HEY IM DISTRACTING")
}

createDistraction()
```

- any questions?

(4 min)
### Button
- create button
- show it does nothing on click
- demonstrate with alert
- create function and call it from the button
  - demonstrate calling the function in the JS before putting it in the onclick attr
- get to here:

```
<button onclick='sayHello()'>Click me!</button>

function sayHello () {
  alert('Hello!')
}
```
- alright, that was kind of a lot, any questions?

(2 min)
### Button triggers HTML
- keep button and function
- create h1 with id `title`
- use button to change innerText of `#title`
- get here:

```
<h1 id='title'>These are some words</h1>

<button onclick='sayHello()'>Click me!</button>

function sayHello () {
  document.getElementById('title').innerText = 'Hello there!'
}
```

- any questions?

(5.5 min)
### Button clicks being counted
- create another h1 with id `count`
- create function called `countClick`
  - prove that it is working with an alert
- create var `total`
- increment count on click 
- alert the `total`
- diplay in `#count`
- get to here:

```
<h1 id='title'>I've clicked the button this many times:</h1>
<h1 id='count'>0</h1>

<button onclick='countClick()'>Click me!</button>

var total = 0

function countClick () {
  total = total + 1
  document.getElementById('count').innerText = total
}
```

- any questions?

## Inputs (18.5 min) (prev 41.5 min)

(6 min)
### First input element
- create input element
  - discuss this thoroughly
  - draw comparison to image tag for not having a closing tag
- type into it
  - explain how we can't access the value of whatever is in the input
- discuss plan to create a button and function so that you can alert whatever the user input
- give it an ID
- alert whatever value is in that input
  - go very slowly during the creation of the function
  - change variable names
- get to here:

```
<input id='input' />
<button onclick='alertTheInput()'>Alert the input</button>

function alertTheInput () {
  var value = document.getElementById('input').value
  alert(value)
}
```

(12.5 min)
### Create greeting
- first show some string concatenation
- any questions?
- describe that we want 2 input fields and a button that prints a greeting
  - name
  - age
- use the placeholder attribute
- go extremely slow, reiterating everything you are doing and saying
- be redundant as frick
- get to here:

```
<input placeholder='Name' id='name' />
<input placeholder='Age' id='age' />
<button onclick='createGreeting()'>Create Greeting</button>

<h1 id='greeting'>This is where the greeting will go.</h1>

function createGreeting () {
  var name = document.getElementById('name').value
  var age = document.getElementById('age').value
  
  var greeting = 'Hi, my name is ' + name + ' and I am ' + age + ' years old.'
  
  document.getElementById('greeting').innerText = greeting
}
```

## Parameters (19.5 min) (prev 60 min)

(2 min)
### Intro
- create a fake function and talk about the parameters portion we have always skipped over
- talk high level about `passing in` values into functions
- talk about how when we call a function, we can also give that function values
- show with alerts

```
function someFunction (value1, value2) {
  alert(value1)
  alert(value2)
}

someFunction(1, 'hi')
```

(2 min)
### Adding example
- create a function `addAndAlert`
  - takes in two values
  - adds them
  - alerts the total
  - change one of the numbers to a string and talk through that

```
function addAndAlert (num1, num2) {
  var total = num1 + num2
  alert(total)
}

addAndAlert('16', 18)
```

(2.5 min)
### Returning values
- so far, we have just been alerting in our functions or putting the results in the HTML.
  - what do we do when we want to get a value out of a function and use it elsewhere?
  - return
- change addAndAlert to add
  - remove alert and add return
- thoroughly explain what is occurring
- add alert at the end to show the value of `sum`

```
function add (num1, num2) {
  var total = num1 + num2
  return total
}

var sum = add(1,2)

alert(sum)
```

(2.5 min)
### Number casting
- show how a string can be cast into a number
- show string addition and then number addition to get to here:

```
var num1 = Number('16')
var num2 = Number('18')

var total = num1 + num2

alert(total)
```
- show NaN

```
var num = Number('16j')

alert(num)
```

(10.5 min)
### Final Boi: The adder
- going to combine functions, parameters, return, and Number casting to create a simple adder
- first, include inputs with appropriate id's and placeholders
  - make them type `number` and explain
- then, include button with empty onclick attribute
- then, a place to display the total
- create `addNumbers` function
  - get values from inputs
  - add them
  - display them
  - don't include function call in button at first
    - then do after showing it doesn't work
  - purposely don't cast numbers
    - explain why the total is a string
- create `castToNumber`
  - explain slowly and thoroughly what the function is doing
  - create new variables in `addNumbers` when you use `castToNumber`
- show result
  - do several demos
- get to here:

```
<input id='num1' placeholder='Number 1' type='number'/>
<input id='num2' placeholder='Number 2' type='number'/>
<button onclick='addNumbers()'>Add Numbers</button>

<h1 id='total'>Total will be displayed here</h1>

function castToNumber (string) {
  var number = Number(string)
  return number
}

function addNumbers () {
  var string1 = document.getElementById('num1').value
  var string2 = document.getElementById('num2').value
  
  var num1 = castToNumber(string1)
  var num2 = castToNumber(string2)
  
  var total = num1 + num2
  document.getElementById('total').innerText = total
}
```

- any questions?