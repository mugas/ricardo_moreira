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
Last year and a half I've been away from coding for many reasons. I started to get more deep into marketing and Nocode solutions, I jump in into the build-in public movement and Indie Hackers that let me start creating my first [product](https://bizbox.club/) ( Come out in the next month). Before the product came out of course I end up creating the [newsletter ](https://www.getrevue.co/profile/bixbox)that supports it.

So I've been busy but not so directed into code. Since the end of last year, I end up again strong in code as many products I want to launch are code-related to some extent. So I started small and revising HTML and CSS.

This time I promise myself that I will share everything I learn and also create more small projects.

After I look again at the forms knew that I had to do something to it and the idea came fast.

A search page where you can search more than one page in the same place.

I believe it's not original and I know it's a simple HTML and CSS but sure was fun to put it out there.

So let's dig in

## Links

* [Project page](https://searchall.netlify.app/)
* [GitHub pag](https://github.com/mugas/SearchMe)e
* [Code Pen](https://codepen.io/mugas/pen/MWEXgWE)



This tutorial is going to be quite fast as I will only try to focus on the get the info from every site.

So our HTML is divided into header, main, and footer. In the footer, I used[ font-awesome cdn ](https://cdnjs.com/libraries/font-awesome)to put the icons. Get in [touch ](https://twitter.com/moreira_creates)if you have problems setting the icons.

In our header :



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

Then we end up with the main. I go into detail, what I did in one and then the rest of them are pretty much the same.
This is our HTML for the form for Google:

```html
 <form action="https://www.google.com/search" target="_blank">
                <label for="google" class="label">Google</label>
                </br>
                <input type="text" name="q" id="google" placeholder="Search Google">
                


</form>
```

So a search bar is a simple form with an input. So we create a form and set an input with the **type text** were we going to write our search. Whenever you write a form you have to give some action to that form, i.e. you have to inform where you are going to send the data that you are writing.

So in this case, was Google so where do I get that address?

If you do any search in Google and you see the URL you realized that is always what is written on the form *https://www.google.com/search.* Then is the search text. So by writing the URL there, then your search ( that it will be your input is the search that Google is going to make)

Also, I add `target="_blank" to open a new page.

And like that, it's done. Now I just had to figure out also the search URL for the other sites.

The process is simple. Go to the website and do a search, after copying the URL without the search terms. Then you copy the URL to the action of the form.

It's done. You can use it now without going to a different website.

Hope you find it useful and like it.

You can follow [me](https://twitter.com/moreira_creates) on Twitter where I talk about coding, business, and the projects I am creating.