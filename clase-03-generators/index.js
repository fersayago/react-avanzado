// funcion punter o generadora de funciones
function* generatorFn() {
  let a = 1;
  console.log("First time");
  yield a; // el yield es como un return

  a++;
  console.log("Second time");
  yield a;

  a++;
  console.log("Third time");
  yield a;

  a++;
  console.log("Fourth time");
  yield a;

  a++;
  console.log("Fifth time");
  yield a;
}

var fn = generatorFn() // puntero a una instancia de la función

console.log(fn)
console.log("ejecuto mi función generadora")
console.log(fn.next()) // ejecuto la función;
console.log("segunda ejecución")
console.log(fn.next())
console.log("tercera ejecución")
console.log(fn.next())
console.log("cuarta ejecución")
console.log(fn.next())
console.log("quinta ejecución")
console.log(fn.next())
console.log("sexta ejecución")


console.log("ahora con un for")

var fn2 = generatorFn()

for (let i of fn2){
  console.log(i);
}