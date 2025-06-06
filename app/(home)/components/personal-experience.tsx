import ExperienceList from "@/app/_components/ExperienceList";
import { listProjects } from "@/app/data";

export default async function PersonalExperience() {
  const projects = await listProjects();
  return (
    <ExperienceList.Item>
      <ExperienceList.Title>Personal Experience</ExperienceList.Title>
      <ExperienceList.Description>
        {projects.map(({ id, title, summary, description }) => (
          <ExperienceList.NavigationLink key={id} href={`/project/${id}`}>
            {title}
          </ExperienceList.NavigationLink>
        ))}
      </ExperienceList.Description>
    </ExperienceList.Item>
  );
}
