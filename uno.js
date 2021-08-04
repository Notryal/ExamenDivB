/*
Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
*/


function mostrar()
{
let nombre,
edad, 
vacuna,
dosis,
sexo,
seguir,
promedioEdadRusa,
contEdadRusa=0,
acumEdadRusa=0,
mujerViejaNombre,
mujerEdadVieja=0,
mujerViejaVacuna,
vacunados=0,
vacunadosDosDosis=0,
acumMayorAmericana=0,
contChina=0,
porcentajeViejoAmericana,
porcentajeDosDosis,
vacunaMenosUsada,
flag=1;

do {
	nombre = prompt("Ingrese nombre").toLowerCase();
	while (!(isNaN(nombre)) && (marca.length >= 3 || marca.length <= 10)){
		nombre = prompt("Incorrecto. Ingresar un nombre, sin numeros : ").toLowerCase();
	}
	edad = parseInt(prompt("Ingrese su edad").toLowerCase());
	while(!(edad>=12)){
		edad = parseInt(prompt("Incorrecto! Ingrese edad mayor a 12").toLowerCase());
	}
	
	if ((edad<=17 && edad>=12)){
		alert("Usted solo tiene permitido la vacuna americana");
		vacuna = "americana";
	} else if (edad>17) {
		vacuna = prompt("Ingrese nombre de la vacuna americana/rusa/china").toLowerCase();
		while(!(vacuna == "americana" || vacuna=="rusa"|| vacuna=="china")){
			vacuna = prompt("Incorrecto! americana/rusa/china").toLowerCase();
		}
	}
	dosis = prompt("Ingrese si es su primer o segunda dosis p/s").toLowerCase();
	while(!(dosis=="p" || dosis=="s")){
		dosis=prompt("Incorrecto! Ingrese p (primer) o s (segunda) dosis");
	}
	sexo = prompt("Ingrese su genero f/m").toLowerCase();
	while (!(sexo == "f" || sexo =="m")) {
		sexo = prompt("Incorrecto! Ingrese su genero f o m").toLowerCase();
	}
	//d y c
	if (vacuna == "s") {
		vacunadosDosDosis++;
	} else{
		vacunados++;
	}
	
	//a
	if(vacuna== "rusa"){
		acumEdadRusa+=edad;
		contEdadRusa++;
	
	}
	//b
	if((flag  || edad<mujerEdadVieja) && sexo=="f"){
		flag=0;
		mujerViejaNombre=nombre;
		mujerViejaVacuna=vacuna;
	}
	//c
	if (vacuna =="americana" && edad>17) {
		acumMayorAmericana++;
	} 
	//e

	if(vacuna=="china"){
		contChina++;
	}

	if(acumMayorAmericana<contEdadRusa && acumMayorAmericana<contChina){
		vacunaMenosUsada = "Americana";
	} else if(contEdadRusa<=acumMayorAmericana || contEdadRusa){
		vacunaMenosUsada = "Rusa";
	} else{
		vacunaMenosUsada = "China";
	}
	
	seguir == prompt("Desea seguir ingresando datos? s/n");
} while (seguir=="s");

promedioEdadRusa=acumEdadRusa/contEdadRusa;
porcentajeViejoAmericana= acumMayorAmericana*100 /vacunados;
porcentajeDosDosis= vacunadosDosDosis*100/vacunados;

console.log("Promedio de edad de los que se vacunaron con la rusa : "+promedioEdadRusa);
console.log("Nombre y vacuna de la mujer con más edad : "+ mujerViejaNombre + "|" + "mujerViejaVacuna");
console.log("Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados :"+porcentajeViejoAmericana+"%");
console.log("Vacuna menos inoculada : "+vacunaMenosUsada);
}
