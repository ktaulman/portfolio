import List from "@/app/_components/experience-list";
import { listProjects } from "@/app/_db/projects";
import NavigationLink from "@/app/_components/links/navigation-link";

export default async function PersonalExperience() {
  const projects = await listProjects();
  return (
    <List.Item>
      <List.ItemLeft>
        <List.Title>Personal</List.Title>
      </List.ItemLeft>
      <List.ItemRight>
        <List.Description>
          {projects.map(({ id, title, startYear, endYear }) => (
            <NavigationLink key={id} href={`/project/${id}`}>
              {`${startYear} ${endYear} · ${title}`}
            </NavigationLink>
          ))}
        </List.Description>
      </List.ItemRight>
    </List.Item>
  );
}
