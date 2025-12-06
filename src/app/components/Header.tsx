import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between h-15 items-center px-10 bg-blue-400 my-2 rounded-3xl text-white">
          <h1 className="font-bold text-2xl">Valentin Vinel</h1>
          <nav className="flex gap-[60px] text-sm">
            <Link href={'#systeme'}>Système</Link>
            <Link href={'#results'}>Résultats</Link>
            <Link href={'#process'}>Processus</Link>
          </nav>
          <div className="px-4 bg-white text-blue-400 h-8 flex items-center rounded-xl text-sm border-2 border-blue-500">
            <Link href={'#contact'}>Prendre rendez-vous</Link>
          </div>  
        </header>
    )
}