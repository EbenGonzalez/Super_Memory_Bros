// asignamos variables a cada celda para luego utilizarlas para asignarles clases aleatorias y poder compararlas.
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
let celdasReset=[celda1,celda2,celda3,celda4,celda5,celda6,celda7,celda8,celda9,celda10,celda11,celda12,celda13,celda14,celda15,celda16]
let celdasTotales=[]
// botones, pantallas de condicion...
let botonAudio=document.getElementById("botonaudio")
let botonControl=document.getElementById("botoncontrol")
let controles=document.createElement("div")
let controlesPantalla=true
let audioOn=true
let insertarControles=document.getElementById("pantallacontrol")
let insertarReset=document.getElementById("insertarreset")
let botonReset=document.createElement("button")
let body=document.querySelector("body")
let botonStart=document.getElementById("botonstart")
let gameOver=document.getElementById("gameover")
let pantallaInicio=document.getElementById("inicio")
//marcadores
let puntuacion=document.getElementById("puntuacion")
let puntosIniciales=0
let cronometro=document.getElementById("temporizador")
let tiempoJuego=60
let temporizador
let puntuacionFinal=document.getElementById("winner")
let puntosFinales=document.getElementById("puntosfinales")
let puntosTiempo=document.getElementById("puntostiempo")
let sumapuntos=document.getElementById("sumapuntos")
//audios
let bandaSonora= new Audio("extras/tema-principal.mp3")
let audioAcierto=new Audio("extras/parejas-buenas.mp3")
let audioGameOver=new Audio("extras/game-over-mario-bros.mp3")
let audioWinner=new Audio("extras/winner.mp3")
let audioFallo=new Audio("extras/error-parejas.mp3")
let audioReset=new Audio("extras/reset.mp3")
let audioGiro=new Audio("extras/girar-carta.mp3")
let audios=[bandaSonora,audioAcierto,audioGameOver,audioWinner,audioFallo,audioReset,audioGiro]
//balas
let frontera=document.getElementById("frontera")
let posicionBalas=["50","200","350","500"]

function mute(audios){
    for(let i=0;i<=audios.length;i++){
        if(audioOn){
            audios[i].volume=0
            audioOn=false
        }else{
            audios[i].volume=1
            audioOn=true
        }
    }
}

function instrucciones(){
    controles.setAttribute("id", "controles")
    if(controlesPantalla){
        insertarControles.appendChild(controles)
        controlesPantalla=false
    }else{
        insertarControles.removeChild(controles)
        controlesPantalla=true
    }
}

function createReset(){                           // funciones para añadir y quitar el boton de RESET porque nos
botonReset.setAttribute("id", "resetear")         // creaba se quedaba seleccionada y creaba conflicto con las flechas 
setTimeout(function(){                            // de direccion.
    insertarReset.appendChild(botonReset)
    },3000)
}

function deleteReset(){
insertarReset.removeChild(botonReset)
}

function Player(){                                 // funcion constructora en el que asignamos un elemento del DOM
    this.sprite=document.getElementById("player")
    this.topPosition=0
    this.leftPosition=0
    this.impacto=false
    this.movimiento=function(direccion){  
                
        if(direccion==="ArrowUp" && this.topPosition>0){
            this.topPosition-=150                         // al ser las celdas de 150 px tambien, cambiamos de celda cada vez que apretamos
            this.sprite.style.top=this.topPosition+"px"   // una tecla de direccion.
        }
        if(direccion==="ArrowDown" && this.topPosition<450){
            this.topPosition+=150
            this.sprite.style.top=this.topPosition+"px"
        }
        if(direccion==="ArrowRight" && this.leftPosition<450){
            this.leftPosition+=150
            this.sprite.style.left=this.leftPosition+"px"
            this.sprite.style.transform="scaleX(1)"     // propiedad css que nos permite girar la skin de Mario izquierda o derecha.
        }
        if(direccion==="ArrowLeft" && this.leftPosition>0){
            this.leftPosition-=150         
            this.sprite.style.left=this.leftPosition+"px"
            this.sprite.style.transform="scaleX(-1)"
        }if(direccion===" "){                         
            audioGiro.play()                     // al apretar el enter definimos la posicion en la que estamos en el eje x
            let arriba=this.sprite.offsetTop     // y en el eje y, y las almacenamos en sendas variables para luego usarlas en la funcion tablero,
            let izquierda=this.sprite.offsetLeft // ya que disponemos de 16 posiciones distintas.
            cartasTablero(arriba,izquierda)
            comprobarCartas(parejasRotas)        // tambien ejecutamos varias funciones como la comprobacion de las parejas y de las condiciones de
            ganador(celdasTotales)               // derrota o victoria.
        }
    }
}

let parejasAleatorias=["pareja1","pareja1","pareja2","pareja2","pareja3","pareja3","pareja4","pareja4","pareja5","pareja5","pareja6","pareja6","pareja7","pareja7","bowser","bowser"]

function desorganizar(arr){   // algoritmo que simplemente coloca aleatoriamente el array que se le pase,
    arr.sort(function(a,b){   // los usamos para emparejar las clases css y para elegir las  
    return Math.random()-0.5  // posiciones de inicio de las balas de manera aleatoria.
  })
  }

let parejasRotas=[]       // almacenaremos UNICAMENTE dos clases para luego poder compararlas y vaciar el array.

function cartasTablero(arriba,izquierda){    // Funcion refactorizada comentada en el anexo .js
    for(let i=0; i<celdasReset.length;i++){ 
        const celda=celdasReset[i]                                                                                                          
        if(arriba===(Math.floor(i/4)*150) && izquierda===(i%4)*150 && parejasRotas.length<2 && celda.classList.contains("trasera")){ 
            celda.classList.remove("trasera") 
            celda.classList.add(parejasAleatorias[i]) 
            parejasRotas.push(celda) 
        }
    }
}

function comprobarCartas(parejasRotas){
    let primera=parejasRotas[0]              // asignamos cada posicion a una variable
    let clasePrimera=primera.classList[0]    // y cada una de sus clases a otra para compararlas.
    let segunda=parejasRotas[1]
    let claseSegunda=segunda.classList[0]
        if(clasePrimera==="bowser"||claseSegunda==="bowser"){    // solo un bowser,nos resta 3 segundos de tiempo.
            tiempoJuego-=3
            cronometro.innerText=tiempoJuego
          
        }
        if(clasePrimera==="bowser"&&claseSegunda==="bowser"){   // doble bowser game over.
            setTimeout(function(){                              // paramos temporizador para que no se produzca otra derrota por tiempo.
               bandaSonora.pause()                              // mostramos la pantalla de gameover que siempre ha
               audioGameOver.play()                             // estado ahi pero en modo transparente estado ahi pero en modo transparente.
               gameOver.style.opacity=1                         // creamos el boton  para resetear, cambiamos audios.
               createReset()                                    // paramos la generacion de balas y limpiamos las balas  restantes.
               clearInterval(temporizador)
               clearInterval(timerInsertar)
               limpiarBalas()
            },1000)
        }
        if(clasePrimera!==claseSegunda){                   // parejas incorrectas.
           setTimeout(function(){                          // borramos clase actual y añadimos la clase por defecto.
            primera.classList.remove(clasePrimera)         // le damos un segundo para que no sea muy brusco.
            primera.classList.add("trasera")
            segunda.classList.remove(claseSegunda)
            segunda.classList.add("trasera")
           },1000)
        }if(clasePrimera===claseSegunda&&clasePrimera!=="bowser"){    // parejas correctas.
            celdasTotales.push(parejasRotas)                          // las "pusheamos" a otra variable para luego usarla para comprobar la condicion de victoria.
            puntosIniciales+=100                                      // añadimos 100 puntos y actualizamos el marcador.
            puntuacion.innerText="Puntuacion "+ puntosIniciales
            audioAcierto.play()
        }
        parejasRotas.length=0                                         // vaciamos el array para poder volver a comparar una pareja de cartas.
    }

function ganador(celdasTotales){
if (celdasTotales.length===7){                          // comprobamos si llegamos a 7 que son las parejas correctas maximas que podemos lograr.
    clearInterval(temporizador)                         // reseteamos, cambiamos audios, creamos boton reset, mostramos pantalla  ganadora oculta como antes.
    setTimeout(function(){                              // aqui tambien actualizaremos los puntos, bonos de tiempo (10 puntoa por sec restante),
        clearInterval(timerInsertar)                    // y mostraremos marcador total.
        limpiarBalas()
        winner.style.opacity=1
        bandaSonora.pause()
        audioWinner.play()
        createReset()
        let puntosTotales=puntosIniciales+tiempoJuego*10
        puntosFinales.innerText=puntosIniciales
        puntosTiempo.innerText=tiempoJuego*10
        sumapuntos.innerText=puntosTotales
    },1000)
}
}

function cuentaAtras(){                         // cuenta atras de 1 minuto que va actualizando el cronometro.
    temporizador=setInterval(function(){        
        tiempoJuego--
        cronometro.innerText=tiempoJuego
        if(tiempoJuego<= 0){                    // al llegar a 0 mostramos pantalla gameover, reseteamos, cambiamos audios, creamos boton reset etc..
            limpiarBalas()
            clearInterval(timerInsertar)
            clearInterval(temporizador)
            gameOver.style.opacity=1
            bandaSonora.pause()
            createReset()
            audioGameOver.play()   
        }
    },1000)
}

function restart(){
    gameOver.style.opacity=0             //volvemos a poner las pantallas de derrota y victoria ocultas.
    winner.style.opacity=0                
    tiempoJuego=60                  
    celdasTotales=[]                      
    clearInterval(temporizador)
    puntuacion.innerText="Puntuacion 0"  // reseteamos marcadores y varibles necesarias.
    puntosIniciales=0
    cuentaAtras()                        //volvemos a ejecutar funciones necesarias.
    resetearCeldas(celdasReset)
    desorganizar(parejasAleatorias)      // volvemos a "mezclar" las clases para que no se repitan al resetear y no sea necesario refrescar.
    deleteReset()                        // borramos el boton reset.
    bandaSonora.currentTime = 0          // reseteamos la cancion para que vuelva al principio.
    bandaSonora.play()
    insertarBalas()                      // volvemos a ejecutar la funcion que empieza a "disparar" nuevamente
    }

function resetearCeldas(celdasReset){                // iteramos por todas las celdas.
    for(let i=0;i<celdasReset.length;i++){
        celdasReset[i].className=""                  // al ponerle un string vacio elimina las clases anteriores.
        celdasReset[i].classList.add("trasera")      // las restablecemos a la clase por defecto.
    }
}

const player=new Player()   // creamos al jugador que controlara el usuario

const direccion=window.addEventListener("keydown",function(e){  // al apretar cualquier tecla en pantalla, su valor se guarda en la variable direccion 
    player.movimiento(e.key)                                    // que luego pasamos directamente a la funcion creadora para usarla en su funcion                                           
})                                                              // de movimiento que no usara unicamente para moverse sino para ejecutar otras  
                                                                // funciones varias al apretar la tecla espacio.
botonStart.addEventListener("click",function(e){
    body.removeChild(pantallaInicio)                            //boton en la pantalla de inicio que la borra y ejecuta funciones necesarias.
    insertarBalas()
    cuentaAtras()
    bandaSonora.play()
    desorganizar(parejasAleatorias) 
})

botonReset.addEventListener("click",function(e){    // boton reset que sale en las pantallas de victoria o derrota,
    audioReset.play()                               // ejecuta la musiquita general y la funcion restart.
    restart()
})

botonControl.addEventListener("click",function(e){
    instrucciones()
    botonControl.blur()  // el blur evita que el boton se quede seleccionado una vez se pinche el boton, ya
                         // que si no luego al apretar la tecla enter se ejecuta la funcion del boton.
})

botonAudio.addEventListener("click",function(e){
    mute(audios)
    botonAudio.blur()
    console.log("nooo")
})
/**********************************************************************************************************************************************************************
 *********************************************************************************************************************************************************************/
//Aqui empezamos con el codigo referente a las balas
 
function Balas(top){                          // funcion constructora que asigna clase,posicion y se vincula al DOM.
    this.sprite=document.createElement("div")
    this.sprite.classList.add("balas")
    this.topPosition=top
    this.leftPosition=0
    this.sprite.style.top=this.topPosition+"px"
    this.sprite.style.left=this.leftPosition+"px"
}

function creadorBalas(){
    desorganizar(posicionBalas)        // usamos la misma funcion para barajar ahora aqui para las 4 posibles posiciones en el eje y.
    let randomTop=posicionBalas[1]     // usamos la primera siempre ya que se mezcla cada vez.
    const balas=new Balas(randomTop)   // creamos las balitas.
    frontera.appendChild(balas.sprite) // lo insertamos en el DOM.
    mueveBalas(balas)                  //como el movimiento es automatico, nada mas crearse ejecutamos la funcion para que se muevan.
}

let timerMueve
function mueveBalas(balas){
    timerMueve=setInterval (function(){
        balas.leftPosition+=5          // distancia que avanzaremos en cada "tic"
        balas.sprite.style.left=balas.leftPosition+"px"  //actualizamos distancia en el eje x, o sea moverse de izquierda a derecha.
        colisiones(balas,player)
        if(balas.leftPosition>=530){   // limite del campo para que se borren.
        borrarBalas(balas)
        }
    },50)                             // la velocidad de movimiento y de refresco de las funciones que se ejecutan dentro.
}

let timerInsertar
function insertarBalas(){                            // cada dos segundos crearemos nuevas balas y guardamos el intervalo en una variable
    timerInsertar=setInterval(creadorBalas,2000)     // para luego poder pararlo donde lo necesitemos.
}

function borrarBalas(balas){
    if(balas.sprite.parentNode===frontera){           // evitar error en consola,se explica mas abajo.
        frontera.removeChild(balas.sprite)            // funcion para borrar las balas al llegar al limite establecido.
      }
}

function colisiones(balas,player){                        // colisiones copiadas del galaga, aunque hubo que quitarle la suma de
    if( balas.topPosition>=player.topPosition &&          // la anchura en el primer if porque sino aunque pasara a mucha distancia
        balas.topPosition<=player.topPosition+150 &&      // de la parte superior del player seguia colisionando.
        balas.leftPosition+50>=player.leftPosition &&
        balas.leftPosition<=player.leftPosition+150 &&
        balas.sprite.parentNode===frontera                // aunque funciona perfecto sin esta linea sale todo el rato en la consola el 
    )                                                     // mensaje de error en rojo de manera constante.
    {
        frontera.removeChild(balas.sprite)                // si hay colision, restamos un segundo al cronometro y lo actualizamos,
        audioFallo.play()                                 // luego la bala desaparece.
        tiempoJuego-=1
        cronometro.innerText=tiempoJuego  
    }
}

function limpiarBalas() {                                     // funcion para poder eliminar las balas que se estan moviendo por la pantalla
    const balasRestantes=document.querySelectorAll(".balas")  // cuando se produce una condicion de victoria o de derrota.
    for(let i=0;i<balasRestantes.length;i++){                 // seleccionamos toda lo que tenga la clase .bala en el DOM en el momento actual,
        frontera.removeChild(balasRestantes[i])               // se itera por el array resultante y se deshereda xD.
    }
  }