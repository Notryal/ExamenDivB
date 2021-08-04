/*
El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta
*/
function mostrar()
{   
let nacionalidad,
resultado,
edad,
cepa,
porPositivos,
contPositivo=0,
porNegativos,
contNegativo=0,
cepaMasEncontrada,
contBeta,
contAlfa,
contDelta,
maxEdadContagiado=0,
flag=1,
contArgentinoDelta;

for (let i = 0; i < 8; i++) {

    nacionalidad = prompt("Ingrese nacionalidad (argentina/extranjero)").toLowerCase();
    while (!(nacionalidad=="argentina" || nacionalidad=="extranjero")) {
        nacionalidad=prompt("Incorrecto! Ingrese nacionalidad argentina O extranjero");
    }
    resultado = prompt("Ingrese resultado del hisopado, positivo/negativo").toLowerCase();
    while (!(resultado=="positivo" || resultado=="negativo")) {
        resultado=prompt("Incorrecto! Ingrese si el hisopado fue positivo o negativo!").toLowerCase();
    }
    edad= parseInt(prompt("Ingrese edad").toLowerCase());
    while (!(edad<=65 && edad>=18)) {
        edad= parseInt(prompt("Incorrecto! Ingrese un numero!").toLowerCase());
    }
    if(resultado=="positivo"){
            contPositivo++
            cepa = prompt("Su resultado fue positivo, ingrese su cepa: ").toLowerCase();
            while (!(cepa =="delta" ||cepa=="alfa" ||cepa== "beta")) {
            cepa = prompt("Incorrecto!No ingrese numeros ni deje en blanco, Ingrese su cepa: ").toLowerCase();
            }
    }else{  
            alert("Su resultado es negativo! Felicitaciones!");
            contNegativo++;
    }
    //c
    if(cepa=="delta"){
        contDelta++;
        if(nacionalidad=="argentina"){
            contArgentinoDelta++;
        }
    } else if(cepa=="alfa"){
        contAlfa++;
    } else {
        contBeta++;
    }

    if(contDelta>contAlfa && contDelta>contBeta){
        cepaMasEncontrada=="Delta";
    }else if(contBeta<=contDelta || contAlfa){
        cepaMasEncontrada = "Beta";
    }else {
        cepaMasEncontrada = "Alfa";
    }
    //d
    if(flag || edad<maxEdadContagiado){
        flag=0;
        maxEdadContagiado=edad;
    }

}
    porNegativos == (contNegativo * i)/100;
    porPositivos == (contPositivo * i)/100;

    console.log("Porcentaje de positivos : "+porPositivos+"%");
    console.log("Porcentaje de negativos : "+porNegativos+"%");
    console.log("Cuál es la cepa más encontrada : "+cepaMasEncontrada);
    console.log("Edad del mayor extranjero contagiado : "+maxEdadContagiado);
    console.log("Cantidad de personas argentinas contagiadas con la delta : "+contArgentinoDelta);

   
}
