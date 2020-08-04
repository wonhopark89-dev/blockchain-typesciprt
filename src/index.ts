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

export {}