import { ReactNode } from "react";
// JobCard Parent
function JobCard({ children }: { children: ReactNode }) {
  return (
    <article className="min-w-xl max-w-4xl bg-gray-100 rounded p-4">
      {children}
    </article>
  );
}
// Header
function Header({ children }: { children: ReactNode }) {
  return (
    <header
      aria-label="Job Title and Company"
      className="flex justify-between  align-center  text-2xl tracking-widesr"
    >
      {children}
    </header>
  );
}

function HeaderTitle({ children }: { children: ReactNode }) {
  return <h1 aria-label="Job Title">{children}</h1>;
}
function HeaderCompanyName({ children }: { children: ReactNode }) {
  return (
    <p aria-label="Company Name" className="">
      {children}
    </p>
  );
}

// Detail
function Detail({ children }: { children: ReactNode }) {
  return (
    <section aria-label="Job Detail">
      <dl>{children}</dl>
    </section>
  );
}

function DetailTitle({ children }: { children: ReactNode }) {
  return <dt className="font-bold">{children}</dt>;
}
function DetailDescription({ children }: { children: ReactNode }) {
  return <dd className="pl-4">{children}</dd>;
}
// Header
JobCard.Header = Header;
JobCard.HeaderTitle = HeaderTitle;
JobCard.HeaderCompanyName = HeaderCompanyName;
// Detail
JobCard.Detail = Detail;
JobCard.DetailTitle = DetailTitle;
JobCard.DetailDescription = DetailDescription;

export default JobCard;
// This component is a placeholder for the job card.
