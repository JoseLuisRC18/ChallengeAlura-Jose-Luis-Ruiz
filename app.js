const textArea = document.querySelector(".cuadro_texto");
const salida = document.querySelector(".salida_resultado");


function BotonEncriptarTexto(){
        const texto_ya_encriptado = Encriptar(textArea.value);
        salida.value = texto_ya_encriptado
        textArea.value = "";
      //  salida.style.backgroundImage = "none"
        
    }
    
 

function Encriptar(CadenaEncriptada){
    let texto_encriptando = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    CadenaEncriptada = CadenaEncriptada.toLowerCase()
    for (let i = 0; i < texto_encriptando.length; i++) {
        if (CadenaEncriptada.includes(texto_encriptando[i][0])) {
            CadenaEncriptada = CadenaEncriptada.replaceAll(texto_encriptando[i][0],texto_encriptando[i][1])
            
        }
        
    }
    return CadenaEncriptada;
    
}

function BotonDesencriptarTexto(){
    const texto_ya_encriptado = Desencriptar(textArea.value);
    salida.value = texto_ya_encriptado
    textArea.value = "";

}

function Desencriptar(CadenaDesEncriptada){
    let texto_encriptando = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    CadenaDesEncriptada = CadenaDesEncriptada.toLowerCase()
    for (let i = 0; i < texto_encriptando.length; i++) {
        if (CadenaDesEncriptada.includes(texto_encriptando[i][1])) {
            CadenaDesEncriptada = CadenaDesEncriptada.replaceAll(texto_encriptando[i][1],texto_encriptando[i][0])
            
        }
        
    }
    return CadenaDesEncriptada;

}

function copiarTexto() {
    navigator.clipboard.writeText(salida.value)

    salida.value = ''; // Limpiar el textarea
    //probando con console.log
        //.then(() => console.log('Texto copiado al portapapeles!'))
       // .catch(err => console.error('Error al copiar el texto: ', err));
}

// Añadimos el evento al botón con clase 'btn-copiar'
document.querySelector('.copiar').addEventListener('click', copiarTexto);


textArea.addEventListener("input", () => {
    const isNotEmpty = textArea.value.trim() !== "";
    const displayStyle = textArea.value.trim() ? "none" : "block";
    document.querySelector(".primer_advertencia").style.display = displayStyle;
    document.querySelector(".segunda_advertencia").style.display = displayStyle;
    if (isNotEmpty) {
        salida.style.backgroundImage = "none";
      } else {
        salida.style.backgroundImage = "url('img/Muñeco.png')"; // Ruta de la imagen de fondo
      }
      return 0;
    });


  /*
textArea.addEventListener("input", () => {
    const displayStyle = textArea.value.trim() ? "none" : "block";
    document.querySelector(".primer_advertencia").style.display = displayStyle;
    document.querySelector(".segunda_advertencia").style.display = displayStyle;


  });
  */
