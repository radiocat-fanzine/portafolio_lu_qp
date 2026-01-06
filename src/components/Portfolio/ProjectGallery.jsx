import './portfolio.css'

export default function ProjectGallery({ images }) {
    return (
        <div className="project-gallery">
            {images.map((img, idx) => (
                <div key={idx} className="gallery-item">
                    <img
                        src={img.image || img}
                        alt={`Project image ${idx + 1}`}
                        className="gallery-image"
                    />
                </div>
            ))}
        </div>
    )
}

