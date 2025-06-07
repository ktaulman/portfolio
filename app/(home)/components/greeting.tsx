import List from "@/app/_components/experience-list";

export default function Greeting() {
  return (
    <List.Item>
      <List.ItemLeft>
        <List.Title>Hi, I'm Kevin</List.Title>
      </List.ItemLeft>
      <List.ItemRight>
        <List.Description>
          Building SaaS with focus on Front-End. Currently returning from break.
          Experience in startups, fintech, and enterprise development.
        </List.Description>
      </List.ItemRight>
    </List.Item>
  );
}
