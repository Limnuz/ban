// GERA BANNER ALEATÓRIO NAS DIVS ID="TOP", ID="LEFT" E ID="RIGHT"

var topo = document.querySelector("div#top")
var esquerda = document.querySelector("div#left")
var direita = document.querySelector("div#right")
var modal = document.querySelector("div.modal")

//todos as pastas com banners
//var folders = [['seduzir','https://www.escoladeseducao.com/matricule-se/?ref=D50695930P'], ['orgasmo','https://go.hotmart.com/O50734083K'],['emagrecer','https://go.hotmart.com/O50746723G'],['dinheiro_jogando','https://go.hotmart.com/G50748993D'], ['emagreca_19_dias','https://go.hotmart.com/U51196897Q'],['receitas_coqueteis','https://go.hotmart.com/V51223595M']]
var folders = [['AILix','https://www.youtube.com/watch?v=yxdrzWeu3tQ&list=PLXyBHgP9zUAwQzUbkhDp0r7NVTQT-rI2N'], ['ER','https://aprovadoser.com.br/empregorapido/'],['22MANEIRAS','https://myninjalink.com/s/index.php/22-maneiras/']]

//gera o banner top
var folderTop = randomFolder()
try {
topo.innerHTML= `<a href=${folders[folderTop][1]} target="_blank">  <img src="https://limnuz.github.io/ban/${folders[folderTop][0]}/top.jpg"> </a>`
} catch (e){
    console.log(e)
}

if(window.innerWidth > 1100){ 
    //gera o banner left
    var folderLeft = randomFolder()
    while(folderTop == folderLeft){
        folderLeft = randomFolder()
    }
    try {
    esquerda.innerHTML= `<a href=${folders[folderLeft][1]} target="_blank">  <img src="https://limnuz.github.io/ban/${folders[folderLeft][0]}/side.jpg"> </a>`
    } catch (e){
        console.log(e)
    }

    //gera o banner right
    var folderRight = randomFolder()
    while(folderRight == folderTop || folderRight == folderLeft){
        folderRight = randomFolder()
    }
    try {
    direita.innerHTML= `<a href=${folders[folderRight][1]} target="_blank">  <img src="https://limnuz.github.io/ban/${folders[folderRight][0]}/side.jpg"> </a>`
    } catch (e){
        console.log(e)
    }
}

//gera banner modal

/* Insira no html para ativar:
<div id="modal-promocao" class="modal-container">
    <div class="modal">
    </div>
</div>
*/
var modalCss = document.createElement('link')
modalCss.setAttribute('rel', 'stylesheet')
modalCss.setAttribute('href', 'https://limnuz.github.io/ban/modal.css')
document.head.appendChild(modalCss)
var folderModal = randomFolder()
try {
modal.innerHTML = `<button class="fechar">x</button> 
<a href="${folders[folderModal][1]}" target="_blank"> <img src="https://limnuz.github.io/ban/${folders[folderModal][0]}/side.jpg"> <h3> Saiba Mais </h3> </a>`
} catch (e){
    console.log(e)
}

//Gera um número aleatório entre 0 e a quantidade de pastas com banners
function randomFolder (qtd = folders.length){
    var result = Math.random() * qtd
    return Math.floor(result)
}


//SCRIPT GERAL DO MODAL
localStorage.fechaModal = '1'
function iniciaModal(modalID) {
    if(localStorage.fechaModal !== modalID) {
        const modal = document.getElementById(modalID);
        if(modal) {
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                    localStorage.fechaModal = modalID;
                }
            });
        }
    }
}


setTimeout(iniciar, 3000)

function iniciar(){
    iniciaModal('modal-promocao')
}




