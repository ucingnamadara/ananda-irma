import Button from "../../../components/button";

function PlaceInformation() {
    return (
        <div className="bg-surface-cream w-full flex flex-col justify-center items-center py-6 px-4 -z-1 text-brand-dark text-[15px] gap-10">
            <img src="/assets/decorations/house-vector.svg" alt="Leaf Decoration" className=""/>
            <div className="">
                <h1 data-animate className="text-[32px] font-semibold opacity-0 transition-all duration-800">Grand Pacific Hotel</h1>
                <p data-animate className="text-[15-x] opacity-0 transition-all duration-800">Jl. Pasir Kaliki No.100, Pasir Kaliki, Kec. Cicendo, Kota Bandung, Jawa Barat 40172</p>
            </div>
            <Button className = "text-surface-cream bg-brand-dark" label="View Location" href="https://maps.app.goo.gl/4opv1u3iWbRF6TZv8"/>
            <img src="/assets/images/map-design.svg" alt="Leaf Decoration" className=""/>
        </div>
    )
}

export default PlaceInformation;