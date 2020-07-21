
// Render
var Render = new THREE.WebGLRenderer();
var Escenario=new THREE.Scene();
var Camara=new THREE.PerspectiveCamera();
var Figura;
var controls;

inicio();
animacion1();
function inicio(){
    Render.setSize(800,600);
    document.getElementById('render').appendChild(Render.domElement); // Agregamos el Ojeto Render como un hijo del div render.
    Camara.position.z=100;  // Profundidadº
    Escenario.add(Camara)  // Agregamos la camara al escenario
    cargar_modelo();
    controls=new THREE.OrbitControls(Camara,Render.domElement);
}
function cargar_modelo(){
    Geometria= new THREE.Geometry();
    let vertices=[
        [2,7,0],
        [7,2,0],
        [12,7,0],
        [12,17,0],
        [7,12,0],
        [2,17,0],
        [2,7,0],
        [2,7,2],
        [7,2,2],
        [12,7,2],
        [12,17,2],
        [7,12,2],
        [2,17,2],
        [2,7,2]
    ]
    vertices.forEach(element => {
        x=element[0];
        y=element[1];
        z=element[2];
        Vector= new THREE.Vector3(x,y,z);
        Geometria.vertices.push(Vector);
    });
    Material= new THREE.ParticleBasicMaterial({color : 0xFF0000}); // Especificamos que el color sea Rojo
    Figura=new THREE.Line(Geometria,Material);
    Escenario.add(Figura);
}
    
function animacion1(){
    render_modelo();
    requestAnimationFrame(animacion1);
}
function render_modelo() {
    Figura.position.x=Figura.position.x+0.01;
    controls.update(); // Linea innecesario?
    Render.render(Escenario,Camara);
}

