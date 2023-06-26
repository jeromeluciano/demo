import { BiSearch, BiMenuAltRight } from 'react-icons/bi';

export default function Navbar() {
    return <nav className="flex px-4 bg-black md:sticky top-0 left-0 h-0 justify-between items-center md:px-[80px] py-[40px] z-40">
        <form className="hidden md:block">
            <div className='md:relative'>
                <div className='md:absolute md:inset-y-0 md:left-0 md:flex md:items-center md:pl-3 pointer-events-none left-2'>
                    <BiSearch className='text-black w-5 h-5' />
                </div>
                <input className="md:px-2 md:py-3 md:pl-12 md:rounded-full" placeholder="Find an event" />
            </div>
        </form>

        <div>
            <h1 className="text-2xl font-bold">DICE</h1>
        </div>

        <div className="hidden md:flex md:space-x-12 md:items-center ">
            <a className="md:text-sm">Browse events</a>
            <a className="md:text-sm">My tickets </a>
            <button className="bg-yellow-300 md:px-5 md:py-3.5 md:rounded-full md:text-xs md:text-black md:font-bold">LOG IN</button>
        </div>

        <div className="flex items-center md:hidden">
            <button>
                <BiSearch className="w-8 h-8" />
            </button>
            <button>
                <BiMenuAltRight className="w-8 h-8" />
            </button>
        </div>

    </nav>
}