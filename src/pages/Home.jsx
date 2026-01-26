import FAQ from "@/components/FAQ/FAQ"
import Hero from "@/components/Hero/Hero"
import ProgramCard from "@/components/Programs/ProgramCard"
import Subscribe from "@/components/Subscribe/Subscribe"

import img01 from '@/assets/images/programs/01.jpg'
import img02 from '@/assets/images/programs/02.png'
import img03 from '@/assets/images/programs/03.jpg'
import img04 from '@/assets/images/programs/04.jpg'

import Footer from "@/components/Footer/Footer"

function Home() {
  return(
    <div>
      <Hero />
      <Subscribe />
      <div>
        <ProgramCard 
          title='Enjoy on your TV'
          paragraph='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
          img={ img01 }
          styleOne= 'xl:order-1'
          styleTwo= 'xl:order-2'
          style='py-3'
        />
        <ProgramCard 
          title='Enjoy on your TV'
          paragraph='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
          img={ img02 }
          styleOne= 'xl:order-2'
          styleTwo= 'xl:order-1'
          style='py-3'
        />
        <ProgramCard 
          title='Enjoy on your TV'
          paragraph='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
          img={ img03 }
          styleOne= 'xl:order-1'
          styleTwo= 'xl:order-2'
          style='py-3'
        />
        <ProgramCard 
          title='Enjoy on your TV'
          paragraph='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
          img={ img04 }
          styleOne= 'xl:order-2'
          styleTwo= 'xl:order-1'
          style='py-3'
        />
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home