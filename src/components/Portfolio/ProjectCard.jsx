import './portfolio.css'

function ProjectCard({ project, onClick }) {
    const { meta, card } = project

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick(project)
        }
    }

    return (
        <article
            className="project-card"
            role="button"
            tabIndex={0}
            style={{ animationDelay: 'var(--delay)' }}
            onClick={() => onClick(project)}
            onKeyDown={handleKeyDown}
            aria-label={`Open project ${meta.title}`}
        >
            {/* Image */}
            <div className="project-card-image">
                <img
                    src={card.image}
                    alt={card.alt || meta.title}
                />

                {/* Overlay content */}
                <div className="project-card-overlay">
                    <h3 className="project-card-title">
                        {meta.title}
                    </h3>

                    <div className="project-card-meta">
                        <p className="project-card-subtitle">
                            {meta.subtitle}
                        </p>

                        {meta.tech && (
                            <span className="project-card-tech">
                                {meta.tech}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
