import * as THREE from 'three';

export default class Card {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.6 );
        this.material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF} );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.position.set(this.x, this.y, this.z);
    }
}