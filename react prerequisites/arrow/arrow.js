// write a function o add two numbers and print their sum

// crux of arrowjs{
    // 1. arrow can shorten the syntax
// 2. we cannot use this with arrow function as it return undefined
// }

// let add=function(a,b)
// {
//     console.log(a+b)
// }

// add(3,4)

// rather than writing function you can write =>


// let add=(a,b)=>{
//     console.log(a+b)
// }

// add(3,4)


// var regularFunction = function(name){
//        console.log(`I am ${name}`)
// }

// let arrowFunction = name => console.log(`I am ${name}`)

// regularFunction('Adam')

// arrowFunction('Steve')

// let test = () => {
//     console.log(this); // {}
//   };
//   test();
  
//   let person = {
//     name: "Adam",
//     age: 27,
  
//     showDetails: function () {
//       console.log(this.name + " " + this.age);
//     },
  
//     arrow: () => {
//       console.log(this.name + " " + this.age);
//     },
//   };
  
//   person.showDetails();
//   person.arrow()