import List from "@/app/_components/experience-list";
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
        <List gap="sm">
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
                    <NavigationLink key={id} href={`/job/${id}`}>
                      {`${startMonthYear} - ${endMonthYear} · ${company}, ${title}`}
                    </NavigationLink>
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
