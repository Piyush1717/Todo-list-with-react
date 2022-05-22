
// this keyword is for reference purpose to any obje

// this keywords value will depend on how its called

// for non strict JS

// console.log(this) // this ko globally call kiya  --> {}  --> empty obj

// when called inside a function then returns global function

//  when called inside function which is inside an object then return the object

// let obj = {
//        name : 'Adam',
//        age : 23,

//        showThis : function(){
//             console.log(this)
//        }
// }

// obj.showThis() // object ke andar ek method mein this ki value object itself hoti hai


let obj2 = {
    name : 'Adam',
    age : 23,

    showThis : function(){
         function test(){
                console.log(this)
         }

         test()
    }
}


obj2.showThis()

// object ke ander function ke ander function k ander this return glbal value