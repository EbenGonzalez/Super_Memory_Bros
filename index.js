
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

let celdasTotales=[celda1,celda2,celda3,celda4,celda5,celda6,celda7,celda8,celda9,celda10,celda11,celda12,celda13,celda14,celda15,celda16]

let botonReset = document.getElementById("botongameover")
let body=document.querySelector("body")
let botonStart=document.getElementById("botonstart")
let gameOver=document.getElementById("gameover")
let pantallaInicio=document.getElementById("inicio")
let puntuacion=document.getElementById("puntuacion")
let puntosIniciales=0
let cronometro=document.getElementById("temporizador")
let tiempoJuego=60
let temporizador
let bandaSonora= new Audio("extras/Super Mario Bros Main Theme.mp3")





function Player(){
    this.sprite=document.getElementById("player")
    this.topPosition=0
    this.leftPosition=0
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

  let parejasRotas=[]

function cartasTablero(arriba,izquierda){
    
if(arriba===0 && izquierda===0 && parejasRotas.length<2 && !celda1.classList.contains("seleccion")){
    celda1.classList.remove("trasera")
    celda1.classList.add(parejasAleatorias[0], "seleccion")
    parejasRotas.push(celda1)
}if(arriba===0 && izquierda===150 && parejasRotas.length<2 && !celda2.classList.contains("seleccion")){
    celda2.classList.remove("trasera")
    celda2.classList.add(parejasAleatorias[1], "seleccion")
    parejasRotas.push(celda2)
    }if(arriba===0 && izquierda===300 && parejasRotas.length<2 && !celda3.classList.contains("seleccion")){
        celda3.classList.remove("trasera")
        celda3.classList.add(parejasAleatorias[2], "seleccion")
        parejasRotas.push(celda3)
        }if(arriba===0 && izquierda===450 && parejasRotas.length<2 && !celda4.classList.contains("seleccion")){
            celda4.classList.remove("trasera")
            celda4.classList.add(parejasAleatorias[3], "seleccion")
            parejasRotas.push(celda4)
            }if(arriba===150 && izquierda===0 && parejasRotas.length<2 && !celda5.classList.contains("seleccion")){
                celda5.classList.remove("trasera")
                celda5.classList.add(parejasAleatorias[4], "seleccion")
                parejasRotas.push(celda5)
                }if(arriba===150 && izquierda===150 && parejasRotas.length<2 && !celda6.classList.contains("seleccion")){
                    celda6.classList.remove("trasera")
                    celda6.classList.add(parejasAleatorias[5], "seleccion")
                    parejasRotas.push(celda6)
                    }if(arriba===150 && izquierda===300 && parejasRotas.length<2 && !celda7.classList.contains("seleccion")){
                        celda7.classList.remove("trasera")
                        celda7.classList.add(parejasAleatorias[6], "seleccion")
                        parejasRotas.push(celda7)
                        }if(arriba===150 && izquierda===450 && parejasRotas.length<2 && !celda8.classList.contains("seleccion")){
                            celda8.classList.remove("trasera")
                            celda8.classList.add(parejasAleatorias[7], "seleccion")
                            parejasRotas.push(celda8)
                            }if(arriba===300 && izquierda===0 && parejasRotas.length<2 && !celda9.classList.contains("seleccion")){
                                celda9.classList.remove("trasera")
                                celda9.classList.add(parejasAleatorias[8], "seleccion")
                                parejasRotas.push(celda9)
                                }if(arriba===300 && izquierda===150 && parejasRotas.length<2 && !celda10.classList.contains("seleccion")){
                                    celda10.classList.remove("trasera")
                                    celda10.classList.add(parejasAleatorias[9], "seleccion")
                                    parejasRotas.push(celda10)
                                    }if(arriba===300 && izquierda===300 && parejasRotas.length<2 && !celda11.classList.contains("seleccion")){
                                        celda11.classList.remove("trasera")
                                        celda11.classList.add(parejasAleatorias[10], "seleccion")
                                        parejasRotas.push(celda11)
                                        }if(arriba===300 && izquierda===450 && parejasRotas.length<2 && !celda12.classList.contains("seleccion")){
                                            celda12.classList.remove("trasera")
                                            celda12.classList.add(parejasAleatorias[11], "seleccion")
                                            parejasRotas.push(celda12)
                                            }if(arriba===450 && izquierda===0 && parejasRotas.length<2 && !celda13.classList.contains("seleccion")){
                                                celda13.classList.remove("trasera")
                                                celda13.classList.add(parejasAleatorias[12], "seleccion")
                                                parejasRotas.push(celda13)
                                                }if(arriba===450 && izquierda===150 && parejasRotas.length<2 && !celda14.classList.contains("seleccion")){
                                                    celda14.classList.remove("trasera")
                                                    celda14.classList.add(parejasAleatorias[13], "seleccion")
                                                    parejasRotas.push(celda14)
                                                    }if(arriba===450 && izquierda===300 && parejasRotas.length<2 && !celda15.classList.contains("seleccion")){
                                                        celda15.classList.remove("trasera")
                                                        celda15.classList.add(parejasAleatorias[14], "seleccion")
                                                        parejasRotas.push(celda15)
                                                        }if(arriba===450 && izquierda===450 && parejasRotas.length<2 && !celda16.classList.contains("seleccion")){
                                                            celda16.classList.remove("trasera")
                                                            celda16.classList.add(parejasAleatorias[15], "seleccion")
                                                            parejasRotas.push(celda16)
                                                            }
}

function comprobarCartas(parejasRotas){
    let primera=parejasRotas[0]
    let clasePrimera=primera.classList[0]
    let segunda=parejasRotas[1]
    let claseSegunda=segunda.classList[0]

        if(clasePrimera==="bowser"||claseSegunda==="bowser"){  // solo un bowser
            tiempoJuego-=5
            cronometro.innerText=tiempoJuego
            puntuacion.innerText="Puntuacion "+ puntosIniciales
        }
        if(clasePrimera==="bowser"&&claseSegunda==="bowser"){  // doble bowser game over
            setTimeout(function(){
               gameOver.style.opacity=1
               clearInterval(temporizador)
            },1000)
            
        }
    
        if(clasePrimera!==claseSegunda){   // parejas incorrectas
           setTimeout(function(){
            primera.classList.remove(clasePrimera)
            primera.classList.remove("seleccion")
            primera.classList.add("trasera")
            segunda.classList.remove(claseSegunda)
            segunda.classList.remove("seleccion")
            segunda.classList.add("trasera")
           },1000)
        }if(clasePrimera===claseSegunda&&clasePrimera!=="bowser"){  // parejas correctas
            puntosIniciales+=100
            puntuacion.innerText="Puntuacion "+ puntosIniciales
        }
        parejasRotas.length=0
    }

/*function ganador(celdasTotales){

}*/

function cuentaAtras(){
    temporizador=setInterval(function(){
        tiempoJuego--
        cronometro.innerText=tiempoJuego
        if(tiempoJuego<= 0){
            clearInterval(temporizador)
            gameOver.style.opacity=1
        }
    },1000)
}


const player=new Player()   

const direccion=window.addEventListener("keydown",function(e){
    player.movimiento(e.key)
    //bandaSonora.play()
})

botonStart.addEventListener("click",function(e){
    console.log("funciono")
    body.removeChild(pantallaInicio)
    cuentaAtras()
})


botonReset.addEventListener("click",function(e){
    console.log("deberiamos resetear esto")
})