import List from "@/app/_components/experience-list";
import Skeleton from "@/app/_components/skeletons/skeleton";

export default function Loading() {
  return (
    <List gap="sm">
      <List.Item>
        <List.ItemLeft>
          <Skeleton animate variant="rounded" height={30} width={120} />
        </List.ItemLeft>
        <List.ItemRight>
          <></>
        </List.ItemRight>
      </List.Item>

      <List.Item>
        <List.ItemLeft>
          <List.Title>Location</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <Skeleton animate variant="rounded" height={30} width={200} />
        </List.ItemRight>
      </List.Item>
      <List.Item>
        <List.ItemLeft>
          <List.Title>Website</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <Skeleton animate variant="rounded" height={30} width={200} />
        </List.ItemRight>
      </List.Item>
      <List.Item>
        <List.ItemLeft>
          <List.Title>Summary</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <Skeleton animate variant="rounded" height={150} width={500} />
        </List.ItemRight>
      </List.Item>
      <List.Item>
        <List.ItemLeft>
          <List.Title>Description</List.Title>
        </List.ItemLeft>
        <List.ItemRight>
          <Skeleton animate variant="rounded" height={150} width={500} />
        </List.ItemRight>
      </List.Item>
    </List>
  );
}
