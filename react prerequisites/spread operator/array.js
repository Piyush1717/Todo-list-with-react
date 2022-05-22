//spread operator application in arrays
//it is used to make copy of original array such that if we change the original then copy is not changed


let arr=[1,2,3,4]

//let arr2=arr

let arr2=[...arr]




arr.push(9)

console.log(arr)

console.log(arr2)

// objects , arr etc are stored in heap 
//primitive data types like number ,strings are stored in stack
//spread op-->...
// spread operator convert arr to string