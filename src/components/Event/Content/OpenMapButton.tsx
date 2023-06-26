import { FiMapPin } from 'react-icons/fi'
export default function OpenMapButton() {
    return <button className=" my-3 md:my-6 flex items-center justify-center space-x-2 uppercase text-white bg-zinc-800 px-4 py-2 rounded-full text-sm">
        <FiMapPin />
        <span>Open in Maps</span>
    </button>
}