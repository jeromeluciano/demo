import { BsCoin } from 'react-icons/bs'

export default function PriceInput() {
    return <div>
        <button className="flex items-center space-x-2 bg-zinc-800 px-4 py-3 rounded-lg">
            <BsCoin />
            <span className="text-sm">PRICE</span>
        </button>
    </div >
}