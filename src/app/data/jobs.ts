
export interface Job {
    id: number;
    company: string;
    website: string;
    title: string;
    location: string;
    summary: string;
    images: {
        src: string;
        alt: string;
        title: string;
        description: string;
    }[];
    description: string[];
    startMonthYear: string;
    endMonthYear: string;
}
const jobs: Job[] = [
    {
        company: 'CereTax',
        website: 'https://www.ceretax.com',
        title: 'UI Engineer',
        location: 'Alpharetta, GA, USA',
        summary: 'Contributed to frontend development of an Fintech SaaS platform used in tax liability automation, targeted at the midmarket and enterprise software users in Telecom, SaaS, and Corporate accounting verticals. The first version was written in Svelte and styled using Tailwind CSS. The second version was written in React styled using MUI\'s theming. Both projects used Typescript while V2 focused on increasing coverage and refactoring vanilla Javascript into Typescript. Used both Agile and Kanban SDLC methodologies.',
        description: [
            'Reduced total bug count in Svelte backlog by 95% (~60 overall tickets of varying time lengths) via troubleshooting & refactoring over a six-month period to improve UI/UX, while balancing ongoing feature development. Was asked to and collected feedback on our API/Service-layer code on the frontend to make recommendations on normalizing data models and improving CRUD operations.',
            'Led frontend SDLC of portal\'s second version written in React. Met cross-functionally with Product Management, Back-End, Sales, Implementation, and Infrastructure teams to balance a backlog of Svelte product features with the React portal refactoring. Responsibities for React project included: creating Agile sprint stories, writing end-to-end test acceptance criteria for our QA team, writing user interface design documentation, performing code review, managing version control, onboarding new developers, and deciding on project tools & dependencies.',
            'Features added to React version: setup dynamic routing in React Router, centralized our API service with Axios vs locally-scoped API calls, increased Typescript coverage to over 90%, built a custom, client-side form validation library with Zod that replaced manual RegEx (accepted multiple validation schemas), improved website performance by reducing API queries for JSON data by caching results with React Query, decreased re-renders by using Zustand for memoization, improved readability by implementing design patterns with Zustand & MUI, used React Router v6.4’s Actions and Loaders to centralize CRUD operations, introduced Playwright POC for testing automation by writing test cases and assertions, and used MUI & AgGrid component libraries for developer productivity.'
        ],
        images: [
            {
                src: '/images/cereTax.png',
                alt: 'CereTax Logo'
            }
        ],
        startMonthYear: '10/2022',
        endMonthYear: '11/2024'
    },
    {
        company: 'RE/MAX',
        title: 'Frontend Engineer',
        website: 'https://www.remax.com',
        location: 'Atlanta, GA, USA',
        summary: 'Developed and maintained a greenfield data visualization web app for national real estate datasets, delivered ahead of schedule and under budget.',
        description: [

            'Built as a Vue SPA with VueX for state management and Vue Router for protected routing.',
            'Integrated Google Maps for interactive heatmaps, demographic display cards, custom filtering, and gesture-based refreshing.'
        ],
        images: [],
        startMonthYear: '10/2021',
        endMonthYear: '07/2022'
    },
    {
        company: 'Autumn Doors',
        title: 'Fullstack Developer (Contract)',
        location: 'Atlanta, GA, USA',
        summary: 'Developed a greenfield e-commerce site for sliding barn doors in Texas and Florida.',
        description: [

            'Frontend in React; backend in Node.js, deployed on AWS (S3, EC2, Route 53, CloudFront, ACM).',
            'Features: Stripe payments, interactive door builder, invoice/order templating with email notifications, and tax compliance service.'
        ],
        images: [],
        startMonthYear: '02/2021',
        endMonthYear: '09/2021'
    },
    {
        company: 'Twilio',
        title: 'Commercial Account Executive',
        location: 'San Francisco, CA, USA',
        description: [],
        images: [],
        startMonthYear: '09/2017',
        endMonthYear: '11/2018'
    },
    {
        company: 'Gartner',
        title: 'Account Executive',
        location: 'Fort Myers, FL, USA',
        description: [],
        images: [],
        startMonthYear: '08/2012',
        endMonthYear: '09/2017'
    },
].map((job, index) => ({
    ...job,
    id: index
}));

export async function listJobs() {
    return jobs;
}

export async function getJob(id: number) {
    return jobs.find(job => job.id === id)
}