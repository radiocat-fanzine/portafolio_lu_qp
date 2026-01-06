import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../styles/components/sidebar.css'

function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <aside className={`sidebar ${open ? 'open' : ''}`}>
            {/* Botón hamburguesa */}
            <button 
                className="sidebar-hamburger" 
                onClick={() => setOpen(!open)}
                aria-label="Main menu"
            >
                ☰
            </button>

            <nav>
                <ul>
                    <li className="sidebar-section-title">About</li>

                    <li>
                    <Link to="/">Overview</Link>
                    </li>


                    <li className="sidebar-section-title">Portfolio</li>

                    <li>
                        <Link to="/portfolio/product">
                            Product Design & UX Engineering
                        </Link>
                    </li>

                    <li>
                        <Link to="/portfolio/ux-research">
                            UX Research & Prototyping
                        </Link>
                    </li>

                    <li>
                        <Link to="/portfolio/graphic-design">
                            Graphic Design
                        </Link>
                    </li>

                    <li className="sidebar-section-title" style={{ marginTop: '2rem' }}>
                        Certificates
                    </li>

                    <li>
                        <Link to="/certificates">
                            Academic & Internship Certificates
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* CONTACT SECTION */}
            <section className="sidebar-contact">
                <h2 className="sidebar-heading">
                    Let’s work together
                </h2>

                <p className="sidebar-text">
                    I’m open to UX, Product Design, and UX Engineering opportunities.
                    Feel free to reach out.
                </p>

                <ul className="sidebar-contact-list">
                    <li>
                        Email:{' '}
                        <a
                            href="mailto:radiocat.fanzine@gmail.com"
                            className="sidebar-link"
                        >
                            radiocat.fanzine@gmail.com
                        </a>
                    </li>
                    <li>
                        Phone: +51 934 654 911
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/luzmila-quezada-radiocat"
                            target="_blank"
                            rel="noreferrer"
                            className="sidebar-link"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/radiocat-fanzine"
                            target="_blank"
                            rel="noreferrer"
                            className="sidebar-link"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default Sidebar

