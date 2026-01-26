
import accountOne from '@/assets/images/who-is-watching/01.jpg'
import accountTwo from '@/assets/images/who-is-watching/02.jpg'
import accountThree from '@/assets/images/who-is-watching/03.jpg'
import accountFour from '@/assets/images/who-is-watching/04.jpg'
import plusIcon from '@/assets/images/who-is-watching/CirclePlus.svg'


function WhoIsWatching() {
  return(
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-5xl'>Who’s watching?</h2>
      <div className='flex flex-wrap xl:flex-row justify-center xl:justify-start items-center gap-6 mt-8'>
        <div className='cursor-pointer'>
          <a href='/account'>
            <img src={ accountOne } alt="account avatar" />
          </a>
          <p className='text-sm text-grey-200 mt-3 text-center'>Jennifer</p>
        </div>
        <div className='cursor-pointer'>
          <a href='/account'>
            <img src={ accountTwo } alt="account avatar" />
          </a>
          <p className='text-sm text-grey-200 mt-3 text-center'>Bill</p>
        </div>
        <div className='cursor-pointer'>
          <a href='/account'>
            <img src={ accountThree } alt="account avatar" />
          </a>
          <p className='text-sm text-grey-200 mt-3 text-center'>Alise</p>
        </div>
        <div className='cursor-pointer'>
          <a href='/account'>
            <img src={ accountFour } alt="account avatar" />
          </a>
          <p className='text-sm text-grey-200 mt-3 text-center'>James</p>
        </div>
        <div className='cursor-pointer'>
          <a href='/account'>
            <img src={ plusIcon } alt="plus icon" />
          </a>
          <p className='text-sm text-grey-200 mt-3 text-center'>Add Profile</p>
        </div>
      </div>
      <button className='text-base border border-grey-200 text-grey-200 py-2.5 px-5 mt-16 cursor-pointer'>Manage Profiles</button>
    </div>
  )
}

export default WhoIsWatching