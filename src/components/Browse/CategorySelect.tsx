
import { HiOutlineLocationMarker } from 'react-icons/hi'


export default function CategorySelect() {
    return <div>
        <button className="flex items-center space-x-2 bg-zinc-800 px-4 py-3 rounded-lg">
            <HiOutlineLocationMarker />
            <span className="text-sm">ROME</span>
        </button>
    </div >
}