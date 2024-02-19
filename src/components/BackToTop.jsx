import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function BackToTop() {

    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsFixed(true)
            }
            else {
                setIsFixed(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
    }, [])

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <FaArrowAltCircleUp className={`${isFixed ? "fixed" : ""} right-5 bottom-5 text-accent size-10 rounded-full border-white border z-50 cursor-pointer opacity-40 hover:opacity-100`} onClick={backToTop} />
    )
}