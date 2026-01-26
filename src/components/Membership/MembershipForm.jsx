import Button from "../Buttons/Button"

import { IoIosArrowForward } from "react-icons/io";

function MembershipForm() {
  return(
    <div>
      <p className="text-sm lg:text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="pt-5">
        <form className="flex flex-col lg:flex-row gap-3 items-center mt-4">
          <input type="email" 
            placeholder="Email address" 
            className="text-lg w-80 lg:w-96 h-14 border border-grey-200 rounded-md pl-4"
          />
          <Button 
            style='flex items-center gap-2 h-14 px-10 ml-5 text-2xl'
            btn='Get Started'
            icon={ IoIosArrowForward }
          />
        </form>
      </div>
    </div>
  )
}

export default MembershipForm