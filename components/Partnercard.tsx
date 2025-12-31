import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function Partnercard({ img, name, link }: { img: StaticImageData, name: string, link: string }) {
    return (
        <Link href={link} target="_blank">
            <div className="flex flex-col w-[200px] md:w-[350px] h-fit bg-[#5F120C] gap-[10px] px-[12px] py-[12px] md:px-[20px] md:py-[20px] items-center rounded-xl drop-shadow-[5px_3px_4px_rgba(0,0,0,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-110">
                <Image
                    src={img}
                    alt={name}
                    className="rounded-md w-full"
                />
                <p className="font-bold w-fit font-playfair text-[18px] md:text-[32px] text-white text-center">
                    {name}
                </p>
            </div>
        </Link>
    );
}