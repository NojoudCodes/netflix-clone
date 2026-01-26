import { IoLanguage } from "react-icons/io5";

import heroImg from '@/assets/images/homepage/Hero-img.jpg'
import logo from '/logo.svg'
import Button from '@/components/Buttons/Button'
import ButtonOutline from '@/components/Buttons/ButtonOutline'
import MembershipForm from "@/components/Membership/MembershipForm"

function Hero() {
  return(
    <div className='p-10 w-full h-768 xl:h-screen' 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.98)), url(${heroImg})`, 
        backgroundSize: 'cover', 
      }}>
      <div className="flex justify-between">
        <div>
          <img src={ logo } alt='logo' />
        </div>
        <div className="flex gap-5 h-fit">
          <ButtonOutline 
            style='hidden xl:flex items-center gap-1.5 bg-transparent-black-60 text-sm font-semibold py-2 px-5' 
            btn='English'
            icon={ IoLanguage }
          />
          <Button 
            path='/profiles'
            style='text-sm font-semibold py-2 px-5' 
            btn='Sign in'
          />
        </div>
      </div>{/** Navbar */}
      <div className="flex flex-col justify-center items-center gap-5 h-full text-center xl:text-left">
        <h1 className="text-3xl xl:text-5xl font-bold">Unlimited movies, TV shows, and more</h1>
        <h5 className="text-xl xl:text-2xl">Watch anywhere. Cancel anytime.</h5>
        <MembershipForm />
      </div>{/** hero section */}
    </div>
  )
}

export default Hero