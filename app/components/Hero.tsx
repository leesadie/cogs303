'use client';

import { inter_bold, inter_med } from "../fonts";

import useLoginModal from "../hooks/useLoginModal";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";

import { SafeUser } from "../types";

interface HeroProps {
    currentUser?: SafeUser | null
    data?: SafeUser
    onAction?: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({
    currentUser,
    data,
    onAction
}) => {

    const loginModal = useLoginModal()

    return (
        <div className="flex flex-col items-center mt-60 min-h-screen">
            <div className={`text-7xl font-bold text-indigo-700 ${inter_bold.className}`}>
                Welcome
            </div>
            {!currentUser && (
                <div
                    className={`
                        text-xl 
                        mt-5 
                        px-5 
                        py-2
                        rounded-md 
                        text-neutral-900 
                        bg-gray-100
                        cursor-pointer
                        hover:bg-gray-200
                        transition
                        duration-200
                        ${inter_med.className}`}
                    onClick={loginModal.onOpen}
                >
                    Login
                </div>
            )};
            <div>
                <LoginModal />
                <RegisterModal />
            </div>
        </div>
    );
}

export default Hero;