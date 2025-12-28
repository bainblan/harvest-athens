"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
    const router = useRouter();

    const handleClick = (path: string) => {
        router.push(path);
    }

    return (
        <nav className="flex w-full justify-center bg-[#5F120C] px-[37px] py-[10px]">
            <div className="flex h-fit justify-between w-[625px]">
                <Button onClick={() => handleClick("/")} name="Home" />
                <Button onClick={() => handleClick("/gospel")} name="Gospel" />
                <Button onClick={() => handleClick("/leadership")} name="Leadership" />
                <Button onClick={() => handleClick("/partners")} name="Partners" />
            </div>
        </nav>
    );
}