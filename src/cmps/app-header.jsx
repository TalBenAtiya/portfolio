import { useEffect, useState } from 'react'


export const AppHeader = () => {
const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = () => {
        if (window.scrollY > 30 && !isScrolled) setIsScrolled(true)
        if (window.scrollY < 30 && isScrolled) setIsScrolled(false)
        
    }

    return (
        <section className={"app-header" + (isScrolled ? " scrolled" : "")}>
            <header className="flex align-center main-layout main-header">
                <div className="flex align-center logo-container">
                <div className="logo"> 
                <img src={require("../assets/img/PortfolioLogo.png")} alt="Logo" />
                </div>
                </div>
                <nav className="flex align-center">
                    <li><span><div className="box"></div> Services</span></li>
                    <li><span><div className="box"></div>My Works</span></li>
                    <li><span><div className="box"></div> About</span></li>
                    <li><span><div className="box"></div> Contact</span></li>
                </nav>
                <button className="btn btn-resume">Resume</button>
            </header>
        </section>
    )
}