/**
 * Created by Hew4803 on 6/7/17.
 */
'use strict';

//5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

function reverseArray(arr){
    let length=arr.length;

    for(let i=length; i!=0; i--){
        console.log(i);
        arr.push(i);
        arr.shift();
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]));