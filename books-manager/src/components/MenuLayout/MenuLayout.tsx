import { ReactNode } from 'react'
import './MenuLayout.css';
import { Menu } from '../Menu/Menu'

type MenuLayoutProps = {
    children: ReactNode;
}
export function MenuLayout({ children }: MenuLayoutProps) {

    return (
        <div className="MenuLayout">
            <Menu />
            <div className="content bg-blur">
                {children}
            </div>
        </div>
    );
}