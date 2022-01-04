---
type: Tutorials
language: html
title: One search bar to rule them all
summary: You know when you want to search something on Google, then also jump to
  Youtube to do some other search and end up on Facebook to search your new
  friend? You are jumping over pages and app. What if you could do all in one
  place?
date: January 4, 2022
update: January 4, 2022
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1641331765/screenshot_gaybmt.png
---
Last year and half I've been away from coding for many reasons. I started get more deep in marketing and Nocode solutions, I jump in into the build in public movement and Indie Hackers that let me to start creating my first [product](https://bizbox.club/) ( Come out in the next month). Before the product came out of course I end up creating the [newsletter ](https://www.getrevue.co/profile/bixbox)that supports it.

So I've been busy but no so directed into code. Since end of last year I end up again strong in code as many products I want to launch are code related to some extent.  So I started small and revising html and css.

This time I promisse myself that I will share everything I learn and also create more small projects.

After I look again to the formsI knew that I had to do something to it and the idea came fast.

A search page where you can search more than one page on the same place.

I believe it's not original and I know it's a simple html and css but sure was funny to put it out there.

So let's dig in

## Links

* [Project page](https://tyo.netlify.app/)
* [GitHub pag](https://github.com/mugas/SearchMe)e
* [Code Pen](https://codepen.io/mugas/pen/MWEXgWE)

This tutorial is going to be quite fast as I will only try to focus on the get the info from every site.

So our html is divided with `header`, `main` and `footer`. In the footer I used[ font-awesome cdn ](https://cdnjs.com/libraries/font-awesome)to put the icons. Get in [touch ](https://twitter.com/moreira_creates)if you have problems setting the icons.

In our `header :`

```html
<header>
        <h1>Your search starts here!</h1>
</header>
```

So our footer goes :

```html
 <footer class="footer">
        <section>
            <p class="name">Made with ❤️ by Ricardo Moreira </p>

        </section>
        <nav>
            <ul class="social-media">
                <li class="my-social-media">
                    <a href="https://twitter.com/moreira_creates" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="my-social-media">
                    <a href="https://www.instagram.com/gs_codes/" target="_blank" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li class="my-social-media">
                    <a href="https://github.com/mugas" target="_blank" aria-label="Github">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li class="my-social-media">
                    <a href="https://www.linkedin.com/in/ricardodmoreira/" target="_blank" aria-label="Linkedin">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li class="my-social-media">
                    <a href="https://ricardomoreira.io/" target="_blank" aria-label="website ">
                        <i class="fas fa-globe"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
```

Then we end up with the main. I go in detail, what I did in one and then the rest of them are pretty much the same.

This is our html for the form for Google:

```html
 <form action="https://www.google.com/search" target="_blank">
                <label for="google" class="label">Google</label>
                </br>
                <input type="text" name="q" id="google" placeholder="Search Google">
                


</form>
```

So a search bar is a simple form with a input. So we create a form and set a input with the **type text** where we going to write our search.  Whenever you write a form you have to give some action to that form, i.e. you have to inform where you are going to send the data that you are writing.

So in this case, was Google so where do I get that adress?