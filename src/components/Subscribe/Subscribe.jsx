import { IoIosArrowForward } from "react-icons/io";
import popcorn from '@/assets/images/subscribe/popcorn.svg'
import subscribeImg from '@/assets/images/subscribe/Hero-banner.png'

function Subscribe() {
  return(
  <div className="flex justify-center items-center gap-8 p-6 -mt-44 z-10"
    style={{
      backgroundImage: `url(${subscribeImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '1292px',
      height: '400px',
    }}
  >
    <img src={ popcorn } alt="" />
    <div>
      <p className="text-xl">The Netflix you love for just $6.99.</p>
      <p className="py-2">Get the Standard with ads plan.</p>
      <div className="flex items-center gap-3">
        <a href="#" className="text-blue-200 underline">Learn More</a>
        <IoIosArrowForward className="text-blue-200 h-4" />
      </div>
    </div>
  </div>
  )
}

export default Subscribe