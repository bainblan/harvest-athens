import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cort from "../../images/cortheadshot.png";
import cooper from "../../images/cooperheadshot.png";
import question from "../../images/question.png";
import Leadercard from "../../components/Leadercard";
import FadeIn from "../../components/FadeIn";

export default function Leadership() {
    return (
        <main className="min-h-screen flex flex-col gap-[100px] justify-between bg-[#FFCBA7]">
            <Navbar />
            <FadeIn direction="down" className="flex justify-center items-center text-[48px] font-playfair font-bold text-[#5F120C] drop-shadow-[5px_3px_4px_rgba(0,0,0,0.3)]">
                LEADERSHIP
            </FadeIn>
            <div className="flex flex-col md:flex-row gap-[50px] items-center justify-between w-fit self-center">
                <Leadercard
                    img={cort}
                    name="Cort McGowan"
                    pos="Point Person"
                />
                <Leadercard
                    img={cooper}
                    name="Cooper Davis"
                    pos="Secretary"
                />
                <Leadercard
                    img={question}
                    name="TBA"
                    pos="Prayer Leader"
                />
            </div>
            <Footer />
        </main>
    );
}