"use client";
import {useState} from "react";
import Image from "next/image";


export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="flex items-center justify-between px-8 py-4 bg-white shadow relative">
                <div className="text-xl font-bold">PNLBOOK</div>

                <nav className="space-x-6 hidden md:flex">
                    <a href="" className="text-gray-500 hover:text-blue-600">Features</a>
                    <a href="" className="text-gray-500 hover:text-blue-600">Pricing</a>
                    <a href="" className="text-gray-500 hover:text-blue-600">Blog</a>
                    <a href="" className="text-gray-500 hover:text-blue-600">Help</a>
                </nav>

                <div className="space-x-4 hidden md:block">
                    <a href="/login">
                        <button
                            type="submit"
                            className="px-4 py-2 border-2 border-gray-400 text-gray-500 rounded hover:bg-gray-50 active:bg-gray-100 transition">
                            Log In
                        </button>
                    </a>
                    <a href="/signup">
                        <button type="submit"
                                className="px-4 py-2 bg-blue-600 text-white p-3 rounded  hover:bg-blue-700 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400">
                            Sign Up
                        </button>
                    </a>
                </div>

                <button
                    className="text-xl md:hidden p-3 border-2 border-gray-400 text-gray-500 rounded hover:bg-gray-50 active:bg-gray-100 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {menuOpen && (
                    <div
                        className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-20">
                        <a href="" className="text-gray-500 hover:text-blue-600">Features</a>
                        <a href="" className="text-gray-500 hover:text-blue-600">Pricing</a>
                        <a href="" className="text-gray-500 hover:text-blue-600">Blog</a>
                        <a href="" className="text-gray-500 hover:text-blue-600">Help</a>
                        <div className="flex space-x-4">
                            <a href="/login">
                                <button
                                    type="submit"
                                    className="px-4 py-2 border-2 border-gray-400 text-gray-500 rounded hover:bg-gray-50 active:bg-gray-200">
                                    Log In
                                </button>
                            </a>
                            <a href="/signup">
                                <button type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white p-3 rounded  hover:bg-blue-700 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400">
                                    Sign Up
                                </button>
                            </a>
                        </div>
                    </div>
                )}
            </header>

            <main className="relative flex flex-col items-center justify-center flex-1 text-center px-4">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/bg.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        opacity: 0.04,
                    }}
                ></div>
                <h1 className="text-5xl font-bold mb-4 relative z-10">Welcome to PNLBOOK</h1>
                {/*Агрегируй свои данные с многих источников и анализируй свои трейды, чтобы улучшить свои показатели.*/}
                <p className="max-w-md text-xl leading-8 text-gray-600 dark:text-zinc-400 mb-8 relative z-10">
                    Aggregate data from multiple sources and {" "}
                    <a href="" className="font-medium text-blue-600 dark:text-zinc-50"> analyze </a>
                    {" "}your trades to{" "}
                    <a href="" className="font-medium text-blue-600 dark:text-zinc-50"> improve </a>
                    {" "}your performance.
                </p>
                {/*<p className="text-xl text-gray-500 mb-8">*/}
                {/*    Управляйте своими финансами и анализируйте доходы легко и просто*/}
                {/*</p>*/}

                <div className="space-x-4 relative z-10">
                    <a href="/login">
                        <button
                            type="submit"
                            className="px-10 py-4 border-2 border-gray-400 bg-gray-50 text-gray-500 rounded-4xl hover:bg-gray-100 active:bg-gray-200 text-lg">
                            Log In
                        </button>
                    </a>
                    <a href="/signup">
                        <button type="submit"
                                className="px-10 py-4 bg-blue-600 text-white p-3 rounded-4xl  hover:bg-blue-700 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400 text-lg">
                            Start for free
                        </button>
                    </a>
                </div>
            </main>

            <div className="flex justify-center items-center gap-12 p-8 bg-white">
                <Image
                    src="/logo_binance.svg"
                    alt="Binance"
                    width={100}
                    height={100}
                    className=""
                />
                <Image
                    src="/logo_bybit.svg"
                    alt="Bybit"
                    width={100}
                    height={100}
                    className=""
                />
                <Image
                    src="/logo_okx.svg"
                    alt="OKX"
                    width={100}
                    height={100}
                    className=""
                />
            </div>
            <footer className="text-center text-sm p-4 text-white bg-blue-700">© 2025 Pnlbook – All Rights Reserved.
            </footer>
        </div>
    );
}