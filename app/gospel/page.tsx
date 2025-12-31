import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cross from "../../images/cross.jpg";
import FadeIn from "../../components/FadeIn";

export default function Gospel() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between bg-[#FFCBA7] gap-[100px]">
            <Navbar />
            <FadeIn direction="down" className="flex justify-center text-center items-center text-[48px] font-playfair font-bold text-[#5F120C] drop-shadow-[5px_3px_4px_rgba(0,0,0,0.3)]">
                How Can I Become a Follower of Jesus?
            </FadeIn>
            <FadeIn className="flex flex-col items-center">
                <Image
                    src={cross}
                    alt="Wooden Cross necklace"
                    height={300}
                    className="rounded-lg"
                />
            </FadeIn>
            <div className="flex flex-col xl:flex-row gap-[50px] items-start w-fit justify-between self-center text-black">
                <FadeIn direction="left" className="flex flex-col w-[348px] gap-[50px]">
                    <p className="font-bold font-Lato text-[24px] text-center">
                        Admit You are a Sinner and that your sin separates you from God.
                    </p>
                    <div className="flex flex-col items-center font-medium font-Lato text-[22px] gap-[30px] text-[#545454]">
                        <p className="text-center">
                            “For all have sinned and fall short of the glory of God.”<br />
                            -Romans 3:23
                        </p>
                        <p className="text-center">
                            “For the wages of sin is death...”<br />
                            -Romans 6:23
                        </p>
                    </div>
                </FadeIn>
                <FadeIn direction="up" className="flex flex-col w-[348px] gap-[50px]">
                    <p className="font-bold font-Lato text-[24px] text-center">
                        Believe that Jesus, the Son of God, lived a perfect sinless life, died on the cross for our sins, and rose three days later from the grave.
                    </p>
                    <div className="flex flex-col items-center font-medium font-Lato text-[22px] gap-[30px] text-[#545454]">
                        <p className="text-center">
                            “For God so loved the world that He gave His only begotten Son, that whoever believes in Him shall not perish but have everlasting life”<br />
                            -John 3:16
                        </p>
                        <p className="text-center">
                            “But God demonstrates His own love towards us, in that while were yet sinners, Christ died for us.”<br />
                            -Romans 5:8
                        </p>
                    </div>
                </FadeIn>
                <FadeIn direction="right" className="flex flex-col w-[348px] gap-[50px]">
                    <p className="font-bold font-Lato text-[24px] text-center">
                        Confess your sin to Jesus, asking Him to forgive you of your sin and to save you. Commit your life to Him and make Him your Savior and Lord.
                    </p>
                    <p className="flex flex-col items-center font-medium font-Lato text-[22px] text-center text-[#545454]">
                        &quot;that if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved; “for with the heart a person believes, resulting in righteousness, and with the mouth he confesses, resulting in salvation.”<br />
                        -Romans 10:9-10
                    </p>
                </FadeIn>
            </div>
            <div className="flex flex-col justify-between w-fit h-fit gap-[26px]">
                <FadeIn direction="down" className="flex justify-center items-center text-[48px] font-playfair font-bold text-[#5F120C]">
                    Make a Decision?
                </FadeIn>
                <FadeIn direction="up" className="w-[520px] md:w-[790px] h-fit text-center text-black text-[24px] font-medium font-Lato">
                    If you have made a decision to accept Christ as your Lord and Savior or would like to talk more about salvation, contact Cort McGowan at<br />864-770-5600.
                </FadeIn>
            </div>
            <Footer />
        </main>
    )
}