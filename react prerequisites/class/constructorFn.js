
// how to make a constructor
//  this used in this.name is responsible for making a new object(empty){ }
// this.name==> gives empty object and the Name is added in that empty object
// when this is passed in a function then empty object is obtained

function car(Name , Model , Color){
    this.name = Name
    this.model = Model
    this.color = Color

    this.test = function(){      // just a function present inside another function
           console.log(`I am driving ${this.model}`)
    }
}




let car1 = new car('BMW' , 'X6' , 'White')

let car2 = new car('Mercedes' , 'S class' , 'red')

car1.test()

car2.test()


console.log(car1)

console.log(car2)