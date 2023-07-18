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

const celdasTotalesDesorden = celdasTotales.sort(function(a,b){
    return Math.random()-0.5
  })

  const tablero=[[],[],[],[]]

  function insertarAleatorio(tablero){
    while (tablero[0].length<4){
      tablero[0].push(celdasTotalesDesorden.pop())
    }while(tablero[1].length<4){
      tablero[1].push(celdasTotalesDesorden.pop())
    }while(tablero[2].length<4){
      tablero[2].push(celdasTotalesDesorden.pop())
    }while(tablero[3].length<4){
      tablero[3].push(celdasTotalesDesorden.pop())
    }
    return tablero
  }

  insertarAleatorio(tablero)
  


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
        }

    }
}

const player=new Player()   

const direccion=window.addEventListener("keydown",function(e){
    player.movimiento(e.key)
})
