import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="text-center flex flex-col gap-6 h-[600px] justify-center items-center m-auto hero">
          <div>
            <h2 className="text-4xl mb-2">Le système complet pour <span className="font-bold text-blue-700">attirer</span> plus de trafic, <br /> <span className="font-bold text-blue-700">capter</span> plus de leads, et <span className="font-bold text-blue-700">comprendre</span> ce qui fonctionne.</h2>
            <p className="text-sm border-t border-gray-700 pt-1">Je conçois des sites optimisés SEO, pensés pour convertir, et entièrement mesurables, <br /> afin que chaque action contribue à votre croissance.</p>
          </div>
          <Link 
            href={'/'} 
            className="w-[200px] text-blue-400 border-blue-500 text-center shadow-lg shadow-gray-500/50 h-[30px] flex items-center justify-center border rounded-lg cursor-pointer hover:text-blue-700"
          >
            Réserver un appel
          </Link>
        </section>
    )
}