import { HiLocationMarker } from 'react-icons/hi'
import { TbActivityHeartbeat } from 'react-icons/tb'
import About from "./Content/About"
import Lineup from "./Content/Lineup"
import { persons } from '../../data/lineup.json'
import Venue from "./Content/Venue"
import DownloadSection from "./Content/DownloadSection"

export default function EventMainContent() {
    return <div className="md:block md:max-w-[65%] md:pb-24">
        <div className="space-y-12">
            <div className="hidden md:block space-y-2">
                {/* title */}
                <h1 className="text-5xl font-bold leading-snug tracking-wider">Rebel Rebel feat Waxx pres Gerd Janson </h1>

                {/* location */}
                <h2 className="text-xl">Andrea Doria</h2>

                {/* Date */}

                <h2 className="text-xl text-yellow-300">Sat, Jun 24, 11:45 PM GMT+2</h2>

                <p className="flex items-center space-x-2">
                    <HiLocationMarker /> <span className="font-bold">
                        Roma
                    </span>
                </p>
                <p className="flex space-x-2 items-center bg-blue-400 w-fit px-1.5 py-1 rounded-md text-black">
                    <TbActivityHeartbeat />
                    <span className="text-xs">Selling fast</span>
                </p>
            </div>
            <About />

            <Lineup persons={persons} />
            <Venue />

            <DownloadSection />
        </div>
    </div>
}