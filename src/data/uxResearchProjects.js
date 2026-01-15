import equilibriumCard from '../assets/ux-research/equilibrium/equilibrium-card.jpg'
import equilibriumBanner from '../assets/ux-research/equilibrium/equilibrium-banner.jpg'
import equilibrium1 from '../assets/ux-research/equilibrium/equilibrium-1.jpg'
import equilibrium2 from '../assets/ux-research/equilibrium/equilibrium-2.jpg'
import equilibrium3 from '../assets/ux-research/equilibrium/equilibrium-3.jpg'
import equilibrium4 from '../assets/ux-research/equilibrium/equilibrium-4.jpg'

import ittsaCard from '../assets/ux-research/ittsa/ittsa-card.jpg'
import ittsaBanner from '../assets/ux-research/ittsa/ittsa-banner.jpg'
import ittsa1 from '../assets/ux-research/ittsa/ittsa-1.jpg'
import ittsa2 from '../assets/ux-research/ittsa/ittsa-2.jpg'
import ittsa3 from '../assets/ux-research/ittsa/ittsa-3.jpg'
import ittsa4 from '../assets/ux-research/ittsa/ittsa-4.jpg'


export const uxResearchProjects = [
    {
        id: 'equilibrium',
        meta: {
        title: 'Equilibrium',
        subtitle: 'Habit Formation & Time Management App',
        tech: 'UX Research · Prototyping · Mobile UX'
        },
        card: {
        image: equilibriumCard,
        alt: 'Equilibrium app mockup',
        ratio: '1:1'
        },
        hero: {
        banner: equilibriumBanner,
        alt: 'Equilibrium app hero',
        tagline: {
        title: 'Designing structure for wellbeing',
        subtitle: 'UX research for habit formation and time balance'
        },
        },
        sections: [
        {
            id: 'context',
            title: 'Context',
            content: [
            {
                type: 'text',
                data:
                'Equilibrium is an academic mobile app project developed at the beginning of my UX training. It explores the intersection between productivity and holistic wellbeing in non-traditional work environments.'
            }
            ]
        },
        {
            id: 'problem',
            title: 'Problem & Hypothesis',
            content: [
            {
                type: 'text',
                data:
                'Freelance and remote workers often lack external structures to organize their time, which can lead to stress, sedentary habits, poor sleep, and long-term burnout. The hypothesis was that a personalized and flexible structure could help users regain balance without increasing pressure.'
            }
            ]
        },
        {
            id: 'research',
            title: 'Research Insights',
            content: [
            {
                type: 'list',
                data: [
                'Desk research confirmed the growing health risks associated with sedentary lifestyles',
                'Benchmarking highlighted the importance of simplicity, tone, and low cognitive load',
                'Interviews revealed a strong need for personalized guidance and motivational support'
                ]
            }
            ]
        },
        {
            id: 'solution',
            title: 'Proposed Solution',
            content: [
            {
                type: 'list',
                data: [
                'Editable guided routines to reduce mental load',
                'Personalized reminders and motivational messages',
                'Habit-building approach based on small, achievable actions',
                'Avatar-based interaction to create emotional engagement'
                ]
            }
            ]
        }
        ],
        gallery: [
        { image: equilibrium1, ratio: '1:1' },
        { image: equilibrium2, ratio: '1:1' },
        { image: equilibrium3, ratio: '1:1' },
        { image: equilibrium4, ratio: '1:1' }
        ],
        links: [
        {
            label: 'View Figma Prototype',
            url: 'https://www.figma.com/proto/eRQQVxnoGXUOpkvE1Lo5vc/PRESENTACI%C3%93N-FINAL--LUZMILA-QUEZADA-PAJARES-?page-id=0%3A1&type=design&node-id=13026-13463&viewport=361%2C297%2C0.08&t=ab6z248sGmju9hU2-1&scaling=scale-down&starting-point-node-id=13001%3A13533&show-proto-sidebar=1',
            type: 'figma'
        },
        {
            label: 'View UX Research Report (Figma – ES)',
            url: 'https://www.figma.com/proto/eRQQVxnoGXUOpkvE1Lo5vc/PRESENTACI%C3%93N-FINAL--LUZMILA-QUEZADA-PAJARES-?page-id=13302%3A16859&node-id=13302-16860&scaling=contain&content-scaling=fixed&t=m4sWirPFErfuDp5H-1',
            type: 'ux-report'
        }
        ]
    },
    {
        id: 'ittsa',
        meta: {
        title: 'ITTSA',
        subtitle: 'Transportation Website Redesign',
        tech: 'UX Research · UI Design · Service Design'
        },
        card: {
        image: ittsaCard,
        alt: 'Ittsa web mockup',
        ratio: '1:1'
        },
        hero: {
        banner: ittsaBanner,
        alt: 'ITTSA website redesign',
        tagline: {
        title: 'Reducing friction in ticket purchasing',
        subtitle: 'Research-driven redesign for transportation services'
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
                'Academic project developed for the Advanced UX/UI Design module, focused on redesigning the ITTSA interprovincial bus ticket purchasing experience and improving service efficiency.'
            }
            ]
        },
        {
            id: 'research',
            title: 'Research & Diagnosis',
            content: [
            {
                type: 'list',
                data: [
                'Heuristic evaluation and application of UX laws',
                'User personas, journey maps, and task analysis',
                'Surveys, interviews, card sorting, and usability testing'
                ]
            }
            ]
        },
        {
            id: 'ux-decisions',
            title: 'Key UX Decisions',
            content: [
            {
                type: 'list',
                data: [
                'Reduction and optimization of steps in the purchase flow',
                'Implementation of reservation codes for ticket postponement',
                'Optional login to lower entry barriers',
                'Reward system to encourage loyalty among frequent users'
                ]
            }
            ]
        }
        ],
        gallery: [
        { image: ittsa1, ratio: '16:9' },
        { image: ittsa2, ratio: '16:9' },
        { image: ittsa3, ratio: '16:9' },
        { image: ittsa4, ratio: '16:9' }
        ],
        links: [
        {
            label: 'View Figma Prototype',
            url: 'https://www.figma.com/proto/1RKztWU2JCdpMeURVI7kEq/ITTSA--FINAL-REPORT--LUZMILA-QUEZADA?page-id=221%3A309&node-id=904-12027&p=f&viewport=-3454%2C1927%2C0.26&t=QCxbpVU9XHfqrCaO-1&scaling=contain&content-scaling=fixed&starting-point-node-id=904%3A12027',
            type: 'figma'
        },
        {
            label: 'View UX Research Report (Figma – ES)',
            url: 'https://www.figma.com/proto/1RKztWU2JCdpMeURVI7kEq/ITTSA--FINAL-REPORT--LUZMILA-QUEZADA?page-id=0%3A1&node-id=1-2&viewport=319%2C212%2C0.02&t=zkk68PLq0Fr0bRrf-1&scaling=contain&content-scaling=fixed',
            type: 'ux-report'
        }
        ]
    }
]

