// with spread op only 1 level spreading is there , for nested level spreading u need to do nested spreading 


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

// let obj2 = obj

// let obj2={...obj, address:{...obj.address.state}}

// rather than using spread for object we used JSON command
// i.e JSON.parse(JSON.stringify(obj))--> this is deep copy

let obj2= JSON.parse(JSON.stringify(obj)) // --> this is deep copy  // use this rather than spreading again and again


obj.address.country='india'

console.log(obj)

console.log(obj2)