// MetroApp assets
import metroCard from '../assets/product/metroapp/metroapp-card.jpg'
import metroBanner from '../assets/product/metroapp/metroapp-banner.jpg'
import metro1 from '../assets/product/metroapp/metroapp-screen-1.jpg'
import metro2 from '../assets/product/metroapp/metroapp-screen-2.jpg'
import metro3 from '../assets/product/metroapp/metroapp-screen-3.jpg'
import metro4 from '../assets/product/metroapp/metroapp-screen-4.jpg'
import metro5 from '../assets/product/metroapp/metroapp-screen-5.jpg'
import metro6 from '../assets/product/metroapp/metroapp-screen-6.jpg'

// Simaru assets
import simaruCard from '../assets/product/simaru/simaru-card.jpg'
import simaruBanner from '../assets/product/simaru/simaru-banner.jpg'
import simaru1 from '../assets/product/simaru/simaru-screen-1.jpg'
import simaru2 from '../assets/product/simaru/simaru-screen-2.jpg'
import simaru3 from '../assets/product/simaru/simaru-screen-3.jpg'
import simaru4 from '../assets/product/simaru/simaru-screen-4.jpg'
import simaru5 from '../assets/product/simaru/simaru-screen-5.jpg'
import simaru6 from '../assets/product/simaru/simaru-screen-6.jpg'

// Notaria assets
import notariaCard from '../assets/product/notaria-pajares/notaria-card.jpg'
import notariaBanner from '../assets/product/notaria-pajares/notaria-banner.jpg'
import notaria1 from '../assets/product/notaria-pajares/notaria-screen-1.jpg'
import notaria2 from '../assets/product/notaria-pajares/notaria-screen-2.jpg'
import notaria3 from '../assets/product/notaria-pajares/notaria-screen-3.jpg'
import notaria4 from '../assets/product/notaria-pajares/notaria-screen-4.jpg'
import notaria5 from '../assets/product/notaria-pajares/notaria-screen-5.jpg'
import notaria6 from '../assets/product/notaria-pajares/notaria-screen-6.jpg'

export const productProjects = [
    {
        id: 'metroapp',
        meta: {
        title: 'MetroApp',
        subtitle: 'Public Transportation Mobile App',
        tech: 'UX · React Native · System Design',
        category: 'mobile'
        },
        card: {
        image: metroCard,
        alt: 'MetroApp app mockup',
        ratio: '1:1'
        },
        hero: {
        banner: metroBanner,
        alt: 'MetroApp hero banner',
        tagline: {
        title: 'Designing certainty in urban mobility',
        subtitle: 'A mobile system that removes friction from public transport'
        }
        },
        sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: [
            {
                type: 'text',
                data:
                'MetroApp addresses a critical usability gap in Lima’s public transportation system, where users cannot verify their transit card balance unless they are physically present at a recharge point. This limitation becomes especially problematic during feeder bus trips, where validation happens while the vehicle is in motion.'
            }
            ]
        },
        {
            id: 'problem',
            title: 'Problem & Value Proposition',
            content: [
            {
                type: 'list',
                data: [
                'Uncertainty during feeder bus validation when balance is insufficient',
                'No real-time or remote access to transit card balance',
                'Lack of digital alternatives to plan routes before boarding'
                ]
            }
            ]
        },
        {
            id: 'architecture',
            title: 'System & Architecture',
            content: [
            {
                type: 'list',
                data: [
                'Unidirectional data flow to ensure predictable state changes',
                'Redux Toolkit as a single source of truth',
                'Hybrid persistence using Firebase (cloud) and SQLite (offline-first)'
                ]
            }
            ]
        }
        ],
        gallery: [
        { image: metro1, ratio: '1:1' },
        { image: metro2, ratio: '1:1' },
        { image: metro3, ratio: '1:1' },
        { image: metro4, ratio: '1:1' },
        { image: metro5, ratio: '1:1' },
        { image: metro6, ratio: '1:1' },
        ],
        links: [
        {
            label: 'View on GitHub',
            url: 'https://github.com/radiocat-fanzine/react-native-metropolitano',
            type: 'github'
        },
        {
            label: 'Download APK',
            url: 'https://expo.dev/accounts/radiocat_fanzine/projects/metroapp',
            type: 'apk'
        }
        ]
    },

    {
        id: 'simaru',
        meta: {
        title: 'Simaru E-Commerce',
        subtitle: 'Sustainable Accessories Platform',
        tech: 'UX · Front-End · React',
        category: 'web'
        },
        card: {
        image: simaruCard,
        alt: 'Simaru web mockup',
        ratio: '1:1'
        },
        hero: {
        banner: simaruBanner,
        alt: 'Simaru hero banner',
        tagline: {
        title: 'Engineering sustainable e-commerce',
        subtitle: 'UX and front-end architecture for conscious brands'
        }
        },
        sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: [
            {
                type: 'text',
                data:
                'Simaru is a simulated e-commerce platform developed for a real sustainable accessories brand. The project focuses on optimizing product discovery, building trust during decision-making, and streamlining the checkout process to improve conversion and retention.'
            }
            ]
        },
        {
            id: 'ux',
            title: 'UX & Conversion Strategy',
            content: [
            {
                type: 'list',
                data: [
                'Optimized happy path focused on reducing friction during checkout',
                'Empty state design used as a retention and re-engagement tool',
                'Wishlist-to-cart flow designed to encourage conversion'
                ]
            }
            ]
        },
        {
            id: 'architecture',
            title: 'Architecture & Patterns',
            content: [
            {
                type: 'list',
                data: [
                'React Context API for global state management',
                'Client-side persistence using LocalStorage',
                'Reusable components and custom hooks following DRY principles'
                ]
            }
            ]
        }
        ],
        gallery: [
        { image: simaru1, ratio: '1:1' },
        { image: simaru2, ratio: '1:1' },
        { image: simaru3, ratio: '1:1' },
        { image: simaru4, ratio: '1:1' },
        { image: simaru5, ratio: '1:1' },
        { image: simaru6, ratio: '1:1' }
        ],
        links: [
        {
            label: 'View on GitHub',
            url: 'https://github.com/radiocat-fanzine/react-simaru',
            type: 'github'
        },
        {
            label: 'View Live Website',
            url: 'https://simaru-store.vercel.app/',
            type: 'live'
        }
        ]
    },
{
        id: 'notaria-pajares',
        meta: {
            title: 'Notary Pajares Alva Digital Hub',
            subtitle: 'End-to-End Legal Service Platform',
            tech: 'React · Design Systems · Full-Stack Architecture',
            category: 'Web App / Enterprise Solution'
        },
        card: {
            image: notariaCard,
            alt: 'Notaría Pajares Alva digital platform',
            ratio: '1:1'
        },
        hero: {
            banner: notariaBanner, 
            alt: 'Notary institutional hero banner',
            tagline: {
                title: 'Bridging the gap between citizens and legal certainty',
                subtitle: 'A dual-system architecture designed for public intake and internal legal processing.'
            }
        },
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: [
                    {
                        type: 'text',
                        data:
                        'The project consists of a comprehensive digital transformation for the Pajares Alva Notary Office. It is engineered as a two-fold ecosystem: a high-end institutional frontend for client intake and an internal administrative dashboard for real-time order management and legal validation.'
                    }
                ]
            },
            {
                id: 'visual-identity',
                title: 'Institutional UI & Identity',
                content: [
                    {
                        type: 'list',
                        data: [
                            'Scalable Design System using CSS Tokens to ensure brand consistency across both platforms.',
                            'High-end Navigation: Centered vertical branding with overflow containment for a prestige look.',
                            'Typography Strategy: Classic Serif for authority paired with modern Inter for high usability.',
                            'Prestige Layout: 120px elevated Navbar designed to provide institutional "breathing room".'
                        ]
                    }
                ]
            },
            {
                id: 'client-system',
                title: 'Phase I: Public Intake System',
                content: [
                    {
                        type: 'list',
                        data: [
                            'Frictionless multi-step appointment flow for complex legal document submission.',
                            'Mobile-first responsive architecture ensuring accessibility for users on the go.',
                            'Dynamic form validation tailored to specific Peruvian notary requirements.'
                        ]
                    }
                ]
            },
            {
                id: 'internal-system',
                title: 'Phase II: Management Dashboard',
                content: [
                    {
                        type: 'list',
                        data: [
                            'B2B Private Interface: Real-time visualization of incoming legal orders for notary staff.',
                            'Status Workflow: End-to-end tracking from initial request to final legal execution.',
                            'Role-based Access Control (RBAC) to ensure sensitive legal data security.'
                        ]
                    }
                ]
            },
            {
                id: 'architecture',
                title: 'Architecture & Scalability',
                content: [
                    {
                        type: 'list',
                        data: [
                            'Modular React architecture separating the institutional layer from transactional flows.',
                            'Shared Component Library: Reusable UI patterns between the public site and internal tools (DRY principles).',
                            'State Management: Robust logic for complex legal data persistence and real-time status updates.',
                            'Global CSS Token System: Centralized control for color accessibility and AA contrast compliance.'
                        ]
                    }
                ]
            }
        ],
        gallery: [
            { image: notaria1, ratio: '1:1' },
            { image: notaria2, ratio: '1:1' },
            { image: notaria3, ratio: '1:1' },
            { image: notaria4, ratio: '1:1' },
            { image: notaria5, ratio: '1:1' },
            { image: notaria6, ratio: '1:1' },
        ],
        links: [
            {
                label: 'View on GitHub',
                url: 'https://github.com/radiocat-fanzine/notaria-pajares-alva',
                type: 'github'
            },
            {
                label: 'View Appointment System',
                url: 'https://notaria-pajares-alva.vercel.app/',
                type: 'live'
            },
            {
                label: 'View Management System',
                url: '#',
                type: 'live'
            }
        ]
    }
]
