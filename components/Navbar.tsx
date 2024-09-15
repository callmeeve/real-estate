import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#", label: "Properties" },
        { href: "#", label: "About" },
        { href: "#", label: "Contact" },
    ]

    return (
        <>
            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
                {navLinks.map((link, index) => (
                    <Link key={index} className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="ml-auto md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <Link key={index} className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    )
}
