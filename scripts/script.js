//Variáveis para selecionar os elementos da página
const buttonCriptografar = document.querySelector(".button-criptografar");
const txtCriptografar = document.querySelector(".texto-criptografar");
const aviso = document.querySelector(".texto-aviso");
const saida = document.querySelector(".output-texto");
const container = document.querySelector(".container-output");
const buttonCopiar = document.querySelector(".btn-copiar");
const buttonDescriptografar = document.querySelector(".button-descriptografar");
const textoOutPut1 = document.querySelector(".texto-output1") ;
const textoOutPut2 = document.querySelector(".texto-output2") ;
/*
Interação para que o script de criptografar
seja iniciado ao clicar no botão definido
*/
buttonCriptografar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        saida.innerHTML = texto;
        buttonCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});
/*
Interação para que o script de descriptografar
seja iniciado ao clicar no botão definido
*/

buttonDescriptografar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        saida.innerHTML = texto;
        buttonCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

/*
Interação para que ao clicar no botão de copiar o texto
criptografado ou descriptografado passe para a
área de transferência do usuário 
*/
buttonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = saida;
    copiar.select();
    document.execCommand("copy"); 
});