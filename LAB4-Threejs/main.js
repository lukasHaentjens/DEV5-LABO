import './style.css'
import * as THREE from 'three'
import HouseBase from './assets/classes/HouseBase.js'
import Roof from "./assets/classes/Roof.js"
import TreeStem from "./assets/classes/TreeStem.js"
import TreeLeaf from "./assets/classes/TreeLeaf.js"
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
// Only positive orbit axis
controls.enableDamping = true;
controls.enablePan = false;
controls.maxPolarAngle = Math.PI / 2.1;
controls.update();

// Add point light
const pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 3, 3, 3 );
scene.add( pointLight );

// Add point light helper
const pointLightHelper = new THREE.PointLightHelper( pointLight, 1 );
scene.add( pointLightHelper );

// Create firstGeometry
let houseBase = new HouseBase(0, 0.5, 0, 1, 0x00ff00);
scene.add(houseBase.mesh);


// Generate trees
for (let i = 0; i < 20; i++) {

    const signX = Math.random() > 0.5 ? 1 : -1;
    const randomX = Math.random() * 10*signX;

    const signY = Math.random() > 0.5 ? 1 : -1;
    const randomY = Math.random() * 10*signY;

    let treeStem = new TreeStem(randomX, 0.65, randomY);
    scene.add(treeStem.mesh);

    let treeLeaf = new TreeLeaf(randomX, 1.65, randomY);
    scene.add(treeLeaf.mesh);


}

// Create plane
const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32 );
const planeMaterial = new THREE.MeshLambertMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = Math.PI / 2;
scene.add( plane );

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
