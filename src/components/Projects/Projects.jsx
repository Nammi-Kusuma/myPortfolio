import './Projects.css'
import Card from '../../pages/Card/Card'

function Projects() {
    return(
        <div className="projects" id="projects">
            <div className="projects-text">
                <h1 className='pt h1'>My Works</h1>
                <p className='pt p'>Explore the projects I’ve built and see what I’ve been working on!</p>
            </div>
            <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    )
}

export default Projects