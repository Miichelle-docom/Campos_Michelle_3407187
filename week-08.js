console.log("===== ESTADO INICIAL DEL INVENTARIO =====");

// 1. Estructura de datos 
let tutors = [
  {
    id: 1,
    name: "Ana Martínez",
    subject: "Matemáticas",
    pricePerHour: 25,
    rating: 4.8,
    available: true
  },
  {
    id: 2,
    name: "Carlos López",
    subject: "Inglés",
    pricePerHour: 20,
    rating: 4.5,
    available: true
  },
  {
    id: 3,
    name: "Laura Gómez",
    subject: "Programación",
    pricePerHour: 30,
    rating: 4.9,
    available: false
  },
  {
    id: 4,
    name: "Miguel Torres",
    subject: "Física",
    pricePerHour: 22,
    rating: 4.3,
    available: true
  },
  {
    id: 5,
    name: "Sofía Ramírez",
    subject: "Química",
    pricePerHour: 28,
    rating: 4.7,
    available: false
  }
];

console.log(tutors);

// push → agregar nuevo tutor
tutors.push({
  id: 6,
  name: "Juan Pérez",
  subject: "Historia",
  pricePerHour: 18,
  rating: 4.2,
  available: true
});

console.log("\nDespués de PUSH:");
console.log(tutors);

// pop → eliminar último tutor
tutors.pop();

console.log("\nDespués de POP:");
console.log(tutors);

// unshift → agregar tutor prioritario
tutors.unshift({
  id: 0,
  name: "Tutor VIP",
  subject: "Todas",
  pricePerHour: 50,
  rating: 5.0,
  available: true
});

console.log("\nDespués de UNSHIFT:");
console.log(tutors);

// splice → eliminar/reemplazar tutor
tutors.splice(2, 1, {
  id: 99,
  name: "Reemplazo Pro",
  subject: "Biología",
  pricePerHour: 26,
  rating: 4.6,
  available: true
});

console.log("\nDespués de SPLICE:");
console.log(tutors);


// find → encontrar tutor disponible
const availableTutor = tutors.find(tutor => tutor.available === true);

console.log("\nTutor disponible encontrado (FIND):");
console.log(availableTutor);

// filter → tutores con alta calificación
const topTutors = tutors.filter(tutor => tutor.rating >= 4.7);

console.log("\nTutores con rating >= 4.7 (FILTER):");
console.log(topTutors);

// forEach → mostrar tutores
console.log("\nLista de tutores (FOREACH):");
tutors.forEach(tutor => {
  console.log(`- ${tutor.name} enseña ${tutor.subject}`);
});

// map → transformar datos
const tutorNames = tutors.map(tutor => {
  return `${tutor.name} (${tutor.subject}) - $${tutor.pricePerHour}/h`;
});

console.log("\nTransformación con MAP:");
console.log(tutorNames);


// copiar inventario sin mutar original
const tutorsCopy = [...tutors];

// agregar nuevo tutor en copia
const newTutorsList = [
  ...tutorsCopy,
  {
    id: 7,
    name: "Nuevo Tutor",
    subject: "Arte",
    pricePerHour: 19,
    rating: 4.1,
    available: true
  }
];

console.log("\nNueva lista usando SPREAD:");
console.log(newTutorsList);


console.log("\n===== INVENTARIO FINAL =====");
console.log(tutors);

console.log("\n===== RESUMEN =====");
console.log("Total tutores:", tutors.length);
console.log("Tutores top:", topTutors.length);