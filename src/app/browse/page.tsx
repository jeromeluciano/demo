import CalendarInput from "@/components/Browse/CalendarInput";
import CategoryOption from "@/components/Browse/CategoryOption";
import CategorySelect from "@/components/Browse/CategorySelect";
import PriceInput from "@/components/Browse/PriceInput";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { PiMicrophoneStageBold, PiSmileyStickerBold, PiTelevisionSimple } from 'react-icons/pi'
import { FaTheaterMasks, FaGlobe } from 'react-icons/fa'
import { SiMusicbrainz } from 'react-icons/si'
import Image from "next/image";
import EventItem from "@/components/Browse/EvenItem";
import DownloadBanner from "@/components/Browse/DownloadBanner";



export default function BrowsePage() {
    return <div className="mb-8 md:mb-8  md:w-[1100px]">
        <div className="mx-4 space-y-4">
            <div className="flex items-center space-x-3">
                <CategorySelect />
                <CalendarInput />
                <PriceInput />
            </div>
            <div className="max-w-sm md:max-w-[1000px] relative">
                <div className="flex flex-start space-x-2 overflow-x-auto">
                    <CategoryOption label="Shows" LeftIcon={PiMicrophoneStageBold} />
                    <CategoryOption label="Theater" LeftIcon={FaTheaterMasks} />
                    <CategoryOption label="DJ" LeftIcon={SiMusicbrainz} />
                    <CategoryOption label="Party" LeftIcon={FaGlobe} />
                    <CategoryOption label="Talk" LeftIcon={PiTelevisionSimple} />
                    <CategoryOption label="Comedy" LeftIcon={PiSmileyStickerBold} />
                </div>

            </div>
        </div>

        <h1 className="mx-4 text-4xl my-8 font-semibold ">Popular Events <span className="text-gray-400">in Rome</span></h1>

        <div className="px-4 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-6 auto-rows-auto grid-flow-dense w-full">

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-06-18/7a2b3f0d-3195-4a67-b20f-f089802d230c.jpg?rect=514%2C0%2C2480%2C2480&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="NU GENEA Live Band - ROMA - ROCK IN ROMA"
                cover="https://dice-media.imgix.net/attachments/2022-12-14/f4153831-095d-402f-9fa5-d82584009ba3.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-05-30/a063ef55-910f-4f8f-9ecc-a26e62e886b9.jpg?rect=0%2C0%2C1081%2C1081&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-06-05/d290a10f-64d7-4a9d-981f-310fc976dab4.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-05-29/a2558629-1387-4e2f-a27c-95c0616b7626.jpg?rect=0%2C0%2C3000%2C3000&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-06-18/7a2b3f0d-3195-4a67-b20f-f089802d230c.jpg?rect=514%2C0%2C2480%2C2480&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

        </div>

        <DownloadBanner />

        <div className="px-4 grid  grid-cols-2 gap-6 md:grid-cols-4 md:gap-6 auto-rows-auto grid-flow-dense w-full">

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-06-18/7a2b3f0d-3195-4a67-b20f-f089802d230c.jpg?rect=514%2C0%2C2480%2C2480&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="NU GENEA Live Band - ROMA - ROCK IN ROMA"
                cover="https://dice-media.imgix.net/attachments/2022-12-14/f4153831-095d-402f-9fa5-d82584009ba3.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-05-30/a063ef55-910f-4f8f-9ecc-a26e62e886b9.jpg?rect=0%2C0%2C1081%2C1081&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-06-05/d290a10f-64d7-4a9d-981f-310fc976dab4.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-05-29/a2558629-1387-4e2f-a27c-95c0616b7626.jpg?rect=0%2C0%2C3000%2C3000&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

            <EventItem
                title="TEEN AGE DREAM"
                cover="https://dice-media.imgix.net/attachments/2023-06-18/7a2b3f0d-3195-4a67-b20f-f089802d230c.jpg?rect=514%2C0%2C2480%2C2480&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1"
                date="Sat, Sep 23"
                location="ORION LIVE CLUB"
                price={15}
            />

        </div>
    </div>
}