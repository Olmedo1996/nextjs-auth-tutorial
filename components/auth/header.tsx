import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
}

const Header = ({ label }: HeaderProps) => {
    return (
        <div
            className={cn(
                "w-full flex flex-col gap-y-4 items-center justify-center",
                font.className
            )}
        >
            <h1>
                🔒 Auth
            </h1>
            {label}
        </div>
    );
};

export default Header