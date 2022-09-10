// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {
  nombre: nombre,
  edad: edad
};
 
 console.log(PERSONAJE);
// Cree una interfaz que sirva para validar el siguiente objeto
interface superHeroe{
    nombre: string;
    artesMarciales: string[];
}

 var batman: superHeroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Jiu-Jitsu"]
}

console.log(batman);
 
// Convertir esta funcion a una funcion de flecha
const resultadoDoble = ( a: number, b: number ):number => {
    return (a + b) * 2;
}
 
console.log(resultadoDoble(15,25));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
const getAvenger = ( nombre: string, poder?: string, arma: string = 'arco' ) =>{
  var mensaje;
  if( poder ){
     mensaje = nombre + " Tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " Tiene un " + poder
  }
  console.log(mensaje);
};
 
getAvenger('Peter Parker','Sentido Aracnido');
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{

    constructor(public base: number, 
                        altura: number){}

    calcularArea = (base: number, altura: number) => {
        return base * altura;
    }
    r1: Rectangulo = new Rectangulo(7,8);
    
}
    
console.log()