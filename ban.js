var topo = document.querySelector("div#top")
var esquerda = document.querySelector("div#left")
var direita = document.querySelector("div#right")

var folders = [['seduzir','https://www.escoladeseducao.com/matricule-se/?ref=D50695930P'], ['orgasmo','https://go.hotmart.com/O50734083K?dp=1'], ['informatica', 'https://go.hotmart.com/W50745338B']]

var folderTop = randomFolder()
try {
topo.innerHTML= `<a href=${folders[folderTop][1]}>  <img src="https://limnuz.github.io/ban/${folders[folderTop][0]}/728x90.jpg"> </a>`
} catch (e){
    console.log(e)
}

var folderLeft = randomFolder()
try {
esquerda.innerHTML= `<a href=${folders[folderLeft][1]}>  <img src="https://limnuz.github.io/ban/${folders[folderLeft][0]}/300x250.jpg"> </a>`
} catch (e){
    console.log(e)
}

var folderRight = randomFolder()
try {
direita.innerHTML= `<a href=${folders[folderRight][1]}>  <img src="https://limnuz.github.io/ban/${folders[folderRight][0]}/300x250.jpg"> </a>`
} catch (e){
    console.log(e)
}


function randomFolder (qtd = folders.length){
    var result = Math.random() * qtd
    return Math.floor(result)
}







