class Person {//person is parent class
    constructor(name, age) {
      (this.name = name), (this.age = age);
    }
  
    welcome(){//this is a function , you dont write fucntion inside a class you directly write its name
       console.log("hello "+ this.name)
    }
  }
  
  class Teacher extends Person {//extends is used to inherit name and age from person
    constructor(name , age ,classStrength) {
       super(name , age)//no need for this , now make super 
      this.classStrength = classStrength;
    }
  }
  
  class Student extends Person {
    constructor(name, age, cgpa) {
      super(name, age);
      this.cgpa = cgpa;
    }
  
    hello(){
           super.welcome()
    }
  }
  
  let person1 = new Person("Adam", 25);
  let teacher1 = new Teacher("Steve", 40, 100);
  let student1 = new Student("Mark", 21, 8.0);
  
  // console.log(person1);
  // console.log(teacher1);
  // console.log(student1);
  
  
  person1.welcome()
  student1.hello()