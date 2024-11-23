'use client';

import { useState, useEffect } from "react";
import { inter_bold, inter_med } from "@/app/fonts";
import { useRouter } from "next/navigation";

interface SidebarProps {
    items: { label: string; path: string }[];
  }

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    const router = useRouter();

    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
    useEffect(() => {
        const savedSelected = sessionStorage.getItem("selectedSidebarItem");
        if (savedSelected) {
            setActiveItem(savedSelected)
        }
    }, []);

    const handleClick = (item: { label: string; path: string }) => {
        setActiveItem(item.label);
        router.push(item.path);
        sessionStorage.setItem("selectedSidebarItem", item.label)
    };

    return (
        <div className={`flex flex-col w-72 ${isSidebarOpen ? 'block' : 'hidden'} bg-gray-100 h-screen`}>
            <ul className="mt-4">
                <div className={`text-lg text-neutral-900 px-8 ${inter_med.className}`}>
                    Company Sales
                </div>
                <hr className="mx-8 mt-2"/>
                {items.map((item) => (
                    <li key={item.label}>
                        <button
                            onClick={() => handleClick(item)}
                            className={`
                                block
                                w-full
                                text-left
                                px-8
                                py-2
                                transition
                                duration-200
                                ${item.label === activeItem ? 'text-indigo-700 bg-white' : 'text-neutral-900 hover:bg-white'}
                            `}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;