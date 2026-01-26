import { IoIosArrowForward } from "react-icons/io";
import popcorn from '@/assets/images/subscribe/popcorn.svg'
import subscribeImg from '@/assets/images/subscribe/Hero-banner.png'

function Subscribe() {
  return(
  <div className="flex justify-center items-center gap-8 p-6 -mt-44 z-10 w-full h-90 xl:w-1292 xl:h-400"
    style={{
      backgroundImage: `url(${subscribeImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <img src={ popcorn } alt="icon" className="h-16 xl:h-20" />
    <div>
      <p className="text-sm xl:text-xl">The Netflix you love for just $6.99.</p>
      <p className="text-sm xl:text-base py-2">Get the Standard with ads plan.</p>
      <div className="flex items-center gap-3">
        <a href="#" className="text-sm xl:text-base text-blue-200 underline">Learn More</a>
        <IoIosArrowForward className="text-blue-200 h-4" />
      </div>
    </div>
  </div>
  )
}

export default Subscribe