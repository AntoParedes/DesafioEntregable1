function datos() {
    let numero1 = parseInt(prompt("primer número?"));
    let numero2 = parseInt(prompt("segundo número"))
    let operacion = prompt("operacion +,-,/,*");
    let resultado = 0;

    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            alert(resultado);
            break;
        case "-":
            resultado = numero1 - numero2;
            alert(resultado);
            break;
        case "*":
            resultado = numero1 * numero2;
            alert(resultado);
            break;
        case "/":
            resultado = numero1 / numero2;
            alert(resultado);
            break;
        default:
            alert("esto no es una suma");
            break;
    }


}