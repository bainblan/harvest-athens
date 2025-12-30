import Image from "next/image";
import downtown from "../images/downtown-athens-new.jpg"
import FadeIn from "../components/FadeIn"
export default function Title() {
    return (
        <>
            <Image src={downtown} alt="Downtown Athens" className="w-full" height={574} />
            <div className="flex w-full h-fit bg-[#FFCBA7] justify-center px-[10px] pb-[50px]">
                <div className="flex flex-col w-[854px] h-[754px] justify-between items-center">
                    <h1 className="text-[#5F120C] text-center font-bold font-playfair text-[96px] drop-shadow-[5px_3px_4px_rgba(0,0,0,0.7)]">
                        HARVEST<br />
                        <h1 className="text-[64px]"> -ATHENS-</h1>
                    </h1>
                    <h3 className="text-[#5F120C] animate-bounce font-playfair text-center text-[48px] font-bold">
                        Fridays @ 8:30<br />
                        THE ROOK & PAWN
                    </h3>
                    <FadeIn direction="down" className="text-[#6A6A6A] font-lato text-[32px]">
                        We seek to be a <b>Christ-centered</b> community marked by prayer that lovingly brings the Gospel of Jesus Christ to the lost, poor, broken, and oppressed of downtown Athens, while abiding in the love of Christ.
                    </FadeIn>
                </div>
            </div>
        </>
    );
}