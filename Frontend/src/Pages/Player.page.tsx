import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from 'three';

export function Player() {
    const material = new THREE.MeshStandardMaterial({ color: '#006622' })
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <OrbitControls />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            {/*<Suspense>
                <Model url="../media/cat/scene.gltf"/>
            </Suspense>*/}
            <Box
                position={[0, 0, 0]}
                scale={[1, 1, 1]}
                material={material}
            />
        </Canvas>
    )
}

function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta;
    })
    return (
        <mesh
            {...props}
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
        </mesh>
    )
}

interface props2 {
    url: string
}

function Model({ url }: props2) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}