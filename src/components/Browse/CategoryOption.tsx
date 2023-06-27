import { IconType } from "react-icons/lib";


interface CategoryOptionProps {
    label: string;
    LeftIcon: IconType
}

export default function CategoryOption({ label, LeftIcon }: CategoryOptionProps) {
    return <button className="flex flex-col items-center justify-center space-y-2 bg-zinc-800 p-4 min-w-[72px] rounded-lg">
        <LeftIcon />
        <span className="text-xs">{label}</span>
    </button>
}