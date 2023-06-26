import { BiCopy, BiDoorOpen } from 'react-icons/bi'
import OpenMapButton from "./OpenMapButton"
import Divider from "@/components/Divider"
export default function Venue() {
    return <>
        <div className="m-4">
            <h3 className="font-light">Venue</h3>
            <h2 className="text-lg font-bold md:text-3xl">Andrea Doria</h2>
            <p className="mt-3 text-sm md:text-md">Via del Baiardo, 26, 00191 Roma RM, Italy <button>
                <BiCopy />
            </button></p>
            <OpenMapButton />

            <p className="flex items-center space-x-2">
                <BiDoorOpen className="text-gray-400" />
                <span className="text-gray-400">Doors Open </span>
                <span>11:45 PM GMT+2</span>
            </p>
        </div>
        <Divider />
    </>
}