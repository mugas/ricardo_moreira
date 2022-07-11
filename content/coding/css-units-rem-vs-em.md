---
type: css3
language: css3
title: CSS Units - rem vs em
summary: >
  When working with CSS, getting to know the difference of rem and em, and when
  to use each one of them can be challenging. Hopefully this post helps someone
  like others helped me.
date: July 8, 2022
update: July 8, 2022
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1657295191/cssunit_urian9.png
---
## CSS Relative UNITS – EMS vs REMS

When using CSS, units are something you deal with every time. The question is which one should you use and when and for what.

I will not focus in this post on absolute length units (pixels, cm, and others) but the relative units.
Relative units are like the name suggests relative to something. Relative to what is important.
There are many relative units, but probably the most used are VW and VH which correspond to viewport width and height respectively, and em and rems that is what I am going to talk about (write?) here today.

Spoiler alert, EM is relative to the parent(or element), and REM relative to the root element

### **Em units**


So when you use em, you need to know that em can be related to the font size of the parent, if we are talking about typography but can be related to the font size of the element if you are talking for example of margin or width. 

So let’s go to an example:



![](https://res.cloudinary.com/mugas/image/upload/v1657295658/Picture2_drpiqg.png)



```html
<div class="second-box">
  <h1>First box</h1>
 </div>
 <div class="box">
   <h1>Second box</h1>
 </div>
```

```css
.box {
    border: 3px solid orange;
    width: 50%;
    margin: 0 auto;
    font-size: 15px;
    margin-bottom: 2%;
}

h1 {
    text-align: center;
    font-size: 2em;
    /* margin-left: 2em; */

}

body {
    font-size: 10px;
}
```


I created a box with an h1 outside the box and an h1 outside the box. Both of them have the same font-size: 2em, but as you can see, they are different sizes. Why is that?
I defined the body to have a font size of 10 px, while the font size of the box is 15px. Therefore the 2 em are relative to the font size of each parent respectively.  So it ends up that the font size of the h1 outside of the box is 20px, while the one inside the box is 30px.


What about if we are talking about with or margins?
Another example :



![Text with different margins](https://res.cloudinary.com/mugas/image/upload/v1657523315/cssunits_x5rlhn.png)



```css

.second-box {
    border: 3px solid orange;
    width: 50%;
    margin: 0 auto;
    font-size: 10px;
    margin-bottom: 2%;
}


h1 {
    text-align: left;
    font-size: 2em;
    margin-left: 2em;

}
```


To be more clear ( I hope) I put each text in one box. I kept the same font size then as before and both justified left. Then I gave the h1 a margin-left of 2em. As you see in the image, the second box text has a much bigger margin than the first one and that is because the margin is relative to the font size of the element. 
I hope it makes sense to you. For me at least is the type of example that made me understand better this unit.

So let’s go to rem.



### **Rem Units**

```css

h1 {
    text-align: left;
    font-size: 2rem;


}
```

![Text using rem units](https://res.cloudinary.com/mugas/image/upload/v1657523609/cssunits_1_oqs4lr.png)




With rem, is in a way more straightforward, as is always relative to the font size of the root.
So keeping with the same example, with rem the only difference that I did was to give the body font size, each box has its own. Then I changed the font size of the h1 from em to rem.
Just like that both the margin and the font size are now the same on both boxes as with rem is relative to the root. Doesn’t matter what font you put in the box if the h1 has rem font size and that is relative to the font size of the root.

**When to use one or the other?**


That all depends on what you are comfortable with and understand better.
With rem is easier to plan your website or project easily as everything is related to the root element.
With em, especially in the beginning might be tricky to make it work the way you want when adding different viewports.
Besides that, I believe that both are good options to try and play around with.

This is the first of 3 posts on small topics of CSS, so follow for more if you are interested.