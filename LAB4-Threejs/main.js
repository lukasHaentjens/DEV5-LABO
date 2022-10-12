import './style.css'
import * as THREE from 'three'
import firstCube from './assets/classes/Cube.js'

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create firstGeometry
let firstGeometry = new firstCube(0, 0, 0, 1, 0x00ff00);
scene.add(firstGeometry.mesh);


camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();
