//animaciones VANILLA

//ejercicio 1
    let caja = document.querySelector('.box-1');
    caja.addEventListener('click', function() {
        caja.style.cssText = 'transition: background 1s; background:crimson;'
    }); 

//ejercicio 2
    let objeto = document.querySelector('.box-2');
    let boton = document.getElementById('mover');
    objeto.style.cssText = 'position:relative;';
    let posicion = 0;

    // Arreglo de colores
    let colores = ['crimson', 'royalblue', 'gold', 'green', 'purple'];
    let indiceColor = 0;

    boton.addEventListener('click', function () {
        posicion += 50;
        objeto.style.transition= 'left 0.5s ease-in-out';
        objeto.style.left = `${posicion}px`;

    // Cambiar el color de fondo
    objeto.style.backgroundColor = colores[indiceColor];
    // Actualizar el índice para el próximo color
    indiceColor = (indiceColor + 1) % colores.length; // Ciclo en el arreglo
        
    }); 

//ejercicio 3
    let elemento1 = document.querySelector('.box-3');    
    let imagen = document.getElementById('imagen');
    imagen.style.cssText = 'width:100%;transition: transform 1s ease;';

    imagen.addEventListener('mouseenter', function () {
        elemento1.style.cssText = 'transform: scale(2); transition: 1s ease;';
    });

    imagen.addEventListener('mouseleave', function () {
        elemento1.style.cssText = 'transform: scale (1); transition: 1s ease;';

    })

    //ejercicio 4
    let contador = 0;
    let elementoContador = document.querySelector('.box-4');

    document.getElementById('incrementar').addEventListener('click', function () {
        contador++;
        elementoContador.style.cssText = 'transition: 1s ease; opacity:0;';
        setTimeout( function () {
            elementoContador.textContent = contador;
            elementoContador.style.cssText = 'transition:1s ease;opacity:1;';
        }, 300);
    })

    //ejercicio 5
    let elemento5 = document.querySelector('.box-5');
    let isDragging = false;
    let currentX = 0;
    let currentY = 0;

    elemento5.addEventListener('mousedown', function () {
        isDragging = true;
        elemento5.style.transition = 'none';
    });
    document.addEventListener('mouseover', function (mov) {
        elemento5.style.left = `${mov.clientX - elemento5.offsetWidth / 2}px`;
        elemento5.style.top = `${mov.clientY - elemento5.offsetHeight / 2}px`;
    });
    document.addEventListener('mouseup', function () {
        isDragging = false;
        elemento5.style.transition = 'all 0.3s ease'; 
    });

//ejercicio 6
    let canvas6 = document.querySelector('.box-6');
    let elemento6 = canvas6.getContext('2d');
    let particulas = [];

    canvas6.width = 500; // Ancho del canvas
    canvas6.height = 500; // Alto del canvas

    class Particula {
        constructor() {
            this.x = Math.random() * canvas6.width;
            this.y = Math.random() * canvas6.height;
            this.velX = (Math.random() - 0.5) * 5;
            this.velY = (Math.random() - 0.5) * 5;
        }

        actualizar() {
            if (this.x < 0 || this.x > canvas6.width) this.velX *= -1;
            if (this.y < 0 || this.y > canvas6.height) this.velY *= -1;
            this.x += this.velX;
            this.y += this.velY;
        }

        dibujar() {
            elemento6.fillStyle = "#f00";
            elemento6.beginPath();
            elemento6.arc(this.x, this.y, 5, 0, Math.PI * 2);
            elemento6.fill();
          }
    }

    //crear particulas
    for (let i = 0; i < 80; i++) {
        particulas.push(new Particula ());
    }

    function animar() {
        elemento6.clearRect(0, 0, canvas6.width, canvas6.height);
        particulas.forEach( function (particula) {
            particula.actualizar();
            particula.dibujar();
        });
    requestAnimationFrame(animar);

    }

    animar();
    
