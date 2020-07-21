// Render
Render = new THREE.WebGLRenderer();
Render.setSize(800,600);
document.getElementById('render').appendChild(Render.domElement); // Agregamos el Ojeto Render como un hijo del div render.

// Escenario
Escenario=new THREE.Scene();

// Camara
// La camara se puede decir lo que nuestro ojo podra ver  desde el navegador
Camara=new THREE.PerspectiveCamera();
Camara.position.z=100;  // Profundidad

Escenario.add(Camara)  // Agregamos la camara al escenario


// Geometria
Geometria= new THREE.Geometry();
// Vector= new THREE.Vector3(10,0,0);

// Geometria.vertices.push(Vector); // Agregamos el vector al objeto Geometria, puesto que representara a un vertice.


// // Agregamos al escenario el punto(vector)
// Particula_material= new THREE.ParticleBasicMaterial({color : 0xFF0000}); // Especificamos que el color sea Rojo

// Particula=new THREE.ParticleSystem(Geometria,Particula_material);

// Escenario.add(Particula);

// Render.render(Escenario,Camara);

// Ejercicio 2 Puntos y lineas

let vertices=[[2,7,0],[7,2,0],[12,7,0],[12,17,0],[7,12,0],[2,17,0],[2,7,0]]
vertices.forEach(element => {
    x=element[0];
    y=element[1];
    z=element[2];
    Vector= new THREE.Vector3(x,y,z);
    Geometria.vertices.push(Vector);
});



Particula_material= new THREE.ParticleBasicMaterial({color : 0xFF0000}); // Especificamos que el color sea Rojo

Figura=new THREE.Line(Geometria,Particula_material);

Escenario.add(Figura);

Render.render(Escenario,Camara);