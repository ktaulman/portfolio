import { Suspense } from "react";
import List from "../_components/experience-list";
import Greeting from "@/app/(home)/components/greeting";
import WorkExperience from "@/app/(home)/components/work-experience";
import PersonalExperience from "@/app/(home)/components/personal-experience";
import ExperienceSkeleton from "./components/skeletons/experience-skeleton";
import Other from "./components/other";

export default async function Home() {
  return (
    <List gap={"md"}>
      <Greeting />
      <Suspense fallback={<ExperienceSkeleton title="Work Experience" />}>
        <WorkExperience />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton title="Personal" />}>
        <PersonalExperience />
      </Suspense>

      <Other />
    </List>
  );
}
