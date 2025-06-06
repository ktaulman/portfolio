import ExperienceList from "../_components/experience-list";
import Intro from "@/app/(home)/components/intro-header";
import WorkExperience from "@/app/(home)/components/work-experience";
import PersonalExperience from "@/app/(home)/components/personal-experience";
import { Suspense } from "react";

export default async function Home() {
  return (
    <ExperienceList>
      <Intro />
      {/* JOBS */}
      <Suspense
        fallback={<p className="animate-pulse">Loading ... Work Experience</p>}
      >
        <WorkExperience />
      </Suspense>
      {/* Personal Projects */}
      <Suspense
        fallback={
          <p className="animate-pulse">Loading ... Personal Experiences</p>
        }
      >
        <PersonalExperience />
      </Suspense>
    </ExperienceList>
  );
}
