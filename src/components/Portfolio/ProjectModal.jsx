import ProjectGallery from './ProjectGallery'
import './portfolio.css'

function ProjectModal({ project, onClose }) {
    if (!project) return null

    const { meta, hero, sections, gallery, links } = project

    return (
        <div className="project-modal-overlay open">
        <div className="project-modal open">

            {/* Close */}
            <button className="project-modal-close" onClick={onClose}>
            ×
            </button>

            {/* Hero */}
            {hero?.banner && (
            <div className="project-hero">
                <img src={hero.banner} alt={hero.alt || meta.title} />
            </div>
            )}

            {/* Header */}
            <header className="project-header">
            <h1>{meta.title}</h1>
            <p className="project-subtitle">{meta.subtitle}</p>
            <span className="project-tech">{meta.tech}</span>
            </header>

            {/* Content */}
            <div className="project-content">

            {sections?.map(section => (
                <section key={section.id} className="project-section">
                <h2>{section.title}</h2>

                {section.content.map((block, index) => {
                    switch (block.type) {
                    case 'text':
                        return <p key={index}>{block.data}</p>

                    case 'list':
                        return (
                        <ul key={index}>
                            {block.data.map((item, i) => (
                            <li key={i}>{item}</li>
                            ))}
                        </ul>
                        )

                    case 'highlight':
                        return (
                        <div key={index} className="project-highlight">
                            {block.data}
                        </div>
                        )

                    default:
                        return null
                    }
                })}
                </section>
            ))}

            {/* Gallery (default expanded) */}
            {gallery?.length > 0 && (
                <section className="project-section">
                <h2>Gallery</h2>
                <ProjectGallery images={gallery} />
                </section>
            )}

            {/* Links */}
            {links?.length > 0 && (
                <section className="project-section">
                <h2>Links</h2>
                <ul className="project-links">
                    {links.map(link => (
                    <li key={link.label}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                        </a>
                    </li>
                    ))}
                </ul>
                </section>
            )}
            </div>
        </div>
        </div>
    )
}

export default ProjectModal
