import List from "@/app/_components/experience-list";

export default function Other() {
  return (
    <List.Item>
      <List.ItemLeft>
        <List.Title>Other</List.Title>
      </List.ItemLeft>
      <List.ItemRight>
        <List.Description>
          <List.ExternalLink href="https://www.github.com/ktaulman">
            Github
          </List.ExternalLink>
          <List.ExternalLink href="https://www.linkedin.com/in/ktaulman">
            Linkedin
          </List.ExternalLink>
        </List.Description>
      </List.ItemRight>
    </List.Item>
  );
}
