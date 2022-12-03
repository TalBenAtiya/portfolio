import { AppHero } from "../cmps/app-hero"    
import { Contact } from "../cmps/contact";
import { MyWork } from "../cmps/my-works";
import { Services } from "../cmps/services";
import { AboutMe } from "../cmps/about-me";

export const AppView = () => {

    return (
        <section className="app-view">
            <AppHero />
            <Services />
            <MyWork />
            <AboutMe />
            <Contact />
        </section>
    )
}