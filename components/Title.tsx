import FadeIn from "../components/FadeIn"

export default function Title() {
    return (
        <section className="flex w-full h-fit bg-[#FFCBA7] justify-center px-[10px] pb-[50px]">
            <div className="flex flex-col w-[854px] h-[754px] justify-between items-center">
                <FadeIn direction="down" className="text-[#5F120C] text-center font-bold font-playfair text-[96px] drop-shadow-[5px_3px_4px_rgba(0,0,0,0.7)]">
                    HARVEST<br />
                    <h1 className="text-[64px]"> -ATHENS-</h1>
                </FadeIn>
                <FadeIn className="text-[#5F120C] animate-bounce font-playfair text-center text-[48px] font-bold">
                    Fridays @ 8:30<br />
                    THE ROOK & PAWN
                </FadeIn>
                <FadeIn direction="down" className="text-[#6A6A6A] text-center md:text-left px-[30px] font-lato text-[32px]">
                    We seek to be a <b>Christ-centered</b> community marked by prayer that lovingly brings the Gospel of Jesus Christ to the lost, poor, broken, and oppressed of downtown Athens, while abiding in the love of Christ.
                </FadeIn>
            </div>
        </section>
    );
}