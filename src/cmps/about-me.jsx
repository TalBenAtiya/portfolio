import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { Canvas } from '@react-three/fiber'
import { Experience } from './ball-cmp/experience'

export const AboutMe = () => {

    return (
        <section id="about" className="about-me flex align-center main-layout">
            <div className="info">
                <h5 className="small-header">
                    <span className="rectangle"><SmallLine /></span>about me
                </h5>
                <h2>Personal Information</h2>
                <p>Hi, i'm Tal Ben Atiya, 28 years old Full-Stack Developer living in Israel, passionate about design and animation.
                    Using latest technologies to build and optimize applications with high efficiency and preformance.
                    <span className="space">Graduate of the Coding Academy - An intensive 640 hours coding bootcamp that qualifies Full-Stack developers.</span>
                    A highly motivated, responsible, hard worker with quick adaptation to new enviorments.
                </p>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="center-center" data-aos-offset="-400">
                <Canvas   
                    shadows
                    camera={{
                        fov: 45,
                        near: 0.3,
                        far: 200,
                        position: [10, 50, 40]
                    }}
                >
                    <Experience />
                </Canvas>
            </div>
        </section>

    )

}