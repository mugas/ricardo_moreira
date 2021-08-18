---
type: css3
language: css3
title: "Create a image gallery "
summary: Using Grid and Flexbox - First I need to say that this is not my newest
  project, but 2019 for a couple of reasons I didn't code so much as I wanted,
  so now that I am back again and I feel more confident with it than before, I
  decided to refactor all my projects, give them a clean face, and post about
  them. If it helps me, it might help you.
date: 2020-05-28T06:09:45.904Z
update: 2021-02-02T07:09:45.942Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1590665493/imagegallery_iwjmq5.png
---
First I need to say that this is not my newest project, but 2019 for a couple of reasons I didn't code so much as I wanted, so now that I am back again and I feel more confident with it than before, I decided to refactor all my projects, give them a clean face, and post about them. If it helps me, it might help you.

So this was my first one 2 years ago. It started as a simple image gallery based on a tutorial, there was no flexbox involved and only the gallery had css grid. In the time I changed a bit, not much styling, but I did add some flexbox and grid.\
But honestly in that time was basically almost seeing others people code, and copy paste to mine. I understood some things, but left many to be understood and pass to my next project. My goal in the time was to get a job in coding, and I thought that the more projects the better.\
As you might realized, I did some mistakes in my evaluation but luckily I learn with them and now the goal didn't change but my approach did. So I keep learning and really try to understand everything I am doing.

So because this was my first project, would be the first to be refactored. What were my goals?

* Add FlexBox and css grid not only to the gallery but also to the navbar and footer
* Create the website with mobile first approach.
* Add more accessibility to the website( not only alt text in the images)
* Use Block Element Modifier ( BEM) to name my classes in CSS
* Add a more clean style and create a color pallet to be used along my projects

So less talk and more code.

If you want to see the code right away, jump to video or final project, follow the links above. If you want a more detail explanation, continues reading under.


## Links

* [Project page](https://goodstuffoodsgallery.netlify.app/)
* [GitHub page](https://github.com/mugas/Image-Gallery)
* [Code Pen](https://codepen.io/collection/nmpBGo)
* [Video](https://www.youtube.com/watch?v=URXj6jZeCz0)




So the approach that I wanted to achieve was to build it mobile first. So what that means? That you build your website made for mobiles and then use media queries( not necessary but it was what I used) for bigger screens. **Why mobile first?** Before I start using that approach I was totally not confident, mostly because I didn't knew what and how to use it. But think like this, most of the websites you access them in your mobile right? So why not create a great first experience in the mobile. If your possible new customer goes to your mobile website and something looks a bit...off, you might loose a opportunity to get a new customer.

Also other reason, after you understand the concept it becomes more easier like this than create for desktop and then go change to mobile.

# [](https://dev.to/mugas/create-a-image-gallery-with-css-grid-and-flebox-4o2m-temp-slug-8709699/edit#the-navbar)The Navbar

So first let's create out navbar in html

```html
<nav class="navbar">
        <div aria-labelledby="navigation-menu">
            <ul class="navbar__navigation">

                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#" target="_blank">Products</a>
                </li>
                <li>
                    <a href="#" target="_blank">Contact</a>
                </li>
            </ul>
        </div>
        <div class="navbar__social-media">
            <ul class="navbar__links">
                <i class="fab fa-twitter "><a aria-label="twitter" href="#"></a></i>
                <i class="fab fa-linkedin"><a aria-label="linkedin" href="#"></a></i>
                <i class="fab fa-github"><a aria-label="github" href="#"></a></i>
            </ul>
        </div>
    </nav>
```
So what we have here? First I wrote my css with <b>BEM</b> methodology. It is not necessary to use for small projects(and this one is a small one), but for bigger projects where you have many class names it makes easier to understand where they came and what they represent.I just used it here, because I am learning it myself, so the best way to learn it is to use it and so here it is. Please BEM supporters and experts, feel free to comment with something that can be improved;) I appreciate it.
Giving just a small explanation, you give a class name for a <b>block</b> element. In this case the navbar we give the class `class="navbar"`. Then every element inside that block you give a class with the same class name of the block and add `__othername`. So here I have the navbar and inside we have a div where we give the class `navbar__navigation`.
And so it goes to all other elements inside that block.
Now imagine that you have a link that has a class that becomes active "on click", in that case that element has the name of modifier and the class will have the name like `navbar--classname `. Please notice that even the link is inside the navigation element, the class name will be the block element plus the ``` --classname ```.
In the link there are some examples for you to understand more and leave some comment if you want that I do deeper in that in some future post.

Back to the navbar, inside of it we have 2 divs. One where are the links of the page, and other where are are the social media links.
Inside of the first div, we put an unordered list with all the links we want and in the second div, another unordered list where we have the links( I used the [FontAwesome](https://fontawesome.com/) icons.
This is how it looks:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="WNQWmqm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Image Gallery - Nav bar   no css">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/WNQWmqm">
  Image Gallery - Nav bar   no css</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

So let's start add some "color" to it.
Because we want to build it mobile first, we want that our divs inside the navbar are one on top of the other and when it goes to desktop size, that they go side by side.So:

```css

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
}
```

We display flex to the all navbar and put direction column ( by default it goes row). So that mean that the flex was given to the children of the element that in this case are the divs. And just like this they are on top of each other.
Let's also add align the items to center and give them some space with ``` justify-content: space-between ```
Let's now take care of the list elements and links:

```css

ul {
  list-style: none;
  margin: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: #c8882d;
  font-size: 18px;
  font-family: Lora;
}
```
You can play with the styles after, the most important thing here to retain is that was also applied the flex to the list, in the mobile first approach and that is for them to display along the x axis.
For the links we also used flex:

 ```css
.navbar__social-media {
  display: flex;
  justify-content: space-between;
}
.navbar__links i {
  margin: 0px;
  color: #c8882d;
  font-size: 18px;
}
.navbar__links i:hover {
  border-bottom: 1px #20263f solid;
}

.navigation li:hover {
  background-color: #20263f;
}
```
Besides that we had some color on hover and some spacing. 
Here is the result: 

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="OJyGGWd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Image gallery - Navbar with css">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/OJyGGWd">
  Image gallery - Navbar with css</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

What you might have realized is that if you see it in full screen, nothing changes. Even that it doesn't look bad we said that we wanted to put the divs inside of the navbar, side by side.
So we could made many media queries for different mobiles and desktops but I will keep it simple and just going to add one that is for the tablet. So we want that when it reaches the minimum width of 768px ( tablet size), the divs start going side by side and stayed like this, no matter how big is the screen

```CSS
@media (min-width: 768px) {
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    align-content: flex-start;
  }
  .navbar__links i {
    margin: 0px;
    color: #c8882d;
    font-size: 25px;
  }
  a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: #c8882d;
    font-size: 25px;
    font-family: Lora;
  }
}
```
So what is happening here? 
If you never did any media queries I try to explain. Media queries are modules that make the render of your page different for different sizes of the screen. And how you do it? just by adding ``` @media( "the size you want")```
So in this case we use the ```min-width: 768px``` because we want that till that size, it all keeps the same but after we want some changes.
And what are the changes? Most important is the display as flex in the navbar but with direction of row. Then to look it better I align the items to baseline, so that the links are in the same link and the icons( because they have different size, they would be not aligned). Also for the links and icons I gave some padding and add some font-size to look it bigger.

Here is the final result of the navbar. Feel free to put it bigger and small to see the changes.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="mugas" data-slug-hash="GRpLLza" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Image Gallery - Css and Media Queries">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/GRpLLza">
  Image Gallery - Css and Media Queries</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

So navbar is done, let's start our image gallery.
I also have the title and add some animation to it, but because it was not the main point of this tutorial, I will not explain it here even that it is on the final example and also in the last codepen and my Github and video.
So this is our html looks like with our gallery:

# Image Gallery

```HTML
<section class="container">
       
        <div>
            <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="First description" />
            <span class="description">First description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Second description">
            <span class="description">Second description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third description">
            <span class="description">Third description
            </span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Fourth description">
            <span class="description">Fourth description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Fifth description">
            <span class="description">Fifth description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Sixth description">
            <span class="description">Sixth description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Seventh description">
            <span class="description">Seventh description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Eighth description">
            <span class="description">Eighth description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Ninth description">
            <span class="description">Ninth description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Tenth description">
            <span class="description">Tenth description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Eleventh description">
            <span class="description">Eleventh description</span>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Twelfth description">
            <span class="description">Twelfth description</span>
        </div>
    </section>

```

This seems a long code of html, but it's repeated for different pictures. Focus on this:

```HTML
<section class="container">
        <div>
            <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="First description" />
            <span class="description">First description</span>
        </div>
</section>
```


Then its a repetition of the divs with different images. So what we have here? All images are inside a section that has a class of <i>container</i> and it is where we going to apply our grid system. Then inside the section we put a div, and inside that div will be an image( I used links from [unsplash](https://unsplash.com/)).Also we add a span where we will add a text to be on each image on hover:)

This is how it looks like it:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="zYvXXQp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Image gallery - with images no css">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/zYvXXQp">
  Image gallery - with images no css</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
 
Not that pretty right? Let's think what we want to achieve.
For this example we have already the images on our html. But Imagine that you don't know how many images you are going to have, or that you want to add more and more images every time? You don't want to go change the css every time to make the gallery always looks the same right?
For that reason and others, CSS Grid is a great choice.
So let's start
```css
.container {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
 
}
```
To use css grid you only have to give to the container the display property of grid. Then we also add a gap of 40px from each div. The real magic happens with the property `grid-template-rows`. Here we use the `auto-fit` and `minmax` that it alouds to create as many columns as necessary, being responsive and because of that we don't need to write media queries, because it adapts to every screen.
So the `repeat` as the name says, allows to repeat the columns as you need. Say you want to create 8 columns you can write `grid-template-columns: repeat(8, 1fr)`. Like this CSS will create 8 columns with the same size(1fr). But we don't want this. We want that depending of the div that we have, that more or less columns are added. We can then achieve that with ` auto-fit`. Like the name says, it will fit them automatically. Then we set a `minmax` that we want for the minimum and the max of the column.
Because we want to achieve square picture we add also a size for the rows.
But it stills looks a bit off and that's mostly because we have to set the image to fit on the div.

```css
.container > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img {
  border-radius: 10px;
  padding: 5px;
}
```

Like this we set the image to fit 100% of the div and we can see that our gap in our grid is working fine. 
So now let's take care of our text. Now it's under the image, but we want to show up only on hovering the image.

```css
.description {
  display: none;
  position: absolute;
}
```
And like this there is no text anymore. So let's add the style when hovering.The style we are going to add it to the div.

```css
.container > div:hover {
  transform: scale(1.1);
}
.container > div:hover .description {
  display: block;
  text-align: center;
}

.container > div:hover img {
  opacity: 0.7;
}
```

It works right? Not yet. Yes when you hover the text show up and the image scales up, but we want the text to show in the middle of the picture...
What if we add some flexbox to it?

```css
.container > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #20263f;
}
```
Like this we set the div inside the container as flex, we add some font size and justify the text and you have a pretty text showing up when hovering

Here is the result:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="xxweNVa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Image gallery  - images with css">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/xxweNVa">
  Image gallery  - images with css</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Now we only need the footer:

# Footer

```html
   <footer class="footer">
        <h2 class="footer__tagline-title">
            Good Stuff - <span class="footer__tagline">If it's good it's here</span> by
            <span>Ricardo Moreira</span>
        </h2>
    </footer>
```
Basically here, we just want to achieve that is centered and responsive and we can do that with few css

```css
/*Footer*/
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
}

.footer__tagline-title {
  color: #20263f;
  font-size: 18px;
  font-family: Lora;
}

.footer__tagline {
  font-style: italic;
  color: #c8882d;
}
```

The most important thing here is we set the flex for the footer with the display as column to everything to go in the same line.

Here we have our full page:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="mugas" data-slug-hash="gOaJeMm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Image Gallery - Final">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/gOaJeMm">
  Image Gallery - Final</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<b>Acessibility</b>

Acessibility is more and more important every day and many websites and applications are prepared to be accessible with screen reader and/or keyboard.
I am still on the beginning of understanding and putting in practice into a website to be accessible but one part of my refactoring is exactly so I just have to keep pushing.

So what I did here? In the navbar I set it to a `navbar`. Why use div when you can use html elements? With the element navbar, a screen reader can easily access the navbar and identify it as one. Of course that you can achieve that with a div and give it a [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) of navbar, but if we have the html elements, it's best practice to use it.
For example with the icons, the screen reader didn't read them as which icons they are precisely, but we can achieve this give each one of them an `aria-label` of the name we want to name it. 
There is much more we can do to make the websites more accessible, this was just a small part.The more I will learn about it, the more i will use it in my projects/websites.


So that was it. I hope you liked it and feel free to leave your comment below about something or anything. Below are some useful links about this tutorial where you can learn more:

* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)
* [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
* [Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
