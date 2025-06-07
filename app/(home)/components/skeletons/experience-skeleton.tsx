import List from "@/app/_components/experience-list";
import Skeleton from "@/app/_components/skeletons/skeleton";

export default function ExperienceSkeleton({ title }: { title: string }) {
  return (
    <List.Item>
      <List.Title> {title}</List.Title>
      <div className="flex flex-col gap-5">
        <Skeleton variant="text" width={300} height={10} animate />
        <Skeleton variant="text" width={200} height={10} animate />
        <Skeleton variant="text" width={220} height={10} animate />
        <Skeleton variant="text" width={280} height={10} animate />
      </div>
    </List.Item>
  );
}
