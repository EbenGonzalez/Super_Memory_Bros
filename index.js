
let celda1=document.getElementById("c1")
let celda2=document.getElementById("c2")
let celda3=document.getElementById("c3")
let celda4=document.getElementById("c4")
let celda5=document.getElementById("c5")
let celda6=document.getElementById("c6")
let celda7=document.getElementById("c7")
let celda8=document.getElementById("c8")
let celda9=document.getElementById("c9")
let celda10=document.getElementById("c10")
let celda11=document.getElementById("c11")
let celda12=document.getElementById("c12")
let celda13=document.getElementById("c13")
let celda14=document.getElementById("c14")
let celda15=document.getElementById("c15")
let celda16=document.getElementById("c16")

let puntuacion=document.getElementById("puntuacion")
let puntosIniciales=0
let cronometro=document.getElementById("temporizador")
let tiempoJuego=60
let temporizador
//let bandaSonora= new Audio("extras/Super Mario Bros Main Theme.mp3")
//let inicioJuego = new Audio('extras/inicio-super-mario-bros.mp3');
//let juegoPrincipal = new Audio('extras/juego-super-mario.mp3');
let parejasBuenas = new Audio('extras/parejas-buenas-mario-bros.mp3');
let parejasMalas = new Audio('extras/parejas-malas-mario-bros.mp3')
let gameOver = new Audio('extras/game-over-mario-bros.mp3')
//let puntuacionFinal = new Audio('extras/puntuacion-final-mario-bros.mp3')



function Player(){
    this.sprite=document.getElementById("player")
    this.topPosition=0
    this.leftPosition=0
    this.tiempo=cuentaAtras()
    this.movimiento=function(direccion){
        
        if(direccion==="ArrowUp" && this.topPosition>0){
            this.topPosition-=150
            this.sprite.style.top=this.topPosition+"px"
        }
        if(direccion==="ArrowDown" && this.topPosition<450){
            this.topPosition+=150
            this.sprite.style.top=this.topPosition+"px"
        }
        if(direccion==="ArrowRight" && this.leftPosition<450){
            this.leftPosition+=150
            this.sprite.style.left=this.leftPosition+"px"
        }
        if(direccion==="ArrowLeft" && this.leftPosition>0){
            this.leftPosition-=150
            this.sprite.style.left=this.leftPosition+"px"
        }if(direccion===" "){
            console.log(this.sprite.offsetTop)
            console.log(this.sprite.offsetLeft)
            let arriba=this.sprite.offsetTop
            let izquierda=this.sprite.offsetLeft
            cartasTablero(arriba,izquierda)
            comprobarCartas(parejasRotas)
            
        }

    }
}

let parejas=["pareja1","pareja1","pareja2","pareja2","pareja3","pareja3","pareja4","pareja4","pareja5","pareja5","pareja6","pareja6","pareja7","pareja7","bowser","bowser"]

let parejasAleatorias= parejas.sort(function(a,b){
    return Math.random()-0.5
  })

  let celdas = [];

  for (let i = 1; i <= 16; i++) {
    let celda = document.getElementById("c" + i);
    celdas.push(celda);
    
  }
  
  function cartasTablero(arriba, izquierda) {
    const posicion = (arriba / 150) * 4 + (izquierda / 150);
    const celda = celdas[posicion];
  
    actualizarCelda(celda, posicion);
  }
  
  function actualizarCelda(celda, posicion) {
    if (parejasRotas.length < 2 && !celda.classList.contains("seleccion")) {
      celda.classList.remove("trasera");
      celda.classList.add(parejasAleatorias[posicion], "seleccion");
      parejasRotas.push(celda);
    }
  }
 
let parejasRotas=[]

function comprobarCartas(parejasRotas){
    let primera=parejasRotas[0]
    let clasePrimera=primera.classList[0]
    let segunda=parejasRotas[1]
    let claseSegunda=segunda.classList[0]

        if(clasePrimera==="bowser"||claseSegunda==="bowser"){
            tiempoJuego-=5
            cronometro.innerText=tiempoJuego
            puntuacion.innerText="Puntuacion "+ puntosIniciales
            parejasMalas.play()
        }
        if(clasePrimera==="bowser"&&claseSegunda==="bowser"){
            setTimeout(function(){
                alert("gameover")
            },1000)
            gameOver.play()
            
        }
    
        if(clasePrimera!==claseSegunda){
           setTimeout(function(){
            primera.classList.remove(clasePrimera)
            primera.classList.remove("seleccion")
            primera.classList.add("trasera")
            segunda.classList.remove(claseSegunda)
            segunda.classList.remove("seleccion")
            segunda.classList.add("trasera")
           },1000)
        }if(clasePrimera===claseSegunda&&clasePrimera!=="bowser"){
            puntosIniciales+=100
            puntuacion.innerText="Puntuacion "+ puntosIniciales
            parejasBuenas.play()
        }
        parejasRotas.length=0
        
    }

function cuentaAtras(){
    temporizador=setInterval(function(){
        tiempoJuego--
        cronometro.innerText=tiempoJuego
        if(tiempoJuego<= 0){
            clearInterval(temporizador)
        }
    },1000)
}


const player=new Player()   

const direccion=window.addEventListener("keydown",function(e){
    player.movimiento(e.key)
    juegoPrincipal.play()
})


