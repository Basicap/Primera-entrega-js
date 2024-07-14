
function pesosaEuros(pesos, tasaCambio){
    console.log(pesos, tasaCambio)
    return pesos / tasaCambio;}

function EurosaPesos(Euros, tasaCambio){
    console.log(Euros, tasaCambio)
    return Euros * tasaCambio;}

const formatearDecimal = numero => { return numero.toLocaleString('es-AR', {minimunFractiondigits: 2, maximumFractionDigits: 2});}


function convertir(){ 
     let tasaCambio = 1638.40;


                     
let opcion = prompt('¿Quieres convertir 1) Pesos a Euros o 2) Euros a pesos? \n ingrese 1 o 2 para avanzar.');

if(opcion === '1'){
    let pesos = parseFloat(prompt('ingrese la cantidad de pesos a convertir en Euros:'))
    if (isNaN(pesos) || pesos < 1){
        alert ('por favor ingrese un valor valido.');
        } else {
        let Euros = pesosaEuros(pesos,tasaCambio);
        alert(`El equivalente en Euros de ${formatearDecimal(pesos)} es U$D${formatearDecimal(Euros)}`);
        }
} else if(opcion === '2'){
        let Euros = parseFloat(prompt('ingrese la cantidad de Euros a convertir en pesos:'))
        if (isNaN(Euros) || Euros < 1){
        alert ('por favor ingrese un valor valido.');
        } else {
        let pesos = EurosaPesos(Euros, tasaCambio);
        alert(`El equivalente en pesos argentinos de Euros ${formatearDecimal(Euros)} es $${formatearDecimal(pesos)}`);
        }
} else{
    alert('Opcion no valida, porfavor ingrese 1 0 2 para avanzar, hace caso');
}

}

convertir()


