import Link from "next/link"

export default function NavBar() {
    let navigationPages = ["register", "view-times", "export-data"]
    return (
        <section className="flex flex-col h-[86vh]">
            <div className="flex justify-center items-center h-[6vh] border-2 rounded-md border-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>

            <nav className="w-48 h-[80vh] border-2 rounded-md border-yellow-200">
                <ul className="mx-4 h-full flex flex-col justify-around items-stretch">
                    {navigationPages.map((page) =>
                        <Link className="h-[6vh] flex justify-center items-center text-xl font-bold capitalize border-2 rounded-lg border-slate-300" href={`/${page}`} key={page}>{page}</Link>
                    )}
                </ul>
            </nav>
        </section>
    )
}