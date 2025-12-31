import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Leadercard({ img, name, pos }: { img: StaticImageData, name: string, pos: string }) {
    return (
        <div className="flex flex-col w-[200px] md:w-[350px] h-fit bg-[#FFF7EA] gap-[10px] px-[12px] py-[12px] md:px-[20px] md:py-[20px] items-center rounded-xl drop-shadow-[5px_3px_4px_rgba(0,0,0,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-110">
            <Image
                src={img}
                alt={name}
                className="rounded-md w-full"
            />
            <div className="w-fit">
                <p className="font-bold font-playfair text-[18px] md:text-[32px] text-black text-center">
                    {name}
                </p>
                <p className="font-medium font-playfair text-[16px] md:text-[28px] text-black text-center">
                    {pos}
                </p>
            </div>
        </div>
    );
}