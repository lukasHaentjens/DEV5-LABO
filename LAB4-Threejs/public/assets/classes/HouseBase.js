import * as THREE from 'three'
// import texture
import texture from '../textures/wall-texture.jpg'

export default class HouseBase {
    constructor(x,y,z,size,color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.color = color;
        this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
        // use texture
        this.material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texture) });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(this.x, this.y, this.z);
    }
}