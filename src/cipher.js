
const cipher = {
  encode: function (txtMensaje, numeroDesplazamiento) {
debugger;
    let resultado = "";

    numeroDesplazamiento = (numeroDesplazamiento % 26 + 26) % 26;
    //estudiar ,ir decifrando por parte .

    ///["H","O","L","A"]
    ///[ 0,  1,  2,  3]

    const largoTexto = txtMensaje.length;

    for (let contador = 0; contador < largoTexto; contador++) {
    
      const ascii = txtMensaje.charCodeAt(contador);

      const asciimodificado = (ascii - 65 + numeroDesplazamiento) % 26 + 65;
      resultado = resultado + String.fromCharCode(asciimodificado)
    }

    return resultado;

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



