import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import auburn from "../../images/harvest-auburn.jpg";
import bcm from "../../images/ugabcm.jpg";
import clevelandroad from "../../images/clevelandroad.jpg";
import Partnercard from "../../components/Partnercard";
import FadeIn from "../../components/FadeIn";

export default function Partners() {
    return (
        <main className="min-h-screen flex flex-col gap-[100px] justify-between bg-[#FFCBA7]">
            <Navbar />
            <FadeIn direction="down" className="flex justify-center items-center text-[48px] font-playfair font-bold text-[#5F120C] drop-shadow-[5px_3px_4px_rgba(0,0,0,0.3)]">
                Our Ministry Partners
            </FadeIn>
            <div className="flex flex-col md:flex-row gap-[50px] items-center justify-between w-fit self-center">
                <Partnercard
                    img={auburn}
                    name="HARVEST AUBURN"
                />
                <Partnercard
                    img={bcm}
                    name="UGA BCM"
                />
                <Partnercard
                    img={clevelandroad}
                    name="Cleveland Road"
                />
            </div>
            <Footer />
        </main>
    );
}