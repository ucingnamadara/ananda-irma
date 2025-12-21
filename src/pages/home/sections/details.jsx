function Details(){
    return (
        <div className="bg-surface-cream w-full h-fit max-h-237.5 flex flex-col justify-center items-center py-20 px-4 -z-1 text-brand-dark text-[15px]">
            <img data-animate src="/assets/decorations/frame-decoration-1.svg" alt="Line Decoration" className="absolute max-h-237.5  md:object-none z-0 opacity-0 transition-all duration-800"/>
            <div className="z-1">
                <div className="flex flex-row p-5 gap-3">
                    <div data-animate className="text-right flex flex-col justify-center items-end w-3/5 gap-2 left-animate opacity-0 transition-all duration-800">
                        <p className="font-playfair text-[40px] md:text-[45px] font-bold tracking-tight line-clamp-3 leading-10">Ananda <span className="font-normal">Dana Pratama</span></p>
                        <img src="/assets/decorations/line-orange.svg" alt="Line Divider" className=""></img>
                        <p className="text-[15px] text-forest-dark font-medium">Son of Mr. Eka Dana Pramulia Putra & Mrs. Susi Suryani Elia</p>
                    </div>
                    <img data-animate src="/assets/images/grooms.svg" alt="Ananda Dana Pratama" className="w-2/5 right-animate opacity-0 transition-all duration-800"></img>
                </div>
                <div className="flex flex-row p-5 gap-3">
                    <img data-animate src="/assets/images/brides.svg" alt="Ananda Dana Pratama" className="w-2/5 left-animate opacity-0 transition-all duration-800"></img>
                    <div data-animate className="text-left flex flex-col justify-center items-start w-3/5 gap-2 right-animate opacity-0 transition-all duration-800">
                        <p className="font-playfair text-[40px] md:text-[45px] font-bold tracking-tight line-clamp-3 leading-10">Irmayanti <span className="font-normal">Nur Sabillah</span></p>
                        <img src="/assets/decorations/line-orange.svg" alt="Line Divider" className=""></img>
                        <p className="text-[15px] text-forest-dark font-medium">Daughter of Mr. Ir. Iman Irnaman & Mrs. Suhaeti</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;