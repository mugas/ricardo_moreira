---
type: js
language: js
title: Flip cards with JavaScript
summary: "With toggle and this keyword - Flipping a card, or some element is
  something that is used quite often in many projects/applications. "
date: 2020-06-26T06:11:21.960Z
update: 2021-02-02T07:11:22.003Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1592195735/movie_albums_v623ut.png
---
Flipping a card, or some element is something that is used quite often in many projects/applications. 

You can achieve it "only" using it CSS, by toggle and even by click, but it is a good way to start learning JS. It takes only few lines of code of Javascript and with some css you can make a nice effect to your page.

In this project we are going to use 4 different cards and loop over them to know how to achieve the flipping of every one of them. Also I had some responsiveness and accessibility to the page. Like we did it with the [Image Gallery](https://www.ricardomoreira.io/blog/2020-05-28-create-a-image-gallery) we also going to build it mobile first.


So what we are going to build? A page with music albums covers and when flipping we can access the back of the cards where is the info about the album. You can see the final project from the following links.

## Links

* [Project page](https://goodstuffmusicalbum.netlify.app/)
* [GitHub page](https://github.com/mugas/Movie-hero)
* [Code Pen](https://codepen.io/collection/DrpKdj)


So first let's build our html.

```html
<header><h1 tabindex="0" id="title">New Albums this week</h1></header>

    <section class="cards">
      <div class="cards__single">
        <div class="cards__front">
        </div>
        <div class="cards__back">
        </div>

       <div class="cards__single">
         <div class="cards__front">
         </div>
         <div class="cards__back">
         </div>
      </div>

      <div class="cards__single">
        <div class="cards__front">
        </div>
        <div class="cards__back">
        </div>
      </div>

      <div class="cards__single">
        <div class="cards__front">
        </div>
        <div class="cards__back">
        </div>
      </div>
```

So what we have here? Let's start with our header. I set a `tabindex=0` on it to receive keyboard focus. When a user wants to "scroll" a website with the tab button, only forms and links receive programmatic focus. With the **tab index equals to 0** you ensure that other elements will get the focus, but will not change the tab order, so it will run trough the logical navigation flow.
Then we create a section with the class `cards` and inside of it a div that will represent one card `class="cards__single"`and then inside of that div we will add the front and the back of the card. Each one of them will be inside of each div with their own class `cards__front` `cards__back`. Then we just do exactly the same for 3 more cards, because we will build 4 in total.

Now we only need to add our data. I just picked up some [unsplash](https://unsplash.com/) pics from albums and then search the album info. So one card will look like this:

```html
<header><h1 tabindex="0" id="title">New Albums this week</h1></header>

    <section class="cards">
      <div class="cards__single">
        <div class="cards__front">
          <img
            class="cards__image"
            src="https://images.unsplash.com/photo-1514924527133-371124f6f5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
            alt="Bon Iver album"
          />
          <h1 class="cards__artist" tabindex="0">Bon Iver</h1>
          <p class="cards__album" tabindex="0">
            <strong>For Emma, Forever Ago</strong>
          </p>
        </div>
        <div class="cards__back">
          <h2 tabindex="0">Songs</h2>
          <ol>
            <li>Flume</li>
            <li>Lump Sum</li>
            <li>Skinny Love</li>
            <li>The Wolves</li>
            <li>Blind Sided</li>
            <li>Creature Fear</li>
            <li>Team</li>
            <li>For Emma</li>
            <li>re:Stacks</li>
          </ol>
          <p class="cards__year">Year: 2008</p>
        </div>
      </div>
    </section>
```

I only add one album  info here. Below there is the code pen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="zYrBXeo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Albums - No CSS">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/zYrBXeo">
  Albums - No CSS</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Now the data is there, let's try to put the cards in order and the back hidden( some styling like the title will not be mentioned here, but will be present in the code pen and final version)
First we flex:

```css
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
```

We are building first for mobile, so in the phone we want that the cards will be one after the other when you scroll down, hence we put the `flex-direction:column` and `justify-content:center`.

Now let's style each one of the cards:

```css
.cards__single {
  background: #a64e43;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width:80%;
  border-radius: 16px;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  text-align: center;
}

.cards__image {
  text-align: center;
  width: 100%;
  border-radius: 16px;
}

.cards__artist,
.cards__album {
  color: #20263f;
}

.cards__front img {
  margin: 0;
  height: 250px;
}

.cards__album {
  font-style: italic;
}

h2 {
  margin: 0;
  text-align: center;
}

li {
  line-height: 21px;
}
```

The more important to mention here is we add to each card also flex and also `flex-direction: column` for the same reason: We want that the data is one after the other. For example, first the image, then the title and also the songs of each album one after the other. Also to mention that this we don't need to change mobile to desktop because we want same direction either way.
Besides that the rest is, adding color and some spacing. It still can be improved this area, either for mobile and desktop so you can change the way you feel like it.
Here is the code pen:
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="yLebaeX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flip Cards  - With flex">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/yLebaeX">
  Flip Cards  - With flex</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Now that it starts to look like something, let's hide the back of the card and style the rest:

```css
.cards__front,
.cards__back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}
.cards__front {
  height: 100%;
  transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
}

.cards__back {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  position: absolute;
  text-align: center;
  right: 0;
  left: 0;
  top: 10px;
  color: #20263f;
}

```
Let's go step by step. The `backface-visibility`property sets as the name says if the visibility of the back of our card is hidden or visible( that's the value it will take, besides the global values :inherit, initial, unset). Because we want that property in the front and on the back of our card, we set it to hidden on both. This property however doesn't work in 2D, so we have to add this property to our `.cards-single` :

```css
.cards__single {
  -webkit-transition: transform 0.6s;
  transform-style: preserve-3d;
}
```

This property sets whether the children of an element are positioned in the 3d space or not.
Then in both front and back we set again flex with column direction.
I had to the `cards__front` the `transform:rotateX(0deg)`property because of Safari. With works good without in Android and Desktop, but in some Safari, when you flip the card, the back goes blank. Even with that property set, not all Safari browsers work smoothly.
Then at last we set the position of the back card to absolute and set `transform: rotateY(180deg);` to hide the back of the card. Here is the code pen with the back of the card hidden:


<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="OJMmRQX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="flip cards - back hidden">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/OJMmRQX">
  flip cards - back hidden</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

We are starting to get somewhere now. Let's try to add that flip on the card to see the back of it.
What we want to achieve is that when someone press the card, the front of the card flips and shows the back of the card.
Let's first create that property in CSS:
```CSS
.cards__single.flip {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}
```
We are adding a class named `flip` in our cards, that it will rotate our card 180 degrees. Because of the `backface-visibility` it will show the back of the card and the front it will be hidden. And then we also want that when pressed again it goes back to normal.
There are many ways you can achieve that. You can for example add and remove the class `flip` every time its pressed but Javascript has thankfully the class `toggle`.
```js
const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));
```

Let's go from the beginning. First we get all our cards, with the `document.querySelectorAll`. But if you console the cards `console.log(cards)` you see that you get a Node list. 
So how can you add a event listener to a Node list? Yes you loop over them with 
`cards.forEach((card) => card.addEventListener("click", flipCard))`

You can see about loops [here](https://www.ricardomoreira.io/blog/2020-05-27-loops-with-examples).

Now we create a function named `flipCard` and write `this.classList.toggle("flip");` With `this` you are getting ( as [Wes Bos](https://wesbos.com/) so well explained its) what is on the left of the dot of the method you are calling. In this case `this` is each of the cards we are lopping.
With the toggle function, we make sure that, by clicking on the cards the class will be added and remove with every click

Let' see it in action:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="PoZjjEy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flip cards-  With flip">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/PoZjjEy">
  Flip cards-  With flip</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


It's working right? And that it's all you need to create a flip card with just few lines of javascript. Now we only need to add media queries for screens bigger than mobile. Once again, like I did in the last post I will use the min width as 768px:

```css
@media (min-width: 768px) {
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    position: relative;
    perspective: 1000px;
    align-items: stretch;
  }

  .cards__single {
    width: 20%;
  }
}
```

What we did here is that the cards will display in a row, because the screen is bigger so the cards will fit nicer side by side. I also gave a width of 20% to each card. 
Please play around with the code because that is one of the best way to learn and if you want make your own version and share it if you feel like it.  

Some useful links that help and have more info about this subject:

* [Tab Index - Acessibility ](https://webaim.org/techniques/keyboard/tabindex)
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)
* [Backface-visibility](https://css-tricks.com/almanac/properties/b/backface-visibility/)
* [Backface-visibility MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)
* [Toggle in Javascript](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)

