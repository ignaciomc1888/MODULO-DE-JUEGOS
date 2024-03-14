historia=[
    {
        img:'1. despertar.jfif',
        texto:'El Guardián del Tiempo abre los ojos en su cámara temporal, el reluciente reloj de arena que es su hogar y su deber. Se levanta, consciente de la urgencia de su misión.',

        acciones:[
            {
                texto:'Despierta y se prepara para la tarea que le aguarda.',
                siguiente:1
            },
            {
                texto:'Encuentra una carta misteriosa que revela su destino.',
                siguiente:2
            },
            {
                texto:'Recibe un llamado urgente desde el pasado, instándolo a iniciar su viaje.',
                siguiente:3
            },
        ]
    },
    {
        img:'2. puerta.jfif',
        texto:'Ante él se alza imponente la puerta que conduce a los pliegues del tiempo. Con determinación, el Guardián del Tiempo avanza hacia ella, sabiendo que su destino le espera al otro lado.',

        acciones:[
            {
                texto:'Abre la puerta con la llave especial que le fue dada.',
                siguiente:1
            },
            {
                texto:'Resuelve un antiguo acertijo para desbloquear la entrada al tiempo.',
                siguiente:2
            },
            {
                texto:'Enfrenta a un guardián del tiempo en un desafío de habilidad para ganar acceso.',
                siguiente:3
            }
        ]
    },
    {
        img:'3..jfif',
        texto:'Atraviesa el umbral del tiempo y emerge en una época distante, rodeado de paisajes y personas que desafían su comprensión. Su corazón late con emoción y la anticipación de la aventura por venir.',

        acciones:[
            {
                texto:'Llega al antiguo Egipto en busca de un artefacto perdido.',
                siguiente:1
            },
            {
                texto:'Se encuentra en la antigua Grecia, protegiendo un legado crucial.',  
                siguiente:2
            },
            {
                texto:'Aparece en la Edad Media para enfrentar un peligro oscuro.',  
                siguiente:3
            },
        ]
    },
    {
        img:'4.jfif',
        texto:'Mientras explora su nuevo entorno, el Guardián del Tiempo se encuentra con alguien que cambiará el curso de su viaje. Una figura misteriosa emerge de las sombras, ofreciendo su ayuda o su obstáculo.',

        acciones:[
            {
                texto:'Se alía con el recién encontrado compañero para enfrentar los desafíos juntos.',
                siguiente:1
            },
            {
                texto:'Se enfrenta a la figura misteriosa en un duelo de voluntades.',
                siguiente:2
            },
            {
                texto:'Descubre una pista crucial en la conversación que lo impulsa hacia su próximo destino.',
                siguiente:3
            }
        ]
    },
    {
        img:'5.jfif',
        texto:'El Guardián del Tiempo se enfrenta a un desafío que pone a prueba no solo su fuerza, sino también su ingenio y su moralidad. Debe tomar decisiones rápidas y sabias para superar el obstáculo que se interpone en su camino.',
        acciones:[
            {
                texto:'Confía en su intuición para superar el desafío.',
                siguiente:1
            },
            {
                texto:'Hace una alianza arriesgada para avanzar.',
                siguiente:2
            },
            {
                texto:'Sacrifica una parte de su poder para salvar a un ser querido.',
                siguiente:3
            }
        ]
    }, 
];


function mostrarEscena(num) {
    var escena = historia[num];

    document.getElementById('image-escena').setAttribute('src', escena.img);
    document.getElementById('texto-escena').innerText = escena.texto;
    
    
    
    var boton1 = document.getElementById('accion-1');
    boton1.innerText = escena.acciones[0].texto;
    boton1.onclick = function () {
        mostrarEscena(escena.acciones[0].siguiente);
    }
    document.getElementById('texto-escena').innerText = escena.texto;
    
    
    var boton2 = document.getElementById('accion-2');
    boton2.innerText = escena.acciones[1].texto;
    boton2.onclick = function () {
        mostrarEscena(escena.acciones[1].siguiente);
    }
    document.getElementById('texto-escena').innerText = escena.texto;
    

    var boton3 = document.getElementById('accion-3');
    boton3.innerText = escena.acciones[2].texto;
    boton3.onclick = function () {
        mostrarEscena(escena.acciones[2].siguiente);
    }
    document.getElementById('texto-escena').innerText = escena.texto;


    var boton4 = document.getElementById('accion-4');
    boton4.innerText = escena.acciones[3].texto;
    boton4.onclick = function () {
        mostrarEscena(escena.acciones[3].siguiente);
    }
    document.getElementById('texto-escena').innerText = escena.texto;
}

window.onload = function () {
    mostrarEscena(0);
}