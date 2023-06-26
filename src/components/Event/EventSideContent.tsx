import Image from "next/image";
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi'
import { BsFillPlayFill } from 'react-icons/bs'
import Divider from "../Divider";
import { HiLocationMarker } from 'react-icons/hi'

export default function EventSideContent() {
    return <div className="md:self-start md:flex-1 md:sticky md:top-[92px] md:max-w-[320px] md:z-10 md:pb-24">
        <div className="space-y-4 m-4 md:space-y-8">
            <div className="relative space-y-2">
                <Image className="w-full rounded-xl" alt="Image" width={320} height={320} src="https://dice-media.imgix.net/attachments/2023-06-07/2687a945-b710-4fa3-b1f6-5a396c175386.jpg?rect=0%2C135%2C1080%2C1080&auto=format%2Ccompress&q=80&w=328&fit=max&dpr=1" />
                <div className="absolute bottom-2 right-2">
                    <div className="">
                        <button className="bg-black w-10 h-10 rounded-full">
                            <AiOutlineHeart className="mx-auto text-md" />
                        </button>
                        <button className="bg-black w-10 h-10 rounded-full">
                            <FiShare className="mx-auto text-md" />
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile - event details */}

            <div className="block md:hidden">
                <h2 className="font-semibold text-3xl">Rebel Rebel feat Waxx pres Gerd Janson</h2>
                <h3>Andrea Doria</h3>
                <p className="text-yellow-200">Sat, Jun 24, 11:45 PM GMT+2</p>
                <p className="flex items-center space-x-2">
                    <HiLocationMarker /> <span className="">
                        Roma
                    </span>
                </p>
            </div>

            <button className="border border-gray-100/60 text-gray-100/60 w-full py-4 rounded-xl font-bold">Off Sale</button>

            <div className="flex justify-between items-center">
                <div>
                    <h2 className=" text-md md:text-lg font-bold">Top track</h2>
                    <p className="text-sm text-gray-300">Modern Romance</p>
                </div>
                <button>
                    <BsFillPlayFill className="w-8 h-8" />
                </button>
            </div>

            <Divider theme="dark" />

            <div className="">
                <p className="text-sm text-gray-400 mb-4">DICE protects fans and artists from resellers. Tickets will be securely stored in the app.</p>

                <a className="font-bold">Got a code?</a>
            </div>
        </div>
    </div>
}