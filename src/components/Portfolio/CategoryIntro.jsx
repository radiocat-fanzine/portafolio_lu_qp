function CategoryIntro({ title, description }) {
    return (
        <section className="category-intro">
        <h1 className="category-title">{title}</h1>
        <p className="category-description">
            {description.trim()}
        </p>
        </section>
    )
}

export default CategoryIntro
