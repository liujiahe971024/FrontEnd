export default {};

class Person{
    name: string;
    private type: string;
    protected age: number = 23;

    constructor(name: string) {
        this.name = name;
    }

    printAge(){
        console.log(this.age);
    }

    setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

let person = new Person("Bob");
console.log(person);
person.printAge();
person.setType('admin');

class Bob extends Person {
    constructor() {
        super('alice');
        this.age = 12;
    }
}

let bob = new Bob();
console.log(bob);

class Plant{
    private _species: string = "Default";
    get species(){
        return this._species + 'xxx';
    }

    set species(value: string){
        this._species = value;
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "Bob's species";

class Helpers{
    static PI: number = 3.14;
    static calcCircumference(diameter: number):number{
        return this.PI * diameter;
    }
}
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));