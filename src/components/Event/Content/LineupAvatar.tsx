import Image from 'next/image';
import { BsPersonHearts } from 'react-icons/bs'
interface LineupAvatarProps {
    image: string;
    idx: number;
    length: number;
}

export default function LineupAvatar({ image, idx, length }: LineupAvatarProps) {
    const avatarStyle = "flex -ml-2 justify-center items-center w-[50px] h-[50px] rounded-full bg-zinc-800 border-2 border-black " + `z-[${idx}]`
    const imageStyle = "rounded-full -ml-2 border-2 border-black " + `z-[${(idx)}]`
    return <>
        {image ? <Image
            className={imageStyle}
            alt="avatar"
            width={50}
            height={50}
            src={image}
        /> : <div className={avatarStyle} >
            <BsPersonHearts className="w-[20px] h-[20px]" />
        </div>}
    </>
}