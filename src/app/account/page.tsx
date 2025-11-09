import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="flex items-center justify-between px-8 py-4 bg-white shadow">

                <nav className="space-x-6 hidden md:flex">
                    <a href="/dashboard" className="text-gray-500 hover:text-blue-600">Dashboard</a>
                    <a href="/trades" className="text-gray-500 hover:text-blue-600">Trades</a>
                </nav>

                <div className="space-x-4">
                    <a href="">
                        <button
                            type="submit"
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded hover:bg-gray-50 active:bg-gray-200">
                            Profile
                        </button>
                    </a>
                    <Link href="/">
                        <button type="submit"
                                className="px-4 py-2 bg-blue-600 text-white p-3 rounded  hover:bg-blue-700 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400">
                            Exit
                        </button>
                    </Link>
                </div>

            </header>
        </div>
    );
}