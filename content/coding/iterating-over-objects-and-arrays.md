---
type: Loops
language: js
title: Iterating over objects and arrays
summary: >-
  One struggle when learning to code is how to loop over an array. What about
  looping over an object?

  What if there is an array inside an object?

  Easily one can get lost there. Hopefully, this post helps you as with helps me
date: November 2, 2022
update: November 2, 2022
author: Ricardo Moreira
thumbnail: https://res.cloudinary.com/mugas/image/upload/v1667963262/loop_bmc90p.jpg
---
L﻿ooping over arrays in javascript let's say its easier than before, or at least there are more options now than the "old" `for` loop even that its still pretty helpfull.

T﻿his article as it will be more focused on **arrays** and **objects** I will not focus on all the array looping methods.

## A﻿rrays

S﻿o if you have an array a easy way to loop it is with \`for...of\`

### ﻿for...of

```javascript
const animals = \['lion', 'leopard', 'panda', 'koala', 'camel']

for (const animal of animals) {
    console.log(animal)
}
```

I﻿f you wonder how it works, I try to keep it simple. The syntax is:

```javascript
for (variable of iterable)
  statement
```

I﻿n the  variable you put wathever you want, normally as an array would be a plural of things, you put the singular. So in this case, the array name is animals and the variable is animal.
T﻿he iterable is going to be the array name for...of you don't create a new array, neither you change the array that exists. So here the *animals array* will continue to be as it was.

S﻿o if you want to only get the first letter of each animal name you can do it with for...of but still would not change the array.

```javascript
for (let firstLetter of animals) {
    firstLetter = firstLetter.charAt(0)
    console.log(firstLetter)
    console.log(typeof firstLetter) //string
}
```

A﻿s you can see \`firstLetter\`is a string and \`animals\`remain the same array as before.

### ﻿map

W﻿ith `map` is a different story, you will create a new array.  You first passa a function trough map and   it will create a new array. With our last example if we want to do exacly the same will be:

```javascript
const capitalAnimals = animals.map((str) => str.charAt(0))
console.log(capitalAnimals) 
console.log(typeof capitalAnimals)
```

S﻿o first thing you notice is that the code is more shorter than with the \`for...of\`.

So \`capitalAnimals\` is going to be our new array. Then  with the array you have you pass map with a function. In this case I pass a call back function with the argument \`str\`.

I﻿n that function, just like we did with \`for...of\` we take only the first letter of each array element.

A﻿s you can see in your console. \`capitalAnimals\` is a new array that only stores the first letters of each animals, while the array animals stays the same.

A﻿nd yes you can achive also with \`for each\`. These are just 2 different methdos that you can use.

B﻿ut what if you have an Object?

## Objects

W﻿hen you have an object and want to iterate over it, maybe( if you were me) was to use the same methods as you did with an array. Just that they don't work as it returns an error always.

W﻿hat can we use then for objects iteration?

### ﻿for...if

I﻿f with \`for...of\` you iterate over arrays with \`for...if\`you can iterate over objects

```javascript
const animalsHabitat = {
    lion: "savanna",
    leopard: "savanna",
    panda: "forest",
    koala: "forest",
    camel: "dessert"
}


for (const animalHabit in animalsHabitat) {
    console.log(animalHabit)
    console.log(typeof animalHabit)
}
```

T﻿he syntax is the same as the \`for...of\` but the question is, because **objects** have **keys** and **values**, the question is what \`for...in\` iterates? Always the **keys**. So if you wanted the value you had to go a bit deeper:

```javascript
for (const animalHabit in animalsHabitat) {
    console.log(`The ${animalHabit} habitat is the ${animalsHabitat[animalHabit]}`)
}
```

B﻿y using the square brackets you can access the value of each key.  There are other ways also that you can iterate over only the **keys** or the **values.** Also with \`for...if\` what you get is a string out of it.

### ﻿Object.keys

T﻿he name says it all but what it does is get the keys out of it. So we can use it straigh by \`console.log\` it.

```javascript
console.log(Object.keys(animalsHabitat))
```

T﻿he big difference is that now you have an array , not a string anymore.

### ﻿Object.values

```javascript
console.log(Object.values(animalsHabitat))
```

W﻿ith **values** work the same and you also get an array.

T﻿hen you can also use \`Object.entries\`

```javascript
console.log(Object.entries(animalsHabitat))
```

W﻿ith Object.entries you get a nested array of key/value pairs.  Here is a function with the 3 of them:

```javascript
function allAnimals() {
    console.log(Object.keys(animalsHabitat))
    console.log(Object.values(animalsHabitat))
    console.log(Object.entries(animalsHabitat))
}

allAnimals()
```

S﻿o after you that and because the result is an array, then you can iterate over them easily with \`for...of\` for example

```javascript
for (let habitat of Object.values(animalsHabitat)) {
    console.log(habitat)
    habitat = habitat.charAt(0)
    console.log(habitat)

}

for (let animal of Object.keys(animalsHabitat)) {
    console.log(animal)
    animal = animal.charAt(0)
    console.log(animal)
}
```

I﻿ did the same example for the keys and for the value to be able to see how both work. But like before the result is not an array anymore. But if you want to put them in an array you could easily with...map 

```javascript
const animalName = Object.keys(animalsHabitat).map((str) => str.charAt(0))
console.log(animalName)


const animalNames = Object.values(animalsHabitat).map((str) => str.charAt(0))
console.log(animalNames)
```



T﻿he result is the same as with for...off but you end up getting an array. 

S﻿o when you have an object now you know how you can easily change them to an array and iterate over them, no matter if you want the values or the keys.