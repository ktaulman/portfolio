import { getProject, listProjects } from "@/app/_db/projects";
import { notFound } from "next/navigation";
import List from "@/app/_components/experience-list";

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
        <List.Title>
          <span className="font-bold">{title}</span>
        </List.Title>
        <List.Description></List.Description>
      </List.Item>

      <List.Item>
        <List.Title>Website</List.Title>
        <List.ExternalLink href={website}>{website}</List.ExternalLink>
      </List.Item>
      <List.Item>
        <List.Title>Summary</List.Title>
        <List.Description>{summary}</List.Description>
      </List.Item>
      <List.Item>
        <List.Title>Description</List.Title>
        <List gap="none">
          {description.map((paragraph) => (
            <List.Item>
              <p className="w-full mb-2">
                <span className="font-extrabold text-xl mr-2">·</span>
                {paragraph}
              </p>
            </List.Item>
          ))}
        </List>
      </List.Item>
    </List>
  );
}
