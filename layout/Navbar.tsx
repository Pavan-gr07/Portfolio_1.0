'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/skills-icons/github.svg";
import navIcon3 from "../assets/skills-icons/leetcode.svg";
import { Menu, X } from "lucide-react";
import { Button } from '../components/ui/button';
import SocialIcon from './SocialIcon';
import Container from '@/components/custom/Container';

interface Navbar {
    value: string;
}
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value: string): void => {
        setActiveLink(value);
    };

    return (
        <div className={`bg-black/0  fixed w-full top-0 left-0 z-50 py-5 ${scrolled ? "bg-black/80" : ""}`} >
            <Container>
                <div className="flex justify-between  bg-red items-center relative">
                    <a href="/" className="w-[9%]">
                        <img src="/logo.svg" alt="Logo" className="w-full h-auto" />
                    </a>

                    {/* Mobile Toggle Button */}
                    <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-7 items-center">
                        <ul className="flex space-x-9">
                            {['home', 'skills', 'projects'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link}`}
                                        className={`text-lg navbar-link ${activeLink === link ? 'active text-white font-semibold' : 'text-gray-400 font-medium'
                                            } hover:text-white transition duration-200`}
                                        onClick={() => onUpdateActiveLink(link)}
                                    >
                                        {link.charAt(0).toUpperCase() + link.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex space-x-3">
                            <SocialIcon src={navIcon1} alt="linkedIn" link="https://www.linkedin.com/in/pavangr2001/" />
                            <SocialIcon src={navIcon2} alt="github" link="https://github.com/Pavan-gr07" />
                            <SocialIcon src={navIcon3} alt="Leetcode" link="https://leetcode.com/u/pavangr_07/" />
                        </div>

                        <Button className="relative overflow-hidden border rounded-none p-7 cursor-pointer text-white group">
                            <span className="relative z-10 group-hover:text-black transition-colors duration-200 text-xl font-bold">
                                Let's Connect
                            </span>
                            <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                        </Button>
                    </div>

                    {/* Mobile Menu (Dropdown Below Navbar) */}
                    <div
                        className={`lg:hidden text-white absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] bg-black opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            {['home', 'skills', 'projects'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link}`}
                                        className={`text-lg navbar-link ${activeLink === link ? 'active text-white font-semibold' : 'text-gray-400 font-medium'
                                            } hover:text-white transition duration-200`}
                                        onClick={() => {
                                            onUpdateActiveLink(link);
                                            setIsOpen(false); // Close menu on click
                                        }}
                                    >
                                        {link.charAt(0).toUpperCase() + link.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-center space-x-3 py-4">
                            <SocialIcon src={navIcon1} alt="linkedIn" link="https://www.linkedin.com/in/pavangr2001/" />
                            <SocialIcon src={navIcon2} alt="github" link="https://github.com/Pavan-gr07" />
                            <SocialIcon src={navIcon3} alt="Leetcode" link="https://leetcode.com/u/pavangr_07/" />
                        </div>

                        <div className="flex justify-center pb-4">
                            <Button className="relative overflow-hidden border rounded-none p-4 cursor-pointer text-white group">
                                <span className="relative z-10 group-hover:text-black transition-colors duration-200 text-lg font-bold">
                                    Let's Connect
                                </span>
                                <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
