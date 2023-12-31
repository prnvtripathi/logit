"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Head from "next/head"

const LoginPage = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <Head>
                    <title>Home {session?.user?.name}</title>
                </Head>
                <div>
                    <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center">
                        <div className="text-center flex gap-2 text-white">
                            Logged in as {session?.user?.name}
                        </div>
                        <button className="bg-white p-2 rounded-none transition-all transition-800 hover:rounded-xl" onClick={() => signOut()}>Logout</button>
                    </div>
                </div>

            </>
        );
    } else {
        return (
            <>
                <Head>
                    <title>Home {session?.user?.name}</title>
                </Head>
                <div>
                    <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center">
                        <div className="text-center flex gap-2">
                            <button className="bg-white p-2 rounded-none transition-all transition-800 hover:rounded-xl" onClick={() => signIn("google")}>Login with Google</button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default LoginPage;