import * as THREE from 'three'

import RockBig from './RockBig'
import RockSmall from './RockSmall'

export default class Rocks {
    constructor() {
        const signX = Math.random() > 0.5 ? 1 : -1;
        const randomX = Math.random() * 100 * signX;

        const y = 0;

        const signZ = Math.random() > 0.5 ? 1 : -1;
        const randomZ = Math.random() * 100 * signZ;

        const rockBig = new RockBig(randomX, y, randomZ);
        const rockSmall = new RockSmall(randomX+0.3, y, randomZ+0.3);

        this.mesh = new THREE.Group();
        this.mesh.add(rockBig.mesh);
        this.mesh.add(rockSmall.mesh);

        this.mesh.rotation.y = Math.random() * Math.PI * 2;
    }
}