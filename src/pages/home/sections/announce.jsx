function Announce(){
    return (
    <div className="bg-surface-cream w-full h-[85svh] max-h-237.5 flex flex-col justify-center items-center py-20 px-4 -z-1 text-brand-dark">
        <img src="/assets/decorations/frame-decoration.svg" alt="Frame Decoration" className="absolute h-[85svh] max-h-237.5 md:object-none z-0 w-23/24 md:w-full"/>
        <div data-animate className={`w-9/12 flex flex-col justify-center items-center space-y-4 text-[13px] md:text-[15px] z-1 opacity-0 transition-all duration-800`}>
            <div className="flex flex-col space-y-0 justify-center items-center font-bold text-[20px] md:text-[24px] ">     
                <h1>Hi,</h1>
                <h1>Bpk. Agus Suryana & Istri</h1>
            </div>
            <p className="font-medium">We’re overjoyed to invite you to our wedding!</p>
            <p className="font-semibold">As we’re planning an intimate celebration, surrounded only by those dearest to us.</p>
            <p className="font-bold">This invitation is extended just to the person(s) named, and we kindly ask that no additional guests be brought.</p>
            <p className="font-medium">Thank you for understanding, and for being such a special part of our story.</p>
            <p className="font-medium">We can’t wait to celebrate this beautiful moment with you!</p>
        </div>
    </div>
    )
}

export default Announce;