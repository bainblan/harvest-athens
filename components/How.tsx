import FadeIn from "../components/FadeIn";

export default function How() {
    return (
        <section className="flex bg-[#FFE2CE] justify-center px-[10px] py-[100px] gap-[10px]">
            <div className="flex flex-col items-center md:flex-row gap-[50px] w-fit h-fit justify-between">
                <FadeIn direction="up" className="flex flex-col gap-[16px] w-[465px] md:w-[414px] h-full justify-between">
                    <p className="font-bold font-playfair text-[48px] text-black text-center">
                        How?
                    </p>
                    <p className="font-regular font-playfair text-[40px] text-black text-center">
                        Prayer!
                    </p>
                    <p className="font-medium font-Lato text-[22px] text-black text-right">
                        Psalm 127:1<br />
                        Unless the Lord builds the house, those who build it labor in vain. Unless the Lord watches over the city, the watchman stays awake in vain.
                    </p>
                </FadeIn>
                <FadeIn direction="right" className="flex flex-col w-[465px] h-full gap-[16px] justify-between">
                    <p className="font-bold font-playfair text-[30px] text-[#BF603F] text-left">
                        <span className="text-[#5F120C]">Each night</span> we will begin in a collective time of prayer, followed by a scripture reading, then a group break out time of prayer. 
                    </p>
                    <p className="font-semibold font-Lato text-[18px] text-[#5E5E5E] text-left">
                        No matter how many people we have, we will always have an equal number of people actively praying at the coffee shop and evangelizing on the streets. Groups that are out sharing the Gospel should also remain in Christ when starting and having conversations. Without this our works are fruitless.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}