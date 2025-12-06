import Image from "next/image";
import Link from "next/link";
import linkedinLogo from "../../../public/linkedin.png"
import githubLogo from "../../../public/github.png"
import twitterLogo from "../../../public/twitter.png"

export default function Footer() {
    return (
        <footer className="flex justify-between p-2">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl border-b mb-3 pb-2">Valentin Vinel</h1>
            <div className="flex gap-8 justify-center">
              <Image src={linkedinLogo} alt="Logo LinkedIn" className="h-[30px] w-[30px] cursor-pointer"></Image>
              <Image src={githubLogo} alt="Logo Github" className="h-[30px] w-[30px] cursor-pointer"></Image>
              <Image src={twitterLogo} alt="Logo X" className="h-[30px] w-[30px] cursor-pointer"></Image>
            </div>
          </div>
          <nav className="flex flex-col">
              <Link href={'/'}>Système</Link>
              <Link href={'/'}>Résultats</Link>
              <Link href={'/'}>Processus</Link>
              <Link href={'/'}>Contact</Link>
          </nav>
          <div className="flex flex-col">
            <Link href={'/'}>Mentions légales</Link>
            <Link href={'/'}>Politique de confidentialité</Link>
            <Link href={'/'}>Politique de cookies</Link>
          </div>
          
        </footer>
    )
}