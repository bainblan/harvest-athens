import Image from "next/image";
import qrcode from "../images/qrcode.png";
import FadeIn from "../components/FadeIn";

export default function Contact() {
    return (
        <div className="flex bg-[#FFCBA7] justify-center px-[10px] py-[100px] gap-[10px]">
            <div className="flex w-fit h-[370px] justify-between gap-[70px]">
                <FadeIn direction="left" className="flex flex-col w-[485px] h-full justify-between">
                    <p className="font-bold font-playfair text-[30px] text-[#BF603F] text-right">
                        <span className="text-[#5F120C]">More details</span> regarding logistics, safety and resources will be shared in the <span className="text-[#5F120C]">GroupMe</span>, join if you&apos;re interested!
                    </p>
                    <p className="font-semibold font-Lato text-[18px] text-[#5E5E5E] text-right">
                        If you don&apos;t feel comfortable or ready to share the Gospel in that manner, we&apos;d still love to have you! Being only a member of the prayer team is as valuable, if not more valuable! We&apos;d also love to equip you and help get you to the point that Gospel conversations feel both comfortable and natural!
                    </p>
                </FadeIn>
                <FadeIn direction="right" className="flex flex-col w-[414px] h-full justify-between">
                    <Image
                        src={qrcode}
                        alt="GroupMe QR Code"
                        className="self-center"
                        height={200}
                    />
                    <p className="font-bold font-playfair text-[24px] text-black text-center">
                        Contact Cort McGowan with any questions:
                    </p>
                    <p className="font-medium font-playfair text-[24px] text-black text-center">
                        (864)-770-5600
                    </p>
                </FadeIn>
            </div>
        </div>
    );
}