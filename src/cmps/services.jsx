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
        <div className="services-box">
            <section className="services flex main-layout">
                <h5 className="small-header">
                    <span className="rectangle"><SmallLine /></span>Services & Skills
                </h5>
                <h2>Specialized in</h2>
                <div className="specialties-container flex align-center">
                    {spcialties.map(specialty => <div key={specialty.title} className="card">
                        <img src={require(`../assets/icons/${specialty.svg}.svg`)} alt="Icon" />
                        <h3>{specialty.title}</h3>
                        <p>{specialty.text}</p>
                    </div>
                    )}
                </div>
            </section>
            <div className="flex align-center skills">
                <JsSvg className="svg" />
                <TsSvg className="svg" />
                <ReactSvg className="svg" />
                <ReduxSvg className="svg" />
                <VueSvg className="svg" />
                <AngularSvg className="svg" />
                <NodeSvg className="svg" />
                <MongoSvg className="svg" />
                <ExSvg className="svg" />
                <BootstrapSvg className="svg" />
                <HtmlSvg className="svg" />
                <CssSvg className="svg" />
                <SassSvg className="svg" />
            </div>
        </div>
    )
}