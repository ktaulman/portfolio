import ExperienceList from "./components/ExperienceList";
import { listJobs, Job } from "@/app/data/jobs";

export default async function Home() {
  const jobs = await listJobs();
  // const project = await listProjects();

  return (
    <ExperienceList>
      {/* HEADER */}
      <ExperienceList.Item>
        <ExperienceList.Title>Hi, I'm Kevin</ExperienceList.Title>
        <ExperienceList.Description>
          Building SaaS with focus on Front-End. Currently returning from break. Experience in startups, fintech, and  enterprise development.
        </ExperienceList.Description>
      </ExperienceList.Item>
      {/* JOBS */}
      <ExperienceList.Item >
        <ExperienceList.Title>Work Experience</ExperienceList.Title>
        <ExperienceList.Description>
          {jobs.map(({ id, company, title, startMonthYear, endMonthYear }: Job) => (
            <ExperienceList.NavigationLink key={id} href={`/job/${id}`}>
              {`${startMonthYear} - ${endMonthYear} · ${company}, ${title}`}
            </ExperienceList.NavigationLink>
          ))}
        </ExperienceList.Description>
      </ExperienceList.Item>
      {/* Personal Projects */}
      <ExperienceList.Item>
        <ExperienceList.Title> Personal Experience</ExperienceList.Title>
        <ExperienceList.Description>
          2025 · Steambook
        </ExperienceList.Description>
        <ExperienceList.Description>
          2023 · Wedding Website
        </ExperienceList.Description>
        <ExperienceList.Description>
          2025 · Steambook
        </ExperienceList.Description>
      </ExperienceList.Item>
    </ExperienceList>

  );
}
