
// Render
var Render = new THREE.WebGLRenderer();
var Escenario=new THREE.Scene();
var Figura;
var controls;
var ancho=window.innerWidth -15;
var alto=window.innerHeight -10;
var angulo=45;
var Aspecto=ancho/alto;  // Aspecto del radio
var cerca=0.1;
var lejos=10000;
var Camara=new THREE.PerspectiveCamera(angulo,Aspecto,cerca,lejos);
inicio();
animacion1();
function inicio(){
    Render.setSize(ancho,alto);
    document.getElementById('render').appendChild(Render.domElement); // Agregamos el Ojeto Render como un hijo del div render.
    Camara.position.z=1500;  // Profundidadº
    Escenario.add(Camara)  // Agregamos la camara al escenario
    crear_plano();
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
function crear_plano() {
    Geometria_plano = new THREE.PlaneGeometry( 1000,1000,10, 10 );  // width,height ,widthSegments ,heightSegments
    Textura_plano = new THREE.ImageUtils.loadTexture("texturas/cesped.jpg");
    Textura_plano.wrapS = Textura_plano.wrapT= THREE.RepeatWrapping;  // Enbolvemos ancho y largo del elemento
    Textura_plano.repeat.set(10,10);
    Material_plano = new THREE.MeshBasicMaterial({map:Textura_plano, side:THREE.DoubleSide});  // Agregamos al material la textura del plano y Especicamos que la textura este en los 2 lados

    // Territorio
    Territorio=new THREE.Mesh(Geometria_plano,Material_plano);
    Territorio.rotation.y=0.5;
    Territorio.rotation.x=Math.PI/2;
    Escenario.add(Territorio);
}
function animacion1(){
    render_modelo();
    requestAnimationFrame(animacion1);
}
function render_modelo() {
    Figura.rotation.y=Figura.rotation.y+0.01;
    controls.update(); // Linea innecesario?
    Render.render(Escenario,Camara);
}

