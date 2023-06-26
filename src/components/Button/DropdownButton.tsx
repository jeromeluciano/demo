"use client";

import { useState } from "react"
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi'

interface DropdownButtonProps {
    label: string;
    links: {
        href: string;
        name: string;
    }[];
}

export default function DropdownButton({ label, links }: DropdownButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const LinksElement = links.map(link => (
        <div className="text-xs">
            <a href={link.href}>{link.name}</a>
        </div>
    ))

    return <div className="space-y-6 md:space-y-0">
        <div className="flex justify-between items-center cursor-pointer mt-6" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="font-semibold text-xs md:pointer-events-none md:font-bold md:mb-6">{label}</h3>
            {isOpen ? <PiCaretUpBold className="block md:hidden" /> : <PiCaretDownBold className="block md:hidden" />}
        </div>
        {
            isOpen ?
                <div className="block md:hidden space-y-6 text-sm">
                    {LinksElement}
                </div> : null
        }

        <div className="hidden md:block space-y-6 text-sm">
            {LinksElement}
        </div>
    </div>
}