const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach((ele)=>console.log("Ejercicio 1: Siguiente nombre: " + ele));

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"

console.log("Ejercicio 2: Indice Maria: " + students.findIndex(nombre=>nombre==="Maria"));
// Utiliza el método some para saber si en este array existe la alumna "Katerina"
console.log("Ejercicio 3: Existe Katerina: " + students.some(nombre=>nombre==="Katerina"));

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
console.log("Ejercicio 4: Primer nombre con 5 o menos caracteres: " + students.find(nombre=>nombre.length===5));

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
console.log("Ejercicio 5: ¿todos los nombre tienen al menos 4 caracteres?: " + students.every(nombre=>nombre.charAt(4)));

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
console.log("Ejercicio 6: Nombres que contienen la letra i: " + students.filter(nombre=>nombre.includes("i")));

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
console.log("Ejercicio 7: Iniciales de los nombres: " + students.map(nombre=>nombre.charAt(0)));
