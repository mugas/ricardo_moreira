---
type: Tutorials
language: js
title: Dom Manipulation
summary: Learn with 3 examples about string templates, query selectors,
  innerHTML, and the most important way to use the DOM in your favor.
date: 2021-03-10T08:12:08.587Z
update: 2021-03-10T08:12:08.760Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1615364350/dom_manipulation_hwtedk.png
---
When you are starting learning javascript I believe that one of the first things you will hear is about DOM Manipulation. Unless you are only using the console, you will need some knowledge of how to use javascript within the Dom.

I don't want to focus too much on the theory as I learn more by doing and creating things, but let's define the DOM and what it means to "manipulate it".

DOM stands for Document Object Model and works as a tree and in that tree, there are all elements of the page. That tree has different relationships(parent, children, sibling, etc) depending on their position. If a tree is difficult to imagine, think about a family. There are the parents, so when they have a kid their kid is their children right? If they have another, that child is going to have a sibling. Makes sense? So are the parents the main parents of that family? Well, it depends. Those parents are children of someone, so then they became children and their parents are the main parent element...

So the main parent is the HTML document but every element has its own direct parent element. The main idea to get here is it's good to know where you are in the DOM to be able to manipulate it.



Now let's go to our project:

## Links
* [Project page](https://gscreationsdom.netlify.app/)
* [GitHub page](https://github.com/mugas/Blog-Post/tree/master/DOM)
* [Code Pen](https://codepen.io/mugas/pen/QWGJrRa)


Some things we will not cover in this post: The CSS, and the `show the code` function ( note at the end of the post).

So what topics are we going to cover in this post?

* Accessing the DOM
* Manipulating the DOM
* Creating new elements DOM
* Adding event listeners

We will cover all these topics with 3 small examples:

1. We have some text, we will select it and add changes to it 
2. We have a picture and add some different style to it
3. Insert a recipe into the Dom

Take this html:

```html
     <section class="query-selector-all">
      <section class="queries">
        <article class="first_element">
          <h2 class="first__title">Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
        <article class="second_element">
          <h2>Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
      </section>
```

We have a section that inside as 2 different sections. Inside of these sections there is an article with a div. The magic of Dom is that you can access the elements that exist on the DOM. How we do that? There is a couple of methods we can use:

```js
document.getElementsByClassName();
// If instead of an id your element has a class, this is the method where you can access it.

document.getElementsByTagName();
//You don't even need to add a class name or id, you can access the element straight from the tag

document.querySelector();
document.querySelectorAll();

//The most used to access the DOM, because with it you can access class, id and tag. So each case would be:

document.querySelector('#id');
document.querySelector('.classname');
document.querySelector('section');
```

These are the ways to access the DOM. I only use the `querySelector` and the `querySelectorAll` as it gives me all the info I want.
To access the section with the class query-selector-al. we go to our js and write:

```js
const allElements = document.querySelectorAll('.query-selector-all');
console.log(allElements)
```

Why the `querySelectorAll`and, not the `querySelector`? Because this class name has more than one element, so with querySelectorwe only access the first element and we want to access all. 

But if you check your console we see that `allElements` return a Nodelist, so it returns all the elements inside that class. Ok, so we access the DOM and the section we wanted to manipulate but how we do it when it returns a Node list? You have to loop all over those elements with a forEach for example:

```js
allElements.forEach(eachElement => {
 console.log(eachElement)
});
```

If you open the console you see that now you have access to all elements that are inside the class Name. I want that when we load the page the all the text changes color. First, we go to our CSS and create that style inside a new class. Let's name it `selector__all`.

```css
.selector__all {
  color: #edbd54;
  transition: all 2s;
}
```

Basically, we just add color to the text with some transition to have some delay. 
We just need to add this class name to all elements inside the section and because we already loop over them and have access we just need to go to the loop and add the class:

```js
allElements.forEach(eachElement => {
  eachElement.classList.add('selector__all');
});
```

What we are doing here? Because we are looping each element we have access to each one of them when looping. Then we are just adding the class, that has the code of color change, to each of the elements.
And just like this, our text now shows in a different color after 2 secs.
The main thing to remember, when you want to access/manipulate more than one element at a time, use the `document.querySelectorAll()` and loop over it to access each of the elements inside.

What if you only have one element?
It's easier and you probably know the answer now.

This is your HTML:

```html
 <section class="query-selector">
      <article class="image"> <img class="first__image" src="https://picsum.photos/420" alt="random image from picsum "></article>
      <article class="black__board">
        <div class="second__code">
          <h2>How to select one element?</h2>
          <button class="code__show__second">Show me the code</button>
        </div>
      </article>
    </section>
```

We have a section, and inside of it, there are 2 articles. But we only want to access the image that is inside the first article.
The image has the class `first__image` Then in your js: 

```js
const firstImage = document.querySelector('.first__image');
```

If we console it we see that we have access to the image. I want that by clicking on the image, it will turn 360 degrees and the borders will be round.
We talk about access the DOM, manipulating the Dom, now we go add event listeners.

Event listeners are basically to some element you attach some action(event) that will trigger something. In this case, we will add an event(click) that will trigger the manipulating of the image.

How we do that?
we have now `firstImage`. To add the event listener we need to:

```js
firstImage.addEventListener('click', () => {
  console.log("hello")
});
```

First, you write the element. In this case, is the `firstImage`, then you add event listener; in this case, is the 'click' function. There are [plenty ](https://developer.mozilla.org/en-US/docs/Web/Events)more.
And then has any function, you write the code you want to add inside that function. I just console a "hello" for now. If you open the console it should show up there every time you click the image

Ok, now we add an event listener to the image when we click on it. So we go to our css and :

```css
.round {
  border-radius: 50%;
  transform: rotate(360deg);
  transition: all 10s;
}
```

Like we did in the first example, we create a class, in this case, names `round` and add the style we want. Here we add a border-radius of 50% to make it round and rotate 360 degrees.
Now that we have the class we go to our js event listener and rewrite:

```js
firstImage.addEventListener('click', () => {
  firstImage.classList.toggle('round');
});
```

And just like that when you reload the page, and click the image, it became round while rotating 360 degrees.
Great right? With a couple of lines of code we already talk about 3 of the 4 topics I mentioned above about DOM Manipulation

Now we go to the more fun for me that is creating new elements on the DOM.
How?
Let's say you have a recipe app that you want to add a new recipe and show up on the page. By adding a new recipe to the dom you are indeed creating new elements on it.

Here is our html:

```html
<section class="recipes-manager">

      <article class="recipes-manager_docs">
        <div class="recipe-background">
          <section class="first">
          <label for="name">Recipe Name</label>
          <input class="name" type="text" id="name" >
          <label for="cuisine">Type of cuisine</label>
          <input class="cuisine" type="text" id="cuisine">
        </section>
        <section class="second">
          <label for="number">How many people</label>
          <input class="number" type="number" id="number">
        </section>
        <section class="buttons">
          <input class="image" type="file"  accept="image/*" name="image" id="file" onchange="loadFile(event)" style="display: none;">
          <label class="upload" for="file"  tabindex="0" style="cursor: pointer;">Upload Image</label> 
          <button class="button-recipe">Show recipe</button>
        </section>
      </div>
        
        
      </article>
     
      <article class="recipe-menu">
        <div class="recipe" id="output">
        </div>
      </article>

    </section>
```

Let's explain what we have here.
There is a big section with the class `recipes-manager`.Inside that section, there are 2 articles that include the form to add the recipe and the "area" where the recipe is going to show up. The first is the article with the class `recipes-manager_docs`. Inside of it, I add also an event to be able to upload the image from your pc( `onchange="loadFile(event)"`).
How we do this?

First, we add to our js, our recipe name, cuisine, and for how many people

```js
const recipe = document.querySelector('.recipe');
const buttonRecipe = document.querySelector('.button-recipe');
const recipeName = document.querySelector('.name');
const recipeType = document.querySelector('.cuisine');
const numberPeople = document.querySelector('.number');
```

We also add the button to show up the recipe and also the div where the recipe is going to sit.
To add new elements there are some ways like for example [this](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) but I will focus only on the template strings that is the most forward way for me.
Note: In production be aware of[Cross Site Scriptings ](https://owasp.org/www-community/attacks/xss/)when using the template literals.

How do template literals work?

```js
const myHTML = ` I am a templare literal`
```

You create a variable and inside backticks, you write some text. Now you want to add that text on the HTML, in this case to the `recipe`
So you would do:

```js
recipe.innerHTML = myHTML
```

And just like this, the text that is inside the variable `myHTML` will show up on the page ( in the end I will explain the inner HTML with the text Content).
We just add the first text into the DOM. Can we make it better? Of course

Instead of the text above we could put for example :

```js
const myHTML = ` 
<h1>This is a heading</h1>
<p class="style-me">This is a paragraph</p>
`
```

Now we create a template literal that has a heading and a paragraph. We even add a class to the paragraph that we can style on CSS.
For me that is really useful and great has with only one string template we can completely change the DOM.
So back to our example, let's make it work.

Before we add to our javascript our input but that doesnt get the value that is going to be inserted. To get that value we can easily do:

```js
  const recipeNames = recipeName.value;
  const typeOfRecipe = recipeType.value;
  const numberPeoplePerRecipe = numberPeople.value;
  const image = document.querySelector('#output');
//image we get to the function loadFile and then we add it to the output that is going to where we are going to add the recipe
```

By doing this now, `recipeNames`, `typeOfRecipe`,  and `numberPeoplePerRecipe` will get the real value that the user will put.

Now we create our template string:

```js
const myHTML = `
<section class="recipe-card">
  <div class="card">
    <p class="recipe-name">${recipeNames}</p>
    <p class="recipe-type">${typeOfRecipe}</p>
    <p class="recipe-number"> Serves ${numberPeoplePerRecipe}</p>
  </div>
  <div class="recipe-image">
    <img src="${image.src}" alt="ola" class="recipe-image"/>
  </div>

</section>
`
```

We created now a new piece of HTML with template string interpolation. Interpolation means that we get the value from Javascript and then send it to HTML. How we do that? We know that `recipeNames`gets the value of the name of the recipe the user puts. We have that value in Javascript. Because we are using template literal to "send" back that value to HTML inside the backticks we have to use the `${value}`. 
Makes sense? Now we have the template and it will show up in the DOM as we before set to :

```js
recipe.innerHTML = myHTML
```

But we want that this happens when the button `Show Recipe` it's pressed.
Let's refactor our code.
We create a function called `insertRecipe` where we add the code that we wrote before

```js
function insertRecipe() {
  const recipeNames = recipeName.value;
  const typeOfRecipe = recipeType.value;
  const numberPeoplePerRecipe = numberPeople.value;
  const image = document.querySelector('#output');
  const myHTML = `
<section class="recipe-card">
  <div class="card">
    <p class="recipe-name">${recipeNames}</p>
    <p class="recipe-type">${typeOfRecipe}</p>
    <p class="recipe-number"> Serves ${numberPeoplePerRecipe}</p>
  </div>
  <div class="recipe-image">
    <img src="${image.src}" alt="ola" class="recipe-image"/>
  </div>
    
</section>
`;

  recipe.innerHTML = myHTML;

  return myHTML;
}
```

We now add an event listener to the button that when the button is clicked this function is run:

```js
buttonRecipe.addEventListener('click', insertRecipe);
```

It should work now. Fill up all the info for the recipe, press the button and it shows up.

Before we finnish this tutorial some notes:

* InnerHtml vs Text Content vs outerHTML

  To understand better the differences between these 3 properties nothing is better than see an example.

  So our html is like this:

```html
section class="queries">
        <article class="first_element">
          <h2 class="first__title">Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
        <article class="second_element">
          <h2>Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
      </section>
```

In our js we select the `queries`element and console each one of the properties:

```js
const content = document.querySelector('.queries');
console.log(content.textContent);
console.log(content.innerHTML);
console.log(content.outerHTML);
```

TextContent as the name it says it returns the content of elements that were selected. No there are no tags involved only the text. 
It's useful also when you want to change the text of the DOM. Imagine that when pressing the button the text changes. We can use text Content for this.

InnerHtml returns the HTML that is inside of what we select. So what is inside the section with the class named "queries"? It is the article and then the heading and the paragraph and then it's what's is shown. That is why it's used with template literals. In our recipe example, we selected the div where we want to insert the recipe. So we want our recipe in the inner part of our div :)

OuterHTML includes the element that is selected. In this case the class "queries".

* Parent Element vs Children vs Child Element Count

It's always good where we are in the DOM. One way to know what is using the parentElement and the children's property. 

Let's look to another HTML: 

```html
 <section class="query-selector-all">
      <section class="queries">
        <article class="first_element">
          <h2 class="first__title">Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
        <article class="second_element">
          <h2>Query Selector All - Select all elements</h2>
          <p>I am a paragraph and I am selected also</p>
        </article>
      </section>
        <article class="black__board">
          <div class="first__code">
              <h2>How to select all elements?</h2>
            <button class="code__show__first">Show me the code</button>
         </div>
       </article>
```

In our js

```js
const blackBoard = document.querySelector('.first__code');
console.group(
  blackBoard.parentElement,
  blackBoard.children,
  blackBoard.childElementCount
);
```

What we get here? with the parentElement we can see who is the element that is a parent and the children... Well, the children Element.
You can even do:
`blackBoard.parentElement.parentElement`
to see who is the element above if any. You can do this till it reaches the HTML element.
In the last one `chilElementCount` you can check how many children elements the parent has.

* Show me the Code section

As you see in the final project, there are 2 sections where is a section to see part of the code that got to manipulate the DOM, as explained above. I will not explain here what was done as it's the same almost as the template literal that was used for the recipe.

Even though, if you want to know more, or if something that is not well explained please get in [touch ](https://twitter.com/mugas11)and I try to make it more understandable.


*Performance and Responsiveness 

I tried that in all posts they are optimized for performance. So that includes SEO + Accessibility mostly. Also, I make the effort that the final project is available also on mobile. It's not 100% perfect but I believe you can access and understand it.

If you like this post or want to know more follow me on [Twitter](https://twitter.com/mugas11).   There I talk about programming, entrepreneurship and occasionally food and parenting :)