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
        <List gap="xs">
          {projects.map(({ id, title, startYear, endYear }) => (
            <List.Item key={id}>
              <NavigationLink key={id} href={`/project/${id}`}>
                {startYear === endYear
                  ? `${endYear}`
                  : `${startYear} - ${endYear}`}
                {` · ${title}`}
              </NavigationLink>
            </List.Item>
          ))}
        </List>
      </List.ItemRight>
    </List.Item>
  );
}
