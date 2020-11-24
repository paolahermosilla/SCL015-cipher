//El nombre de la función.
const cipher = {//esta llave hace referencia que lo que viene es un objeto

           //parámetros de la función, entre paréntesis y separados por comas.
  encode: function (txtMensaje, numeroDesplazamiento) { //Las declaraciones de JavaScript que definen la función, encerradas entre llaves
debugger;
    let resultado = "";
    //variable de tipo let que esta inicializando un string vacio. 
    numeroDesplazamiento = (numeroDesplazamiento % 26 + 26) % 26;
    //variable con el calculo que reduce el desplazamiento si es mayor a 26(letras del abcdario)

    ///["H","O","L","A"]
    ///[ 0,  1,  2,  3]
    
    const largoTexto = txtMensaje.length;//variable tipo const que asigna el largo del mensaje(.length)
    
    //El bucle FOR se utiliza para repetir  instrucciones un determinado número de veces. 
    for (let contador = 0; contador < largoTexto; contador++) {
    //declara una variable con el valor 0 ,por cada iteracion del for va a evaluar esta condicion contador < largoTexto ,por cada iteracion que haga for le sumara ++ que equivale a 1
      const ascii = txtMensaje.charCodeAt(contador);
//variable tipo const que se le asigna el codigo ascii  con charCodeAt nos da el numero de la letra 
      const asciimodificado = (ascii - 65 + numeroDesplazamiento) % 26 + 65;
      //variable tipo const con el calculo que entrega el nuevo codigo ascii de la letra
      resultado = resultado + String.fromCharCode(asciimodificado)
    } //nos entrega la letra de un codigo ascii 

    return resultado;//

  },
  decode: function (txtMensajeEncriptado, numeroDesplazamiento) {
    let resultado = "";
    numeroDesplazamiento = (numeroDesplazamiento % 26 - 26) % 26;
    if (txtMensajeEncriptado) {
      for (let i = 0; i < txtMensajeEncriptado.length; i++) {
        const ascii = txtMensajeEncriptado.charCodeAt(i);
        const asciimodificado = (ascii - 65 - numeroDesplazamiento) % 26 + 65;
        console.log(String.fromCharCode(asciimodificado))
        resultado = resultado + String.fromCharCode(asciimodificado)
      }

    }
    return resultado;
  },

}

export default cipher;



