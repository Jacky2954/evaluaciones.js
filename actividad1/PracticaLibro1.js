/* 
• Escriba un programa para calcular el precio total de la compra de su
teléfono. Seguirás comprando teléfonos (pista: ¡bucle!) Hasta que te
quedes sin dinero en tu cuenta bancaria. También comprará accesorios
para cada teléfono siempre que el monto de su compra esté por debajo
de su umbral de gasto mental.
• Una vez que haya calculado el monto de su compra, agregue el
impuesto y luego imprima el monto calculado de la compra, con el
formato correcto.
• Finalmente, verifique el monto con el saldo de su cuenta bancaria para
ver si puede pagarlo o no.
• Debe configurar algunas constantes para la "tasa impositiva", el "precio del
teléfono", el "precio de los accesorios" y el "umbral de gasto", así como una
variable para el "saldo de su cuenta bancaria".
• Debe definir funciones para calcular el impuesto y para
formatear el precio con un “$” y redondear a dos decimales */

//SOLUCIÓN

function tax(amount) {
	return amount * impuestoVenta_igv;
}

function formatAmount(amount, currency) {
	return currency + amount.toFixed(2);
}


const umbralDeGasto = 4000;
const impuestoVenta_igv = 1.18;
const xiaomiNote_10 = 610;
const accesorioAlexa = 160;
var cuentaBancaria = 10000;
var cantCelulares = parseInt(prompt("¿Cuántos equipos del modelo xiaomi Note 10 desea comprar?"));
var total = 0;

while(total < cuentaBancaria) {
    total = cantCelulares + xiaomiNote_10;
    if (cantCelulares < umbralDeGasto){
        cantCelulares = cantCelulares + accesorioAlexa;
    }
      
    total = total + tax(total);
      cuentaBancaria -= total;
  
      document.write(`<h2>El total es ${formatAmount(total, "S/.")
    } y el saldo de su cuenta es ${formatAmount(cuentaBancaria, "S/.")
    } después de la transacción</h2><br/>`);
      
      if(total > cuentaBancaria) document.write(`No tienes suficiente dinero en el banco. El saldo de su cuenta es ${formatAmount(cuentaBancaria, "S/.")
    } y el precio es de ${formatAmount(total, "S/.")}</h2><br/>`);
  }
  










