'use client';

import { IconType } from "react-icons";

interface ButtonSmProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    outline?: boolean;
    icon?: IconType;
}

const ButtonSm: React.FC<ButtonSmProps> = ({
    label,
    onClick,
    outline,
    icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                relative
                disabled
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-70
                transition
                w-32
                h-9
                text-sm
                ${outline ? 'bg-white' : 'bg-gray-100'}
                ${outline ? 'border-black' : 'border-none'}
            `}
        >
            {Icon && (
                <Icon 
                    size={20}
                    className="
                        absolute
                        left-2
                    "
                />
            )}
            <div className="pl-4">
                {label}
            </div>
        </button>
    );
}

export default ButtonSm;