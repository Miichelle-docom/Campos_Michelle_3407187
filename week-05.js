const tutorNombre = "Laura Gómez";
const materia = "Matemáticas";
const sesionesDisponibles = 3;
const sesionesTotales = 10;
const tipoTutor = "premium"; 
const tutorActivo = true;


const perfilTutor = {
    experiencia: {
        años: 5,
        especialidad: "Álgebra"
    }
    
};

let clasificacionDisponibilidad;

if (sesionesDisponibles <= 2) {
    clasificacionDisponibilidad = "Alta demanda";
} else if (sesionesDisponibles <= 5) {
    clasificacionDisponibilidad = "Demanda media";
} else {
    clasificacionDisponibilidad = "Baja demanda";
}

const estadoTutor = tutorActivo ? "Disponible" : "No disponible";

let descripcionTipo;

switch (tipoTutor) {
    case "basico":
        descripcionTipo = "Tutor básico";
        break;
    case "premium":
        descripcionTipo = "Tutor premium";
        break;
    case "experto":
        descripcionTipo = "Tutor experto";
        break;
    default:
        descripcionTipo = "Tipo desconocido";
}

const especialidad = perfilTutor.experiencia?.especialidad ?? "No especificada";

const añosExperiencia = perfilTutor.experiencia?.años ?? "No disponible";

console.log(`
📌 FICHA DEL TUTOR

👩‍🏫 Nombre: ${tutorNombre}
📖 Materia: ${materia}
🎯 Tipo: ${descripcionTipo}
📊 Estado: ${estadoTutor}

📅 Sesiones disponibles: ${sesionesDisponibles}/${sesionesTotales}
🔥 Clasificación: ${clasificacionDisponibilidad}

🧠 Especialidad: ${especialidad}
⏳ Experiencia: ${añosExperiencia} años
`);