import Image from "next/image";
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import Divider from "./Divider";
import { PiCaretDownBold } from 'react-icons/pi'
import DropdownButton from "./Button/DropdownButton";

const dropdownLinks = [
    {
        label: "DICE",
        links: [
            {
                href: "#",
                name: "About"
            },
            {
                href: "#",
                name: "Careers"
            },
            {
                href: "#",
                name: "Diversity, Equity & Inclusion"
            },
            {
                href: "#",
                name: "Press"
            }
        ]
    },
    {
        label: "Support",
        links: [
            {
                href: "#",
                name: "Help Center"
            },
            {
                href: "#",
                name: "Get in touch"
            },
            {
                href: "#",
                name: "Request a refund"
            }
        ]
    },
    {
        label: "Work with us",
        links: [
            {
                href: "#",
                name: "Artists"
            },
            {
                href: "#",
                name: "Venues"
            },
            {
                href: "#",
                name: "Promoters"
            }
        ]
    }
]

export default function Footer() {
    return <footer className="bg-white py-12">
        <div className="flex flex-col max-w-7xl mx-auto">
            <div className="md:flex justify-between">
                <div className="">
                    <Image alt="logo" src="https://dice.fm/static/images/dice-fan.gif" width={90} height={110} />

                </div>
                <div className="m-4 md:flex md:space-x-16 text-black">

                    {dropdownLinks.map(link => <DropdownButton label={link.label} links={link.links} />)}

                </div>

            </div>
            <div className="m-4 order-2 md:order-1 flex space-x-4 md:mt-32 md:mb-8 ">
                <button className="flex items-center space-x-1 bg-zinc-800 py-2 px-4 rounded-full">
                    <AiFillApple className="w-5 h-5" />
                    <span>iOS</span>
                </button>
                <button className="flex items-center space-x-1 bg-zinc-800 py-2 px-4 rounded-full">
                    <AiFillAndroid className="w-5 h-5" />
                    <span>Android</span>
                </button>
            </div>

            <Divider classNames="md:order-2" theme="dark" />

            <div className="order-1 md:order-2 text-black m-4 text-xs md:items-center md:mt-6 md:text-sm md:flex md:justify-between">
                <div className="flex  md:space-x-12 items-center ">
                    <p className="hidden md:block">&copy; DICE FM Ltd</p>
                    <select className="bg-white my-4">
                        <option>English (United States)</option>
                    </select>
                </div>

                <div className="md:flex space-y-4  md:space-y-0 md:space-x-6 ">
                    <div>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="#">Terms of Use</a>
                    </div>
                    <div>
                        <a href="#">Purchase Terms</a>
                    </div>
                    <div>
                        <a href="#">Cookie Settings</a>
                    </div>
                </div>


            </div>
        </div>
    </footer>
}