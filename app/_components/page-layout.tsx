export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex justify-start top-10 h-screen p-16">{children}</main>
    )
}