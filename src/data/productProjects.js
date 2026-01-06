// MetroApp assets
import metroCard from '../assets/product/metroapp/metroapp-card.jpg'
import metroBanner from '../assets/product/metroapp/metroapp-banner.jpg'
import metro1 from '../assets/product/metroapp/metroapp-screen-1.jpg'
import metro2 from '../assets/product/metroapp/metroapp-screen-2.jpg'
import metro3 from '../assets/product/metroapp/metroapp-screen-3.jpg'
import metro4 from '../assets/product/metroapp/metroapp-screen-4.jpg'

// Simaru assets
import simaruCard from '../assets/product/simaru/simaru-card.jpg'
import simaruBanner from '../assets/product/simaru/simaru-banner.jpg'
import simaru1 from '../assets/product/simaru/simaru-screen-1.jpg'
import simaru2 from '../assets/product/simaru/simaru-screen-2.jpg'
import simaru3 from '../assets/product/simaru/simaru-screen-3.jpg'
import simaru4 from '../assets/product/simaru/simaru-screen-4.jpg'

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
        { image: metro4, ratio: '1:1' }
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
        { image: simaru4, ratio: '1:1' }
        ],
        links: [
        {
            label: 'View on GitHub',
            url: '#',
            type: 'github'
        },
        {
            label: 'View Live Website',
            url: '#',
            type: 'live'
        }
        ]
    }
]
