// el if de la muerte
                                                                                                         
function cartasTablero(arriba,izquierda){                                                                
    if(arriba===0 && izquierda===0 && parejasRotas.length<2 && celda1.classList.contains("trasera")){     
        celda1.classList.remove("trasera")                                                                
        celda1.classList.add(parejasAleatorias[0])                                                       
        parejasRotas.push(celda1)       
        
/* Pasamos como parametros "arriba" e "izquierda" que ya estan definidos anteriormente en la funcion constructora del player como la posicion en el eje y, y eje x.
Depende de esas posiciones en los ejes, correspondora a una de las 16 posiciones posibles que ya estan asignadas a cada celda.
Comprobamos que la longitud de parejasRotas no sea mayor a 2, pues la vamos a usar en la siguiente funcion y solo queremos comprobar por parejas.
Miramos tambien que clase contiene la celda en ese momento, si no poseen la clase por defecto no pueden ser giradas por el jugador, evitando asi que una vez esten 
volteadas el player pueda interactuar con ellas otra vez al apretar la tecla espacio.
Luego simplemente quitamos la clase por defecto y le añadimos a cada celda un indice ya preestablecido de la variable "parejasAleatorias" que contiene todas las clases.
Aunque el indice es siempre el mismo para cada celda como previamente se "barajan" mediante una funcion siempre es aleatorio.
Se introducen las dos primeras celdas seleccionadas por el player en la variable parejasRotas para su posterior uso en otra funcion que nos ayudara con los emparejamientos
de cartas y conciciones de de derrota. */

    }if(arriba===0 && izquierda===150 && parejasRotas.length<2 && celda2.classList.contains("trasera")){ // por parejas.
        celda2.classList.remove("trasera")
        celda2.classList.add(parejasAleatorias[1])
        parejasRotas.push(celda2)
        }if(arriba===0 && izquierda===300 && parejasRotas.length<2 && celda3.classList.contains("trasera")){
            celda3.classList.remove("trasera")
            celda3.classList.add(parejasAleatorias[2])
            parejasRotas.push(celda3)
            }if(arriba===0 && izquierda===450 && parejasRotas.length<2 && celda4.classList.contains("trasera")){
                celda4.classList.remove("trasera")
                celda4.classList.add(parejasAleatorias[3])
                parejasRotas.push(celda4)
                }if(arriba===150 && izquierda===0 && parejasRotas.length<2 && celda5.classList.contains("trasera")){
                    celda5.classList.remove("trasera")
                    celda5.classList.add(parejasAleatorias[4])
                    parejasRotas.push(celda5)
                    }if(arriba===150 && izquierda===150 && parejasRotas.length<2 && celda6.classList.contains("trasera")){
                        celda6.classList.remove("trasera")
                        celda6.classList.add(parejasAleatorias[5])
                        parejasRotas.push(celda6)
                        }if(arriba===150 && izquierda===300 && parejasRotas.length<2 && celda7.classList.contains("trasera")){
                            celda7.classList.remove("trasera")
                            celda7.classList.add(parejasAleatorias[6])
                            parejasRotas.push(celda7)
                            }if(arriba===150 && izquierda===450 && parejasRotas.length<2 && celda8.classList.contains("trasera")){
                                celda8.classList.remove("trasera")
                                celda8.classList.add(parejasAleatorias[7])
                                parejasRotas.push(celda8)
                                }if(arriba===300 && izquierda===0 && parejasRotas.length<2 && celda9.classList.contains("trasera")){
                                    celda9.classList.remove("trasera")
                                    celda9.classList.add(parejasAleatorias[8])
                                    parejasRotas.push(celda9)
                                    }if(arriba===300 && izquierda===150 && parejasRotas.length<2 && celda10.classList.contains("trasera")){
                                        celda10.classList.remove("trasera")
                                        celda10.classList.add(parejasAleatorias[9])
                                        parejasRotas.push(celda10)
                                        }if(arriba===300 && izquierda===300 && parejasRotas.length<2 && celda11.classList.contains("trasera")){
                                            celda11.classList.remove("trasera")
                                            celda11.classList.add(parejasAleatorias[10])
                                            parejasRotas.push(celda11)
                                            }if(arriba===300 && izquierda===450 && parejasRotas.length<2 && celda12.classList.contains("trasera")){
                                                celda12.classList.remove("trasera")
                                                celda12.classList.add(parejasAleatorias[11])
                                                parejasRotas.push(celda12)
                                                }if(arriba===450 && izquierda===0 && parejasRotas.length<2 && celda13.classList.contains("trasera")){
                                                    celda13.classList.remove("trasera")
                                                    celda13.classList.add(parejasAleatorias[12])
                                                    parejasRotas.push(celda13)
                                                    }if(arriba===450 && izquierda===150 && parejasRotas.length<2 && celda14.classList.contains("trasera")){
                                                        celda14.classList.remove("trasera")
                                                        celda14.classList.add(parejasAleatorias[13])
                                                        parejasRotas.push(celda14)
                                                        }if(arriba===450 && izquierda===300 && parejasRotas.length<2 && celda15.classList.contains("trasera")){
                                                            celda15.classList.remove("trasera")
                                                            celda15.classList.add(parejasAleatorias[14])
                                                            parejasRotas.push(celda15)
                                                            }if(arriba===450 && izquierda===450 && parejasRotas.length<2 && celda16.classList.contains("trasera")){
                                                                celda16.classList.remove("trasera")
                                                                celda16.classList.add(parejasAleatorias[15])
                                                                parejasRotas.push(celda16)
                                                                }
    }