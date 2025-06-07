import ExperienceList from "@/app/_components/experience-list";

export default function Other() {
  return (
    <ExperienceList.Item>
      <ExperienceList.Title>Other</ExperienceList.Title>
      <ExperienceList.Description>
        <ExperienceList.ExternalLink href="https://www.github.com/ktaulman">
          Github
        </ExperienceList.ExternalLink>
        <ExperienceList.ExternalLink href="https://www.linkedin.com/in/ktaulman">
          Linkedin
        </ExperienceList.ExternalLink>
      </ExperienceList.Description>
    </ExperienceList.Item>
  );
}
