'use strict';

// var let const

// все объявления var всплывают наверх и хоть значение присвоено раньше чем объявлена переменная все работает, 
//если такое сделать с let или const будет 
//ReferenceError: Cannot access 'b' before initialization
a = 11
console.log(a)
var a

let b // если попытаться вевысти переменную, которая объявлена, но значение ей не присвоено, значение переменной будет undefined
console.log(b)
b = 10

 // значения констант менять нельзя, иначе будет TypeError: Assignment to constant variable
const c = 'const'
console.log(c)

// типы данных в js это именно типы значений, а не типы переменных. В любую переменную можно перезаписать другой тип
let d = [1,2]
d = 'hello'
d = Infinity
console.log(d)

// типы данных делятся на две группы: примитивы и объекты
// примитивы: string, number, boolean, null, undefined, symbol, bigint
// у объекта как у типа есть подтипы: массив (Array), функция (Function), регулярное выражение (RegExp)
// основное разриличие это мутабельность (примитивы имутабельны, объекты мутабельны) и как значение передается из одной переменной в другую (примитивы копируются, а для объектов создается ссылка)

let primitive = 'Hello'
//primitive[0] = 'h' --> TypeError: Cannot assign to read only property '0' of string 'Hello'
console.log(primitive[0]) 

let obj = ['H','e','l','l','o']
obj[0] = 'h'
console.log(obj[0]) 

let primitive2 = primitive + '!'
console.log(primitive) 
console.log(primitive2) // создалась копия и поменялось второе значение, первое не поменялось

let obj2 = obj
obj2.push('!')
console.log(obj) 
console.log(obj2) // создалась ссылка и значение по этой ссылке поменялось, обе ссылки ссылаются на одно значение





