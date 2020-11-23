import cipher from './cipher.js';

function onClickEncriptar() {
  
        //1.OBTENER EL TEXTO(DOCUMENT.GET...IDCAJA CERRAR PARENTESIS Y PONER .VALUE) ASIGNARLO A UNA VARIABLE ,EXTRAER EL VALUE DE LA CAJA DE TEXTO
        const txtMensaje = document.getElementById("txtMensaje").value;
        
        //2.OBTENER EL DESPLAZAMIENTO Y ASIGNARLO A UNA VARIABLE
        const desplazamiento = document.getElementById("numeroDesplazamiento").value;

        //3.INVOCAR LA FUNCION DE CIPHER (FALTA ESCRIBIRLA)EL VALOR QUE ME DEVUELVA CIPHER ASIGNARLO A UNA VARIABLE
        const txtMensajeEncriptado= cipher.encode(txtMensaje,desplazamiento );
        //4.ASIGNAR EL TEXTO ENCRIPTADO AL MENSAJE2
         document.getElementById("txtMensajeEncriptado").value=txtMensajeEncriptado;
        //5.DECENCRIPTAR ES HACER LO MISMO PERO AL REVES 
               
}
function onClickDescifrar (){ 
       const txtMensajeEncriptado= document.getElementById("txtMensajeEncriptado").value;
       const desplazamiento= document.getElementById("numeroDesplazamiento").value;
       const txtDescencriptado=cipher.decode(txtMensajeEncriptado,desplazamiento);
       document.getElementById("txtMensaje2").value=txtDescencriptado;
       console.log (txtDescencriptado)
    
        console.log ("Aqui estoy")

}
document.getElementById("btnDescifrar").addEventListener("click", onClickDescifrar)


document.getElementById("btnCifrar").addEventListener("click", onClickEncriptar)

document.getElementById("txtMensaje").addEventListener('keypress', (event) => {
        const keyName = event.key;
        document.getElementById("txtMensaje").value=document.getElementById("txtMensaje").value.toUpperCase()
      });







