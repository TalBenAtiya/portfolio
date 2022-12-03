import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { ReactComponent as SmallDot } from '../assets/icons/small-dot.svg'
import { ReactComponent as GithubSvg } from '../assets/icons/github.svg'
import { ReactComponent as LinkedinSvg } from '../assets/icons/linkedin.svg'

export const AppHero = () => {

    return (
        <section className="app-hero">
            <div className="flex hero-container main-layout">
                <div className="information">
                    <h5 className="small-header">
                        <span className="rectangle"><SmallLine /></span>my name is
                    </h5>
                    <h2 className="my-name">
                        Tal <span className="last-name">Ben Atiya <SmallDot /> </span>
                    </h2>
                    <article className="description">Creative Full-Stack developer passionate about technology and design. Experience in writing single-page applications using latest market technologies.
                        <div className="flex align-center social-media">
                            <GithubSvg className="svg" />
                            <LinkedinSvg className="svg" />

                        </div>
                    </article>
                </div>
                <div className="img-container">
                    <div className="box empty-box"></div>
                    <div className="box img-box"></div>
                </div>
            </div>
        </section>
    )
}