import { BsFillCalendarEventFill } from 'react-icons/bs'

export default function CalendarInput() {
    return <button className="flex text-sm items-center space-x-2 bg-zinc-800 px-5 py-3 rounded-lg">
        <BsFillCalendarEventFill />
        <span>DATE</span>
    </button>
}