import './style.css'
import * as THREE from 'three'
import firstCube from './assets/classes/Cube.js'
import Roof from "./assets/classes/Roof.js"
import TreeStem from "./assets/classes/TreeStem.js"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// Add point light
const pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 3, 3, 3 );
scene.add( pointLight );

// Add point light helper
const pointLightHelper = new THREE.PointLightHelper( pointLight, 1 );
scene.add( pointLightHelper );

// Create firstGeometry
let firstGeometry = new firstCube(0, 0.5, 0, 1, 0x00ff00);
scene.add(firstGeometry.mesh);

// Create TreeStem
let treeStem = new TreeStem(1, 0.65, 1);
scene.add(treeStem.mesh);

// Create roof
let roof = new Roof();
scene.add(roof.mesh);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );

}

animate();
