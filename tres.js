/*
Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, 
Si se recibieron entre 2 y 4 millones el descuento es del 20% 
con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento 
*/

function mostrar()
{
	let origen,
	cantidadVacunas,
	costoVuelo,
	origenMaxCantidad,
	promedioAsia,
	contAsia=0,
	acumAsia=0,
	contUsa=0,
	contEuropa=0,
	totalbruto=0,
	totalNeto,
	descuento;

	for (let i = 0; i < 10; i++) {
	
		origen = prompt("Ingrese origen de vuelo Asia, Europa o USA").toLowerCase();
		while (!(origen=="asia"||origen=="usa"||origen=="europa")) {
			origen=prompt("Incorrecto! Solo puede ser USA Europa Asia").toLowerCase();
		}
		cantidadVacunas = parseInt(prompt("Ingrese la cantidad de vacunas"));
		while (isNaN(cantidadVacunas) || cantidadVacunas==0) {
			origen=prompt("Incorrecto! No ingrese 0");
		}
		costoVuelo = parseInt(prompt("Ingrese el costo del vuelo, entre 1 y 5 millones "))
		while (!(costoVuelo>=1000000 && costoVuelo<=5000000)) {
			costoVuelo = parseInt(prompt("Incorrecto! Numero entre 1000000 y 5000000"))
		}
		//c
		totalbruto += costoVuelo;

		if(origen=="asia"){
			acumAsia+=cantidadVacunas
			contAsia++;
		} else if (origen=="usa"){
			contUsa++;
		} else{
			contEuropa++;
		}
		//a
		if (contUsa>contAsia && contUsa>contEuropa) {
			origenMaxCantidad = contUsa;
		} else if (contAsia<=contUsa || contEuropa){
			origenMaxCantidad = contAsia;
		} else {
			origenMaxCantidad = contEuropa;
		}
	}

	if(totalbruto>4000000){
		totalNeto = totalbruto * 0.3;
		descuento = "Su descuento fue de 30%";
	}else if(totalbruto>=2000000 || totalbruto<=4000000){
		totalNeto = totalbruto * 0.2;
		descuento = "Su descuento fue de 20%";
	}else {
		totalNeto = totalbruto;
		descuento = "No hay descuento, page con el importe bruto ";
	}

	promedioAsia = acumAsia/contAsia

	console.log("El origen que envió mayor cantidad de vacunas es : "+origenMaxCantidad);
	console.log("El origen que envió mayor cantidad de vacunas es : "+promedioAsia);
	console.log("El total sin descuentos a pagar por los gastos de los viajes : "+totalbruto);
	console.log("Su descuento es de : "+descuento);
	console.log("Su total a pagar es :"+totalNeto);
}




