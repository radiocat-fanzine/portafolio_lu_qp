import { useState } from 'react'
import { productProjects } from '../data/productProjects'
import { portfolioStatements } from '../data/portfolioStatements'
import ProjectCard from '../components/Portfolio/ProjectCard'
import ProjectModal from '../components/Portfolio/ProjectModal'

function Product() {
    const [activeProject, setActiveProject] = useState(null)
    const { title, description } = portfolioStatements.uxResearch

    return (
        <div className="portfolio-container">

        <header className="category-intro">
            <h1 className="category-title">{title}</h1>
            <p className="category-description">{description}</p>
        </header>

        <div className="portfolio-grid">
            {uxResearchProjects.map((project, index) => (
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

