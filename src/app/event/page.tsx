import EventMainContent from "@/components/Event/EventMainContent";
import EventSideContent from "@/components/Event/EventSideContent";

export default function EventPage() {
    return <div className="mx-auto">
        <div className=" md:w-[1000px]  md:flex md:space-x-12">
            <EventSideContent />
            <EventMainContent />
        </div>
    </div>
}