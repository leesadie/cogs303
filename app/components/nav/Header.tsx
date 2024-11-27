'use client';

import { useRouter } from "next/navigation";
import Avatar from "../Avatar";
import { SafeUser } from "@/app/types";
import UserMenu from "./UserMenu";

interface HeaderProps {
    currentUser?: SafeUser | null
    data?: SafeUser
    onAction?: (id: string) => void;
  }

const Header: React.FC<HeaderProps> = ({
    currentUser,
    data,
    onAction
}) => {
    const router = useRouter()

    return (
        <div className="w-full z-10 bg-white">
            <div className="flex flex-row items-center justify-between p-4 text-white">
                <div className="flex flex-col">
                    <div className="text-neutral-900 text-lg">
                        Hello, {currentUser?.name || ''}
                    </div>
                    <div className="text-neutral-900 opacity-75">
                        {currentUser?.title || ''}
                    </div>
                </div>
                <div className="cursor-pointer">
                    <UserMenu currentUser={currentUser}/>
                </div>
            </div>
        </div>
    );
}

export default Header;