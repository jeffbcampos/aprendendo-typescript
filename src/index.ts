let x: number = 25;
x = 30;
console.log(x);

// -> Como funciona uma tupla em typeScript

let myTuple: [number, string, string[]];

myTuple = [1, "Hello World", ["Jeferson", "Teste"]]

console.log(myTuple);

//Função em typeScript

function createList(element1: string, element2: string, element3: string) {
    let list: string[] = [];
    list.push(element1, element2, element3);
    return console.log(list);    
}

createList("Jeferson", "Teste", "Teste2");

// -> Como funciona uma classe em typeScript

class Person {
    name: string;
    age: number;
    isAlive: boolean = true;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;        
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

}

let pessoa: Person = new Person("Jeferson", 25);

console.log(pessoa);
console.log(pessoa.getName());
console.log(pessoa.getAge());

// -> Como funciona objetos em typeScript

let objectTest: {nome: string, idade: number};
objectTest = {nome: "Jeferson", idade: 25};

console.log(objectTest.nome);