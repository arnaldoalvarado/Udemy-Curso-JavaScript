/****************************
 * SENTENCAIS CONDICIONALES
 */

 

/*var nombre = 'Arnaldo';
 var edad = 55;
 
 // edad < 12 es un niño
 // edad < 11 y < 18 es un adolescente
 // edad > 17 y < 60 es un adulto
 // edad > 60 es un anciano
 
 if(edad < 12){
     console.log(nombre + ' es un niño');
 }else if(edad > 11 && edad < 18){
     console.log(nombre + ' es un adolescente');
 }else if((edad > 17) && (edad < 60)){
       console.log(nombre + ' es un adulto');
 }
 console.log(nombre + ' es un anciano') */

 /*****************************
  * OPERADOR TERNARIO
 
 var nombre = 'Arnaldo'
 var edad = 19

 edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' es un adolescente');*/


 /***********************
  * Sentencia switch
  

 var mes = 5
    switch(mes){
        case 1:
            console.log('Enero');
            break;
        case 2:
            console.log('Febrero');
            break;
        case 3:
            console.log('Marzo');
            break;
        case 4:
            console.log('Abril');
            break;
        default:
            console.log('Mes no existe')

    }*/

    /***************************
     * Sentencias repetitivas - Bucles
     * Sentencia For
     * Sentencia While
     * Sentencia Do..While
     */

    /** Sentenci for
    for (var i = 1; i<= 10; i++){
       console.log(i);
    }

    for (var i = 10; i>= 1; i--){
        console.log(i);
     } */

     /** Sentencia While */

    /* var i = 1
     while(i <= 10){
         console.log(i)
         i++
     }

     var i = 10;
     while(i >= 1){
       console.log(i);
         i--;
     }*/

     /*** Sentencia do..While

     var i = 1;
     do{
         console.log(i);
         i++
     }while(i <= 10) */


     /************************
      * Ejercicios de sentencias
      * Tienes dos alumnos Pablo y María
      * Pablo tiene las siguientes notas en JavaScript: 14, 8, 16.
      * María tiene las siguientes notas del mismo curso: 12, 18, 10
      * ¿Calcular el promedio de cada alumno, además indicar quien tiene el promedio
      * superior, e indicar si el alumno esta aprobado, para ello su promedio deberá
      * ser superior a 13
      */

     
     var promedioPablo = (14 + 8 + 16)/3;
     var promedioMaria = (12 + 18 + 10)/3;
    
     if(promedioPablo > promedioMaria){
         console.log('Pablo tiene el promedio superior. ' + promedioPablo);
     }else if(promedioMaria > promedioPablo){
         console.log('>María tiene el promedio superior. ' + promedioMaria)
     }else{
         console.log('Pablo y María tienen promedios iguales.')
        
    }

    // Mostrar si estan aprobados

    if(promedioPablo > 13){
        console.log('Pablo está APROBADO')
     }else{
         console.log('Pablo está DESAPROBADO')
     }

     if(promedioMaria > 13){
        console.log('María está APROBADA')
     }else{
         console.log('María está DESAPROBADA')
     }
    

      






