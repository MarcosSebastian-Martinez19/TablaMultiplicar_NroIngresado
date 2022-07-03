/*8.Muestra la tabla de multiplicar de un numero introducido por pantalla */

let ingresoNumero = parseInt(prompt("Ingrese un número"))

document.write("La tabla del " + ingresoNumero + " es: ")

for (let i = 0; i <= 10; i++) {
    if(i * ingresoNumero <= 100) {
        document.write("<br>" + i + " x " + ingresoNumero + " = " + (i * ingresoNumero))
    }
}