import Navbar from "@/components/Navbar/Navbar"
import heroImg from '/images/Hero.jpg';
import heroInfo from '/images/HouseOfNinja.png';
import Button from "@/components/Buttons/Button";
import ButtonOutline from "@/components/Buttons/ButtonOutline";

import { FaPlay } from "react-icons/fa";
import { CiCircleInfo, CiRedo } from "react-icons/ci";
import MovieCard from "@/components/Movies/MovieCard";
import Footer from "@/components/Footer/Footer";

function Account() {
  return(
    <div>
      <header   
        className="h-65vh lg:h-70vh xl:h-100vh overflow-hidden"    
        style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${heroImg})`, 
        backgroundSize: 'cover',
      }}>
        <Navbar />
        <div className="relative pr-10 xl:pr-0 pl-10 py-20 z-0">
          <div className="w-full xl:w-lg h-lg">
            <a href="/">
              <img src={ heroInfo } alt="hero info" className="w-full" />
            </a>
            <p className="text-sm xl:text-lg font-light pt-5">Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.</p>
            <div className="flex items-center gap-5 mt-10">
              <Button 
                btn='Play' 
                icon={ FaPlay } 
                style='flex items-center gap-2 text-sm font-semibold py-2 px-5 bg-white !text-black'
              />
              <ButtonOutline 
                btn='More info' 
                icon={ CiCircleInfo } 
                style='flex items-center gap-2 text-sm font-semibold py-2 px-5 bg-grey-30070 border-0'
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 flex items-center gap-5">
            <div className="border border-grey-10 rounded-full p-2">
              <CiRedo 
                className="text-grey-10 text-xl"
              />
            </div>
            <div className="bg-grey-60060 py-2 px-10 border-l-3 border-l-grey-10">
              <p className="text-sm">TV-14</p>
            </div>
          </div>
        </div>{/** hero section */}
      </header>
      <div className="pt-10">
        <MovieCard
          title='Matched to You'
          type='matched'
        />
        <MovieCard
          title='New on Netflix'
          type='new'
        />
        <MovieCard
          title={`We Think You’ll Love These`}
          type='think'
        />
        <MovieCard
          title='Top 10 movies in the U.S. Today'
          type='topTen'
        />
        <MovieCard
          title='Inspiring Movies'
          type='inspiring'
        />
        <MovieCard
          title='Continue Watching for James'
          type='watching'
        />
        <MovieCard
          title='Watch In One Weekend'
          type='onWeekend'
        />
        <MovieCard
          title='Critically Acclaimed Movies'
          type='acclaimedMovies'
        />
        <MovieCard
          title={`Today's Fresh Picks for You`}
          type='topPicks'
        />
      </div>{/** Movie Cards */}
      <Footer />
    </div>
  )
}

export default Account