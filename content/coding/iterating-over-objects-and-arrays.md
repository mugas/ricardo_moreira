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