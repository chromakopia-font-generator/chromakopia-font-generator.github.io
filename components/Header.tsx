// components/Header.tsx

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
    return (
        <header className="border-b">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Chromakopia Font Generator Icon"
                        width={32}
                        height={32}
                        className="mr-2"
                    />
                    <span className="text-2xl font-bold">Chromakopia</span>
                </Link>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-4">
                        {/* <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li> */}
                        <li><Button variant="ghost" asChild><Link href="/about">About</Link></Button></li>
                        {/* <li><Button variant="ghost" asChild><Link href="/how-it-works">How Example Works</Link></Button></li> */}
                    </ul>
                </nav>
                {/* <div className="hidden md:flex">
                    <LocaleSwitcher />
                </div> */}

                {/* Mobile Menu */}
                {/* <MobileMenu /> */}
            </div>
        </header>
    )
}

export default Header;