console.log('===========================');
console.log('FICHA DE DATOS: Tutoría Virtual');
console.log('===========================');

let nombre = 'App de Tutoría Virtual';
let capacidad = 50;
let precio = 48000;
let isActive = true;

console.log('');
console.log('Nombre:     ' + nombre);
console.log('Capacidad:  ' + capacidad + ' usuarios');
console.log('Precio:     $' + precio + ' por sesión');
console.log('Activo:     ' + isActive);

console.log('');
console.log('--- Tipos de datos ---');
console.log('typeof nombre:    ' + typeof nombre);
console.log('typeof capacidad: ' + typeof capacidad);
console.log('typeof precio:    ' + typeof precio);
console.log('typeof isActive:  ' + typeof isActive);

console.log('');
console.log('--- Conversiones ---');

let precioTexto = '$' + precio;

console.log('Precio como texto: "' + precioTexto + '"');
console.log('typeof precio string: ' + typeof precioTexto);

console.log('');
console.log('--- Valor nulo ---');

let patrocinador = null;

console.log('Patrocinador actual: ' + patrocinador);
console.log('¿Es null?:  ' + (patrocinador === null));

console.log('');
console.log('===========================');
console.log('FIN DE FICHA');
console.log('===========================');