import { AppHero } from "../cmps/app-hero"
import { Contact } from "../cmps/contact";
import { MyWork } from "../cmps/my-works";
import { Services } from "../cmps/services";
import { AboutMe } from "../cmps/about-me";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const AppView = () => {
    const params = useParams()

    useEffect(() => {
        const projectName = params.projectName
        if (projectName) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        } 
    }, [params.projectName])


    return (
        <section className={"app-view"}>
            <AppHero />
            <Services />
            <MyWork />
            <AboutMe />
            <Contact />
        </section>
    )
}