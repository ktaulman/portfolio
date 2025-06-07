import ExperienceList from "@/app/_components/experience-list";
import { Job, listJobs } from "../../_db/jobs";

export default async function WorkExperience() {
  const jobs = await listJobs();

  return (
    <ExperienceList.Item>
      <ExperienceList.Title> Work Experience</ExperienceList.Title>
      <ExperienceList.Description>
        {jobs.map(
          ({ id, company, title, startMonthYear, endMonthYear }: Job) => (
            <ExperienceList.NavigationLink key={id} href={`/job/${id}`}>
              {`${startMonthYear} - ${endMonthYear} · ${company}, ${title}`}
            </ExperienceList.NavigationLink>
          )
        )}
      </ExperienceList.Description>
    </ExperienceList.Item>
  );
}
