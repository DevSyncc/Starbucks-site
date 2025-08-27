let imagem = document.querySelector(".imagem-copo");
let fundo = document.querySelector(".circulo");

function TrocarImagem(endereco) {
    imagem.src = endereco
}

function Alert(alert){
    alert("Ir para pagamento?\n★ sync top 1")
    window.open("https://discord.gg/Hhmu7Ctu", "_blank");
}
function trocafundo(cor){
    fundo.style.background = cor
}
