function Balas(top){
    this.sprite=document.createElement("div")
    this.sprite.classList.add("balas")
    this.topPosition=top
    this.leftPosition=0
    this.sprite.style.top=this.topPosition+"px"
    this.sprite.style.left=this.leftPosition+"px"
}

function creadorBalas(){
    desorganizar(posicionBalas)
    let randomTop=posicionBalas[1]
    const balas=new Balas(randomTop)
    frontera.appendChild(balas.sprite)
    mueveBalas(balas)
}

let timerMueve
function mueveBalas(balas){
    timerMueve=setInterval (function(){
        balas.leftPosition+=5
        balas.sprite.style.left=balas.leftPosition+"px"
        if(balas.leftPosition>=550){
        borrarBalas(balas)
        }
    },50)
}

let timerInsertar
function insertarBalas(){
    timerInsertar=setInterval(creadorBalas,2000)
}

function borrarBalas(balas){
    if(balas.sprite.parentNode===frontera){
        frontera.removeChild(balas.sprite)
      }
}
