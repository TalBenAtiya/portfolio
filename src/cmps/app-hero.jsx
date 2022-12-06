import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { ReactComponent as SmallDot } from '../assets/icons/small-dot.svg'
import { ReactComponent as GithubSvg } from '../assets/icons/github.svg'
import { ReactComponent as LinkedinSvg } from '../assets/icons/linkedin.svg'

export const AppHero = () => {

    return (
        <section id="my-portfolio" className="app-hero">
            <div className="flex hero-container main-layout">
                <div className="information">
                    <h5 className="small-header">
                        <span className="rectangle"><SmallLine /></span>my name is
                    </h5>
                    <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-offset="-150">
                        <h2 className="my-name">
                            Tal <span className="last-name">Ben Atiya <SmallDot /> </span>
                        </h2>
                    </div>
                    <article className="description">Creative Full-Stack developer passionate about technology and design. <span>Experience in writing single-page applications using latest technologies.</span>
                        <div className="flex align-center social-media">
                            <a href="https://www.linkedin.com/in/talbenatiya/" target="blank"><LinkedinSvg className="svg" /></a>
                            <a href="https://github.com/TalBenAtiya" target="blank"><GithubSvg className="svg" /></a>


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