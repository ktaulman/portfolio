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
                <NavigationLink key={id} href={`/job/${id}`}>
                  {`${startMonthYear} - ${endMonthYear} · ${company}, ${title}`}
                </NavigationLink>
              );
            } else
              return (
                <List.Description>
                  <span key={id}>
                    {`${startMonthYear} - ${endMonthYear} · ${company}, ${title}`}
                  </span>
                </List.Description>
              );
          }
        )}
      </List.ItemRight>
    </List.Item>
  );
}
