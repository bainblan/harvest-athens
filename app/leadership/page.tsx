import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cort from "../../images/cortheadshot.png";
import cooper from "../../images/cooperheadshot.png";
import question from "../../images/question.png";
import Leadercard from "../../components/Leadercard";

export default function Leadership() {
    return (
        <main className="min-h-screen flex flex-col justify-between bg-[#FFCBA7]">
            <Navbar />
            <h1 className="flex justify-center items-center text-[48px] font-playfair font-bold text-[#5F120C]">
                LEADERSHIP
            </h1>
            <div className="flex flex-row justify-between w-[1200px] self-center">
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