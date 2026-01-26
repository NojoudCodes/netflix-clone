import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

function FaqCard({ title }) {
  const [ isClicked, setIsClicked ] = useState(false)

  const toggleVisibility = () => {
    setIsClicked(!isClicked);
  };

  return(
    <div className='mb-2 cursor-pointer'>
      <div
        className='flex justify-between items-center bg-grey-700 h-20 px-5'
        onClick={toggleVisibility}
      >
        <p className='text-lg lg:text-2xl'>{ title  }</p>
        { isClicked ? <FaMinus className='h-7' /> : <FaPlus className='h-7' />}
      </div>
      <div 
        className={`bg-grey-700 h-auto py-10 px-5 border-t border-t-grey-400 
          ${ isClicked ? 'block' : 'hidden'}`}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nesciunt magnam cum repellendus. Enim reiciendis, neque, perspiciatis deleniti libero aperiam cumque aliquam dicta consequuntur distinctio error sapiente vel voluptate eligendi.</p>
      </div>
    </div>
  )
}


export default FaqCard