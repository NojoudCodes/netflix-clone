import ButtonOutline from "../Buttons/ButtonOutline"
import LinksCard from "../Links/LinksCard"

import { IoLanguage } from "react-icons/io5";

function Footer() {
  return(
    <footer className="bg-black text-gray-400 py-12 px-5 lg:px-10 mt-32">
      <div className="flex gap-1 mb-8">
        <p>Questions? Call </p>
        <a href="#" className="underline">1-844-505-2993</a>
      </div>
      <LinksCard />
      <ButtonOutline 
        style='flex items-center gap-1.5 bg-transparent-black-60 text-sm font-semibold py-2 px-5 mt-6' 
        btn='English'
        icon={ IoLanguage }
      />
    </footer>
  )
}

export default Footer