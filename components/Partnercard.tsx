import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Partnercard({ img, name }: { img: StaticImageData, name: string }) {
    return (
        <div className="flex flex-col h-fit bg-[#5F120C] gap-[10px] px-[20px] py-[20px] items-center rounded-xl drop-shadow-[5px_3px_4px_rgba(0,0,0,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-110">
            <Image
                src={img}
                alt={name}
                height={300}
                className="rounded-md"
            />
            <p className="font-bold w-fit font-playfair text-[32px] text-white text-center">
                {name}
            </p>
        </div>
    );
}