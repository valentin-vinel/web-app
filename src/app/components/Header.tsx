"use client"

import { useState } from "react";
import HoverSlideButton from "./HoverSlideButton";
import menu from "../../../public/menu.png"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="mb-6 md:mb-8 rounded-xl text-white relative overflow-hidden header-bg">
          <span className="absolute w-full h-2 bg-linear-to-r from-[#14b9b1] via-[#004ad4] to-white/80 blur top-1/2"></span>
          <div className="flex justify-between h-12 items-center px-4 md:px-10 header-bg rounded-xl">
            <Link href={"/"} className="z-1">
              <h1 className="font-bold text-xl lg:text-2xl z-1">Valentin Vinel</h1>
            </Link>
            <nav className="hidden md:flex gap-[60px] text-sm">
              <HoverSlideButton href={'/#systeme'}>Système</HoverSlideButton>
              {/* <HoverSlideButton href={'#results'}>Résultats</HoverSlideButton> */}
              <HoverSlideButton href={'/#process'}>Processus</HoverSlideButton>
              <HoverSlideButton href={'/#projets'}>Projets</HoverSlideButton>
            </nav>
              <HoverSlideButton 
                href="https://calendly.com/contact-valentin-vinel/30min"
                className="hidden md:block px-4 border-2 border-blue-500 bg-white text-sky-700  rounded"
              >
                Prendre rendez-vous
              </HoverSlideButton>

              {/* Burger button (mobile only) */}
              <button type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden">
                {open ? '✕' : 
                  <Image 
                  src={menu}
                  alt="Icone menu"
                  className="w-6 h-6"
                  />
                }
              </button>
            </div>
            

            {open && (
              <div className="flex flex-col gap-4 px-10 py-4 md:hidden text-white rounded-xl mt-2">
                <HoverSlideButton href={'/#systeme'} onClick={() => setOpen(false)}>Système</HoverSlideButton>
                <HoverSlideButton href={'/#process'} onClick={() => setOpen(false)}>Processus</HoverSlideButton>
                <HoverSlideButton href={'/#projets'} onClick={() => setOpen(false)}>Projets</HoverSlideButton>
                <HoverSlideButton 
                  href="https://calendly.com/contact-valentin-vinel/30min"
                  className="px-4 border-2 border-blue-500 bg-white text-sky-700 rounded mb-2"
                  onClick={() => setOpen(false)}
                >
                  Prendre rendez-vous
                </HoverSlideButton>
              </div>
            )}
        </header>
    )
}