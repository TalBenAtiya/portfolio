import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { projectService } from "../services/projects.services"
import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { ReactComponent as GithubSvg } from '../assets/icons/github.svg'
import { ReactComponent as NavigationSvg } from '../assets/icons/navigation.svg'


export const ProjectDetails = () => {
    const params = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        const projectName = params.projectName
        setProject(projectService.getProjectByName(projectName))
    }, [])

    if (!project) return
    return (
        <section className="project-details main-layout">
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
                <img src={require(`../assets/img/${project.name}.png`)} />
            </div>
        </section>
    )
}