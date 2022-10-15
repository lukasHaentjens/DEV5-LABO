import * as THREE from 'three';
import Cloud from './Cloud';

export default class Clouds {
    constructor() {

        this.clouds = [];
        for (let i = 0; i < 10; i++) {
            this.x = Math.random() * 10 - 5;
            this.y = 10;
            this.z = Math.random() * 10 - 5;
            this.size = Math.random() * 2 + 1;

            const cloud1 = new Cloud(this.x+this.size, this.y, this.z-this.size, this.size*0.5);
            const cloud2 = new Cloud(this.x-this.size, this.y, this.z-this.size, this.size*0.4);
            const cloud3 = new Cloud(this.x, this.y, this.z-this.size, this.size);
            this.mesh = new THREE.Group();
            this.mesh.add(cloud1.mesh);
            this.mesh.add(cloud2.mesh);
            this.mesh.add(cloud3.mesh);
            this.clouds.push(this.mesh);
        }
    }
}