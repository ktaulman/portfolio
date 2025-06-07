import { Spinner } from "@/app/_components/spinner/spinner";

export default function Loading() {
  return (
    <main className="flex w-screen h-screen items-start justify-center ">
      <h2 className=" text-4xl animate-pulse ">Loading Job...</h2>
      <Spinner size="lg" />
    </main>
  );
}
