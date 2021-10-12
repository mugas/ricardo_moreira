---
type: Small Tips
language: nuxtjs
title: Failed do login in Netlify CMS website
summary: Have you ever been unable to log in to your website admin in Neltilfy
  CMS? Could be that you lost the password or you just don't remember. Then you
  reset the password but it seems the link they sent is not working... There is
  a fix for that
date: October 12, 2021
update: October 12, 2021
author: Ricardo Moreira
thumbnail: https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80
---
This was not my first time. I don't know if I lost the password or I changed it in the past and didn't update it, the truth is that I try to login into my website admin and nothing seems to work.

Then the case get's more strange when I reset the password but the email that is sent to me to reset it opens my website with a token as a link.

To add an extra layer to this small challenge my two months computer just died basically and nothing inside was salved. Why does this matter?

Because during those 2 months I changed some backends of my website and end up creating a new one with the front end that I add.

So I think that in the middle of that, I had lost some pieces of info here and there.

So let's talk about solutions.

After some search on our old friend Google, I end up in this [thread](https://spectrum.chat/academic/help/unable-to-get-netlify-cms-to-work~3c8d0e90-a283-46e4-b572-714dac6e2bdd) that leads to [here](https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget). Then I remember that I did in fact put on my header the code that is mention there.

So first thing you have to do is include in the header of your website this script:



```js
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

After that, I realized that nothing was working still as the recovery email was still sending me to my website. 

The thread says that we need more steps but then I start to remember, I did this before but not from here but from the [snippet injection](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/). How does this work? 

First, go to the Netlify website, and inside the dashboard of your website in Netlify go to **Site Settings -> Build & Deploy.** Scroll till you find Snippet Injection and add snippet and chose insert before the body. Past this code:



```js
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```



And just like that, when you press again the link to recover the email it directs you to the page where you can change your password. Happy days. This widget basically is what sends the information from the backend to the frontend about your token and identity.

And that's all. You are back on your admin page again. If you want more tips about code and productivity, or read about the products I am [launching](https://bizbox.club/) follow me on [Twitter](https://twitter.com/moreira_creates) where I keep posting and updated almost daily.