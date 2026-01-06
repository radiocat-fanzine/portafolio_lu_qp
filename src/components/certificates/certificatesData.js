import cert1 from '../../assets/documents/certificate-internship-1.pdf'
import cert2 from '../../assets/documents/certificate-internship-2.pdf'
import simaruLogo from '../../assets/graphic/simaru/simaru-g-card.jpg'
import notariaLogo from '../../assets/graphic/notaria-pajares/notaria-g-card.jpg'

export const certificates = [
    {
        id: 'internship-a',
        type: 'certificate',
        title: 'Professional Internship Certificate',
        subtitle: 'UX / Front-End Development',
        institution: 'Simaru GmbH ',
        logo: simaruLogo,
        file: cert1
    },
    {
        id: 'internship-b',
        type: 'certificate',
        title: 'Freelance Product Designer',
        subtitle: 'Product Design / Development',
        institution: 'Notary Pajares Alva',
        logo: notariaLogo,
        file: cert2
    },
    {
        id: 'motivation-letter',
        type: 'text',
        title: 'Motivation Letter – Master’s Degree in UX Design',
        subtitle: 'Technische Hochschule Ingolstadt (THI)',
        content: `
From the beginning, my approach to design has been practical rather than idealized. I initially enrolled in a UX design certification motivated by professional growth, but through the learning process I discovered UX as a structured methodology capable of addressing real problems while remaining deeply human. Concepts such as design thinking, accessibility, and empathy reshaped the way I observe systems, interactions, and everyday environments.

Across my UX projects, a common thread has consistently emerged: the intention to understand and improve situations that affect people in their daily lives. From early UX research work to more complex digital products, my focus has been on identifying concrete problems, listening carefully to users, and translating insights into feasible solutions. This perspective has remained my compass throughout different project contexts and levels of complexity.

As my practice evolved, product design and application development became essential parts of this process. Studying app development enriched my understanding of how digital systems are built and maintained, and significantly influenced the way I design interfaces and systems. This technical background strengthened my ability to create design systems with a realistic sense of feasibility, aligning UX and UI decisions with implementation constraints and long-term sustainability.

Over time, I realized that short-term courses and isolated projects were no longer sufficient for the depth and rigor I was seeking. I wanted to consolidate my knowledge in design systems, prototyping, and applied UX within a structured academic framework, and to learn through interdisciplinary collaboration supported by research and engineering perspectives.

Germany represents an environment aligned with these goals. Having spent time in Munich, I experienced a culture defined by structure, responsibility, and functional design—values that resonate strongly with my own approach to learning and professional growth. Ingolstadt, with its academic focus and quieter pace, appears especially suitable for concentrated study.

I chose Technische Hochschule Ingolstadt for its strong technical orientation, applied focus, and academic standards. The UX Design master’s program at THI represents a meaningful opportunity to deepen my perspective and contribute to well-designed, accessible, and socially relevant digital systems. After completing the program, I aim to work in Europe or Germany, developing products that improve everyday interactions, while remaining open to creative and emerging technological applications.
        `
    }
]


