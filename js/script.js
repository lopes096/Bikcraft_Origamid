//ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a");

function ativarLink (link){
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)){
        link.classList.add("ativo");
    }
}
links.forEach(ativarLink);


//ATIVAR ITENS DO ORÇAMENTO
const parametros = new URLSearchParams(window.location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if (elemento){
    elemento.checked = true;
    }
}
parametros.forEach(ativarProduto);


//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    resposta.classList.toggle('ativa');
    
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas (pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);




const galeria = document.querySelectorAll(".bicicleta-imgs img");
const galeriaContainer = document.querySelector('.bicicleta-imgs');

function galeriaTrocar(event){
    const imagem = event.currentTarget;
    const media = matchMedia("(min-width: 920px)").matches;
    if (media){
    galeriaContainer.prepend(imagem); 
    }   
    
}
 
function galeriaClick (imagem){
    imagem.addEventListener('click', galeriaTrocar);
}
galeria.forEach(galeriaClick);