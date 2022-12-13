// para entender mejor las notas usar quokkajs

console.log('hola mundo');

// tipos de variables

let number = 22 // variable pura
const name = 'juan' // variable con valor inmutable
var verdad = false // tipo malvado de variable que no respeta lso scopes y que no deberia usarse

// JS es de tipado debil y dinamico, las var (no const) pueden cambiar de tipo de valor, ser un numero, cadena, etc. Segun lo dicte el programa escrito.

console.log(number)
number = 'veintidos'
console.log(number)

console.log(name)
console.log(verdad)

//Js tiene 4 tipos de var primitivos, estos son inmutables (osea, que las funciones que estos ejecutan solo devuelven otros valores del mismo tipo, pero no cambian el valor de la var en si, como en funcional), salvo los objetos

a = 1
b = 'uno'
c = true
d = null
e = undefined
f = {}

let lista = []

for (let i = 1; i <= 625; i++) {
  if (i % 5 == 0) {
    lista.push(i)
  }
}

lista

// los strings no se pueden mutar, solo puedes crear copias modificadas a partir de estos

const  nombre = 'gabriel'
const newNombre = nombre.toUpperCase()

console.log(newNombre)
console.log(nombre)

// hay dos formas de modificar un array, mutandolo directamente o crear una copia modificada

let lista2 = []
lista2.push(1)

lista2

lista3 = lista2.concat(2)

lista3

//objetos

const persona = {
  name: 'gabo',
  edad: 22,
  familia: ['massiel', 'henrrito']
}

console.log(persona.familia[1])

//otra forma de acceder a los campos de un objeto

const campo = 'name'

console.log(persona[campo])

//funciones

console.log(restar(2,3))

const sumar = (num1, num2) => {
  console.log(num1)
  console.log(num2)
  return num1 + num2 
}

console.log(sumar(2,3))

function restar (a, b) {
  return a - b
}