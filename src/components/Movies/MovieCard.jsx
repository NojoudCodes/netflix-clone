import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { acclaimedMovies, adultAnimations, animations, inspiring, matchedtoYou, newOnNetflix, onWeekend, topPicks, topTen, watching, youLoveThese } from './moviesData.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function MovieCard({ title, type }) {
  const movieCategories = {
    matched: matchedtoYou,
    new: newOnNetflix, 
    topTen: topTen,
    think: youLoveThese,
    animations: animations,
    inspiring: inspiring,
    watching: watching,
    onWeekend: onWeekend,
    acclaimedMovies: acclaimedMovies,
    topPicks: topPicks,
    adultAnimations: adultAnimations
  }

  const movies = movieCategories[type] || []

  return(
    <div className='pl-3'>
      <p className='text-2xl mb-3.5'>{ title }</p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6.5 },
        }}
        >
        { movies.map((movie) => (
          <SwiperSlide key={ movie.id }>
            <div className="hover:scale-105 transition-transform duration-300 mb-11">
              <div
                className={` h-36 ${ 
                  type === 'topTen'
                  ? 'flex px-10 mx-2.5'
                  : 'block'
                }`}
              >
                <img src={ movie.bgImg }
                alt={ movie.name }
                className={` h-auto z-0 -mr-5 ${
                  type === 'topTen'
                    ? 'block'
                    : 'hidden'
                } `}
                />
                <img 
                  src={ movie.path } 
                  alt={ movie.name } 
                  className="rounded-md w-56 object-cover shadow-lg z-10"
                />
              </div>
              <div 
                className={` 
                  ${ type === 'watching' ? 'block' : 'hidden' } 
                  flex justify-center items-center mt-3`}
              >
                <div className='bg-red-300 w-28 h-1'></div>
                <div className='bg-transparent-white-35 w-10 h-1'></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieCard