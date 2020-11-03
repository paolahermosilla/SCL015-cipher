
const cipher={
    encode:function (txtMensaje , numeroDesplazamiento){
        let resultado="";
        let letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        numeroDesplazamiento= (numeroDesplazamiento % 26 + 26) % 26;
        if (txtMensaje){
            for (let i = 0; i<txtMensaje.length; i++){
                
               const ascii= txtMensaje.charCodeAt(i);
               const asciimodificado= (ascii-65+numeroDesplazamiento)%26 + 65;
            
            resultado= resultado+String.fromCharCode(asciimodificado) 
            }
    
            }
              return resultado;
        }
}



    
    
  export default cipher;


