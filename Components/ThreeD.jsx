import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

const ThreeD = () => {

    // function Box(props) {
    //     // This reference will give us direct access to the mesh
    //     const mesh = useRef()
    //     // Set up state for the hovered and active state
    //     const [hovered, setHover] = useState(false)
    //     const [active, setActive] = useState(false)
    //     // Rotate mesh every frame, this is outside of React without overhead
    //     useFrame(() => (mesh.current.rotation.x += 0.01))
    //
    //     return (
    //         <mesh
    //             {...props}
    //             ref={mesh}
    //             scale={active ? 1.5 : 1}
    //             onClick={(event) => setActive(!active)}
    //             onPointerOver={(event) => setHover(true)}
    //             onPointerOut={(event) => setHover(false)}>
    //             <boxGeometry args={[1, 2, 3]}/>
    //             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
    //         </mesh>
    //     )
    // }
    //
    // return (
    //     <Canvas>
    //         <ambientLight/>
    //         <pointLight position={[10, 10, 10]}/>
    //         <Box position={[-1.2, 1, 0]}/>
    //         {/*<Box position={[1.2, 0, 0]}/>*/}
    //     </Canvas>
    // )


    /**
     * Other tuto
     */
    // function Box(props) {
    //     const mesh = useRef()
    //     const [state, setState] = useState({isHovered: false, isActive: false})
    //
    //     return (
    //         <mesh
    //             {...props}
    //             ref={mesh}
    //             scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
    //             onClick={(e) => setState({...state, isActive: !state.isActive, })}
    //             onPointerOver={(e) => setState({...state, isHovered: true})}
    //             onPointerOut={(e) => setState({...state, isHovered: false})}>
    //             <boxBufferGeometry args={[1, 1, 1]} />
    //             <meshStandardMaterial color={state.isActive ? '#820263' : '#D90368'} />
    //         </mesh>
    //     )
    // }
    //
    // return (
    //     <Canvas>
    //         <ambientLight intensity={0.5}/>
    //         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
    //         <pointLight position={[-10, -10, -10]}/>
    //         <Box position={[-1, 0, 0]} />
    //         <Box position={[1, 0, 0]} />
    //     </Canvas>
    // )
    return(
        <div>3D</div>
    )
}

export default ThreeD;
