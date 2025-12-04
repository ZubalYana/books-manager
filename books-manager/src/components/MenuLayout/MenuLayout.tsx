import { ReactNode } from "react";
import "./MenuLayout.css";
import { Menu } from "../Menu/Menu";

type MenuLayoutProps = {
    children: ReactNode;
    activePage: string;
    onSelectPage: (page: string) => void;
};

export function MenuLayout({ children, activePage, onSelectPage }: MenuLayoutProps) {
    return (
        <div className="MenuLayout">
            <Menu activePage={activePage} onSelect={onSelectPage} />
            <div className="content bg-blur">
                {children}
            </div>
        </div>
    );
}
