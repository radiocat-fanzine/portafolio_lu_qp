// ================================
// IMAGE IMPORTS
// ================================

// SIMARU
import simaruGCard from '../assets/graphic/simaru/simaru-g-card.jpg'
import simaruGBanner from '../assets/graphic/simaru/simaru-g-banner.jpg'
import simaruG1 from '../assets/graphic/simaru/simaru-g-01.jpg'
import simaruG2 from '../assets/graphic/simaru/simaru-g-02.jpg'
import simaruG3 from '../assets/graphic/simaru/simaru-g-03.jpg'
import simaruG4 from '../assets/graphic/simaru/simaru-g-04.jpg'
import simaruG5 from '../assets/graphic/simaru/simaru-g-05.jpg'
import simaruG6 from '../assets/graphic/simaru/simaru-g-06.jpg'

// AMARUMI
import amarumiGCard from '../assets/graphic/amarumi/amarumi-g-card.jpg'
import amarumiGBanner from '../assets/graphic/amarumi/amarumi-g-banner.jpg'
import amarumiG1 from '../assets/graphic/amarumi/amarumi-g-01.jpg'
import amarumiG2 from '../assets/graphic/amarumi/amarumi-g-02.jpg'
import amarumiG3 from '../assets/graphic/amarumi/amarumi-g-03.jpg'
import amarumiG4 from '../assets/graphic/amarumi/amarumi-g-04.jpg'
import amarumiG5 from '../assets/graphic/amarumi/amarumi-g-05.jpg'
import amarumiG6 from '../assets/graphic/amarumi/amarumi-g-06.jpg'

// NOTARÍA PAJARES ALVA
import notariaGCard from '../assets/graphic/notaria-pajares/notaria-g-card.jpg'
import notariaGBanner from '../assets/graphic/notaria-pajares/notaria-g-banner.jpg'
import notariaG1 from '../assets/graphic/notaria-pajares/notaria-g-01.jpg'
import notariaG2 from '../assets/graphic/notaria-pajares/notaria-g-02.jpg'
import notariaG3 from '../assets/graphic/notaria-pajares/notaria-g-03.jpg'
import notariaG4 from '../assets/graphic/notaria-pajares/notaria-g-04.jpg'
import notariaG5 from '../assets/graphic/notaria-pajares/notaria-g-05.jpg'
import notariaG6 from '../assets/graphic/notaria-pajares/notaria-g-06.jpg'

// ================================
// GRAPHIC DESIGN PROJECTS
// ================================

export const graphicDesignProjects = [
    {
        id: 'simaru-graphic',
        meta: {
        title: 'Simaru: Designing Sustainability',
        subtitle: 'Brand Evolution & Information Design',
        tech: 'Brand Strategy · Packaging · Information Design',
        category: 'branding'
        },
        card: {
        image: simaruGCard,
        alt: 'Simaru Logo',
        ratio: '1:1'
        },
        hero: {
        banner: simaruGBanner,
        alt: 'Simaru sustainability branding system',
        tagline: {
        title: 'Engineering sustainability through design',
        subtitle: 'Visual systems, packaging and information design'
        }
        },
        sections: [
        {
            id: 'context',
            title: 'Context',
            content: [
            {
                type: 'text',
                data:
                'Long-term professional collaboration (3+ years) focused on leading the visual transition of a German sustainable brand from a local venture to international presence.'
            }
            ]
        },
        {
            id: 'objective',
            title: 'Objective & Role',
            content: [
            {
                type: 'list',
                data: [
                'Lead visual system evolution for European expansion',
                'Design scalable branding and packaging solutions',
                'Role: Lead Designer & Brand Strategist',
                '1st Place – Sustainable Business, Tollwood Summer Festival 2024 (Munich)'
                ]
            }
            ]
        },
        {
            id: 'visual-system',
            title: 'Visual System & Technical Decisions',
            content: [
            {
                type: 'list',
                data: [
                'Leaf isotype implementation across labels and eco-packaging',
                'Laser engraving and silkscreen printing on irregular cork textures',
                'High-precision reproduction constraints considered from design phase',
                'Technical infographics for product dimensions and features'
                ]
            }
            ]
        }
        ],
        gallery: [
        { image: simaruG1, ratio: '1:1' },
        { image: simaruG2, ratio: '1:1' },
        { image: simaruG3, ratio: '1:1' },
        { image: simaruG4, ratio: '1:1' },
        { image: simaruG5, ratio: '1:1' },
        { image: simaruG6, ratio: '1:1' }
        ],
        links: []
    },

    {
        id: 'amarumi',
        meta: {
        title: 'Amarumi: Conscious Luxury',
        subtitle: 'Luxury Branding & Cultural Narrative',
        tech: 'Visual Identity · Pattern Design · Luxury Branding',
        category: 'branding'
        },
        card: {
        image: amarumiGCard,
        alt: 'Amarumi Logo',
        ratio: '1:1'
        },
        hero: {
        banner: amarumiGBanner,
        alt: 'Amarumi luxury branding system',
        tagline: {
        title: 'Conscious luxury rooted in heritage',
        subtitle: 'A visual ecosystem inspired by Amazonian culture'
        }
        },
        sections: [
        {
            id: 'context',
            title: 'Context',
            content: [
            {
                type: 'text',
                data:
                'Professional sub-brand development within the Simaru ecosystem, bridging high-end craftsmanship with Amazonian cultural heritage.'
            }
            ]
        },
        {
            id: 'concept',
            title: 'Conceptual Framework',
            content: [
            {
                type: 'list',
                data: [
                'Mirrored hummingbird isotype inspired by Amazonian biodiversity',
                'Patterns based on Shipibo-Konibo artistry',
                'Exotic floral textures layered for visual depth',
                'Elegant script typography contrasting with the parent brand'
                ]
            }
            ]
        },
        {
            id: 'application',
            title: 'Applications & Merchandising',
            content: [
            {
                type: 'list',
                data: [
                'Premium leather goods mockups (bracelets, belts)',
                'Retail stand design for Tollwood Winter Festival 2024',
                'Visual merchandising assets and brand storytelling'
                ]
            }
            ]
        }
        ],
        gallery: [
        { image: amarumiG1, ratio: '1:1' },
        { image: amarumiG2, ratio: '1:1' },
        { image: amarumiG3, ratio: '1:1' },
        { image: amarumiG4, ratio: '1:1' },
        { image: amarumiG5, ratio: '1:1' },
        { image: amarumiG6, ratio: '1:1' }
        ],
        links: []
    },

    {
        id: 'notaria-pajares',
        meta: {
        title: 'Notaría Pajares Alva: The Blueprint of Trust',
        subtitle: 'Institutional Identity & Grid Systems',
        tech: 'Institutional Branding · Editorial Systems · UI',
        category: 'institutional'
        },
        card: {
        image: notariaGCard,
        alt: 'Notaria Logo',
        ratio: '1:1'
        },
        hero: {
        banner: notariaGBanner,
        alt: 'Notaría Pajares Alva institutional branding',
        tagline: {
        title: 'The blueprint of institutional trust',
        subtitle: 'Modular identity systems for legal services'
        }
        },
        sections: [
        {
            id: 'context',
            title: 'Context',
            content: [
            {
                type: 'text',
                data:
                'Professional freelance project focused on modernizing an 11-year-old institutional identity into a modular stationery system and digital platform.'
            }
            ]
        },
        {
            id: 'concept',
            title: 'Concept & Visual Logic',
            content: [
            {
                type: 'list',
                data: [
                'Architectural modularity inspired by Chan Chan',
                'Depth-layering to simulate debossing and architectural shadows',
                'Grid-based composition system for print and digital'
                ]
            }
            ]
        },
        {
            id: 'system',
            title: 'Technical System',
            content: [
            {
                type: 'list',
                data: [
                '48cm folders and custom institutional logbooks',
                '2x2 cm official seals and technical stationery',
                'Prussian Blue palette with soft plaster textures',
                'Serif for heritage + Sans Serif for efficiency'
                ]
            }
            ]
        }
        ],
        gallery: [
        { image: notariaG1, ratio: '1:1' },
        { image: notariaG2, ratio: '1:1' },
        { image: notariaG3, ratio: '1:1' },
        { image: notariaG4, ratio: '1:1' },
        { image: notariaG5, ratio: '1:1' },
        { image: notariaG6, ratio: '1:1' }
        ],
        links: []
    }
]
