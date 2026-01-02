function Quran(){
    return (
    <div className="bg-surface-cream w-full h-[75svh] max-h-237.5 flex flex-col justify-center items-center py-20 px-4 -z-1 text-brand-dark text-[15px]">
        <img data-aos="fade-up" data-aos-anchor-placement="center-bottom"  src="/assets/decorations/background-quran.svg" alt="Leaf Decoration" className="absolute h-[75svh] max-h-237.5  md:object-none z-0  "/>
        <img data-aos="fade-up" src="/assets/decorations/bismillah-arabic.svg"></img>
        <p data-aos="fade-up" className="font-medium mb-10 z-1  ">“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”</p>
        
        <div className="justify-center items-center flex flex-col gap-2">
            <img data-aos="fade-up" src="/assets/decorations/flower-v2.svg" className="w-10"></img>
            <h1 data-aos="fade-up" className="font-bold z-1 delay-300 ">(QS. Ar-Rum 21)</h1>
        </div>
    </div>)
}

export default Quran;