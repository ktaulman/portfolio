export default function Loading() {
    return (
        <main className='min-w-screen min-h-screen items-center justify-center bg-gray-100 p-24'>
            <div className="flex flex-col items-center gap-10 text-base tracking-wider text-blue-950">
                <h2 className='w-1/6 font-semibold'>Loading...</h2>
                <p className='w-5/6 text-sm'>Please wait while we fetch the job details.</p>
            </div>
        </main>
    );
}