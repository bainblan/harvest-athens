import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function SocialButton({ img, alt, link }: { img: StaticImageData, alt: string, link: string }) {
    return (
        <button className="text-white font-playfair hover:underline underline-offset-4">
            <Link href={link} target="_blank">
                <Image
                    src={img}
                    alt={alt}
                    width={24}
                    height={24}
                />
            </Link>
        </button>
    );
}