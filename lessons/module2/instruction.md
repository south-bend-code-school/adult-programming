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

## Functions () (prev 26 min)

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
- create function and call it
  - demonstrate calling the function in the JS before putting it in the onclick attr
- get to here:

```
<button onclick='sayHello()'>Click me!</button>

function sayHello () {
  alert('Hello!')
}
```
- alright, that was kind of a lot, any questions?

