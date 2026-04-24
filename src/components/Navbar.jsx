import Link from "next/link";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    
                    <p className="font-bold">ACME</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="tasks">Tasks</Link></li>
                </ul>
                <div>
                    <ThemeToggle></ThemeToggle>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;