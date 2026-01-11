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

            {/* CERTIFICATES */}
            <div className="certificates-grid">
            {certificates
                .filter(item => item.type === 'certificate')
                .map(item => (
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
                    <a href={item.file} download>
                        Download PDF
                    </a>
                    </div>

                </article>
            ))}
            </div>

            {/* MOTIVATION LETTER */}
            {certificates
            .filter(item => item.type === 'text')
            .map(item => {
                const isOpen = openTextId === item.id

                return (
                <div key={item.id} className="motivation-wrapper">
                    <article className="motivation-card">

                    <h3>{item.title}</h3>
                    <p className="certificate-subtitle">{item.subtitle}</p>

                    <button
                        className="certificate-toggle"
                        onClick={() => toggleText(item.id)}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? 'Close motivation letter' : 'Read motivation letter'}
                    </button>

                    {isOpen && (
                        <div className="certificate-text">
                        {item.content}
                        </div>
                    )}

                    </article>
                </div>
                )
            })}
            </section>
    )
}

export default Certificates
