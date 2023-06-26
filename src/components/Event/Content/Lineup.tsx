import Divider from "@/components/Divider";
import Image from "next/image";
import LineupAvatar from "./LineupAvatar";
import LineupNames from "./LineupNames";

interface LineupProps {
    persons: {
        first_name: string;
        image: string;
    }[];
}

export default function Lineup({ persons }: LineupProps) {
    return <>
        <div className="space-y-3 md:space-y-6 mx-4 md:mx-0">
            <h1 className="text-2xl">Lineup</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex">
                        {persons.map((person, idx) => <LineupAvatar length={persons.length} image={person.image} idx={idx} />)}
                    </div>
                    <div>
                        <LineupNames persons={persons} />
                    </div>
                </div>
                <div className="hidden md:block">
                    <button className="bg-white text-black px-4 py-2 rounded-full uppercase font-semibold text-sm">Show more</button>
                </div>
            </div>
        </div>
        <Divider />
    </>
}