import React, {useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

const ThreeD = () => {

    function Box(props) {

        // This reference will give us direct access to the mesh
        const mesh = useRef()

        // Rotate mesh every frame, this is outside of React without overhead
        useFrame(() => (mesh.current.rotation.z -= 0.01))
        useFrame(() => (mesh.current.rotation.y += 0.02))


        return (
            <mesh {...props} ref={mesh} scale={1.5}>
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial color='#ECB993'/>
            </mesh>
        )
    }

    return (
        <div>
            <Canvas>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <Box position={[0, 0, 0]}/>
            </Canvas>
        </div>
    )

}

export default ThreeD;
