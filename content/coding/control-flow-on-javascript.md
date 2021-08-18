---
type: JS
language: js
title: Control flow on Javascript
summary: "If statements and much more - One of the most famous poets from
  Portugal has a sentence that is: Primeiro estranha-se, depois entranha-se,
  that in English is something like first it feels weird but then you feel it in
  you."
date: 2019-02-19T07:05:43.199Z
update: 2021-02-02T07:05:43.429Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1590572247/0_j4D5LqbEpwLgpIxE_snieg2.jpg
---
One of the most famous poets from Portugal has a sentence that is: Primeiro estranha-se, depois entranha-se, that in English is something like first it feels weird but then you feel it in you. That has been my experience with Javascript since the beginning. It started something that just felt weird but with time, it got on me and now I just want to know more and more and practice more and more.

That being said I decided to write posts about Javascript topics. By writing it here I learn it better and you will also find something useful out of it. Because I am a code newbie and mostly I write these posts for other code newbies it might be that some things seem easy, even for me and you, but it just to get a ground start and to not jump over bit subjects in a topic.

The first one of this long series is going to be about **Control flow in Javascript.**

Control flow is in computer science the order that the instructions or statements or functions are executed. In javascript, we read the code starting from the first line till the last line unless of course in the code there is some instructions or statements that changes that control flow.

The most known control flow used I would think is the if statement that we used many of our code. For example, you want a website to show some page if you are older than 18, if not, the website would render a different page is a traditional example of a control flow/ conditional example

**NOTE**: Loops are a big part of control flow statement but because I want to write a post only about loops, even that I am going to mention and use them on the examples it will not be my main focus.

### **BLOCK**

The block statement per se doesn’t change the control flow but is used to group statements. The block is set by a pair of curly brackets.

```javascript
{
first statement;
second statement;
...
}
```

One good example to when use statement is with the if statement.



### **BREAK**

Break as the name implies, breaks. Breaks what? Breaks the statement or in normally the cases break the loop.

See the next example:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
//excepted output : 0,1,2
```

In this loop, if we take the break out, the loop it iterates thru all value from 0 to 4. But because we have a break on 3, it will only iterate from 0 to 2.

Basically, this condition says if*i*is equal to 3 then break and stop the loop there.

We also can use it to give more information to the user. If we want a function that wants to loops over some numbers and breaks when a certain condition is met and print that info about it. In this case, we would like that it will loop till a certain number has the division remainder 0 when divided by 3 but also by 5 and would like to print that info.

```javascript
for (let i = 5; i < 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`The division reminder of the number ${i} is 0`);
    break;
  }
  console.log(i);
}
expected output :
5 
6
7
8
9
10
11
12
13
14
The division reminder of the number 15 is 0
```

Useful right?

### **CONTINUE**

So if*break*, ends the loop what the*continue*statement does? That’s right, it jumps the loop in that iteration and continues to the next iteration.

In other words, when the continue condition is met, it will not run or print it and it goes straight to the next iteration. An example you say? Ok

```javascript
for ( let i = 0; i<10;i++){
if(i ===5){
continue;
}
console.log(i);
}
excepted output:
0
1
2
3
4
6
7
8
9
```

So as you can see the console.log will print all loop except the number 5, that is where the continue statement was set. If you want to check what happens in every situation, I advise you to set console.log in every step and see what it prints:

```javascript
for (let i = 0; i < 10; i++) {
 console.log(i);
 if (i === 5) {
   continue;
 }
}
excepted output:
0
1
2
3
4
5
6
7
8
9
```

So if you print it before the continue statement, it prints all. What if you print it just before the continue statement?

```javascript
for (let i = 0; i < 10; i++) {

 if (i === 5) {
   console.log(i);
   continue;
 }
}
excepted output:
5
```

So here, the continue statement comes after the console.log but the console.log is already inside the condition, making that it print that condition.

So basically it says, is*i equal to 5?*So print it.

As you can see in these 3 examples for the same code, is important to know where you want to access your information. Because I learn better will more real examples, here it goes one.

Let’s say you have an array of all your bands, and you want to print that information except for just one band. Why? Well, maybe you don’t want that everybody knows that you like that cheesy pop music that everybody likes to talk bad about it. How you do it?

```javascript
var music = [
"placebo",
"smashing Pumpkins",
"pearl jam",
"ornatos violeta",
"feromona"
];
for (var i = 0; i < music.length; i++) {
  if (music[i] === "ornatos violeta") {
    continue;
  }
console.log(music[i]);
}
excepted output:
"placebo"
"Smashing Pumpkins"
"Pearl jam"
```

Let’s explain this:

You have an array. After you have the loop that will iterate all over the array. Then you set the condition if the array has an element with the name you want to not print(in this case Ornatos Violeta. Great band, by the way, I will never leave it unprinted). So you see the array with the iterated element(i)set to the value you want.

Then you set the continue statement and print it out. And just like this, it will print all bands you wanted skipping the one you don’t.

### **SWITCH**

So a***switch***statement is used when you have to use many***if***statements in the same function for example. So***if***statements if what you will use most often in your code, and you might know what it is but I will give a brief explanation.

The if statement executes a statement if that condition that is specified is truthy. If it’s falsy some other statement can be executed, or other condition can be checked.

So pick up the last example and check if there is some specific element within the array and print true with the if statement.

```javascript
var music = [
"placebo",
"smashing Pumpkins",
"pearl jam",
"ornatos violeta",
"feromona"
];
if (music[0] === "placebo){
  console.log(true)}
else {
  console.log(false)
 }
excepted output:
"placebo"
```

So here we are checking***if***the index 0 of the array is equal to “placebo”, print out true. And in this case, it is. We also put the**else**statement that when the condition is not met. For a clean code, if using only the else statement you can write it without the brackets like this:

```javascript
if (music[0] === "placebo){
  console.log(true)
}
  console.log(false)
excepted output:
true
```

That it will output the same result. But what if you have one more condition that you want to check. You can use the ***else if*** statement:

```javascript
var music = [
"placebo",
"smashing Pumpkins",
"pearl jam",
"ornatos violeta",
"feromona"
];
if (music.includes("placebo")) {
  console.log(true);
} else if (music[0] === "feromona") {
  console.log(false);
} else {
  console.log(okay);
}
excepted output:
true
```

So here where are checking in the first condition if the**array**includes “placebo”.(I use here the method***includes***, that basically as the name says checks if the**array**includes the element you search). In the second condition, we check if the**index\[0]**is “feromona” with an***else if***statement that works like another***if***. And then we put the***else***statement in the end in case none of the conditions are met. But what if we have too many if else? There is where the switch statement comes.

```javascript
function job(name){
  
  switch (name){
    case "professor":
      console.log("you teach well");
      break;
    case "artist":
      console.log("I like your painting");
      break;
    case "singer":
      console.log("I love your voice");
      break;
    default:
      console.log("what you do?");
  }
}
job("professor");
```

<!--StartFragment-->

Let's get into this. The ***switch*** statement lets you create a set of options for the element you want to check.

In this case, you have a function and for the different type of job, it will print something different. But how you use the ***switch***? To use the ***switch*** statement you have to divide by cases, being each ***case,*** each of the options. So in this example in **case** 1 *the argument* used is a professor and it will print “you teach well”, and it will do accordingly if it’s *artist* and also if it’s singer.

Why the break? We use the break statement because if not, the code will continue and execute the next block.

You can use in the ***switch*** case a **default  “case”** where it works like an **else** statement, i.e if no condition is met that is what the code will execute.

So this is the basics of control flow in Javascript. There are more control flow statements in JS and there is more to talk about loops but I will get into it in a future post.

Happy coding!