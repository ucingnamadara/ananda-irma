import ReactHowler from "react-howler";
import Cover from "./sections/cover";
import Welcome from "./sections/welcome";
import { useEffect, useState } from "react";
import Announce from "./sections/announce";
import Quran from "./sections/quran";
import Details from "./sections/details";
import DateInformation from "./sections/date-information";
import PlaceInformation from "./sections/place-information";
import WeddingGift from "./sections/wedding-gift";
import Footers from "./sections/footer";
import { useInvitationInfo } from "../../hooks/useInvitationInfo";
import { useLocation } from "react-router-dom";
import PlayButton from "../../components/playButton";
import Loading from "../../components/loading";
import RsvpSection from "./sections/rsvp";
import AOSProvider from "../../components/aos/aosProvider";
import { findByCode } from "../../data/invitationData";

function Home(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const data = findByCode(queryParams.get('code'));
    return(
        <AOSProvider>
            <div className="w-full h-full flex items-center justify-center"> 
                <ReactHowler src="/assets/songs/background-music.mp3" loop={true} playing={isPlaying} html5={true} volume={0.5}></ReactHowler>
                <Cover isOpen={isOpen} setIsOpen={setIsOpen} isPlaying={isPlaying} setIsPlaying={setIsPlaying} data={data}></Cover>
                <main className={`bg-surface-cream w-full h-full`}>
                    <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}></PlayButton>
                    <Welcome></Welcome>
                    <Announce data={data}></Announce>
                    <Quran></Quran>
                    <Details></Details>
                    <DateInformation></DateInformation>
                    <PlaceInformation></PlaceInformation>
                    {/* <RsvpSection></RsvpSection> */}
                    <WeddingGift></WeddingGift>
                    <Footers></Footers>
                </main>
            </div>
        </AOSProvider>
        
    )
    
    }
    

export default Home;