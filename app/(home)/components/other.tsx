import List from "@/app/_components/experience-list";
import ExternalLink from "@/app/_components/links/external-link";

export default function Other() {
  return (
    <List.Item>
      <List.ItemLeft>
        <List.Title>Other</List.Title>
      </List.ItemLeft>
      <List.ItemRight>
        <List gap="xs">
          <List.Item>
            <ExternalLink href="https://www.github.com/ktaulman">
              Github
            </ExternalLink>
          </List.Item>
          <List.Item>
            <ExternalLink href="https://www.linkedin.com/in/ktaulman">
              Linkedin
            </ExternalLink>
          </List.Item>
        </List>
      </List.ItemRight>
    </List.Item>
  );
}
