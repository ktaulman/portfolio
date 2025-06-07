import ExperienceList from "@/app/_components/experience-list";
import { listProjects } from "@/app/_db/projects";

export default async function PersonalExperience() {
  const projects = await listProjects();
  return (
    <ExperienceList.Item>
      <ExperienceList.Title>Personal</ExperienceList.Title>
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
