const sumar = require('./index');

if (sumar(2, 3) === 5) {
    console.log("Test pasado");
    process.exit(0);  // Cambié ProcessingInstruction.exit(0) por process.exit(0)
} else {
    console.log("Test fallido");
    process.exit(1);  // Esto terminará el proceso con el código de error 1 si el test falla
}