const tutorias = [
  { nombre: "Matemáticas Básicas", categoria: "Académica", valor: 40 },
  { nombre: "Inglés Conversacional", categoria: "Idiomas", valor: 30 },
  { nombre: "Programación JavaScript", categoria: "Tecnología", valor: 50 },
  { nombre: "Física Avanzada", categoria: "Académica", valor: 45 },
  { nombre: "Francés Inicial", categoria: "Idiomas", valor: 25 },
  { nombre: "Diseño Web", categoria: "Tecnología", valor: 35 }
];

console.log("📌 LISTA DE TUTORÍAS:");

for (const tutoria of tutorias) {
  console.log(`- ${tutoria.nombre} | Categoría: ${tutoria.categoria} | Duración: ${tutoria.valor} min`);
}

let contadorAcademica = 0;
let contadorIdiomas = 0;
let contadorTecnologia = 0;

for (const tutoria of tutorias) {
  if (tutoria.categoria === "Académica") {
    contadorAcademica++;
  } else if (tutoria.categoria === "Idiomas") {
    contadorIdiomas++;
  } else if (tutoria.categoria === "Tecnología") {
    contadorTecnologia++;
  }
}

console.log("\n📊 CONTEO POR CATEGORÍA:");
console.log(`Académica: ${contadorAcademica}`);
console.log(`Idiomas: ${contadorIdiomas}`);
console.log(`Tecnología: ${contadorTecnologia}`);

let suma = 0;

for (const tutoria of tutorias) {
  suma += tutoria.valor;
}

const promedio = suma / tutorias.length;

console.log("\n📈 ESTADÍSTICAS:");
console.log(`Total minutos: ${suma}`);
console.log(`Promedio duración: ${promedio.toFixed(2)} min`);

let max = tutorias[0];
let min = tutorias[0];

for (const tutoria of tutorias) {
  if (tutoria.valor > max.valor) {
    max = tutoria;
  }
  if (tutoria.valor < min.valor) {
    min = tutoria;
  }
}

console.log("\n🏆 MAYOR DURACIÓN:");
console.log(`${max.nombre} con ${max.valor} min`);

console.log("\n🔻 MENOR DURACIÓN:");
console.log(`${min.nombre} con ${min.valor} min`);

console.log("\n📝 REPORTE FINAL:");

for (let i = 0; i < tutorias.length; i++) {
  const tutoria = tutorias[i];

  let estado = tutoria.valor >= promedio ? "Encima del promedio" : "Debajo del promedio";

  console.log(`${i + 1}. ${tutoria.nombre} (${tutoria.valor} min) → ${estado}`);
}

console.log("\n🔄 RECORRIDO CON WHILE:");
let i = 0;
while (i < tutorias.length) {
  console.log(`Tutoría: ${tutorias[i].nombre}`);
  i++;
}

console.log("\n🔄 RECORRIDO CON DO...WHILE:");
let j = 0;
do {
  console.log(`Categoría: ${tutorias[j].categoria}`);
  j++;
} while (j < tutorias.length);

console.log("\n⚡ EJEMPLO BREAK Y CONTINUE:");

for (const tutoria of tutorias) {
  if (tutoria.valor < 30) {
    continue; 
  }

  if (tutoria.valor > 45) {
    console.log("Tutoría muy larga encontrada, se detiene el bucle.");
    break; 
  }

  console.log(`Tutoría válida: ${tutoria.nombre}`);
}