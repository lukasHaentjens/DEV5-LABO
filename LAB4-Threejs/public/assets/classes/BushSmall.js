import * as THREE from 'three'

export default class BushSmall {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.geometry = new THREE.SphereGeometry( 0.15, 32, 32 );
        this.material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.position.set(this.x+0.2, this.y, this.z+0.2);
    }
}