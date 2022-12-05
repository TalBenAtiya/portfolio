import { Link } from 'react-router-dom'
import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { projectService } from '../services/projects.services'
import { ProjectDetails } from '../views/project-details'

export const MyWork = () => {
    const projects = projectService.getProjects()

    return (
        <section id="my-works" className="my-work main-layout">
            <h5 className="small-header">
                <span className="rectangle"><SmallLine /></span>My Works
            </h5>
            <h2>Featured Projects</h2>
            <div className="project-container">
                {projects.map(project => {
                    return <Link to={`${project.name}`} key={project._id}
                        className={`project-card ${project.name}`}>
                        <img className={`${project.name}`} src={require(`../assets/img/${project.name}.png`)} alt='Project Logo' />
                        <button><span>View Project</span></button>
                        <div className={`description flex align-center`}>
                        </div>
                    </Link>
                })}
            </div>
            <ProjectDetails />
        </section>
    )
}