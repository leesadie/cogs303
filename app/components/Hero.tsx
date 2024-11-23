'use client';

import { useCallback } from "react";

import { inter_bold, inter_med } from "../fonts";

import useLoginModal from "./hooks/useLoginModal";
import LoginModal from "./modals/LoginModal";

const Hero = () => {

    const loginModal = useLoginModal()
    const onLogin = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal])

    return (
        <div className="flex flex-col items-center mt-60 min-h-screen">
            <div className={`text-7xl font-bold text-indigo-700 ${inter_bold.className}`}>
                Welcome
            </div>
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
                onClick={onLogin}
            >
                Login
            </div>
            <div>
                <LoginModal />
            </div>
        </div>
    );
}

export default Hero;