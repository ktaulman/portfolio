import List from "@/app/_components/experience-list";
import { listProjects } from "@/app/_db/projects";
import ExternalLink from "@/app/_components/links/external-link";

export default async function PersonalExperience() {
  const projects = await listProjects();
  return (
    <List.Item>
      <List.ItemLeft>
        <List.Title>Personal</List.Title>
      </List.ItemLeft>
      <List.ItemRight>
        <List gap="xs">
          {projects.map(({ id, title, startYear, endYear }) => (
            <List.Item key={id}>
              <ExternalLink key={id} href={`/project/${id}`}>
                {startYear === endYear
                  ? `${endYear}`
                  : `${startYear} - ${endYear}`}
                {` · ${title}`}
              </ExternalLink>
            </List.Item>
          ))}
        </List>
      </List.ItemRight>
    </List.Item>
  );
}
