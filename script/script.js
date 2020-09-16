
//Para ocultar los elementos.
for(let i = 0; i < contenido.length; i++){
    contenido[i].classList.add('js-content-hidden');
}
//Vamos a seleccionar todos los items en los cuales vamos a trabajar, para las tab de las tabla

const enlaces = document.querySelectorAll('.tabs-tablist-item');

//Para obtener los divs del contenido

const contenido = document.querySelectorAll('.tabs-content-item');

//Vamos a seleccionar los elementos de la lista, para que no se muestren otros que no queremos 

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click', (event) => {
        console.log(event);
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').substring(1);
        console.log(id);

        for(let i = 0; i < contenido.length; i++){
            contenido[i].classList.add('js-content-hidden');
            if(contenido[i].getAttribute('id') == id){
                contenido[i].classList.remove('js-content-hidden');
            }
        }
    
        for (let i = 0; i < enlaces.length; i++){
            enlaces[i].classList.remove('js-content-hidden');
        }
        event.currentTarget.classList.add('js-active');
    });
}
