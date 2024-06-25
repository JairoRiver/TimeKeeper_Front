import Link from "next/link"

export default function Header(){
    return (
        <header className="w-full h-16 bg-slate-700 flex justify-start items-center">
            <Link href="/register" className="ml-8 p-2 text-blue-100 font-bold text-xl border-2 rounded-md border-yellow-200">Time<span className="text-yellow-300">Keeper</span></Link>
        </header>
    )
}