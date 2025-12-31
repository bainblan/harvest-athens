import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Leadercard({ img, name, pos }: { img: StaticImageData, name: string, pos: string }) {
    return (
        <div className="flex flex-col w-fit h-fit bg-[#FFF7EA] gap-[10px] px-[20px] py-[20px] items-center rounded-xl drop-shadow-[5px_3px_4px_rgba(0,0,0,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-110">
            <Image
                src={img}
                alt={name}
                height={300}
                className="rounded-md"
            />
            <div className="w-fit">
                <p className="font-bold font-playfair text-[32px] text-black text-center">
                    {name}
                </p>
                <p className="font-medium font-playfair text-[28px] text-black text-center">
                    {pos}
                </p>
            </div>
        </div>
    );
}