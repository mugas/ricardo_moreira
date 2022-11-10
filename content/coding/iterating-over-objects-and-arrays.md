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

`﻿``js
const animals = ['lion', 'leopard', 'panda', 'koala', 'camel']

for (const animal of animals) {
    console.log(animal)
}

```

I﻿f you wonder how it works, I try to keep it simple. The syntax is:

`﻿``js
for (variable of iterable)
  statement
`﻿``

I﻿n the ´variable`you put wathever you want, normally as an array would be a plural of things, you put the singular. So in this case, the array name is animals and the variable is animal.
T﻿he iterable is going to be the array name.
A﻿fter you create the statement you want. With `for...of` you don't create a new array, neither you change the array that exists. So here the *animals array* will continue to be as it was.

S﻿o if you want to only get the first letter of each animal name you can do it with for...of but still would not change the array.

`﻿``js
for (let firstLetter of animals) {
    firstLetter = firstLetter.charAt(0)
    console.log(firstLetter)
    console.log(typeof firstLetter) //string
}
`﻿``

### ﻿map

W﻿ith `map` is a different story, you will create a new array. 

S﻿o with the same array that we had, let's say I want to 













