 //animaciones CANVAS
//ejercicio 1
        let canvas = document.querySelector('.canvas-1');
        let elemento = canvas.getContext('2d');
        elemento.fillStyle='tomato';
        elemento.fillRect(20, 20, 200, 100); //dibuja rectangulo x,y

//ejercicio 2
        let canvas2 = document.querySelector('.canvas-2');
        let elemento2 = canvas2.getContext('2d');
        elemento2.beginPath(); //iniciar nuevo camino
        elemento2.arc(canvas2.width / 2, canvas2.height / 2, 50, 0, Math.PI * 2); //dibujar un circulo
        elemento2.fillStyle ='red'; //establecer color de relleno
        elemento2.fill(); //rellenar el circulo

//ejercicio 3
        let canvas3 = document.querySelector('.canvas-3');
        let elemento3 = canvas3.getContext('2d');
        elemento3.beginPath(); //iniciar nuevo camino
        elemento3.moveTo(0,0); //movr el cursor a 0 , 0 (x,y)
        elemento3.lineTo(canvas3.width, canvas3.height);
        elemento3.strokeStyle = 'limeGreen';
        elemento3.lineWidth = 3;
        elemento3.stroke();

//ejercicio 4
        let canvas4 = document.querySelector('.canvas-4');
        let elemento4 = canvas4.getContext('2d');
        elemento4.font = '30px Arial';
        elemento4.fillStyle = 'crimson';
        elemento4.textAlign = 'center';
        elemento4.fillText('¡Hola Canvas!', canvas4.width /2, canvas4.height /2);

//ejercicio 5
        let canvas5 = document.querySelector('.canvas-5');
        let elemento5 = canvas5.getContext('2d');

        let img = new Image(); //variable en la que creamos la imagen(ojo la I mayuscula)
        img.src='https://picsum.photos/300'; //ruta de la imagen
        img.onload = function () { //dibuja la imagen en el canvas
            elemento5.drawImage(img, 0,0, canvas5.width,canvas5.height);
        };

//ejercicio 6
        let canvas6 = document.querySelector('.canvas-6');
        let elemento6 = canvas6.getContext('2d');

        let x = 0; //posicion inicial en el eje x
        function animated() { //funcion de la animacion
            elemento6.clearRect(0, 0, canvas6.width, canvas6.height); //limpiar el canvas
            elemento6.beginPath(); //iniciar nuevo camino
            elemento6.arc(x, canvas6.height / 2, 20, 0, Math.PI * 2); //dibujar el circulo
            elemento6.fillStyle = 'orange'; //color circulo
            elemento6.fill();

            x = x+2; //incrementamos posicion eje x
            if (x > canvas6.width) { //si el circulo sale del canvas
                x = 0;
            }
            requestAnimationFrame(animated); //solicitar siguiente animacion-metodo que se repite
        }
        animated(); //iniciar la animacion

//ejercicio 6Bis
        let canvas6b = document.querySelector('.canvas-6b');
        let elemento6b = canvas6b.getContext('2d');

        let xb = 0; //posicion inicial en el eje x
        function animated2() { //funcion de la animacion
            elemento6b.clearRect(0, 0, canvas6b.width, canvas6b.height); //limpiar el canvas
            elemento6b.beginPath(); //iniciar nuevo camino
            elemento6b.arc(xb, canvas6b.height / 2, 20, 0, Math.PI * 2); //dibujar el circulo
            elemento6b.fillStyle = 'crimson'; //color circulo
            elemento6b.fill();

            xb = xb+2; //incrementamos posicion eje x
            if (xb +20 >= canvas6b.width) { //si el circulo sale del canvas
                return; //con return paramos la animación
            }
            requestAnimationFrame(animated2); //solicitar siguiente animacion-metodo que se repite
        }
        animated2(); //iniciar la animacion

//ejercicio 7
        let canvas7 = document.querySelector('.canvas-7');
        let elemento7 = canvas7.getContext('2d');
        let dibujando = false;

        canvas7.addEventListener('mousedown', function (evento) {
            dibujando = true;
            elemento7.beginPath();
            elemento7.moveTo(evento.offsetX, evento.offsetY);
        });

        canvas7.addEventListener('mousemove', function (evento) {
            if (dibujando) {
                elemento7.lineTo(evento.offsetX, evento.offsetY);
                elemento7.stroke();
            }
        });

        canvas7.addEventListener('mouseup', function () {
            dibujando = false;
        }); 
//--------------------------añadido
        //funcion limpiar CANVAS
        let limpiarCanvas = function() {
            elemento7.clearRect(0,0, canvas7.width, canvas7.height);
        };
        //boton para borrar
        let limpiar = document.getElementById('borrarDibujo');
        limpiar.addEventListener('click', limpiarCanvas );
//--------------------------añadido

//ejercicico 8
        let canvas8 = document.querySelector('.canvas-8');
        let elemento8 = canvas8.getContext('2d');

        for (let i = 0; i < canvas8.width * 2; i +=15) {
            // Dibujar líneas verticales
            elemento8.beginPath(); // Iniciar un nuevo camino
            elemento8.moveTo(i, 0); // Mover el cursor al punto inicial
            elemento8.lineTo(0, i); // Dibujar una línea vertical
            elemento8.stroke(); // Dibujar el camino
        }

        for (let i = 0; i < canvas8.width * 2; i +=15) {
            // Dibujar líneas verticales
            elemento8.beginPath(); // Iniciar un nuevo camino
            elemento8.moveTo(i, 0); // Mover el cursor al punto inicial
            elemento8.lineTo(i, canvas8.height); // Dibujar una línea vertical
            elemento8.stroke(); // Dibujar el camino
        }

//ejercicio 9
        let canvas9 = document.querySelector('.canvas-9');
        let elemento9 = canvas9.getContext('2d');

        let datos = [60,115,90,130,90]; // Datos de ejemplo
        let anchoBarra = 25; // Ancho de cada barra

        // Iterar sobre los datos
        datos.forEach (function(value, index) {
            elemento9.fillStyle = 'orange'; // Establecer el color de relleno
            elemento9.fillRect ( // Dibujar la barra
                index * (anchoBarra + 10), // Posición X
                canvas9.height - value, //Posicion Y
                anchoBarra, //ancho valor final de X
                value //alto valor final de Y
            );
        });

//ejercicico 10
        let canvas10 = document.querySelector('.canvas-10');
        let elemento10 = canvas10.getContext('2d');

        canvas10.addEventListener('mousemove', function(figura) {
            // Agregar un evento de movimiento del mouse al canvas
            elemento10.clearRect(0,0, canvas10.width, canvas10.height); // Limpiar el canvas
            elemento10.beginPath(); // Iniciar un nuevo camino
            elemento10.arc(figura.offsetX, figura.offsetY, 20, 0, Math.PI * 2); // Dibujar un círculo en la posición del mouse
            elemento10.fillStyle = 'indigo'; // Establecer el color de relleno del círculo
            elemento10.fill(); //rellenar el circulo
        });

//ejercicico 11
        let canvas11 = document.querySelector('.canvas-11');
        let elemento11 = canvas11.getContext('2d');

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = Math.random() * 2 - 1;
                this.vy = Math.random() * 2 - 1;
            }

            update() {
                this.x = this.x + this.vx;
                this.y = this.y + this.vy;
                if (this.x <= 0 || this.x >= canvas11.width) this.vx = -this.vx;
                if (this.y <= 0 || this.y >= canvas11.height) this.vy = -this.vy;
            }

            draw(elemento11) {
                elemento11.beginPath();
                elemento11.arc(this.x, this.y, 3, 0, Math.PI * 2);
                elemento11.fillStyle = 'darkviolet';
                elemento11.fill();
            }
        };

        let particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push (
                new Particle(
                    Math.random() / canvas11.width,
                    Math.random() / canvas11.height
                )
            );
        }

        function animatedParticles() {
            elemento11.clearRect(0, 0, canvas11.width, canvas11.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw(elemento11);
            });
            requestAnimationFrame(animatedParticles);
        };

        animatedParticles();

//ejercicio 12
        let canvas12 = document.querySelector('.canvas-12');
        let elemento12 = canvas12.getContext('2d');
        let datos2 = [60,115,90,130,90]; // Datos de ejemplo
        let anchoBarra2 = 25; // Ancho de cada barra

        // Iterar sobre los datos
        datos2.forEach (function(value, index) {
            elemento12.fillStyle = 'orange'; // Establecer el color de relleno
            elemento12.fillRect ( // Dibujar la barra
                index * (anchoBarra2 + 10), // Posición X
                canvas12.height - value, //Posicion Y
                anchoBarra2, //ancho valor final de X
                value //alto valor final de Y
            );
        });

        canvas12.addEventListener('mousemove', function (f) {
            let barIndex = Math.floor(f.offsetX / (anchoBarra2 + 10));
            if (barIndex >= 0 && barIndex < datos2.length) {
                elemento12.clearRect(0, 0, canvas12.width, canvas12.height);
                datos2.forEach((value, i) => {
                    elemento12.fillStyle = 'orange';
                    elemento12.fillRect(
                        i * (anchoBarra2 + 10),
                        canvas12.height - value,
                        anchoBarra2,
                        value
                    );
                });
                elemento12.fillStyle = 'rgba(0, 0, 0, 0.8)';
                elemento12.fillText (
                    datos2[barIndex],
                    barIndex *  (anchoBarra2 + 10),
                    canvas12.height - datos2[barIndex] - 10
                )
            }
        });

//ejercicio 13
    let canvas13 = document.querySelector('.canvas-13');
    let elemento13 = canvas13.getContext('2d');
   
    let player = {
        x: canvas13.width / 2,
        y: canvas13.height -30,
        width: 15,
        height: 15,
        color: 'blue',
        
    };
    let obstacles = [];

    function createObstacle() {
        const obstacle = {
        x: Math.random() * canvas13.width,
        y: 0,
        width:15,
        height:15,
        color: 'red',
        };
        obstacles.push(obstacle);
    }

    function update() {
        elemento13.clearRect(0, 0, canvas13.width, canvas13.height);
        elemento13.fillStyle = player.color;
        elemento13.fillRect(player.x, player.y, player.width, player.height);

        obstacles.forEach( (obstacle, index) => {
            obstacle.y += 2;
            elemento13.fillStyle = obstacle.color;
            elemento13.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

            if (obstacle.y > canvas13.height) {
                obstacles.splice(index, 1);
            }

            if (
                player.x < obstacle.x + obstacle.width &&
                player.x + player.width > obstacle.x &&
                player.y < obstacle.y + obstacle.height &&
                player.y + player.height > obstacle.y
            ) {
               // alert('Game Over');
                document.location.reload();
            }
        });

        requestAnimationFrame(update);
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft') player.x -= 20;
        if (e.code === 'ArrowRight') player.x += 20
    });

    setInterval(createObstacle, 1000);
    update();

//ejercicio 14
//triangulo de Sierpisnky
    let canvas14 = document.querySelector('.canvas-14');
    let elemento14 = canvas14.getContext('2d');

    function drawTriangulos (elemento14, x, y, size) {
        if (size < 1) return;

        let h = (size * Math.sqrt(3)) /2;
        elemento14.beginPath();
        elemento14.moveTo(x, y);
        elemento14.lineTo(x + size / 2, y + h);
        elemento14.lineTo(x - size / 2, y + h);
        elemento14.closePath();
        elemento14.stroke();

        drawTriangulos(elemento14, x, y, size / 2);
        drawTriangulos(elemento14, x - size / 4, y + h / 2, size / 2);
        drawTriangulos(elemento14, x + size / 4, y + h / 2, size / 2);
    }

    drawTriangulos(elemento14, canvas14.width / 2, 20, 140);

//ejercicio 15
    let canvas15 = document.querySelector('.canvas-15');
    let elemento15 = canvas15.getContext('2d');

    let angulo = 0;
    let escala = 1;

    function animarRectangulo() {
        elemento15.clearRect(0, 0, canvas15.width, canvas15.height);
        elemento15.save();
        elemento15.translate(canvas15.width / 2, canvas15.height / 2);
        elemento15.rotate(angulo);
        elemento15.scale(escala, escala);
        elemento15.fillStyle ='yellowGreen';
        elemento15.fillRect(-25, -25, 50, 50);
        elemento15.restore();

        angulo = angulo + 0.02 * 2;
        escala = 1.8 + Math.sin(angulo) * 0.5;

        requestAnimationFrame(animarRectangulo);
    }

    animarRectangulo();

//ejercicico 16
    let canvas16 = document.querySelector('.canvas-16');
    let elemento16 = canvas16.getContext('2d');

    let esfera = {
        x: 50,
        y: 50,
        vx: 2,
        vy: 0,
        radius: 10,
        gravity: 0.5,
        bounce: 0.7,
    };

    function caeEsfera() {
        elemento16.clearRect(0, 0, canvas16.width, canvas16.height);

        esfera.vy += esfera.gravity;
        esfera.x += esfera.vx;
        esfera.y += esfera.vy;

        if (esfera.y + esfera.radius > canvas16.height) {
            esfera.y = canvas16.height - esfera.radius;
            esfera.vy = -esfera.vy * esfera.bounce;
        }

        if (esfera.x + esfera.radius > canvas16.width || esfera.x - esfera.radius < 0) {
            esfera.vx = -esfera.vx
        }

        elemento16.beginPath();
        elemento16.arc(esfera.x, esfera.y, esfera.radius, 0, Math.PI * 2);
        elemento16.fillStyle = 'darkCyan';
        elemento16.fill();

        requestAnimationFrame(caeEsfera);
    }

    caeEsfera();

//ejercicio 17
    let canvas17 = document.querySelector('.canvas-17');
    let elemento17 = canvas17.getContext('2d');

    let hue = 0;

    function animaGradiente () {
        elemento17.clearRect(0, 0, canvas17.width, canvas17.height);

        let gradiente = elemento17.createLinearGradient (
            0,
            0,
            canvas17.width,
            canvas17.height
        );
        gradiente.addColorStop(0, `hsl(${hue}, 100%, 50%)`);
        gradiente.addColorStop(1, `hsl(${hue + 180}, 100%, 50%)`);
        elemento17.fillStyle = gradiente;
        elemento17.fillRect(0, 0, canvas17.width, canvas17.height );

        hue+= 1;
        if (hue >= 360) hue = 0;

        requestAnimationFrame(animaGradiente);
    }
    animaGradiente();