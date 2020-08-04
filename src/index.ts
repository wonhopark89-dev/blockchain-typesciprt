interface Human {
   name:string,
   age:number,
   gender:string
}

const person = {
   name:"wonho",
   age:22,
   gender:"male"
}
const sayHi = (tomato:Human):string => {
   return `${tomato.name} ${tomato.age} ${tomato.gender}`;
}

console.log(sayHi(person));

// class
class Human2 {
   public name:string;
   public age:number;
   public gender:string
   constructor(name:string, age:number, gender:string) {
      this.name = name;
      this.age = age;
      this.gender = gender ;
   }
}

const person2 = new Human2("soooo", 24, "female");

const sayHi2 = (potato:Human2):string => {
   return `${potato.name} ${potato.age} ${potato.gender}`;
}

console.log(sayHi2(person2));

export {}