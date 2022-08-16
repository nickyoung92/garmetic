import React from 'react'
import * as THREE from "three"




function Box() {
    const texture = new THREE.TextureLoader().load("/img/assets/metal.jpg")
    const material = new THREE.MeshBasicMaterial( { map: texture })
return (
    <mesh rotation={[90,0,20]}>
       <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
       <meshPhongMaterial attach="material" color="silver" />
    </mesh>
    
)
}

export default Box;