import { getJob, listJobs } from "../../_db/jobs";
import { notFound } from "next/navigation";
import JobCard from "./components/JobCard";
import List from "@/app/_components/experience-list";

export async function generateStaticParams() {
  const jobs = await listJobs();
  return jobs.map((job) => ({
    id: String(job.id),
  }));
}

export default async function JobsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJob(parseInt(id, 10));
  if (!job) notFound();
  const { company, location, title, website, summary, description } = job;
  return (
    <List gap="sm">
      <List.Item>
        <List.ItemLeft>
          <></>
        </List.ItemLeft>
        <List.ItemRight>
          <span className="font-bold">
            {company} , {title}
          </span>
        </List.ItemRight>
      </List.Item>

      <List.Item>
        <List.ItemLeft>
          <List.Title>Location</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <List.Description>{location}</List.Description>
        </List.ItemRight>
      </List.Item>
      <List.Item>
        <List.ItemLeft>
          <List.Title>Website</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <List.ExternalLink href={website}>{website}</List.ExternalLink>
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
