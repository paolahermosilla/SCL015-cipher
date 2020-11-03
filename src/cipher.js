function cifrar (txtMensaje , numeroDesplazamiento){
    let resultado="";
    let letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numeroDesplazamiento= (numeroDesplazamiento % 26 + 26) % 26;
    if (txtMensaje){
        for (let i = 0; i<txtMensaje.length; i++){
            if (letras.indexOf(txtMensaje[i])!=-1){
                let posicion = (letras.indexOf(txtMensaje[i])+numeroDesplazamiento)%26;
                resultado += letras[posicion];
            }
            else 
            resultado += texto[i];
        }

        }
          return resultado;
    }


    
    
    //cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha
    // en el alfabeto y string el mensaje (texto) que queremos cifrar.
 
  
    //Formula  = (Posicion letra+Valor fijo )% residuo de 26


export default cipher;
