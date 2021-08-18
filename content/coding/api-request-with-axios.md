---
type: js
language: js
title: API request with Axios
summary: "Make a get request from Nasa API - Make a get request from Nasa API.
  But I know(at least for me) when you start working/learning them it seems a
  totally new world on top of the Javascript( in our case) world. "
date: 2020-07-27T06:14:52.159Z
update: 2021-02-02T07:14:52.331Z
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1595401324/nasaapi_lgixoe.png
---
Working with Apis can be a challenge but it's for sure something you want to work on and learn. 

But I know(at least for me) when you start working/learning them it seems a total new world in top on the Javascript( in our case) world. There are so many APIs, some free, other no, some require some key others don't. Then how you get the data? You can go with Axios or fetch... So many options and way to do it that when you start you don't know where to start.

**So let's get a small win.**  

I will go back in the future to API with a full explanation of how to work with them, and all options. but for the sake of this post we only going to do some get requests and render them on the page using Axios. We do all that using [Nasa Api](https://api.nasa.gov/)

So this is what we will cover in this posts:

* What is an API
* Why Axios
* Make a get request
* Render the data in the page
* Hide Api keys

So ready to go to moon and back?

## Links

* [Project page](https://nasaapiaxios.netlify.app/)
* [GitHub page](https://github.com/mugas/Blog-Post/tree/master/Nasa%20API)
* [Code Pen](https://codepen.io/collection/AdQGRM)


## **What is an API?**

API stands for Application Programming Interface and can be defined as what let's one application talk with another application.

So keeping it simple any type you share something from one site (app) to another you are in someway using an app. You have your website and want to display there all your posts in some social media app. How you do that? Yes with an API. Many of those API follow a set of rules that make them REST API. **REST** stands for Representational State Transfer and these are some of the "rules" that make an API a REST API:

1. Client Server Based
2. Statelessness
3. Layered System
4. Caching
5. Uniform Design
6. Code on Demand

We will not focus on each point but the idea is the API can be accessed by a url, and in that url is data that you can access. Most of the times that data returns in JSON (not always), but we go more on that in a moment. 

All around internet there are many companies, websites, governments that have their data available for you to access and they do that in an API and that's exactly what we are going to do.  There are many APIs in Nasa  API [website](https://api.nasa.gov/).
For this tutorial we are going to get the Image of the day and the weather from Mars, in case you are thinking to go there on vacations some day.

## **Why Axios?**

So you might have heard that you need to make a request to get the API and that request can be made with `fetch` or `axios` for example.
Both of them can make a http request, but with fetch, you have to transform the JSON data and with Axios you don't need.Also axios is more well supported even in old browsers but can be easily be done with fetch.
To start running and see something done when you dive in the world of APIs, axios is a good way to start and we are going to use it.
Ready? Let's start.

Create 3 files `style.css, app.js and index.html`

To start using the Axios you can use it via cdn:

```js
https://unpkg.com/axios/dist/axios.min.js
```

Just put that in your html down in the body 

To focus only on the API, I will skip the CSS explanation (the code will be available of course) . Normally you could run this in your browser locally but because it's an API you better running in the server. The easiest and best way is using [Parcel](https://parceljs.org/) - A web application bundler.

To use Parcel:

Yarn - `yarn global add parcel-bundle`
Npm - `npm install -g parcel-bundler`

After is installed, open your *package.json* file and inside the scripts, delete the code that is there and write:

```js
 "scripts": {
    "start": "parcel index.html"
  }
```

Then every time you have to run your code, open the terminal and run `npm run start`. It should open on localhost:1234, the page.

**Note:** If when you try to run, the console returns a error `regeneratorruntime not defined`, go to your app.js file and write `import regeneratorRuntime from "regenerator-runtime"`.

## **Make a get request**

To make a get request with axios we use the following syntax:

```js
axios.get("url")
.then(function (response){
console.log(response)
;
})
.catch(function(error){
console.log(error);
});
```

This can be a mouthfull if you are starting with JS or API so I try to break it down. Axios returns a promise and the way we can deal with promises is with `then`and `catch`. With the first one in case the request has been successful, "then" you get a response. If by any chance there is some error in the promise( promise is rejected) we can "catch" the error.

Now let's get the data and render in on the page

Our html

```html
<section id="control-center">
      <h1 class="control-center__title">Nasa Image of the day</h1>
      <h2 class="picture-name"></h2>
      <figure class="daily-image">
        <figcaption></figcaption>
      </figure>
      <h3 class="mars__title">Weather in Mars</h3>
      <section class="mars__container">
        <div class="mars__today">
          <div class="mars__today-data">
            <span class="mars__info">Mars today</span>
            <br />
          </div>
          <button id="btn__today">Today Mars Weather</button>
        </div>
        <div class="mars__tomorrow">
          <div class="mars__tomorrow-data">
            <span class="mars__info">Mars tomorrow </span>
            <br />
          </div>
          <button id="btn__tomorrow">Tomorrow Mars weather</button>
        </div>
        <div class="mars__info">
          <div class="mars__info-data">
            <span class="mars__info">Mars in 2 days</span>
            <br />
          </div>
          <button id="btn__nextDay">Mars in two days</button>
        </div>
      </section>
      <p class="mars-weather"></p>
    </section>
```

Our CSS

```css
body {
  background: #eceee5;
}

.control-center__title,
.mars__title {
  color: #a64e43;
  text-align: center;
  font-family: cursive;
  font-size: 50px;
  margin: 0;
}

img {
  width: 90%;
  height: 400px;
  border-radius: 40px;
}

.picture-name {
  text-align: center;
  color: #6a7b9c;
}

.daily-image {
  text-align: center;
}

button {
  box-shadow: 0px 10px 14px -7px #20263f;
  background: linear-gradient(to bottom, #7720263f b55a 5%, #72b352 100%);
  background-color: #20263f;
  border-radius: 4px;
  border: 1px solid #6a7b9c;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  padding: 10px 21px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #6a7b9c;
}

.mars__container {
  display: flex;
  justify-content: space-around;
}

.mars__info {
  color: #20263f;
  font-size: bold;
}

.mars__today-data,
.mars__tomorrow-data,
.mars__info-data {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #a64e43;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
}

.mars__today,
.mars__tomorrow,
.mars__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

And this is what we end up with:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="mugas" data-slug-hash="WNrPWgg" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nasa Api -No js">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/WNrPWgg">
  Nasa Api -No js</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Great, the page is done, let's put our API data there.

In the Nasa [API](https://api.nasa.gov/) scroll down to *Browse APIs* and press on the first one : **APOD - Astronomy Picture of the Day** and there is the code for the `get request`.

So with the syntax we saw on top let's create our first request in javascript:

```js
const apiPicOfTheDay = axios.get("https://api.nasa.gov/planetary/apod?").then((response) =>{
  console.log(response)
}).catch((err)=>{
  console.log(err)
})

console.log(apiPicOfTheDay)
```

If you are doing this in code pen you might have to use the browser console to see, but it we can't see any data right?In fact it returns an error 403(Forbidden). That is most likely because we didn't add any parameters, for example the API_Key. 
Api_Key is what gives you access to the API. Some APIs don't need any key, other need but are free, others you have to pay for it. The most important part is Never give your API_key to no one or let it visible( we will cover that in the end of the tutorial).
This API in particularly needs a demo API_key. If you see in the page of the API we have the query parameters we can use and also there is an example query. There you can see that the http request, has the API_key in front. 

But what if we don't want to put in front of the request like it is on the example?
We only need to add it to the parameters like this:

```js
const apiPicOfTheDay = axios.get("https://api.nasa.gov/planetary/apod?", {
  params: {
    api_key: "DEMO_KEY",
  },
});
```

I create a variable named `apiPicOfTheDay`. Like this we can use it again without writing the request again.

Let' see if this now works:

```js
const getImageOfTheDay = () => {
  apiPicOfTheDay
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
    console.log(err)
   })
}

console.log(getImageOfTheDay());
```

If you check the console now you have an object. Inside that object there are many properties. Press the one it says data. You see it? There there is the data of this API, including the date, and the url of the image.
But we don't need all this info. We only want the title of the image and the image it self.

```js
const getImageOfTheDay = () => {
  apiPicOfTheDay
    .then((response)=>{
      console.log(response.data.hdurl)
      console.log(response.data.title)
    })
    .catch((err)=>{
    console.log(err)
   })
}

console.log(getImageOfTheDay());
```

And there we have our information that we request. And you also can see in the console of the http request that the status of the promise is Fulfilled, meaning that the request was successful.

We only need now to render this data on the page. Let's do it. 
Below the code pen of the project till now

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="mugas" data-slug-hash="mdVvYqG" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nasa API in the console">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/mdVvYqG">
  Nasa API in the console</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## **Render the data in the page**

Now let see that image on the page. This part is not so much API related but I think it's important that not only you see how to retrieve the data on an API but also how can you put in on the page.

So look back to your html and we see there is an `h2` with a class named `picture-name` and there is where we want the title of our image.Also there is inside the `<figure>` the class `daily-image` that it will be where we are going to put our image. Let's grab them in our js file:

```js
const pictureName = document.querySelector(".picture-name");
const imageOfTheDay = document.querySelector(".daily-image");
```

We are going to use the method `insertAdjacentHTML`to render the data.

```js
const getImageOfTheDay = () => {
  apiPicOfTheDay
    .then((response) => {
      imageOfTheDay.insertAdjacentHTML(
        "beforeend",
        `<img src=${response.data.hdurl}>`
      );
      pictureName.insertAdjacentHTML("beforeend", `${response.data.title}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

getImageOfTheDay();
```

With the `imageOfTheDay` it's where we want the picture. We add the method `insertAdjacentHTML`. This method takes 2 arguments: the position and the text you want to insert. 
The positions available are : 'beforebegin', 'afterbegin', 'beforeend','afterend'. Let's choose the `beforeend`. Then for text we use template literals. Because we want an image, we put the image tag and as source the data we want to request from the API `${response.data.hdurl}`.
For the title, it's the same method, but bit simpler because we don't need to pass any image tag.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="mugas" data-slug-hash="yLewoej" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nasa Api - Image of the day">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/yLewoej">
  Nasa Api - Image of the day</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Congrats we just use successfully the Nasa API and render it on the page!

Another example you say? Ok, so you are planning to travel and want to see if the weather in Mars is ok( spoiler alert: it's not). Let's retrieve that data from the API.

Head back to the Nasa API webpage and now let's choose the **Insight** API - **Mars Weather Service API.**

Now we feel more comfortable with working with APIs we know where to start. First let's get the http request and store it in a variable.

```js
const apiMarsWeather = axios.get("https://api.nasa.gov/insight_weather/", {
  params: {
    api_key: "DEMO_KEY",
    version: "1.0",
    feedtype: "json",
  },
});
```

`ApiMarsWeather`is the name we gave to the variable and then we get the url and set the parameters like it is on the page.
Besides this info on the page there is also the link to [here](https://api.nasa.gov/insight_weather/) where you can get more info about the API and how to retrive data.
But let's keep our working flow, like we did before. So now we have the request stored in a variable, let's try to get a response to see what happens:

```js
const getTodayWeather = () => {
  apiMarsWeather
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

getTodayWeather();
```

Here it is! But what is? Yes we see the data in the console,much more actually but it seems more challenging to get it...or not?
First let's try to understand the data that is given and for that let's go for the link that I showed you before and for some space knowledge.

In the first paragraphs we learn that the API takes different measurements like temperature, wind and pressure from Mars. The data is provided per Sol( meaning one Sol is one day, and in Mars a full year takes 687 days in Earth). So the numbers you see: 582,583,etc are days. Inside the numbers we have the AT, Hws, Pre and Wd that represent the measurements. So we want the average temperature in the day. In our case we going to retrieve the average temperature for today, tomorrow and the following day. In the documentation we also learn that the data corresponds to 7 days of the week.

Let's try to console this:

```js
const getTodayWeather = () => {
  apiMarsWeather
    .then((response) => {
console.log(response);
console.log(response.data)
console.log(typeof(response.data)) 
})
    .catch((err) => {
      console.log(err);
    });
};

getTodayWeather();
```

In the first we get the response of the API, in the second, we have the data of the API, in the third we check what is that data and it comes as an object. But inside that object, we have and array with 7 elements( one for each day). And what is the data we want?
We want the average temperature(av/At) for the first 3 days.How we get that?

```js
console.log(response.data[582])
console.log(response.data[582].AT.av);
```

Just a **important** side note: Why I consoled 582,583 ?  When you are seeing this tutorial and are doing this, the numbers not going to be this, because the numbers are the days, so you are doing this in a different day it will show up different days there. 
So when I wrote `console.log(response.data[582])` you have to write the number of the day that it will show up in the console.

Back to code: with the last console not only we access the data of one day, but also we can see the temperature we need for the day in question. Great! Or is it? Unless you want to change the API everyday to the day that you need, you only have the data in the first day. Because today the first element(index 0 of the array) of the array in 582 (see note above), but tomorrow the first element is going to be 583, so our code will come empty.
One way to get the property of each object is with the method `Object.values`. This method returns an array of the properties of the object.
How can we use it?
Let's store it in a variable and console it

```js
const weather = Object.values(response.data);
console.log(weather)
```

Success. Now we have the data that we want in an array indexed. So we only need to find the first index(0) and we are good to go.

```js
const weather = Object.values(response.data);
const weatherToday = weather[0].AT.av;
```

Like this we can have the average temperature of the day in Mars. Now we need to render it on the page but before that if you check our html or our page you see that we have the button for today, tomorrow and next day weather.
There are many way do achieve that. For the sake of this tutorial and to explain some concepts ahead I will create 3 different functions. One for each button. 

```js
const getTodayWeather = () => {
  apiMarsWeather
    .then((response) => {
      console.log(response);
    const weather = Object.values(response.data);
const weatherToday = weather[0].AT.av;
    console.log(weatherToday)
    })
    .catch((err) => {
      console.log(err);
    });
};

getTodayWeather();

const getTomorrowWeather = () => {
  apiMarsWeather
    .then((response) => {
      console.log(response);
    const weather = Object.values(response.data);
const weatherTomorrow = weather[1].AT.av;
    console.log(weatherTomorrow)
    })
    .catch((err) => {
      console.log(err);
    });
};

getTomorrowWeather();

const getNextDayWeather = () => {
  apiMarsWeather
    .then((response) => {
      console.log(response);
    const weather = Object.values(response.data);
const weatherinTwoDays = weather[2].AT.av;
    console.log(weatherinTwoDays )
    })
    .catch((err) => {
      console.log(err);
    });
};

getNextDayWeather ();
```

This seems a lot but it's not. It's 3 different functions. One for each day. Inside of it there are the variables that we set before. I just change the index of the array for each day.
Here is the codepen. Check the console and change the value or get more data to feel comfortable with it

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="mugas" data-slug-hash="yLewopR" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nasa API - Mars weather console">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/yLewopR">
  Nasa API - Mars weather console</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

All right. So now to render it on the page it's basically they way we did it with the *Image of the day.*
Let's see our html. We want that our data shows inside the div that has the class `mars__today-data, mars__tomorrow-data, mars__info-data`.
We also want that when we press the button, the data shows for each day.So we also need to get the buttons. We have:

```js
const marsWeatherToday = document.querySelector(".mars__today-data");
const marsWeatherTomorrow = document.querySelector(".mars__tomorrow-data");
const btnMarsToday = document.getElementById("btn__today");
const marsTitle = document.querySelector(".mars__title");
const btnMarsTomorrow = document.getElementById("btn__tomorrow");
const btnNextDay = document.getElementById("btn__nextDay");
const marsInfoData = document.querySelector(".mars__info-data");
```

Now that we get our buttons and divs in js, let's render the API there.

```html
const getTodayWeather = () => {
  apiMarsWeather
    .then((response) => {
      const weather = Object.values(response.data);
      const weatherToday = weather[0].AT.av;
      marsWeatherToday.insertAdjacentHTML("beforeend", weatherToday);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Tomorrow temperature
const getTomorrowWeather = () => {
  apiMarsWeather
    .then((response) => {
      const weather = Object.values(response.data);
      const weatherTomorrow = weather[1].AT.av;
      marsWeatherTomorrow.insertAdjacentHTML("beforeend", weatherTomorrow);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Today temperature
const getNextDayWeather = () => {
  apiMarsWeather
    .then((response) => {
      const weather = Object.values(response.data);
      const weatherInTwoDays = weather[2].AT.av;
      console.log(weatherInTwoDays);
      marsInfoData.insertAdjacentHTML("beforeend", weatherInTwoDays);
    })
    .catch((err) => {
      console.log(err);
    });
};
```

And then we add our event listeners:

```js
btnMarsToday.addEventListener("click", getTodayWeather, {
  once: true,
});
btnMarsTomorrow.addEventListener("click", getTomorrowWeather, {
  once: true,
});
btnNextDay.addEventListener("click", getNextDayWeather, {
  once: true,
});
```

Now if you press the button for each day, it shows the average temperature. Great right? Here is the codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="mugas" data-slug-hash="RwrdjRd" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nasa API -Weather in Mars">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/RwrdjRd">
  Nasa API -Weather in Mars</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This could be the end of this tutorial, but I still want to touch a couple of aspects. You might realized that by creating the 3 functions and on each one getting a request, would be great that we can send multiple request at once. And yes we can. Axios came with a function called `all` and basically it does exactly that.

```js
function getMarsWeather() {
  axios
    .all([getTodayWeather(), getTomorrowWeather(), getNextDayWeather()])
    .then(axios.spread(function () {}));
}

marsTitle.addEventListener("mouseover", getMarsWeather, {
  once: true,
});
```

So with the function that is inside Axios you can call all other function with only one request. To make it also visible I add a event listener that on `mouseover` the title it will show the temperatures.

Here is the code with both ways. You then can choose which you want to use.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="mugas" data-slug-hash="mdVoqpN" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nasa Api- Weather in Mars complete">
  <span>See the Pen <a href="https://codepen.io/mugas/pen/mdVoqpN">
  Nasa Api- Weather in Mars complete</a> by Ricardo (<a href="https://codepen.io/mugas">@mugas</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## **Hide API keys**

This is important. Like I mentioned before never give your API_key to know one. Believe there are many stories out there when someone did that and a big bill or something worst might arrive at your door.
Said that, there are many ways to do that, and they are used with Node( for example). In this tutorial we are only using front-end but we can make it happen, just not going to show up in the code pen. This also requires that you know github or have your code there.
Basically what it does it, your variables will be hidden from the server, and from your repo.

Open your terminal on the folder where you have your app and instal the package [dotenv](https://github.com/motdotla/dotenv)

```js
npm install dotenv
```

or

```js
yarn add dotenv
```

After is installed (check in the package.json file) go to your js file and:

```
import {} from "dotenv/config";
```

Now we can start using it. 
Create a new file named `.env` 
Just like that, don't forget the dot. In that file write

```js
API_KEY= Hello
```

You can write what you want, the important is that when you access it, you write what is here with the same name.

Now go to your js again and write:

```js
const message = process.env.API_KEY;
console.log(message);
```

What we have here? We are creating a variable named `message` and we assign it to `process.env.API_KEY`. So `process.env` is what you need to access the file `.env`. After in the name of the variable that you create in that file.
I console it for you to see that the **message** is the APIKEY that you wrote in the file. It might give an error and don't show up nothing. In that case, open the folder where you have the project, delete the cache folder and restart the application again with parcel.

In the console is the message "Hello" ? Great it works. So Hello is your API_key and now in the js file instead or writing your API_key you just write message and it will work. But...The variable is still visible right? If you commit the file and check your github you see your .env variable. So back to square zero? Not quite. Now we just need to inform Github that the `.env`file is to be hidden.
You have a file in your folder named `.gitignore`right?Open it. In case you don't known that file is where you write the name of the files that you don't want that are going to be committed and pushed in to the repository. It should be there already `node_modules` by default. In the next line write `.env`.
Now if you commit and push your changes and check your github, you see that the `.env` file is not available. No one can see it, so your API_keys are safe. Remember also to delete the console of the message.
Tell me (trough [twitter](https://twitter.com/mugas11), [instagram](https://www.instagram.com/mugas_codes/) or from my [website](http://ricardomoreira.io/)) if you need a better explanation of this part and I do a video of it and add it to the tutorial. 

```javascript
console.log(message);
//DELETE ME
```

And that's that. It's a long text for just a small part of the APIs world, but I hope that with this you can start adventure yourself in the world of APIs. Check the codepen, the final project and all links available and get back to me if you have some ideas or if something is wrong. I'm learning myself, so the more we learn and share and talk about it the better.

Links about what we cover:

* [InsertAdjacentHtml](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
* [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
* [More on API](https://flaviocopes.com/axios/)

**Side Notes**

Normally I use the Bem methodology for naming my classes. In this one there is a mix. Because I tried different ways using the API and using other APIs and using Axios  I was not following the methodology. Then when I start writing the post and adding the code pen with the code, I realized that I missed that spot. Sorry for that. I hope that even though you understand the class naming.