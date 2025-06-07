import List from "@/app/_components/experience-list";
import ExternalLink from "@/app/_components/links/external-link";
import NavigationLink from "@/app/_components/links/navigation-link";
import { Job, listJobs } from "@/app/_db/jobs";

export default async function WorkExperience() {
  const jobs = await listJobs();

  return (
    <List.Item>
      <List.ItemLeft>
        <List.Title> Work Experience</List.Title>
      </List.ItemLeft>
      <List.ItemRight>
        <List gap="xs">
          {jobs.map(
            ({
              id,
              company,
              title,
              summary,
              startMonthYear,
              endMonthYear,
            }: Job) => {
              if (summary.length > 0) {
                return (
                  <List.Item key={id}>
                    <ExternalLink key={id} href={`/job/${id}`}>
                      {`${startMonthYear} - ${endMonthYear} · ${company}, ${title}`}
                    </ExternalLink>
                  </List.Item>
                );
              } else
                return (
                  <List.Item key={id}>
                    <List.Description>
                      <span key={id}>
                        {`${startMonthYear} - ${endMonthYear} · ${company}, ${title}`}
                      </span>
                    </List.Description>
                  </List.Item>
                );
            }
          )}
        </List>
      </List.ItemRight>
    </List.Item>
  );
}
