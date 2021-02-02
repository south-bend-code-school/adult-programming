---
layout: default
---

# Intro to HTML and CSS

## Overview (2 min)

- Introduction of self and course
- Discuss what class will look like for the day.
  - General overview of what coding is
  - HTML
  - CSS
- Any questions?
- There is going to be a crazy amount of terms thrown at you and it all can be VERY confusing. Please ask questions whenever you want. If you have the question, someone else does too. Asking is the way of learning with code.
- You will have to transition between watching my screen and coding. Never be afraid to ask me to slow down since I may accidentally speed ahead since I am not switching.

## What is coding? (7 min)

REALLY BELABOR THESE POINTS. WORK AS HARD AS YOU CAN TO PROMOTE THE FOLLOWING IDEAS:
 {: .red}
- Coding is not just for the super elite/talented/intelligent.
- Getting started is hard and confusing but ultimately, we are just playing with Legos (like in the gif).
- Ask them to hang on during the tough parts and they will be shocked as to how much they can build.
 {: .red}

Ask the students to open up this link: https://south-bend-code-school.github.io/adult-programming/lessons/module1/lesson.html

### Coding in general
The whole point of this part is to demystify the concept of coding. There is a good chance members of this class believe they are incapable or that somehow coding is a lofty craft they could never engage in.

- It can look a lot of different ways.
  - Web dev, backend, databases, etc.
- Explain how we make think of coding how it happens in the movies
  - The Matrix
  - hacking
  - things flying around the screen
  - typing 1 million miles per hour
- Coding is simply using letters, numbers, and symbols to write instruction for the computer
  - A whole bunch of new terminology
  - A lot of things will feel unfamiliar
  - Just know, just imagine you are that Lego character slowly building up your little world
- These letters, numbers, and symbols are typed into a file (imagine PDF or Word document) and then we open these files in the browser who knows what to do with it.
- Any questions?


### The browser
The browser is able to take these lines of code as instruction and displays the content accordingly.

### Disclaimer
- People may be coming from different backgrounds of understanding.
- If you have any experience with web dev, this may feel extremely basic.
- If you have never seen code, this may seem horribly confusing.
- Never ever hesitate to ask questions and if it is moving too slowly, I am very sorry but we are not going to rush any of this stuff considering it is in no way easy for new users.

## Hello world! (25.5 min)

- Ask them to open link on page:
[Click here to see our first site!](https://codepen.io/jorymullet/pen/VwmLZeB?editors=1100){: target='_blank'}

(3.5 min)
- Explain what is on page 
  - BELABOR EVERY ELEMENT ON THE SCREEN AND ENSURE IT MIGHT BE CONFUSING 
  {: .red}
  - explain code pen
    - change Hello world! to Hello turtle!
    - Go thru each tab
    - Any questions?

(6 min)
- Explain how code is read from top to bottom
- House analogy for HTML CSS JS
  - HTML is structure and form along with content (words, images)
  - CSS is design layout and design
  - JS is functionality (plumbing, electricity)
- These things will make a lot more sense as we get coding
- Any questions?

(8 minutes)
- Dive into what we are seeing in the HTML
  - explain the words we know
  - and then tags
    - talk about greater/less than symbols are called tags
    - opening and closing tags
    - type of tag in between
    - use other examples besides a `p` tag
      - make one up like `sometag` or something to demonstrate opening and closing tags
    - explain that you don't want words just floating outside of tags
      - while it is allowed, always have your words between tags
  - opening/closing tags + content = element
  - make a longer paragraph in the `p` tags and change the header to an `h1`
  - explain that the difference between most tags is that they come with different styling
  - work until you get this example: 

  ```
  <h1>Hello world!</h1>
  <h2>Less important</h2>
  <h3>Lesser important</h3>


  <p>Hi there! My name is Frank and this is a normal paragraph.</p>
  ```
  - any questions?

- Nested HTML (3 min)
  - tag about nesting
    - bumps up complexity / helpfulness
  - demonstrate how tags can be within each other
  - show the `strong` tag
  - create a `p` element
  - choose one word to be surrounded by `strong`
  - code until you have the following example:

  ```
  <p>I have a sentence but I really want to emphasive <strong>THIS</strong> word.</p>
  ```

  - demonstrate on [https://southbend.craigslist.org/](https://southbend.craigslist.org/) groupings of elements and how this nesting of elements is massively helpful for organization
  - any questions?

- Classes and IDs (5 min)
  - explain attributes go into the opening tag of an element
  - classes are for groups
    - real life example: if I were to given each of you a class, I could give you each the class student
  - id's are for specific element
    - real life example: SSN or name
  - talk about how this may not make much sense right now to bring up but it will be very helpful in a secon when we talk about CSS
  - get to here with your code:

  ```
  <p class="sentence">I have a sentence but I really want to emphasive this word.</p>

  <p class="sentence" id="middle">I have a sentence but I really want to emphasive this word.</p>

  <p class="sentence">I have a sentence but I really want to emphasive this word.</p>
  ```

## CSS (16.5 min)(prev 34.5 + 16.5)

### Selector via tag (4 min)
- Recap on what CSS is again
- Breakdown syntax of CSS
  - explain each language has different syntax
  - recap on HTML's tags and such
  - talk about selecting
  - curly braces
  - properties
- add CSS to `p` tag and explain
  - color, font-size
```
p {
  color: blue;
  font-size: 32px;
}
```
- any questions?

### Selector via class (4 min)
- Recount that we have given elements IDs and classes
- add CSS to `sentence` class and explain
- include an `h1` with the class `sentence`
- discuss how it only has the CSS from `.sentence`, not `p` tag selector

```
<p class="sentence">I have a sentence but I really want to emphasive this word.</p>

<p class="sentence" id="middle">I have a sentence but I really want to emphasive this word.</p>

<p class="sentence">I have a sentence but I really want to emphasive this word.</p>

<h1 class="sentence">Big words</h1>

p {
  color: blue;
  font-size: 32px;
}

h1 {
  color: red;
}

.sentence {
  text-decoration: underline;
}
```

### Selector via id (3 min)
- recap on which element has an ID
- recap on the fact that no 2 elements should share an ID
- juxtapose `.` for classes and `#` for IDs
- add CSS to `middle` id and explain
- get to here:

```
p {
  color: blue;
  font-size: 32px;
}

h1 {
  color: red;
}

.sentence {
  text-decoration: underline;
}

#middle {
  font-weight: bold;
}
```

- any questions?

### Additional examples (5.5 min)
- Do more examples adding IDs and classes to other elements
- add ID and then have conflicting properties
- explain selector strength
- demonstrate multiple classes on single element
- get to here:

```
<p class="sentence" id="first">I have a sentence but I really want to emphasive this word.</p>

<p class="sentence" id="middle">I have a sentence but I really want to emphasive this word.</p>

<p class="sentence pointer">I have a sentence but I really want to emphasive this word.</p>

<h1 class="sentence">Big words</h1>


p {
  color: blue;
  font-size: 32px;
}

h1 {
  color: red;
}

.sentence {
  text-decoration: underline;
}

#middle {
  font-weight: bold;
}

#first {
  font-size: 48px;
}

.pointer {
  cursor: pointer;
}
```
- any questions?


## Images (5 min) (prev 51 min)

- Start by erasing entirety of what existed beforehand
- talk in general how adding images to sites is crucial for beautiful pages
- talk about the `img` tag
  - juxatopose with `h1` opening and closing tags
  - discuss attributes again (classes and id)
- briefly discuss that all images live at an `address`
- we right click and choose Copy Image Address
  - paste into img `src`
  - add some CSS here
- try with another example as well
- any questions about images?

## CSS Grid (14 min) (prev 56 min)

### Divs (4 min)
- erase all everything
- First talk about divs
  - empty boxes
  - minimal css
  - designed to be modified
- Put a few divs inside of another div
  - make children divs blue squares and give them space
  - explain why it intially looks like 1 rectangle instead of 2 boxes
  
```
<div>
  <div class="box"></div>
  <div class="box"></div>
</div>

.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  margin-bottom: 10px;
}
```
- any questions about how we made boxes?

### Grid (11 min)
- explain that HTML defaults to stacking elements on top of each other
  - we must use CSS to change this behaviour
- explain that we want to use parent elements to rearrange child elements
- give parent div id `parent`
- first use display: flex
  - talk about flex
  - talk about boxes being side by side again
- then use grid to put them side by side
- create the grid
  - describe how to use grid-template-columns by first typing then explaining
  - make them all 200px then bump up to 500px
  - play around with this with different num of columns and widths
  - really reemphasize what we are looking at
- Go back to [https://southbend.craigslist.org/](https://southbend.craigslist.org/) and explain how it's layout would be easier to make using grid
- Explain how going back and making changes in grid is very easy compared to flex and block
- any questions about grid?

```
<div id="parent">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>

.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  margin-bottom: 10px;
  margin-right: 10px;
}

#parent {
  display: grid;
  grid-template-columns: min-content min-content min-content min-content;
}
```

## Grid of Pix (10 min) (prev 71 min)

- explain that we will combine what we just learned to make a photo collage
- replace boxes with img tags
- explain that the `.box` selector is now meaningless
- use new selector `img`
  - explain existing CSS
- drop in image addresses
  - explain contortion of images
  - release contortion by removing width property
- center items using `justify-items: center`
- remove all imgs but one and show that you can use grid to easily center something
  - change background-color or `parent` to show how wide it is
- any questions
- result:

```
<div id="parent">
  <img src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg" />
</div>

img {
  height: 200px;
  background-color: blue;
  margin-bottom: 10px;
  margin-right: 10px;
}

#parent {
  display: grid;
  justify-items: center;
  background-color: tan;
}
```

## brings us up to 81 minutes

I think this may already be too much content since that was entirely lecture where I imagine questions and typos will definitely take more than 9 minutes. However, we won't know until we know.

If you run out of material before time, mess around with collage by adding title and other elements or ask students if they have ideas of something to do and then try to build it with them.


