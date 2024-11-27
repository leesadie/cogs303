'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
    currentUser?: SafeUser | null
    data?: SafeUser
    onAction?: (id: string) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
    data,
    onAction
}) => {
    const router = useRouter();

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={toggleOpen}
                    className="
                        px-3
                        py-2
                        mr-4
                        md:mr-0
                        md:py-1
                        md:px-2
                        lg:p-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                        text-neutral-900
                    "
                >
                    <AiOutlineMenu />
                    <div>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-lg
                        shadow-md
                        w-[10vw]
                        bg-white
                        overflow-hidden
                        right-3
                        top-12
                        text-sm
                        text-neutral-900
                        z-10
                    "
                >
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem 
                                    label="My profile"
                                    onClick={() => {}} //not implementing functionality now
                                />
                                <hr />
                                <MenuItem 
                                    label="Logout"
                                    onClick={() => signOut()}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem 
                                    label="Login"
                                    onClick={loginModal.onOpen}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;