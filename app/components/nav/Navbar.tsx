'use client';

import { SafeUser } from "@/app/types";
import Header from "./Header";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    return (
        <div>
            <Header currentUser={currentUser}/>
        </div>
    );
}

export default Navbar;