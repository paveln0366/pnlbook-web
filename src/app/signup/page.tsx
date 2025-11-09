import Link from "next/link";

export default function Signup() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
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
            <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md z-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Name"
                           className="w-full p-3 border border-gray-300 rounded focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"/>
                    <input type="email" placeholder="Email"
                           className="w-full p-3 border border-gray-300 rounded focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"/>
                    <input type="password" placeholder="Password"
                           className="w-full p-3 border border-gray-300 rounded focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"/>
                    <Link href="/account">
                        <button type="submit"
                                className="w-full bg-blue-600 text-white p-3 rounded  hover:bg-blue-700 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400">
                            Sign Up
                        </button>
                    </Link>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <Link href="/login" className="text-blue-600">Log In</Link>
                </p>
            </div>
        </div>
    );
}