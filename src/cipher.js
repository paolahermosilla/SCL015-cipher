
const cipher = {
  encode: (txtMensaje, numeroDesplazamiento) => {
    let resultado = "";
    numeroDesplazamiento = (numeroDesplazamiento % 26 + 26) % 26;
    if (txtMensaje) {
      for (let i = 0; i < txtMensaje.length; i++) {
        const ascii = txtMensaje.charCodeAt(i);
        const asciimodificado = (ascii - 65 + numeroDesplazamiento) % 26 + 65;
        resultado = resultado + String.fromCharCode(asciimodificado)
      }

    }
    return resultado;
  },
  decode: (txtMensajeEncriptado, numeroDesplazamiento) => {
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



