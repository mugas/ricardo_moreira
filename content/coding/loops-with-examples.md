---
type: js
language: js
title: Loops with examples
summary: Start looping in javascript - **Loops** are something that is with us
  always since the beginning of our never-ending journey of learning
  JavaScript(or any programming language) so let’s focus on them.
date: 2019-06-17T06:08:00.776Z
update: 2021-02-02T07:08:00.828Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1590573559/0_rrVomjfJRj96SVL__jsfkqt.jpg
---
**Loops** are something that is with us always since the beginning of our never-ending journey of learning JavaScript(or any programming language) so let’s focus on them. The best way for me to learn is creating something with what I am learning so I try to have examples for all the loops where you can see what they do and how we use them

## What loops we will cover

* while loop
* do...while loop
* for
* for...in
* for...of

So first let’s define what is a **loop** and why we need to use them in JavaScript?\
Do you know when you like a piece of music so much that you just listen to it over and over? Well, that is a loop. For programming, a loop is a way to iterate over something like an array or an object for example. With loops, we make sure our code is DRY. The **loop** will loop till the condition is met or loop if the condition is met and till the condition is false.

An infinite loop is a loop that has no ending and most likely it will crash your app/website.

### **while loop**

The **while loop** it runs as long the condition evaluated is true. Think of it as a conditional, an ***if*** statement but instead of running once, run as long the condition is true.\
If you don’t write the condition or write a condition that will never turn false, i.e, is always true the loop never ends.

**Syntax**:

```javascript
while(condition)
{
  //code to be executed as long the condition is true
}
```

Let’s print all number between 0 to 5:

```javascript
let i = 0;
  while (i < 6) {
    console.log(i);
    i++;
  }
```

So what is happening here? First, you set the variable to 0 outside the **loop**. Then you write the while condition that is `i < 6`, so as long *i* is less than 6 the code above is going to run.\
What is the code? Everything that is inside the brackets, so in this case, the printing the variable( the number) and then add one to that variable.

So it starts at 0. Zero less than 6? Yes, so print *i* that is 0 and add 1. After how much is *i*? Yes, it’s 1, still lower than 6 so do it again till *i* is 6. Because 6 is not smaller than 6 the **loop** ends and what is printed is:

```javascript
let i = 0;
  while (i < 6  ) {
    console.log(i);
    i++;
  }
  /*
  0
  1
  2
  3
  4
  5 
  */
```

### Let’s get real

For me, the best way to learn is seeing the practicability of the situation/problem, in this case, the loop. I will try to be the most practical I can but feel free to tell me if I am not being to clear or how can I improve. This is is just a small example, I would say it’s nothing that will never be needed at least like this:) It’s New Year eve and you want to create a small 10 seconds countdown and till 0 or till it’s New year say how many seconds to New Year Eve and when reach 0 it will say “Happy New Year”.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="eowVJW" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="While loop">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/eowVJW">
  While loop</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


So what happened here? I will not get into details about the DOM Manipulation but basically, we set a id in our html then in our js `const message = document.querySelector("#container")` and there is where we will display our message `message.innerHTML=${countdown}`. Also, I’m using template literals.
Now the <b>while loop</b>. We set the variable <i>seconds</i> to 10 that is where we want to start it, then we set the variable <i>countdown</i> to an empty string where we will print in JS the countdown.
Then our <b>while statement</b> says that as long the seconds variable is bigger than 0 we write the message and set the variable seconds to decrease one second.
After we just set when it reaches zero. So is outside the loop`countdown =${countdown} ${seconds} Happy new Year`. So the <i>const</i> message will display the countdown variable during the countdown and show accordingly the message.

### **do...while loop**

The **do…while** works a bit different. The big difference is that the **do… while** loop runs at least once. Basically, it says to do something while this condition is true running always at least once.

**Syntax**:

```javascript
do
  //statement or code to execute
while(condition)
```

Now let’s see a situation where it only runs once:

```javascript
let i = 0;
do {
  i++;
  console.log(`I run at least ${i} times`);
} while (i < 0);
console.log(`I run a total of ${i} times`);
// expected result: "I run at least 1 time"
// "I run a total of 1 times"
```

We set the variable to **0** and set the loop to add one to each time it iterates and to do it (*set the condition to*) as long i is less than zero. I put a console.log inside the statement and another outside to see what it prints.

So first **i** is 0, and we add one and print “I run at least 1 time”. Then we check the condition: is i less than 0? Well, **i** now is 1 and is bigger than 0 so the loop stop and it will print “I run a total of 1 time.\
If you want to see the difference change the condition to 5 for example

```javascript
let i = 0;
do {
  i++;
  console.log(`I run at least ${i} times`);
} while (i < 5);
console.log(`I run a total of ${i} times`);
/* expected result:
"I run at least 1 time"
"I run at least 2 time"
"I run at least 3 time"
"I run at least 4 time"
"I run at least 5 time"
"I run a total of  5 times"*/
```

Here you can see how it works when it loops more than once. The i starts with 0 then we add 1, it becomes 1. it prints “I run at least one time”. Then because I is still less than 5 adds one more and do the same till I is 5 and then prints all is above.

### **for loop**

One of the most used loops in JavaScript is the **for loop**. When I start coding with JS, this was one of the ones I used more till today. In the beginning, I was not getting so much how it works so I try to explain in a way that I would understand when I started\
In the for loop, the code is repeated until the condition evaluates to false. **One of the uses of the for loop is to loop over an array**.

**Syntax**:

```javascript
for([initialization];[condition]; [final-expression])
```

So when in use, would be looking something like this:

```javascript
for(let i =0; i <5 ; i++){
    //do something
}
```

To explain first let’s go to a simple example. You want to loop all numbers from 0 to 4 and print them, the loop above will be the one to use.

So the initialization (**i=0**) is where we define a variable, because we want to start at 0 we define the variable as 0.

The condition(**i<5**) is the expression that at the end of each loop is evaluated and when it becomes false the loop stops. So in this case, in each loop, it’s checked if i is **less than 5**.

The final expression(**i++**) normally is used as an increment. What you have to take into account is that the final expression occurs before the condition is evaluated

The **//do something** part is the code that it will run as long the condition (i<5) is true.\
In the for loop, you can use the break or continue statement.

So let’s see a more realistic example. You have a website where you want to add movies that you saw and display them on screen.\
First, in our html let’s create our div where we will represent our movies.

```javascript
<h1>Movies I see</h1>
      <div id="movies"></div>
```

In our js, we create the array with the movies that we can add more or delete.

```javascript
let movies = [
  "Constant Gardener",
  "Batman",
  "Pulp Fiction",
  "Heat",
  "Godfather"
];
```

Now let’s get our div from our html with a `getElementById`:

```javascript
let myMovies = document.getElementById("movies");
```

Then we create an empty string where we going to render all the movies.

```javascript
let myList = "";
```

Now we want to loop over the movies that we have and we can create that with the for a loop.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(movies[i]);
  }
```

So what happens in the loop? First, we create a variable and set to 0. Why 0? To start in our first element. If we change it to 1, you will see that it will not print the movie “Constant Gardner”. After we set the condition that is, to print while i is less than 5. Why 5 ? because is the number of movies we have. Then we add `i++` to add always one to each loop. Then we just need to add what we want in each loop and in this case we just want to console.log it — We write `movies[i]` to write each movie separated. If you would write only  `console.log(movies);`

It would print the array of movies 5 times, and not the 5 movies. And what can we do to improve it? Well, what if you want to add another movie? You had to change the condition to `i<6` and 7 if you had another and so on. And that isn’t really productive. So let’s make it dynamic. We want that it loops till the variable that we are using to loop <b>(i)</b> is less than the number of movies right? And in programming the number of elements in an array ( number of movies in this example) is the <b>length</b> of the array so we can write the code like this:

```javascript
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }
```

And just like that, we don’t need to worry if we add another movie because it will loop always. Now let’s also render in the screen. We can do it by creating a bullet point in each time it loops.

```javascript
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    myList = myList + `<li>${movies[i]}</li>`;
  }
```

What we did here? So the myList was an empty string, right? So in each loop, we want that inside our empty string will be an element of the array while we loop in that string. To make the code better let’s wrap everything around a function

```javascript
function myMovies() {
  let myMovies = document.getElementById("movies");
  let myList = "";
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    myList = myList + `<li>${movies[i]}</li>`;
  }
  myMovies.innerHTML = `${myList}`;
}
myMovies();
```

Now we just create the HTML element with the function we created and render the data that is on the myList.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="QRPEpy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="For loop">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/QRPEpy">
  For loop</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### **for in**

So accordingly to [MDN](https://developer.mozilla.org/en-US/), the ***for…in*** iterates over enumerable properties of an object as for example the **object.keys**. For example, constructor or prototype properties are not considered enumerable so you don’t see them when running a **for…in**

So even that in Js, everything is an object, you shouldn’t use **for…in** in [arrays](https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea). The main reason for that is **for…in** iterates in arbitrary order and when iterating over an array, the index is important. So we focus on why and how to use them in an object

Syntax:

```javascript
for (let key in object) {
 //code in the loop
}
```

So the <b>key</b> name here is the name variable to assign the object. Is the i in the for a loop. And as like in the i in the for loop, you can give it any name. The object is the actual object, so you will put the object name you going to loop. So let’s see how it works and what it does in this example. You have an object that is a person object.

```javascript
let person = {
  name : "Steve",
  age : 35,
  city:"London"
}
```

Now using our <b>for…in</b> let’s loop and see what we get:

```javascript
for (let key in person) {
  console.log(key);
}
//name
//age
//city
```

And we get the properties of the object person, the keys of the object. Do get the values you can do:

```javascript
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}
//name
//Steve
//age
//35
//city
//London
```

To make it more clear let’s do

```javascript
for (let key in person) {
  console.log(`${key} - ${person[key]}`);
}
//name - Steve
//age - 35
//city - London
```

So that works just fine and it’s useful, but what happens when we have an object constructor? Note: If you are seeing loops for the first time, object constructor might seem more advanced and I will talk about it in a future post. For this example, assume that you want to create many person objects. So you have to add one by one. But if you can create an object constructor with the properties that all persons will have would be easy right? Then we have the object constructor So let’s create that object constructor.

```javascript
let Person = function(name, yearofBirth, job) {
  this.name = name;
  this.yearofBirth = yearofBirth;
  this.job = job;
};
```

Then we add a function to that object:

```javascript
Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearofBirth);
};
```

Now let’s create some objects:

```javascript
let Ricardo = new Person("Ricardo", 1992, "teacher");
let Marika = new Person("Marika", 1987, "designer");
ricardo.calculateAge();
marika.calculateAge();
```

Now let’s loop over the Marika object:

```javascript
for (var key in marika) {
  console.log(marika[key]);
}
/*
Marika
1987
designer
ƒ () {
  console.log(2019 - this.yearofBirth);
}
*/
```

Besides the properties of the object **Marika,**  it also loops over the function and that is because of the **for…in** iterates over all properties of the prototype chain. So we can loop over the properties that have the key object with the **hasOwnProperty** method:

```javascript
for (var key in marika) {
  if (Person.hasOwnProperty(key)) {
    console.log(marika[key]);
  }
}
/*
Marika
1987
designer
*/
```

So you can use the <b>for…in</b> to loop over the properties names and to check from an object which are the ones with some property like the key property for example

### **for of**

The last loop we will talk about is the **for…of**. It works on iterable objects like arrays and strings for example. It was presented with ES6 as an alternative to **forEach**\
.\
The syntax is similar to the **for…in** just changing the in/on. And you should use **for…in** only in plan Objects and **for…of** don’t work in Objects.

Syntax:

```javascript
for (let key on object) {
 //code in the loop
}
let ingredients = ["dough", "tomato", "cheese"];
for (let key of ingredients) {
  console.log(key);
}
//dough
//tomato
//cheese
```

You can see right away that can do the same as the for loop but with more clean and less code Also works for strings:

```javascript
const name = "Ricardo";
for (const key of name) {
  console.log(key);
}
/*
R
I
C
A
R
D
O
*/
```



Also works for **map**, **objects** and **sets** but we will not focus on them on this post.\
One thing that it doesn’t work is on plain Objects and that is because objects are not “iterable”.

But good use of **for…of** is on a Node List. For example, if you have some titles on one page with the same class and you want **on click** to change the color of them. Enter the **for…of**

So the html has a bunch of titles with the same class.\
In our JS file we get them with :

```javascript
const elements = document.querySelectorAll(".names");
```

and then we just add the <b>for…of</b>:

```javascript
for (const element of elements) {
  element.addEventListener("click", () => {
    element.classList.add("active");
  });
}
```
The <b>active</b> class is the class that we want to add when clicking that will make the text change color and position.
And that’s that.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="mZVRQb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for...of">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/mZVRQb">
  for...of</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

There is plenty to talk about loops still but with this hopefully, you can start using them in your projects and know which one you want to use. Let’s get coding.
Happy to hear your feedback about this post and how can it be improved.