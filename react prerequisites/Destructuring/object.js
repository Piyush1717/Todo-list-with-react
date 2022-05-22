// you should use key of object only not other variable like a b c

// let obj={
// name:'adam',
// age: 18,
// pincode: 1100
// }

// // console.log(obj)

// // let {a,b,c}=obj // it will print undefined

// let { name , age , pincode}=obj  // keys can be jumbled

// console.log(name , age , pincode)  // adam 18 1100

// let { pincode , age , name}=obj

// console.log(pincode , age , name)  // adam 18 


// Nested destructor

let obj= {
    name: 'adam',
    address : {
    country:'USA',
    state: {
    
        statename:'new york',
        pincode:1234
    }
    
    }
    
    }

    // let {name}=obj
    // // console.log(name)    // adam

    // let {address: {country}}=obj     // USA

    // console.log(country)

// to get pincode out of it  ?

let {address: {state: {pincode }}}=obj

console.log(pincode)