import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { projectService } from "../services/projects.services"
import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { ReactComponent as GithubSvg } from '../assets/icons/github.svg'
import { ReactComponent as NavigationSvg } from '../assets/icons/navigation.svg'
import { ReactComponent as CloseSvg } from '../assets/icons/close.svg'


export const ProjectDetails = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [project, setProject] = useState(null)
    const [imgNum, setImgNum] = useState(null)
    let imgInterval

    useEffect(() => {
        const projectName = params.projectName
        setProject(projectService.getProjectByName(projectName))
        if (project) setImgNum(project?.screenshots[0])
    }, [project, params.projectName])


    const closeProject = () => {
        navigate('/')
    }

    const startInterval = () => {
        if (!imgNum) setImgNum(1)
        if (imgNum >= project.screenshots.length) setImgNum(1)
        else setImgNum(imgNum + 1)
    }


    if (!project || !imgNum) return
    return (
        // <div data-aos="fade-left" data-aos-anchor-placement="center-center">
        <>
            <div onClick={closeProject} className="background"></div>
            <section className="project-details main-layout">
                <button onClick={closeProject} className="btn btn-close"><CloseSvg /></button>
                <div className="container flex">
                    <div className="project-info">
                        <h5 className="small-header">
                            <span className="rectangle"><SmallLine /></span>project
                        </h5>
                        <h2>{project.name}</h2>
                        <p>{project.text}</p>
                        <div className="btns-container flex align-center">
                            <a href={project.website} target="blank" rel="noopener noreferrer" className="btn website"><NavigationSvg /> Project Website</a>
                            <a href={project.repo} target="blank" rel="noopener noreferrer" className="btn github"><GithubSvg /> Github Repository</a>
                        </div>
                    </div>
                    <div className={`logo-container ${project.name}`}>
                        <img src={require(`../assets/img/${project.name}.png`)} alt="Project-Logo" />
                    </div>
                </div>
                <div className="img-container">
                    <h5 className="small-header">
                        <span className="rectangle"><SmallLine /></span>Screenshots
                    </h5>
                    {project.screenshots.map(imgNum => {
                        return <div key={imgNum}><img src={require(`../assets/img/${project.name}/${imgNum}.jpg`)} /></div>
                    })}
                </div>
            </section>
        </>
        // </div>
    )
}