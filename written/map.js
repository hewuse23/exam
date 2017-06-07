/**
 * Created by Hew4803 on 6/7/17.
 */
'use strict';


const arr = [1,2,3];
console.log(arr.map((val) => val * val)) // [1,4,9]

Array.prototype.map2 = function(cb){
    let newArr=[];

    for(let i=0; i<this.length;i++){
        newArr.push(cb(this[i],i,this))
    }

    return newArr;
}

console.log(arr.map2((val) => val * val)) // [1,4,9]
