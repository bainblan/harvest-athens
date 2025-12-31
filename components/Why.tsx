import FadeIn from "../components/FadeIn";

export default function Why() {
    return (
        <section className="flex bg-[#FFE2CE] justify-center px-[10px] py-[100px] gap-[10px]">
            <div className="flex flex-col items-center md:flex-row gap-[50px] w-fit h-fit justify-between">
                <FadeIn direction="left" className="flex flex-col w-[475px] h-full gap-[16px] justify-between">
                    <p className="font-bold font-playfair text-[30px] text-[#BF603F] md:text-right">
                        <span className="text-[#5F120C]">Our Mission</span> is to bring the Gospel of Jesus Christ to the lost people of downtown Athens, while abiding in the love of Christ.
                    </p>
                    <p className="font-semibold font-Lato text-[18px] text-[#5E5E5E] md:text-right">
                        On a nightly basis we find ourselves next to one of the largest bar scenes in the U.S., filled with broken people who turn to the world to fulfill them instead of our Lord. What better way can we love them than meeting them where they are and sharing the Truth with them?
                    </p>
                </FadeIn>
                <FadeIn direction="up" className="flex flex-col gap-[16px] w-[475px] md:w-[414px] h-full justify-between">
                    <p className="font-bold font-playfair text-[48px] text-black text-center">
                        Why?
                    </p>
                    <p className="font-medium font-Lato text-[22px] text-black md:text-left">
                        Matthew 28:19-20<br />
                        Therefore, go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}