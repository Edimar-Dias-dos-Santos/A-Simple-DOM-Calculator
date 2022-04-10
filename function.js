function getValue(num) {
    var verifica = document.getElementById('resultado').innerHTML;
    var qtd = document.getElementById('resultado').innerHTML;

    if (verifica.length < 16) {
        verifica += num;
        document.getElementById('resultado').innerHTML = verifica;
    }
}

function limpaTudo() {
    document.getElementById('resultado').innerHTML = "";

}
function apagaUm() {
    var um = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = um.substring(0, um.length - 1);

}

function calcular() {
    var calculoFinal = document.getElementById('resultado').innerHTML;
    if (calculoFinal) {
        document.getElementById('resultado').innerHTML = eval(calculoFinal);
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular";

    }
}