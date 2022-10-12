import * as THREE from 'three';

export default class TreeStem {
    constructor(x, y, z) {
        // Create stem
        this.x = x;
        this.y = y;
        this.z = z;
        this.stemGeometry = new THREE.CylinderGeometry( 0.2, 0.2, 1.3, 32 );
        this.stemMaterial = new THREE.MeshLambertMaterial( {color: 0xffff00} );
        this.mesh = new THREE.Mesh( this.stemGeometry, this.stemMaterial );
        this.mesh.position.set(this.x, this.y, this.z);
        this.mesh.rotation.y = Math.PI / 4;
    }
}