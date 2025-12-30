import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import auburn from "../../images/harvest-auburn.jpg";
import bcm from "../../images/ugabcm.jpg";
import clevelandroad from "../../images/clevelandroad.jpg";

export default function Partners() {
    return (
        <main className="min-h-screen flex flex-col justify-between bg-[#FFCBA7]">
            <Navbar />
            <h1 className="flex justify-center items-center text-[48px] font-playfair font-bold text-[#5F120C]">
                Our Ministry Partners
            </h1>
            <div className="flex flex-row justify-between w-[1200px] self-center">
                <div className="flex flex-col items-center">
                    <Image
                        src={auburn}
                        alt="HARVEST Auburn"
                        height={300}
                    />
                    <div className="bg-white w-fit px-[10px] py-[10px]">
                        <p className="font-bold font-playfair text-[24px] text-black text-center">
                            HARVEST
                        </p>
                        <p className="font-medium font-playfair text-[20px] text-black text-center">
                            AUBURN
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={bcm}
                        alt="UGA BCM"
                        height={300}
                    />
                    <div className="bg-white w-fit px-[10px] py-[10px]">
                        <p className="font-bold font-playfair text-[24px] text-black text-center">
                            UGA BCM
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={clevelandroad}
                        alt="Cleveland Road Baptist Church"
                        height={300}
                    />
                    <div className="bg-white w-fit px-[10px] py-[10px]">
                        <p className="font-bold font-playfair text-[24px] text-black text-center">
                            Cleveland Road
                        </p>
                        <p className="font-medium font-playfair text-[20px] text-black text-center">
                            Baptist Church
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}