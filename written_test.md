## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!


```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer 
[Array.prototype.map2 = function(cb){
    let newArr=[];

    for(let i=0; i<this.length;i++){
        newArr.push(cb(this[i],i,this))
    }

    return newArr;
}](./map.js)

2. What is a React `component`?
---
A react component is a type = function which returns a group of HTML elments to be rendered. React handles the changes to this component via state changes and comparing the React's virtual DOM to the browser DOM.
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?
---
A simple function should be used when creating presentational or "dumb" components. A class should be used when creating components that will manage state and are considered "smart" components which do more than just present the data they are provided. These components may need to take advantage of other functions provided in the component class.
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---

const heading = React.createElement('h1',{class: 'headline'},'Hello Dojo!');
React.createElement('div',null,heading);

---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [function reverseArray(arr){
    let length=arr.length;

    for(let i=length; i!=0; i--){
        console.log(i);
        arr.push(i);
        arr.shift();
    }
    return arr;
}](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
The new keyword instantiates a new instance and allows us to use 'this' to refer to that instance.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
Pushing to Github because it means you've completed something (likely using the other 3)!!
---

Done! Time to start the [React app](./app-details.md)!