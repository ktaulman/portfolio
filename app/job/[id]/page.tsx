import { getJob, listJobs } from "../../_db/jobs";
import { notFound } from "next/navigation";
import JobCard from "./components/JobCard";

export async function generateStaticParams() {
  const jobs = await listJobs();
  console.log({ jobs });
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
  const { company, location, title, website, description } = job;
  return (
    <JobCard>
      <JobCard.Header>
        <JobCard.HeaderTitle>{title}</JobCard.HeaderTitle>
        <JobCard.HeaderCompanyName>{company}</JobCard.HeaderCompanyName>
      </JobCard.Header>

      <JobCard.Detail>
        <JobCard.DetailTitle>Location</JobCard.DetailTitle>
        <JobCard.DetailDescription>{location}</JobCard.DetailDescription>
      </JobCard.Detail>

      <JobCard.Detail>
        <JobCard.DetailTitle>Website</JobCard.DetailTitle>
        <JobCard.DetailDescription>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {job.website}
          </a>
        </JobCard.DetailDescription>
      </JobCard.Detail>
      <JobCard.Detail>
        <JobCard.DetailTitle>Summary</JobCard.DetailTitle>
        <JobCard.DetailDescription>
          Contributed tto frontend development of a Fintech SaaS Platform
        </JobCard.DetailDescription>
      </JobCard.Detail>
      <JobCard.Detail>
        <JobCard.DetailTitle>Description</JobCard.DetailTitle>
        {description.map((item, index) => (
          <JobCard.DetailDescription key={`job_description_${index}`}>
            - {item}
          </JobCard.DetailDescription>
        ))}
      </JobCard.Detail>
    </JobCard>
  );
}
