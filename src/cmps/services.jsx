import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { ReactComponent as JsSvg } from '../assets/icons/js.svg'
import { ReactComponent as TsSvg } from '../assets/icons/ts.svg'
import { ReactComponent as ReactSvg } from '../assets/icons/react.svg'
import { ReactComponent as ReduxSvg } from '../assets/icons/redux.svg'
import { ReactComponent as VueSvg } from '../assets/icons/vue.svg'
import { ReactComponent as AngularSvg } from '../assets/icons/angular.svg'
import { ReactComponent as NodeSvg } from '../assets/icons/node-js.svg'
import { ReactComponent as MongoSvg } from '../assets/icons/mongo.svg'
import { ReactComponent as ExSvg } from '../assets/icons/express.svg'
import { ReactComponent as CssSvg } from '../assets/icons/css.svg'
import { ReactComponent as HtmlSvg } from '../assets/icons/html.svg'
import { ReactComponent as BootstrapSvg } from '../assets/icons/bootsrap.svg'
import { ReactComponent as SassSvg } from '../assets/icons/sass.svg'

export const Services = () => {
    const spcialties = [
        {
            title: 'Responsive Design',
            svg: 'responsive-design',
            text: 'Creating responsive websites to look great on any device.',
        },
        {
            title: 'Full Stack',
            svg: 'full-stack',
            text: 'Development from frontend to backend, full optimized app using latest technologies.',
        },
        {
            title: 'Team Player',
            svg: 'team-player',
            text: 'Kind and friendly person, open for suggestions, striving for excellence.',
        }
    ]

    return (
        <div id="services" className="services-box">
            <section className="services flex main-layout">
                <h5 className="small-header">
                    <span className="rectangle"><SmallLine /></span>Services & Skills
                </h5>
                <h2>Specialized in</h2>
                <div className="specialties-container flex align-center">
                    {spcialties.map(specialty => <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" key={specialty.title} className="card">
                        <img src={require(`../assets/icons/${specialty.svg}.svg`)} alt="Icon" />
                        <h3>{specialty.title}</h3>
                        <p>{specialty.text}</p>
                    </div>
                    )}
                </div>
            </section>
            <div className="flex align-center skills">
                <div data-aos="flip-left" data-aos-delay="0" data-aos-offset="0">
                    <JsSvg className="svg" />
                </div>
                <div data-aos="flip-left" data-aos-delay="100" data-aos-offset="0" >
                    <TsSvg className="svg" />
                </div>
                <div data-aos="flip-left" data-aos-delay="200" data-aos-offset="0">
                    <ReactSvg className="svg" />
                </div>
                <div data-aos="flip-left" data-aos-delay="300" data-aos-offset="0" >
                    <ReduxSvg className="svg" />
                </div>
                <div data-aos="flip-left" data-aos-delay="400" data-aos-offset="0">
                    <VueSvg className="svg"  />
                </div>
                <div data-aos="flip-left" data-aos-delay="500" data-aos-offset="0">
                    <AngularSvg className="svg"  />
                </div>
                <div data-aos="flip-left" data-aos-delay="600" data-aos-offset="0">
                    <NodeSvg className="svg"/>
                </div>
                <div data-aos="flip-left" data-aos-delay="700" data-aos-offset="0">
                    <MongoSvg className="svg"/>
                </div>
                <div data-aos="flip-left" data-aos-delay="800" data-aos-offset="0">
                    <ExSvg className="svg"/>
                </div>
                <div data-aos="flip-left" data-aos-delay="900" data-aos-offset="0">
                    <BootstrapSvg className="svg"/>
                </div>
                <div data-aos="flip-left" data-aos-delay="1000" data-aos-offset="0">
                    <HtmlSvg className="svg"/>
                </div>
                <div data-aos="flip-left" data-aos-delay="1100" data-aos-offset="0">
                    <CssSvg className="svg"/>
                </div>
                <div data-aos="flip-left" data-aos-delay="1200" data-aos-offset="0">
                    <SassSvg className="svg" />
                </div>
            </div>
        </div>
    )
}