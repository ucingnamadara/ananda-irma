import ReactHowler from "react-howler";
import Cover from "./sections/cover";
import Welcome from "./sections/welcome";
import { useState } from "react";
import Announce from "./sections/announce";
import Quran from "./sections/quran";
import Details from "./sections/details";
import DateInformation from "./sections/date-information";
import PlaceInformation from "./sections/place-information";
import WeddingGift from "./sections/wedding-gift";
import Footers from "./sections/footer";

function Home(){
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    return(
        <div className="w-full h-full flex items-center justify-center">      
            <ReactHowler src="/assets/songs/background-music.mp3" loop={true} playing={isPlaying} html5={true}></ReactHowler>
            <Cover isOpen={isOpen} setIsOpen={setIsOpen} isPlaying={isPlaying} setIsPlaying={setIsPlaying}></Cover>
            <main className={`bg-surface-cream w-full h-full ${isOpen ? 'block' : 'hidden'}`}>
                <Welcome></Welcome>
                <Announce></Announce>
                <Quran></Quran>
                <Details></Details>
                <DateInformation></DateInformation>
                <PlaceInformation></PlaceInformation>
                <WeddingGift></WeddingGift>
                <Footers></Footers>
            </main>
        </div>
    )
}

export default Home;