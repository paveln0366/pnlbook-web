"use client";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="flex items-center justify-between px-8 py-4 bg-white shadow relative">

                <div className="text-xl font-bold text-gray-500">My Account</div>

                <nav className="space-x-6 hidden md:flex">
                    <a href="/dashboard" className="text-gray-500 hover:text-blue-600">Dashboard</a>
                    <a href="/trades" className="text-gray-500 hover:text-blue-600">Trades</a>
                </nav>

                <div className="space-x-4 hidden md:block">
                    <a href="">
                        <button
                            type="submit"
                            className="px-4 py-2 border-2 border-gray-400 text-gray-500 rounded hover:bg-gray-50 active:bg-gray-100">
                            Profile
                        </button>
                    </a>
                    <Link href="/">
                        <button type="submit"
                                className="px-4 py-2 bg-blue-600 text-white p-3 rounded  hover:bg-blue-700 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400">
                            Log Out
                        </button>
                    </Link>
                </div>

                <button
                    className="text-xl md:hidden p-3 border-2 border-gray-400 text-gray-500 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {menuOpen && (
                    <div
                        className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-20">
                        <a href="/dashboard" className="text-gray-500 hover:text-blue-600">Dashboard</a>
                        <a href="/trades" className="text-gray-500 hover:text-blue-600">Trades</a>
                        <div className="flex space-x-4">
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
                                    Log Out
                                </button>
                            </Link>
                        </div>
                    </div>
                )}

            </header>
        </div>
    );
}