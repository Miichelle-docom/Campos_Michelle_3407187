// === Operaciones básicas ===

// Separadores numéricos
let maxTutores = 45;
let tutoresActivos = 38;
let precioPorClase = 48_000;

// Supongamos que cada tutor dio 1 clase
let totalClases = tutoresActivos;

// Operaciones aritméticas
let ingresoTotal = totalClases * precioPorClase;

// Cupos disponibles
let cuposDisponibles = maxTutores - tutoresActivos;

// Promedio (ejemplo)
let promedioIngreso = ingresoTotal / tutoresActivos;

console.log("=== Operaciones básicas ===");
console.log("Tutores activos:", tutoresActivos);
console.log("Ingreso total por clases:", ingresoTotal);
console.log("Cupos de tutores disponibles:", cuposDisponibles);
console.log("Promedio por tutor:", promedioIngreso);


// === Asignación compuesta ===

let clasesTutor1 = 2;
let clasesTutor2 = 3;

// Uso de +=
clasesTutor1 += 1;  // ahora 3 clases
clasesTutor2 += 2;  // ahora 5 clases

// Ganancias
let gananciaTutor1 = clasesTutor1 * precioPorClase;
let gananciaTutor2 = clasesTutor2 * precioPorClase;

// Uso de *= (bonus del 10%)
let bonus = 10_000;
bonus *= 2.64; // ejemplo parecido al tuyo

console.log("\n=== Asignación compuesta ===");
console.log("Ganancia tutor 1:", gananciaTutor1);
console.log("Ganancia tutor 2:", gananciaTutor2);
console.log("Bonus ganado:", bonus);


// === Validaciones con ===

let asistenciaPerfecta = false;

// Negación
let tieneFallas = !asistenciaPerfecta;

console.log("\n=== Validaciones con ===");
console.log("Asistencia perfecta?", asistenciaPerfecta);
console.log("Tiene fallas?", tieneFallas);


// === Condiciones lógicas ===

// Aplica bonus si gana más de cierto valor o cumple condiciones
let bonusAplicable = (gananciaTutor1 >= 144_000 && asistenciaPerfecta === true) || gananciaTutor2 > 200_000;

console.log("\n=== Condiciones lógicas ===");
console.log("Bonus aplicable?", bonusAplicable);


// === Resumen ===

console.log("\n=== Resumen ===");
console.log("Ingreso total:", ingresoTotal);
console.log("Cupos disponibles:", cuposDisponibles);
console.log("Tutor recibe bono:", bonusAplicable);