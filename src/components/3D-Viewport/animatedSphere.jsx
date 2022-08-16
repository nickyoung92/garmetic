import React from "react"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"

function AnimatedSphere() {
    return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
        color="purple" attach="material" distort={0.3} speed={2} roughness={1}
        />
    </Sphere>
    )
}

export default AnimatedSphere