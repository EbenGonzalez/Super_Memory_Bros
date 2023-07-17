function Player(){
    this.sprite=document.getElementById("player")
    this.topPosition=300
    this.leftPosition=300
    this.movimiento=function(direccion){
        if(direccion==="ArrowUp"){
            this.topPosition-=150
            this.sprite.style.top=this.topPosition+"px"
        }
        if(direccion==="ArrowDown"){
            this.topPosition+=150
            this.sprite.style.top=this.topPosition+"px"
        }
        if(direccion==="ArrowRight"){
            this.leftPosition+=150
            this.sprite.style.left=this.leftPosition+"px"
        }
        if(direccion==="ArrowLeft"){
            this.leftPosition-=150
            this.sprite.style.left=this.leftPosition+"px"
        }

    }
}

const player=new Player()

const direccion=window.addEventListener("keydown",function(e){
    player.movimiento(e.key)
})