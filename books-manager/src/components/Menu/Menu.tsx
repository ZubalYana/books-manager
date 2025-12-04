import React from "react";
import "./Menu.css";
import { Logo } from "../Logo/Logo";
import { Search, BookOpen, Heart } from "lucide-react";

type MenuProps = {
    onSelect: (page: string) => void;
    activePage: string;
};

export function Menu({ onSelect, activePage }: MenuProps) {
    return (
        <nav className="Menu bg-blur">
            <Logo />

            <div className="menu-nav">
                <div
                    className={`menu-item ${activePage === "browse" ? "active" : ""}`}
                    onClick={() => onSelect("browse")}
                >
                    <Search size={20} />
                    <span>Browse</span>
                </div>

                <div
                    className={`menu-item ${activePage === "reading" ? "active" : ""}`}
                    onClick={() => onSelect("reading")}
                >
                    <BookOpen size={20} />
                    <span>Reading List</span>
                </div>

                <div
                    className={`menu-item ${activePage === "liked" ? "active" : ""}`}
                    onClick={() => onSelect("liked")}
                >
                    <Heart size={20} />
                    <span>Liked Books</span>
                </div>
            </div>
        </nav>
    );
}
