'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Menu, X } from "lucide-react";
import { Button } from '../components/ui/button';
import SocialIcon from './SocialIcon';

interface Navbar {
    value: string;
}
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     }

    //     window.addEventListener("scroll", onScroll);

    //     return () => window.removeEventListener("scroll", onScroll);
    // }, [])

    const onUpdateActiveLink = (value: string): void => {
        setActiveLink(value);
    };

    return (
        <div className="flex justify-between p-5 bg-red">
            <a href="/" className="w-[9%]">
                <img src="/logo.svg" alt="Logo" className="w-full h-auto" />
            </a>
            <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex gap-7 items-center">
                <ul className="flex space-x-9">
                    {['home', 'skills', 'projects'].map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link}`}
                                className={`text-lg navbar-link  ${activeLink === link ? 'active text-white-500 font-semibold' : 'text-gray-400 font-medium'} hover:text-white transition duration-200`}
                                onClick={() => onUpdateActiveLink(link)}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex space-x-3">
                    <SocialIcon src={navIcon1} alt="linkedIn" />
                    <SocialIcon src={navIcon2} alt="facebook" />
                    <SocialIcon src={navIcon3} alt="Leetcode" />
                </div>
                <Button className="relative overflow-hidden border rounded-none p-7 cursor-pointer text-white group">
                    <span className="relative z-10 group-hover:text-black transition-colors duration-200 text-xl font-bold">
                        Let's Connect
                    </span>
                    <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                </Button>

            </div>
        </div>
    );
};
