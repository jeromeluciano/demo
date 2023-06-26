import EventMainContent from "@/components/Event/EventMainContent";
import EventSideContent from "@/components/Event/EventSideContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EventPage() {
    return <div className="">
        <Navbar />
        <div className="flex space-x-16 mx-auto max-w-5xl relative">
            <div className="md:flex md:space-x-12">
                <EventSideContent />
                <EventMainContent />
            </div>
        </div>
        <Footer />
    </div>
}