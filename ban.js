// GERA BANNER ALEATÓRIO NAS DIVS ID="TOP", ID="LEFT" E ID="RIGHT"

var topo = document.querySelector("div#top")
var esquerda = document.querySelector("div#left")
var direita = document.querySelector("div#right")

//todos as pastas com banners
var folders = [['seduzir','https://www.escoladeseducao.com/matricule-se/?ref=D50695930P'], ['orgasmo','https://go.hotmart.com/O50734083K?dp=1'], ['informatica', 'https://go.hotmart.com/W50745338B'],['emagrecer','https://go.hotmart.com/O50746723G']]

//gera o banner top
var folderTop = randomFolder()
try {
topo.innerHTML= `<a href=${folders[folderTop][1]}>  <img src="https://limnuz.github.io/ban/${folders[folderTop][0]}/728x90.jpg"> </a>`
} catch (e){
    console.log(e)
}

//gera o banner left
var folderLeft = randomFolder()
while(folderTop == folderLeft){
    folderLeft = randomFolder()
}
try {
esquerda.innerHTML= `<a href=${folders[folderLeft][1]}>  <img src="https://limnuz.github.io/ban/${folders[folderLeft][0]}/300x250.jpg"> </a>`
} catch (e){
    console.log(e)
}

//gera o banner right
var folderRight = randomFolder()
while(folderRight == folderTop || folderRight == folderLeft){
    folderRight = randomFolder()
}
try {
direita.innerHTML= `<a href=${folders[folderRight][1]}>  <img src="https://limnuz.github.io/ban/${folders[folderRight][0]}/300x250.jpg"> </a>`
} catch (e){
    console.log(e)
}


//Gera um número aleatório entre 0 e a quantidade de pastas com banners
function randomFolder (qtd = folders.length){
    var result = Math.random() * qtd
    return Math.floor(result)
}







