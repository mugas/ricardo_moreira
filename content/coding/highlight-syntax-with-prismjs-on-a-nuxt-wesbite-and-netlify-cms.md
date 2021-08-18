---
type: Small Tips
language: nuxtjs
title: Prismjs + Nuxt
summary: An easy way to highlight syntax when writing code snippets is using
  Prismjs, a great syntax highlighter.
date: 2021-03-11T08:36:01.543Z
update: 2021-03-11T08:36:01.640Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1615452275/prismjs_moikmw.png
---
This website is an ongoing project. It's not perfect, and it never will be; in fact, as you search the website you will see many things that you might see me [advocate](https://twitter.com/mugas11/status/1367772956533915648?s=20) that I am not doing on the website.

I know it might seem an easy way out, but the fact is that I want to upgrade the website as I upgrade myself, so I want to share when I update the website with something new. Like that, I learn better, get documented and hopefully, it helps someone in the future. 

So expect many posts about things I did on this website. 

Today it will be about code snippets and their highlight while writing for example a code post. 

When I created this website and started to write code posts I realize that the code was not highlighted and would not look good.

The best solution was adding [Prismjs](https://prismjs.com/) and after some fast search was easy to implement.

So let's do it:

First, we install Prismjs:

```js
npm install --save prismjs clipboard
```

Then in the file `nuxt.config.js` add the plugin:

```js
  plugins: [{ src: '~/plugins/prism' }]
```

After that go to your plugin folder in Nuxt and create a file named  `prism.js`. Open it and write this code:

```js
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css' // You can add other themes if you want
export default Prism
```

There are many options besides the ones above, but there are the basics to make it work.

So now Prism is installed and we informed Nuxt about it we just need to add it to the page we need, normally `_slug.vue`

```js
<script>
import Prism from '~/plugins/prism'
mounted() {
    Prism.highlightAll()
}
```

And that is all. With a few steps, you have nice highlights on your blog page.
If you like this post, feel free to follow me on [Twitter](https://twitter.com/mugas11/) and send me a message in case you have any doubt about this post 😊