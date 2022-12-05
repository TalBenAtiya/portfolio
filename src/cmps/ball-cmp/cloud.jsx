import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import JakartaBold from '../../assets/fonts/jakarta/PlusJakartaSans-Bold.ttf'

const Word = ({ children, ...props }) => {
    const fontProps = { font: JakartaBold, fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} color={'#7e74f1'} castShadow={'#7e74f1'}/>
}

export const Cloud = ({ count = 4, radius = 20 }) => {
    const wordsTemp = [['JavaScript', 'TypeScript', 'React', 'Illustraitor'], ['Redux', 'Node.JS', 'MongoDB', 'Photoshop'], ['Vue', 'Angular', 'Bootstrap', 'JQuery'], ['HTML', 'CSS', 'SASS', 'Socket.IO']]
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), wordsTemp[i-1][j]])
            }
        }
        return temp
    }, [count, radius])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

// export default function App() {
//     return (
//         <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
//             {/* <fog attach="fog" args={['#202025', 0, 80]} /> */}
//             <TrackballControls />
//         </Canvas>
//     )
// }
