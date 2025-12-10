import Image from "next/image";
import Link from "next/link";
import linkedinLogo from "../../../public/linkedin.png"
import githubLogo from "../../../public/github.png"
import twitterLogo from "../../../public/twitter.png"
import HoverSlideButton from "./HoverSlideButton";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-8 md:flex-row md:gap-0 justify-between p-8 header-bg rounded-xl text-white relative overflow-hidden">
          <div className="flex flex-col">
            <Link href={"/"} className="z-1">
              <h1 className="font-bold text-3xl border-b mb-3 pb-2 text-center">Valentin Vinel</h1>
            </Link>
            <div className="flex gap-6 justify-center">
              <Link href="https://www.linkedin.com/in/valentin-vinel-a992b21b4/" target="_blank">
                <Image src={linkedinLogo} alt="Logo LinkedIn" className="h-[25px] w-[25px] cursor-pointer"></Image>
              </Link>
              <Link href="https://github.com/valentin-vinel" target="_blank">
                <Image src={githubLogo} alt="Logo Github" className="h-[25px] w-[25px] cursor-pointer"></Image>
              </Link>
              <Link href="https://x.com/__nelv" target="_blank">
                <Image src={twitterLogo} alt="Logo X" className="h-[25px] w-[25px] cursor-pointer"></Image>
              </Link>
            </div>
          </div>
          <nav className="flex flex-col">
              <HoverSlideButton href={'#systeme'}>Système</HoverSlideButton>
              {/* <HoverSlideButton href={'#results'}>Résultats</HoverSlideButton> */}
              <HoverSlideButton href={'#process'}>Processus</HoverSlideButton>
              <HoverSlideButton href={'#projets'}>Projets</HoverSlideButton>
          </nav>
          <div className="flex flex-col">
            <HoverSlideButton href={'/mentions-legales'}>Mentions légales</HoverSlideButton>
            <HoverSlideButton href={'/politique-de-confidentialite'}>Politique de confidentialité</HoverSlideButton>
          </div>
          
        </footer>
    )
}