WIDTH = window.innerWidth; // Ancho de pantalla
HEIGHT = window.innerHeight; // Alto de pantalla

// Lienzo u objeto encargado del renderizado
var lienzo = new THREE.WebGLRenderer({antialias: true});

// Establecemos las dimensiones del lienzo
lienzo.setSize(
	WIDTH,
	HEIGHT
);

// Añadimos el lienzo a la página
document.body.appendChild(lienzo.domElement);

// Creamos la escena
var escena = new THREE.Scene;


// Creamos un poligono
var geometriaCubo = new THREE.CubeGeometry(100,100,100);
var geometriaCubo2 = new THREE.CubeGeometry(
	15, // Dimensiones en eje X
	70, // Dimensiones en eje Y
	15 // Dimensiones en eje Z
);
var geometriaCubo3 = new THREE.CubeGeometry(10,60,10);
var geometriaCubo4 = new THREE.CubeGeometry(40,30,40);
var geometriaCubo5 = new THREE.CubeGeometry(40,30,40);
var geometriaCubo6 = new THREE.CubeGeometry(10,60,10);
var geometriaCubo7 = new THREE.CubeGeometry(10,60,10);
// Creamos una apariencia (de lila claro)
var aparienciaCafe = new THREE.MeshLambertMaterial({
	color: 0x734d26 // Color hexadecimal
});
var aparienciaVerde = new THREE.MeshLambertMaterial({
	color: 0x62ff00 // Color hexadecimal
});

// Generamos el polígino y le aplicamos la apariencia
var cubo = new THREE.Mesh(geometriaCubo, aparienciaVerde);
var cubo2 = new THREE.Mesh(geometriaCubo2, aparienciaCafe);
var cubo3 = new THREE.Mesh(geometriaCubo3, aparienciaCafe);
var cubo4 = new THREE.Mesh(geometriaCubo4, aparienciaVerde);
var cubo5 = new THREE.Mesh(geometriaCubo5, aparienciaVerde);
var cubo6 = new THREE.Mesh(geometriaCubo6, aparienciaCafe);
var cubo7 = new THREE.Mesh(geometriaCubo7, aparienciaCafe);
// Añadimos el cubo a la escena
escena.add(cubo);
escena.add(cubo2);
cubo2.add(cubo3);
cubo.add(cubo4);
cubo.add(cubo5);
cubo.add(cubo6);
cubo.add(cubo7);
// Generamos la cámara
var camara = new THREE.PerspectiveCamera(
	45,
	(WIDTH / HEIGHT),
	0.1,
	10000
);

// Situamos la cámara
camara.position.y = 0;
camara.position.z = 500;

// Centramos la vista en el cubo
camara.lookAt(cubo.position);
cubo2.position.y=-70;



cubo3.position.x=20;
cubo3.rotation.z=-0.7;


cubo5.position.z=70;
cubo5.position.x=50;
cubo5.position.y=20;

cubo4.position.x=-50;
cubo4.position.z=50;

cubo6.rotation.z=-0.5;
cubo6.rotation.x=0.7;
cubo6.position.z=60;
cubo6.position.x=30;
cubo6.position.y=-10;

cubo7.position.z=50;
// Añadimos la cámara a la escena
escena.add(camara);

// Creamos una par de focos de luz
var luz1 = new THREE.PointLight(0xffffff); // Rojizo
luz1.position.set(
	120, // Posición en eje X
	260, // Posición en eje Y
	100	 // Posición en eje Z
);

var luz2 = new THREE.PointLight(0xffffff); // Azulado
luz2.position.set(
	-100, // Posición en eje X
	100, // Posición en eje Y
	200	 // Posición en eje Z
);

// Añadimos las luces
escena.add(luz1);
escena.add(luz2);

x=0;
function renderizar(){
	// Rotamos el cubo
	var acc=0.2;
	cubo.rotation.y += Math.PI * 0.5 / 180;
	
	//cubo3.position.x+=acc;
	//cubo3.position.z+=acc;
	


	cubo2.rotation.y += Math.PI * 0.5 / 180;
	//cubo.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
	// Renderizamos la escena
	lienzo.render(escena, camara);
	// Volvemos a renderizar
	requestAnimationFrame(renderizar);
}

// Empezamos a renderizar
renderizar();



