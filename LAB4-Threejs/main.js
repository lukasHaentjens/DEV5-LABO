import './style.css'
import * as THREE from 'three'
import HouseBase from './assets/classes/HouseBase.js'
import Roof from "./assets/classes/Roof.js"
import TreeStem from "./assets/classes/TreeStem.js"
import TreeLeaf from "./assets/classes/TreeLeaf.js"
import BushBig from "./assets/classes/BushBig.js";
import BushSmall from "./assets/classes/BushSmall.js";
import Rocks from "./assets/classes/Rocks.js";
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
// Max zoom out
controls.maxDistance = 30;
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

// Add sky around the scene
const skyGeometry = new THREE.SphereGeometry( 30, 32, 32 );
const skyMaterial = new THREE.MeshBasicMaterial( {color: 0x87ceeb, side: THREE.BackSide} );
const sky = new THREE.Mesh( skyGeometry, skyMaterial );
scene.add( sky );


// Generate bushes
for (let i = 0; i < 500; i++) {
    const signX = Math.random() > 0.5 ? 1 : -1;
    const randomX = Math.random() * 100 * signX;

    const signZ = Math.random() > 0.5 ? 1 : -1;
    const randomZ = Math.random() * 100 * signZ;

    // Load in bush parts
    let bushBig = new BushBig(randomX, 0, randomZ, 0.5, 0x00ff00);
    let bushSmall = new BushSmall(randomX, 0, randomZ, 0.5, 0x00ff00);

    // Create bush group
    const bush = new THREE.Group();
    bush.add(bushBig.mesh);
    bush.add(bushSmall.mesh);
    // Rotate bush random
    bush.rotation.y = Math.random() * Math.PI * 2;

    // Add bush to scene
    scene.add(bush);
}

// Generate rocks
for (let i = 0; i < 500; i++) {

    const rocks = new Rocks();
    scene.add (rocks.mesh);

}

// Generate trees
for (let i = 0; i < 100; i++) {

    const signX = Math.random() > 0.5 ? 1 : -1;
    const randomX = Math.random() * 25*signX;

    const signZ = Math.random() > 0.5 ? 1 : -1;
    const randomZ = Math.random() * 25 * signZ;

    // Load in tree parts
    let treeStem = new TreeStem(randomX, 0.65, randomZ);
    let treeLeaf = new TreeLeaf(randomX, 1.65, randomZ);

    // Create tree group
    const tree = new THREE.Group();
    tree.add(treeStem.mesh);
    tree.add(treeLeaf.mesh);
    scene.add(tree);


}

// Create plane
const planeGeometry = new THREE.PlaneGeometry( 100, 100, 32 );
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
