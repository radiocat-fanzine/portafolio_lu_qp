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

            {/* Cards */}
            <div className="certificates-grid">
                {certificates.map(item => {

                    /* ===========================
                        PDF CERTIFICATES
                    ============================ */
                    if (item.type === 'certificate') {
                        return (
                            <article
                                key={item.id}
                                className="certificate-card"
                            >
                                <div className="certificate-card-header">
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt={`${item.institution} logo`}
                                            className="certificate-logo"
                                        />
                                    )}
                                </div>

                                <div className="certificate-card-content">
                                    <h3>{item.title}</h3>
                                    <p className="certificate-subtitle">
                                        {item.subtitle}
                                    </p>
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
                        )
                    }

                    /* ===========================
                        MOTIVATION LETTER
                    ============================ */
                    if (item.type === 'text') {
                        const isOpen = openTextId === item.id

                        return (
                            <article
                                key={item.id}
                                className={`certificate-card ${isOpen ? 'open' : ''}`}
                            >
                                <div className="certificate-card-content">
                                    <h3>{item.title}</h3>
                                    <p className="certificate-subtitle">
                                        {item.subtitle}
                                    </p>

                                    <button
                                        className="certificate-toggle"
                                        onClick={() => toggleText(item.id)}
                                        aria-expanded={isOpen}
                                    >
                                        {isOpen
                                            ? 'Close motivation letter'
                                            : 'Read motivation letter'}
                                    </button>

                                    {isOpen && (
                                        <div className="certificate-text">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            </article>
                        )
                    }

                    return null
                })}
            </div>

        </section>
    )
}

export default Certificates
