import { useState } from 'react'
import { graphicDesignProjects } from '../data/graphicDesignProjects'
import { portfolioStatements } from '../data/portfolioStatements'
import ProjectCard from '../components/Portfolio/ProjectCard'
import ProjectModal from '../components/Portfolio/ProjectModal'

import '../components/Portfolio/portfolio.css'


function Product() {
    const [activeProject, setActiveProject] = useState(null)
    const { title, description } = portfolioStatements.graphicDesign

    return (
        <div className="portfolio-container">

        <header className="category-intro">
            <h1 className="category-title">{title}</h1>
            <p className="category-description">{description}</p>
        </header>

        <div className="portfolio-grid">
            {graphicDesignProjects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    style={{ '--delay': `${index * 80}ms` }}
                    onClick={() => setActiveProject(project)}
                />
            ))}
        </div>


        {activeProject && (
            <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
            />
        )}
        </div>
    )
}

export default Product

