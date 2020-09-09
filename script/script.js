function clickhandler(event){
    const elemento = event.currentTarget; 
    const href = elemento.getAttribute('href');
    const id = href.substring(1);
    console.log(id);

    //****Falto la parte de ocultar, estaba analizandola porque si me cuesta un poco Profe****
    for (let i = 0; i < elemento.length; i++){
        elemento[i].style.display = 'none';
        if (elemento[i].getAttribute('id') == id){
            elemento[i].style.display = 'block';
        }
    }
}   


//Vamos a seleccionar todos los items en los cuales vamos a trabajar, para las tab de las tabla

const enlaces = document.querySelectorAll('.tabs-tablist-item');

// Vamos a agregar todos los tab content para 

const contenido = document.querySelectorAll('.tabs-content-item');

//Vamos a seleccionar los elementos de la lista, para que no se muestren otros que no queremos 

for(let i = 0; i < contenido.length; i++){
    contenido[i].style.display = 'none';
}

 contenido[0].style.display = 'block';

//Vamos a hacer el for para la eleccion de los 

for (let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click', clickhandler)
}
