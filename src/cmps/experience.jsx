import { OrbitControls, TrackballControls } from '@react-three/drei'
import { Lights } from './lights'
import { Cloud } from './cloud'

export const Experience = () => {
    return <>
        <Lights />
        <TrackballControls rotateSpeed={2} noZoom={true} makeDefault />
            <Cloud count={4} radius={20} />
    </>
}