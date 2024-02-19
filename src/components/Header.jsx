import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // menu toggle
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // menu items
    const menuItems = [
        { link: "Home", path: "/#" },
        { link: "About", path: "/#about" },
        { link: "Testimonials", path: "/#testimonials" },
        { link: "Works", path: "/#works" },
        { link: "News", path: "/#news" },
        { link: "Contact", path: "/#contact" },
    ]

    return (
        <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
            <div className="container mx-auto flex justify-between h-full items-center">
                {/* logo */}
                <a href="#">
                    <img src="./src/assets/logo.svg" alt="" />
                </a>
                {/* navbar */}
                <nav>
                    {/* mobile trigger */}
                    <div className="cursor-pointer lg:hidden" onClick={handleMenu}>
                        <i className="ri-menu-4-line text-4xl text-primary"></i>
                    </div>
                    {/* menu */}
                    <ul className={`fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-8 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 ${isMenuOpen ? "nav-is-open" : ""}`}>
                        {menuItems.map(({ link, path }) =>
                            <li>
                                <HashLink key={link} to={path} smooth className="text-[20px] hover:text-accent transition-all duration-300">
                                    {link}
                                </HashLink>
                            </li>)
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}
