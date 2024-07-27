import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const montserrat_thin_100 = Montserrat({
    subsets:["latin"],
    weight: "100"
});

export default function Nav () {
    return (
        <>
        <nav className="h-[60px] flex justify-between items-center px-4 bg-black">
            <div>
                <Image 
                width={54} 
                height={54}
                src="/brands/mustang-logo.png"
                alt="brand logo"/>
            </div>

            <ul className="hidden lg:flex gap-8">
                <li>
                    <Link 
                    className={`${montserrat_thin_100.className} text-yellow-50 text-lg`}
                    href="/">Home</Link>
                </li>
                <li>
                    <Link 
                    className={`${montserrat_thin_100.className} text-yellow-50 text-lg`}
                    href="#">About us</Link>
                </li>
                <li>
                    <Link 
                    className={`${montserrat_thin_100.className} text-yellow-50 text-lg`}
                    href="#">Contact us</Link>
                </li>
                <li>
                    <Link 
                    className={`${montserrat_thin_100.className} text-yellow-50 text-lg`}
                    href="#">Account</Link>
                </li>
            </ul>

            <blockquote>
                <CiMenuBurger className="text-yellow-50 text-2xl"/>
            </blockquote>
        </nav>
        </>
    )
}