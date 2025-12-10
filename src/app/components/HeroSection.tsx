import HoverSlideButton from "./HoverSlideButton";

export default function HeroSection() {
    return (
        <section id="hero" className="text-center flex flex-col gap-6 h-[600px] lg:h-[700px] justify-center items-center mx-auto relative rounded-3xl overflow-hidden w-full hero-m">
          <div className="absolute w-280 h-280 rounded-full border-t-3 translate-y-70 border-t-blue-500 blur-sm"></div>
          <div className="absolute bottom-74 w-full h-0.5 border-blue-600 overflow-hidden blur-xs">
            <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-white via-blue-600 to-white animate-lightSweep"></span>
          </div>
          <div className="relative z-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3">
              <span className="text-xl">Le système complet pour</span> <br /> <span className="font-semibold gradient-text">attirer</span> plus de trafic, <br /> <span className="font-bold gradient-text">capter</span> plus de leads, et <br /><span className="font-bold gradient-text">comprendre</span> ce qui fonctionne.
            </h2>
            <p className="text-sm border-t border-blue-100 pt-2">Je conçois des sites optimisés SEO, pensés pour convertir, et entièrement mesurables, <span className="hidden md:inline"><br /></span> afin que chaque action contribue à votre croissance.</p>
          </div>
          <HoverSlideButton 
            href={"/"} 
            className="w-[200px] rounded border border-sky-700 text-sky-700"
          >
            Réserver un appel
          </HoverSlideButton>
        </section>
    )
}