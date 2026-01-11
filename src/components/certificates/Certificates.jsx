import { useState } from 'react'
import { certificates } from './certificatesData'
import './certificates.css'

function Certificates() {
    const [openTextId, setOpenTextId] = useState(null)

    const toggleText = (id) => {
        setOpenTextId(openTextId === id ? null : id)
    }

    return (
        <section className="certificates-page">
            
            {/* Header */}
            <header className="certificates-header">
                <h1>Certificates & Credentials</h1>
                <p>
                Professional training, internships, and personal motivation
                that support my design and development practice.
                </p>
            </header>

            {/* CERTIFICATES GRID */}
            <div className="certificates-grid">
                {certificateItems.map(item => (
                <article key={item.id} className="certificate-card">

                    <div className="certificate-media">
                    {item.logo && (
                        <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        />
                    )}
                    </div>

                    <div className="certificate-card-content">
                    <h3>{item.title}</h3>
                    <p className="certificate-subtitle">{item.subtitle}</p>
                    <span className="certificate-institution">
                        {item.institution}
                    </span>
                    </div>

                    <div className="certificate-actions">
                    <a
                        href={item.file}
                        download
                        className="btn-primary"
                    >
                        Download PDF
                    </a>
                    </div>

                </article>
                ))}
            </div>

            {/* MOTIVATION LETTER */}
            {motivationItem && (
                <div className="motivation-wrapper">
                <article className="motivation-card">
                    <h3>{motivationItem.title}</h3>
                    <p className="certificate-subtitle">
                    {motivationItem.subtitle}
                    </p>

                    <button
                    className="certificate-toggle"
                    onClick={() => toggleText(motivationItem.id)}
                    aria-expanded={openTextId === motivationItem.id}
                    >
                    {openTextId === motivationItem.id
                        ? 'Close motivation letter'
                        : 'Read motivation letter'}
                    </button>

                    {openTextId === motivationItem.id && (
                    <div className="certificate-text">
                        {motivationItem.content}
                    </div>
                    )}
                </article>
                </div>
            )}

            </section>
    )
}

export default Certificates
