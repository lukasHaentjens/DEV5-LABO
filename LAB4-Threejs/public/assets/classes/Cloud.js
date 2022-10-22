import * as THREE from 'three';

export default class Cloud {
    constructor(x, y, z, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.geometry = new THREE.SphereGeometry( this.size, 32, 32 );
        this.material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF} );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.position.set(this.x, this.y, this.z);
    }
}