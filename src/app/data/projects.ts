export interface Project {
    id: number;
    title: string;
    summary: string;
    url: string;
    startYear: number;
    endYear: number;
}

const projects: Project[] = [
    {
        title: 'Steambook',
        summary: 'A review site for finding and sharing trending Steam games.',
        description: [
            'Built with Next.js, TypeScript, and Tailwind CSS.',
        ],
        url: '',
        startYear: 2025,
        endYear: 2025
    },
    {
        title: '2025 · Minimalist Portfolio',
        summary: 'A showcase for my work and projects.',
        description: [
            'Focus on Compound Components',
        ],
        url: '',
        startYear: 2025,
        endYear: 2025
    },
    {
        title: '2023 · Wedding Website',
        summary: 'Designed by my wife, built by me.',
        description: [
            'Built to help manage RSVPs, meal choices, and plus ones for our wedding.',
            'Searched and updated a Google Sheet with RSVPs, meal choices, and plus ones.',
            'Written in Sveltekit. Deployed on Vercel infrastructure as an SSR application.'
        ],
        url: 'kevinandjessica.com',
        startYear: 2023,
        endYear: 2023
    },
    {
        title: '2021 · Non-Profit Volunteer',
        summary: 'Designed and deployed web for The PAVE Foundation in Atlanta.',
        description: [
            'Helped design, build, and delploy a non-profit website for the goal of fund raising, event managements, and spreading the mission statement.',
            'Setup credit, debit, and ACH payments via Stripe on the website, Google Workspace for Nonprofits for email and secure collaboration on Google Drive, a Twilio phone number for event registrations and donations over voice or text,  and building a small Sanity CMS UI for enabling self-service by board members.',
            'Registered non-profit accounts and secured non-profit discounting from our Twilio, AWS, Google, and Stripe',
        ],
        url: 'https://www.thepavefoundation.org/',
        startYear: 2021,
        endYear: 2023
    }
]
    .map((project, index) => ({
        ...project, id: index
    }));

export async function listProjects(): Promise<Project[]> {
    return projects;
}
