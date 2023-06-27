import Image from "next/image";

interface EventItemProps {
    title: string;
    price: number;
    cover: string;
    location: string;
    date: string;
}

export default function EventItem({ title, price, cover, location, date }: EventItemProps) {
    return <div>
        <div>
            <Image
                alt={title}
                className="rounded-lg"
                width="260"
                height="260"
                src={cover}
            />
        </div>
        <div className="mt-2">
            <h2 className="text-sm">{title}</h2>
            <p className="text-sm text-yellow-300">{date}</p>
            <p className="text-sm">{location}</p>
            <p className="text-sm">${price}</p>
        </div>
    </div>
}