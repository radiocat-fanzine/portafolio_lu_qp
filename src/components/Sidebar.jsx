import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../styles/components/sidebar.css'

function Sidebar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <aside className={`sidebar ${open ? 'open' : ''}`}>
                {/* Botón hamburguesa */}
                <button
                    className="sidebar-hamburger"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? '✕' : '☰'}
                </button>

                <nav>
                    <ul>
                        <li className="sidebar-section-title">About</li>

                        <li>
                            <Link to="/" onClick={closeMenu}>
                                Overview
                            </Link>
                        </li>

                        <li className="sidebar-section-title">Portfolio</li>

                        <li>
                            <Link to="/portfolio/product" onClick={closeMenu}>
                                Product Design & UX Engineering
                            </Link>
                        </li>

                        <li>
                            <Link to="/portfolio/ux-research" onClick={closeMenu}>
                                UX Research & Prototyping
                            </Link>
                        </li>

                        <li>
                            <Link to="/portfolio/graphic-design" onClick={closeMenu}>
                                Graphic Design
                            </Link>
                        </li>

                        <li
                            className="sidebar-section-title"
                            style={{ marginTop: '2rem' }}
                        >
                            Certificates
                        </li>

                        <li>
                            <Link to="/certificates" onClick={closeMenu}>
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
            
            {/* OVERLAY */}
            {open && (
                <div
                    className="sidebar-overlay"
                    onClick={closeMenu}
                />
            )}
        </>
    )
}

export default Sidebar

