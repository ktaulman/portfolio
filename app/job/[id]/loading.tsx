import List from "@/app/_components/experience-list";
import Skeleton from "@/app/_components/skeletons/skeleton";

export default function Loading() {
  return (
    <List gap="md">
      <List.Item>
        <List.Title>
          <Skeleton variant="rounded" animate width={200} height={20} />
        </List.Title>
      </List.Item>
      <List.Item>
        <List.Title>Location</List.Title>
        <Skeleton variant="rounded" animate width={200} height={20} />
      </List.Item>
      <List.Item>
        <List.Title>Website</List.Title>
        <Skeleton variant="rounded" animate width={200} height={20} />
      </List.Item>
      <List.Item>
        <List.Title>Summary</List.Title>
        <div className="flex flex-col flex-3/4">
          <Skeleton variant="rounded" animate width={"100%"} height={150} />
        </div>
      </List.Item>
      <List.Item>
        <List.Title>Description</List.Title>
        <div className="flex flex-col flex-3/4">
          <Skeleton variant="rounded" animate width={"100%"} height={300} />
        </div>
      </List.Item>
    </List>
  );
}
