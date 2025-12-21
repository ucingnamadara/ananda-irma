function Quran(){
    return (
    <div className="bg-surface-cream w-full h-[75svh] max-h-237.5 flex flex-col justify-center items-center py-20 px-4 -z-1 text-brand-dark text-[15px]">
        <img src="/assets/decorations/background-quran.svg" alt="Leaf Decoration" className="absolute h-[75svh] max-h-237.5  md:object-none z-0"/>
        <p data-animate className="font-medium mb-10 z-1  opacity-0 transition-all duration-800">“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”</p>
        <h1 data-animate className="font-bold z-1 delay-300 opacity-0 transition-all duration-800">(QS. Ar-Rum 21)</h1>
    </div>)
}

export default Quran;