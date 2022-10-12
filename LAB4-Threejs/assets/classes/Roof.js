import * as THREE from 'three'

export default class Roof {
    constructor() {
        this.geometry = new THREE.CylinderGeometry( 0, 1, 0.3, 4 );
        this.material = new THREE.MeshLambertMaterial( {color: 0xffff00} );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.position.set(0, 1.2, 0);
    }
}