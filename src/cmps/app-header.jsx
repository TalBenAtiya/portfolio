import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as UpArrowSvg } from '../assets/icons/up-arrow.svg'


export const AppHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    useEffect(() => {
        if (isMenuOpen) document.body.classList.add("modal-open");
        else document.body.classList.remove("modal-open");
    }, [isMenuOpen])

    const handleScroll = () => {
        if (window.scrollY > 200 && !isScrolled) setIsScrolled(true)
        if (window.scrollY < 200 && isScrolled) setIsScrolled(false)
    }

    const routeHome = () => {
        navigate('/')
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <section className={"app-header" + (isScrolled ? " scrolled" : "")}>
            <header className="flex align-center main-layout main-header">
                <div className="flex align-center logo-container">
                    <a href="#my-portfolio" className="logo">
                        <img src={require("../assets/img/PortfolioLogo.png")} alt="Logo" />
                        <UpArrowSvg className={(isScrolled ? "scrolled" : "")} />
                    </a>
                </div>
                <nav className={isMenuOpen ? 'flex align-center open' : 'flex align-center'}>
                    <a onClick={routeHome} href="#services"><span><div className="box"></div> Services</span></a>
                    <a onClick={routeHome} href="#my-works"><span><div className="box"></div>My Works</span></a>
                    <a onClick={routeHome} href="#about"><span><div className="box"></div> About</span></a>
                    <a onClick={routeHome} href="#contact"><span><div className="box"></div> Contact</span></a>
                </nav>
                <div className="flex align-center">
                    <button onClick={toggleMenu} className="hamburger">
                        <div id="nav-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <button className="btn btn-resume">Resume</button>
                </div>
            </header>
        </section>
    )
}