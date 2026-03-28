// Definimos constantes y un array de tutores

const APP_NOMBRE = "Tutorías Pro";
const TARIFA_BASE = 20000; // COP por hora

const tutores = [
  { nombre: "Ana", materia: "Matemáticas", tarifa: 25000, disponible: true, horas: 2 },
  { nombre: "Luis", materia: "Inglés", tarifa: 30000, disponible: false, horas: 1 },
  { nombre: "Carlos", materia: "Programación", tarifa: 40000, disponible: true, horas: 3 },
  { nombre: "María", materia: "Física", tarifa: 28000, disponible: true, horas: 2 },
  { nombre: "Sofía", materia: "Química", tarifa: 26000, disponible: false, horas: 1 }
];

// Recibe un tutor y devuelve un texto formateado
const formatTutor = (tutor) => {
  return `Tutor: ${tutor.nombre} | Materia: ${tutor.materia} | Tarifa: $${tutor.tarifa} | Disponible: ${tutor.disponible ? "Sí" : "No"}`;
};


// Calcula el costo total de una tutoría
function calcularCostoTotal(tarifa, horas) {
  return tarifa * horas;
}

// Verifica si el tutor está disponible
function estaDisponible(tutor) {
  return tutor.disponible === true;
}

// Aplica un descuento opcional al costo total
function aplicarDescuento(total, descuento = 0.1) {
  return total - (total * descuento);
}


// Recorre los tutores y genera un informe
console.log(`\n===== REPORTE DE ${APP_NOMBRE} =====\n`);

for (const tutor of tutores) {
  
  if (estaDisponible(tutor)) {

    const costo = calcularCostoTotal(tutor.tarifa, tutor.horas);

    const costoFinal = aplicarDescuento(costo);

    console.log(formatTutor(tutor));
    console.log(`Costo total: $${costo}`);
    console.log(`Costo con descuento: $${costoFinal}`);
    console.log("----------------------------------");
  }
}

