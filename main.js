//Un condicional nos sirve para tomar decisiones en base a datos que tengamos (o tomemos del usuario)

//estructura básica de un IF

/*if(condicion) {
    //bloque de código de ejecución
}*/

/* if es la palabra RESERVADA para ver si se cumple tal o cual condición y luego ejecuta el
bloque de código*/

/*let edad = parseInt(prompt ("Ingrese su edad"));

edad = Number(edad);

if (edad >= 18 ){
    alert("Puedes entrar a la aplicación");
}  else {
    alert ("Acceso denegado a la app.. espere a cumplir 18!")
}*/

//Tipo de datos: boolenaos. Dos valores: falso o verdadero

/*if(true){
    alert("este código se va a ejecutar")
}
if (false){
    ("este código no se va a ejecutar")
}*/

/*let mostrar = false;

if (mostrar) {
    alert ("diga un número del uno al cinco");
}*/

//Prioridades para resolver el código:
//1°: se resuelve lo que esta adentro de ()
//2°: se resuelve el código y se ejecuta. 

//¿Cómo se si una condición me queda en true o en false, dependiendo de los booleanos?

//Operadores lógicos
// && (ampersand) = va a comparar dos condiciones: condición && condición: 
//Si una condición es verdadera y la otra también es verdadera nos retorna true (verdadero)
// Si alguna de las dos condiciones o ambas son falsas: nos va a retornar false

//OR || COMPARA DOS CONDICIONES: La TRIPLE T = TRUE
// TRUE + TRUE = TRUE
//TRUE + FALSE = TRUE
//FALSE +TRUE = TRUE
//FALSE + FALSE = FALSE

//((true && true) && false) // false 
// (((!false || false) && true)) // true
// (((!true || false) && true)) // false 

// = es solamente para asignar variables (no compara)
// == igual que (18 == 18 true) (18 == "18" true) 
// === estricamente igual (18 === 18 true) (18 === "18" false acá el primer 18 es number y el segundo es string) 
// != distinto de  
// !== estrictamente distinto de 
// ESTRICTAMENTE COMPARA EL TIPO DE DATO. == NO COMPARA TIPO DE DATO. === COMPARA TIPO DE DATO.
//> mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que 
//! NOT (devuelve el valor opuesto, niega la condición)

let identificacion = parseInt(prompt( "Ingrese Dni"));
let carnetDeConducir = parseInt(prompt("Ingrese número de carnet de conducir"));
let edad = parseInt(prompt("Ingrese su edad"));

if (((identificacion || carnetDeConducir) && edad>17 && edad<70)){
    alert ("Puede continuar el acceso e identificarse");
}   
else {
    alert("No puede identificarse o conducir");
}

