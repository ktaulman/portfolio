export interface Job {
  id: number;
  company: string;
  website: string;
  title: string;
  location: string;
  summary: string;
  images?: {
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
    company: "CereTax",
    website: "https://www.ceretax.com",
    title: "UI Engineer",
    location: "Alpharetta, GA, USA",
    summary:
      "Contributed to frontend development of an Fintech SaaS platform used in tax liability automation, targeted at the midmarket and enterprise software users in Telecom, SaaS, and Corporate accounting verticals. The first version was written in Svelte and styled using Tailwind CSS. The second version was written in React styled using MUI's theming. Both projects used Typescript while V2 focused on increasing coverage and refactoring vanilla Javascript into Typescript. Used both Agile and Kanban SDLC methodologies.",
    description: [
      "Reduced total bug count in Svelte backlog by 95% (~60 overall tickets of varying time lengths) via troubleshooting & refactoring over a six-month period to improve UI/UX, while balancing ongoing feature development. Was asked to and collected feedback on our API/Service-layer code on the frontend to make recommendations on normalizing data models and improving CRUD operations.",
      "Led frontend SDLC of portal's second version written in React. Met cross-functionally with Product Management, Back-End, Sales, Implementation, and Infrastructure teams to balance a backlog of Svelte product features with the React portal refactoring. Responsibities for React project included: creating Agile sprint stories, writing end-to-end test acceptance criteria for our QA team, writing user interface design documentation, performing code review, managing version control, onboarding new developers, and deciding on project tools & dependencies.",
      "Features added to React version: setup dynamic routing in React Router, centralized our API service with Axios vs locally-scoped API calls, increased Typescript coverage to over 90%, built a custom, client-side form validation library with Zod that replaced manual RegEx (accepted multiple validation schemas), improved website performance by reducing API queries for JSON data by caching results with React Query, decreased re-renders by using Zustand for memoization, improved readability by implementing design patterns with Zustand & MUI, used React Router v6.4’s Actions and Loaders to centralize CRUD operations, introduced Playwright POC for testing automation by writing test cases and assertions, and used MUI & AgGrid component libraries for developer productivity.",
    ],
    images: [
      {
        src: "/images/cereTax.png",
        alt: "CereTax Logo",
        title: "",
        description: "",
      },
    ],
    startMonthYear: "10/2022",
    endMonthYear: "11/2024",
  },
  {
    company: "RE/MAX",
    title: "Frontend Engineer",
    website: "https://www.remax.com",
    location: "Atlanta, GA, USA",
    summary:
      "Frontend Engineer on a product team of five that developed, delivered, and maintained a greenfield, data visualization web app. Used for Sales demos of RE/MAX’s national real estate point and polygon data across multiple datasets (Address, Property, Residential, Census) on interactive Google maps. Product delivery was ahead of Q2 2022 timeline with more functionality than originally scoped and under budget.",
    description: [
      "Developed as a Vue Single-Page Application. Centralized state management with VueX and implemented protected app routing with Vue Router for authed and unauthed users. Used Tailwind CSS for styling and theming. Implemented GCPs Google Maps Javascript API for features such as interactive heatmaps, clickable points with display cards for demographic data, custom filtering map controls, and gesture-based map refreshing.",
    ],
    images: [],
    startMonthYear: "10/2021",
    endMonthYear: "07/2022",
  },
  {
    company: "Autumn Doors",
    title: "Fullstack Developer (Contract)",
    location: "Atlanta, GA, USA",
    website: "https://www.autumndoors.store",
    summary:
      "Fullstack website development of a greenfield e-commerce site selling sliding barn doors for household interiors. Company operated in the states of Texas and Florida.",
    description: [
      "Frontend in React; backend in Node.js, deployed on AWS (S3, EC2, Route 53, CloudFront, ACM).",
      " Developed features including online ordering with Stripe payment processing, an interactive door builder with thousands of combinations, invoice & order form templating with email notifications, and basic Tax calculation service for tax compliance in local sales territories.",
    ],
    images: [],
    startMonthYear: "02/2021",
    endMonthYear: "09/2021",
  },
  {
    company: "Twilio",
    title: "Commercial Account Executive",
    location: "San Francisco, CA, USA",
    website: "",
    summary: "",
    description: [],
    images: [],
    startMonthYear: "09/2017",
    endMonthYear: "11/2018",
  },
  {
    company: "Gartner",
    title: "Account Executive",
    location: "Fort Myers, FL, USA",
    website: "",
    summary: "",
    description: [],
    images: [],
    startMonthYear: "08/2012",
    endMonthYear: "09/2017",
  },
].map((job, index) => ({
  ...job,
  id: index,
}));

export async function listJobs() {
  return jobs;
}

export async function getJob(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for demonstration purposes
  return jobs.find((job) => job.id === id);
}
