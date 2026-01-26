import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// TMDB requires a base URL for images
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

function MovieCard({ title, type }) {
  const [movies, setMovies] = useState([])
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const endpoints = {
        matched: 'movie/popular',
        new: 'movie/now_playing',
        topTen: 'trending/movie/day',
        topPicks: 'movie/top_rated',
      }

      const category = endpoints[type] || 'movie/popular'
      
      try {
        const response = await fetch(`https://api.themoviedb.org/3/${category}?api_key=${apiKey}`)
        const data = await response.json()
        setMovies(data.results || [])
      } catch (error) {
        console.error("Failed to fetch movies:", error)
      }
    }

    fetchMovies()
  }, [type])

  return (
    <div className='pl-3'>
      <p className='text-2xl mb-3.5'>{title}</p>
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
        {(type === 'watching' ? movies.slice(0, 4) : movies).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="hover:scale-105 transition-transform duration-300 mb-11">
              <div className={`h-36 ${type === 'topTen' ? 'flex px-10 mx-2.5' : 'block'}`}>
                <img 
                  src={`${IMG_PATH}${movie.backdrop_path}`}
                  alt={movie.title}
                  className={`h-auto z-0 -mr-5 ${type === 'topTen' ? 'block' : 'hidden'}`}
                />
                <img 
                  src={`${IMG_PATH}${movie.poster_path}`} 
                  alt={movie.title} 
                  className="rounded-md w-56 h-full object-cover shadow-lg z-10"
                />
              </div>
              
              <div className={`${type === 'watching' ? 'block' : 'hidden'} flex justify-center items-center mt-3`}>
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