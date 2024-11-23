'use client';

import { useRouter } from "next/navigation";
import Avatar from "../Avatar";

const Header = () => {
    const router = useRouter()

    return (
        <div className="w-full z-10">
            <div className="flex flex-row justify-between p-4 text-white">
                <div className="flex flex-col">
                    <div className="text-neutral-900 text-lg">
                        Hello, user
                    </div>
                    <div className="text-neutral-900 opacity-75">
                        Title
                    </div>
                </div>
                <div className="cursor-pointer">
                    <Avatar />
                </div>
            </div>
        </div>
    );
}

export default Header;