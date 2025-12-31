import downtown from "../images/downtown-athens-new.jpg"
import FadeIn from "../components/FadeIn";

export default function Landing() {
    return (
        <div className="relative flex flex-col justify-center items-center bg-cover bg-fixed bg-center w-full h-[1000px]" style={{ backgroundImage: `url(${downtown.src})` }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <FadeIn className="relative italic text-white text-center font-playfair font-bold text-[96px] md:w-[800px]">
                The Harvest is Plentiful but the Workers are Few.<br /><span className="text-[48px]">Luke 10:2</span>
            </FadeIn>
        </div>
    );
}