"use strict";
let x = 25;
x = 30;
console.log(x);
// -> Como funciona uma tupla em typeScript
let myTuple;
myTuple = [1, "Hello World", ["Jeferson", "Teste"]];
console.log(myTuple);
//Função em typeScript
function createList(element1, element2, element3) {
    let list = [];
    list.push(element1, element2, element3);
    return console.log(list);
}
createList("Jeferson", "Teste", "Teste2");
// -> Como funciona uma classe em typeScript
class Person {
    constructor(name, age) {
        this.isAlive = true;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
let pessoa = new Person("Jeferson", 25);
console.log(pessoa);
console.log(pessoa.getName());
console.log(pessoa.getAge());
// -> Como funciona objetos em typeScript
let objectTest;
objectTest = { nome: "Jeferson", idade: 25 };
console.log(objectTest.nome);
