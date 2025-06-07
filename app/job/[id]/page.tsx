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
    <List gap="md">
      <List.Item>
        <List.Title>
          <span className="font-bold">
            {company} , {title}
          </span>
        </List.Title>
      </List.Item>

      <List.Item>
        <List.Title>Location</List.Title>
        <List.Description>{location}</List.Description>
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
        <List.Description>
          {description.map((paragraph) => (
            <span className="w-full mb-2">
              <span className="font-extrabold text-xl mr-2">·</span>
              {paragraph}
            </span>
          ))}
        </List.Description>
      </List.Item>
    </List>
  );
}
