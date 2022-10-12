import * as THREE from 'three';

export default class TreeLeaf {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.geometry = new THREE.SphereGeometry( 1, 32, 32 );
        this.material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.position.set(this.x, this.y, this.z);
    }
}