let number = prompt("Introduce un numero");
number =parseInt(number);
if (number > 0) {
    alert('El numero es positivo');
    console.log("El numero es positivo");
}else if (number === 0) {
    alert("El numero ingresado es igual a cero");
    console.log("El numero ingresado es igual a cero");
}
else {
    alert("El numero ingresado es negativo");
    console.log("El numero ingresado es negativo");
}

