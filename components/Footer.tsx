import SocialButton from "./socialButton";
import insta from "../images/instagram-white.png";
import groupme from "../images/group-me-white.png";

export default function Footer() {
    return (
        <footer className="flex w-full justify-center bg-[#5F120C] px-[37px] py-[10px]">
            <div className="flex justify-start w-full">
                Copyright &copy; Harvest Athens 2025
            </div>
            <div className="flex h-fit justify-between w-[150px]">
                <SocialButton
                    img={insta}
                    alt="Instagram"
                    link="https://www.instagram.com/harvest_athens/"
                />
                <SocialButton
                    img={groupme}
                    alt="GroupMe"
                    link="https://groupme.com/join_group/110213316/inh5ErLR"
                />
            </div>
            <div className="flex justify-end w-full">
                Powered by Baines
            </div>
        </footer>
    );
}