import { getProject, listProjects } from "@/app/_db/projects";
import { notFound } from "next/navigation";
import List from "@/app/_components/experience-list";
import ExternalLink from "@/app/_components/links/external-link";

export async function generateStaticParams() {
  const projects = await listProjects();
  return projects.map(({ id }: { id: number }) => ({
    id: String(id),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(parseInt(id, 10));
  if (!project) notFound();
  const { title, website, summary, description } = project;

  return (
    <List gap="md">
      <List.Item>
        <List.ItemLeft>
          {" "}
          <></>
        </List.ItemLeft>

        <List.ItemRight>
          <List.Title>
            <span className="font-bold">{title}</span>
          </List.Title>
        </List.ItemRight>
      </List.Item>

      <List.Item>
        <List.ItemLeft>
          <List.Title>Website</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <ExternalLink href={website}>
            {website.length > 0 ? new URL(website).host : "Coming Soon"}
          </ExternalLink>
        </List.ItemRight>
      </List.Item>
      <List.Item>
        <List.ItemLeft>
          <List.Title>Summary</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <List.Description>{summary}</List.Description>
        </List.ItemRight>
      </List.Item>
      <List.Item>
        <List.ItemLeft>
          <List.Title>Description</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <List gap="xs">
            {description.map((paragraph) => (
              <List.Item key={paragraph}>
                <List.Description> · {paragraph}</List.Description>
              </List.Item>
            ))}
          </List>
        </List.ItemRight>
      </List.Item>
    </List>
  );
}
