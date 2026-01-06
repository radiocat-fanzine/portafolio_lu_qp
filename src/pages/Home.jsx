import { useState } from 'react'
import profile from '../assets/profile.jpg'

function Home() {
    const [showCV, setShowCV] = useState(false)

    return (
        <main className="home">
            {/* Header */}
            <section className="home-header">
                <div className="profile-frame responsive">
                <img
                    src={profile}
                    alt="Luzmila Quezada profile"
                    className="profile-image responsive img-small"
                />
                </div>

            <div className="home-title">
                <h1>Luzmila Quezada Pajares</h1>
                <h2>UX Designer · Product Design & UX Engineering</h2>
            </div>
        </section>

        {/* Intro */}
        <p className="home-intro">
            UX Designer & Frontend Developer with a background in Communication and
            Visual Arts. I specialize in designing feasible, human-centered digital
            systems by bridging the gap between aesthetic coherence and technical
            implementation. With expertise in React.js and Product Design, I
            transform complex business needs into scalable, accessible interfaces
            and seamless user experiences.
        </p>

        {/* Metadata */}
        <ul className="home-metadata">
            <li>
            <strong>Location:</strong> Peru / Germany (open to relocation)
            </li>
            <li>
            <strong>Languages:</strong> Spanish (Native), English (B2)
            </li>
        </ul>

        {/* CTA */}
        <button
            className="button button-primary"
            onClick={() => setShowCV(!showCV)}
        >
            {showCV ? 'Hide CV' : 'View CV'}
        </button>

        {/* CV CARD */}
        {showCV && (
            <section className="cv-card">

                {/* =====================
                    Technical Skills
                ===================== */}
                <section className="cv-section">
                    <h3 className="cv-title">Technical Skills</h3>

                    <p className="cv-text">
                        <strong>Design:</strong> UX Research, Information Architecture, Wireframing,
                        High-Fidelity Prototyping, Design Systems, Accessibility (WCAG),
                        Visual Merchandising.
                    </p>

                    <p className="cv-text">
                        <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3,
                        Tailwind CSS, Responsive Design.
                    </p>

                    <p className="cv-text">
                        <strong>Tools & Backend:</strong> Firebase (BaaS), Git/GitHub, Vite,
                        React Native, SQL, Adobe Creative Suite.
                    </p>
                </section>

                <hr className="cv-separator" />

                {/* =====================
                    Professional Experience
                ===================== */}
                <section className="cv-section">
                    <h3 className="cv-title">Professional Experience</h3>

                    {/* Simaru */}
                    <div className="cv-experience">
                        <header className="cv-experience-header">
                            <span className="cv-role">Graphic & Lead UX Designer</span>
                            <span className="cv-company"> · Simaru</span>

                            <div className="cv-meta">
                                <em>German eco-friendly brand specializing in handcrafted sustainable accessories.</em><br />
                                <span>January 2023 – Present</span>
                            </div>
                        </header>

                        <ul className="cv-list">
                            <li>
                                <strong>UX/Product Transition (Aug 2025):</strong> Spearheaded the digital
                                transformation of the brand's e-commerce ecosystem by designing and
                                developing a high-fidelity web app prototype using React.js and Firebase.
                            </li>
                            <li>
                                <strong>Information Architecture:</strong> Implemented a triple-layered
                                navigation system and reactive search filters to reduce cognitive load
                                and improve product discoverability.
                            </li>
                            <li>
                                <strong>Technical Implementation:</strong> Developed custom hooks
                                (useWishlist) and managed global state (Context API) to ensure data
                                persistence and a seamless cross-selling experience.
                            </li>
                            <li>
                                <strong>Strategic Branding (2023 – mid 2025):</strong> Led the visual
                                identity for the parent brand and its sub-brand <em>Amarumi</em>,
                                managing packaging, visual merchandising, and multi-channel marketing
                                assets.
                            </li>
                        </ul>
                    </div>

                    <hr className="cv-separator" />

                    {/* Notaría Pajares Alva */}
                    <div className="cv-experience">
                        <header className="cv-experience-header">
                            <span className="cv-role">Freelance Product Designer</span>
                            <span className="cv-company"> · Notaría Pajares Alva</span>

                            <div className="cv-meta">
                                <em>Established legal institution with 10 years of trajectory in Trujillo, Peru.</em><br />
                                <span>2014 – 2015 | 2025 – Present</span>
                            </div>
                        </header>

                        <ul className="cv-list">
                            <li>
                                <strong>Product Evolution:</strong> Leading the digital transition of a
                                traditional legal institution by designing a web platform with a
                                pre-appointment system to optimize document reception and workflow
                                efficiency.
                            </li>
                            <li>
                                <strong>Branding & Continuity:</strong> Created the original visual
                                identity in 2014, which remains the core brand image, and developed the
                                2025 redesign for stationery and physical merchandising.
                            </li>
                        </ul>
                    </div>

                    <hr className="cv-separator" />

                    {/* Mundo Papel Studio */}
                    <div className="cv-experience">
                        <header className="cv-experience-header">
                            <span className="cv-role">Art Assistant & Instructor</span>
                            <span className="cv-company"> · Mundo Papel Studio</span>

                            <div className="cv-meta">
                                <em>Art studio and boutique in Lima, Peru, focused on handcrafted products and creative education.</em><br />
                                <span>2016 – 2019</span>
                            </div>
                        </header>

                        <ul className="cv-list">
                            <li>
                                <strong>Visual Production:</strong> In-house graphic designer and
                                production lead for artisanal materials, utilizing silk-screening and
                                bookbinding techniques.
                            </li>
                            <li>
                                <strong>Educational Leadership:</strong> Instructed professional
                                workshops on visual arts, fostering creative problem-solving and
                                technical precision.
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="cv-separator" />

                {/* =====================
                    Key Projects
                ===================== */}
                <section className="cv-section">
                    <h3 className="cv-title">Key Projects</h3>

                    <ul className="cv-list">
                        <li>
                            <strong>Notaría Pajares Alva Web:</strong> An institutional web platform
                            featuring a custom pre-appointment system designed to streamline legal
                            procedures and validate documentation before in-person visits.
                        </li>
                        <li>
                            <strong>Simaru E-commerce:</strong> A functional e-commerce platform built
                            with React, focusing on conversion optimization, real-time filtering,
                            and state persistence.
                        </li>
                        <li>
                            <strong>MetroApp:</strong> A React Native mobile solution focused on urban
                            mobility and real-time transit efficiency in Lima. (Final project for
                            App Development Career).
                        </li>
                        <li>
                            <strong>Radiocat (Editorial Project):</strong> Lead artist and producer
                            for a self-managed comic and publishing project since 2013.
                        </li>
                    </ul>
                </section>

                <hr className="cv-separator" />

                {/* =====================
                    Live Projects & Code
                ===================== */}
                <section className="cv-section">
                    <h3 className="cv-title">Live Projects & Code</h3>

                    <ul className="cv-list">
                        <li>
                            <strong>Simaru E-commerce</strong><br />
                            <a href="https://simaru-store.vercel.app/" target="_blank" rel="noreferrer">
                                Live demo (Vercel)
                            </a>{' '}
                            ·{' '}
                            <a href="https://github.com/radiocat-fanzine/react-simaru" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>

                        <li>
                            <strong>Notaría Pajares Alva</strong><br />
                            <a href="#" target="_blank" rel="noreferrer">
                                Live demo (Vercel)
                            </a>{' '}
                            ·{' '}
                            <a href="#" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>

                        <li>
                            <strong>MetroApp</strong><br />
                            <a href="https://github.com/radiocat-fanzine/react-native-metropolitano/releases" target="_blank" rel="noreferrer">
                                GitHub Releases (APK)
                            </a>{' '}
                            ·{' '}
                            <a href="https://github.com/radiocat-fanzine/react-native-metropolitano" target="_blank" rel="noreferrer">
                                Source code
                            </a>
                        </li>

                        <li>
                            <strong>Radiocat Artshop</strong><br />
                            <a href="https://radiocat-fanzine.github.io/javascript_radiocat_store/" target="_blank" rel="noreferrer">
                                Live site (GitHub Pages)
                            </a>{' '}
                            ·{' '}
                            <a href="https://github.com/radiocat-fanzine/javascript_radiocat_store" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </section>

                <hr className="cv-separator" />

                {/* =====================
                    Education
                ===================== */}
                <section className="cv-section">
                    <h3 className="cv-title">Education</h3>

                    <ul className="cv-list">
                        <li>
                            <strong>Professional Career in App Development (React & React Native)</strong>
                            {' '}| Coderhouse (2024 – 2025)
                        </li>
                        <li>
                            <strong>Professional Career in UX/UI Design (Advanced, UX Writing & UX Research)</strong>
                            {' '}| Coderhouse (2023 – 2025)
                        </li>
                        <li>
                            <strong>Bachelor in Communication & Advertising</strong>
                            {' '}| UPC - Universidad Peruana de Ciencias Aplicadas (2012)
                        </li>
                    </ul>
                </section>

            </section>
        )}
        </main>
    )
}

export default Home
