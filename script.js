const inputTexto = document.querySelector(".input-texto")
let mensagem = document.querySelector(".mensagem")
let btnCopiar = document.querySelector(".copiar")
let inforPainel = document.querySelector(".informacao-painel")
let inforNenhuma = document.querySelector(".informacao-nenhuma")
let auxFluxoCode = true;
const regex = /[^a-zA-Z ]+/g
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

const btncriptografar = () => {
    auxFluxoCode = true;
    validaInput(inputTexto.value)
    if(auxFluxoCode == true){
        const encriptarTexto = encriptar(inputTexto.value);
        mensagem.value = encriptarTexto;
        mensagem.style.backgroundImage = "none"
        inforPainel.style.display = "none"
        btnCopiar.style.display = "inline-block";
        inputTexto.value = ""
        inputTexto.placeholder = "Digite seu texto"
        inforNenhuma.style.display = "none"
    }

}

const btndescriptografar = () => {
    auxFluxoCode = true;
    validaInput(inputTexto.value)
    if(auxFluxoCode == true){
        const descriptarTexto = descriptar(inputTexto.value);
        mensagem.value = descriptarTexto;
        btnCopiar.style.display = "inline-block"
        inputTexto.value = ""
        inputTexto.placeholder = "Digite seu texto"
        inforNenhuma.style.display = "none"
    } 
}

const btnCopia = () => {
    let textoCopiado = document.getElementById("mensagem");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    //navigator.clipboard.writeText(mensagem.value)
    mensagem.value = ""
    btnCopiar.style.display = "none"
    mensagem.placeholder = ""
    inforNenhuma.style.display = "inline-block"

}


const encriptar = (input) => {
    input = input.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (input.includes(matrizCodigo[i][0])) {
            input = input.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return input
}

const descriptar = (input) => {
    input = input.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (input.includes(matrizCodigo[i][1])) {
            input = input.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return input
}

const validaInput = (input) => {
    console.log(input);
    if (input == null || input == "") {
        alert("Digite um texto primeiro")
        auxFluxoCode = false;
    }else if (input.search(regex) == 0) {
        alert("O texto não pode conter números e nem caracteres especiais")
        auxFluxoCode = false;
    }
}