var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

radio = 1; //radio conito
altura = 3; // altura conito
var geometri = new THREE.ConeGeometry(radio, altura, 10);
var materials = new THREE.MeshPhongMaterial({ color: 0x47d7cd });
var conito = new THREE.Mesh(geometri, materials);
scene.add(conito)

geometri.rotateX ( Math.PI/2); // rotacion en x.
geometri.rotateY(Math.PI/2); // rotacion en y
geometri.translate(radio + radio /2,radio,0);// traslacion dependeinedo del radio a posicion deseada.
var angulito = Math.atan2(radio, altura); // calculo del angulo dado en radianes.
geometri.rotateZ(-angulito); //apliacion radio de rotacion, negativo ya que este se mueve en sentido de manecillas de reloj.




const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();