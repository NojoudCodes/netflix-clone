import MembershipForm from "../Membership/MembershipForm"
import FaqCard from "./FaqCard"



function FAQ() {
  return(
    <div>
      <div className="p-5 lg:p-32">
        <p className="text-2xl lg:text-5xl font-bold mb-7 text-center">Frequently Asked Questions</p>
        <FaqCard title='What is Netflix?' />
        <FaqCard title='How much does Netflix cost?' />
        <FaqCard title='Where can I watch?' />
        <FaqCard title='How do I cancel?' />
        <FaqCard title='What can I watch on Netflix?' />
        <FaqCard title='Is Netflix good for kids?' />
      </div>
      <div className='flex justify-center px-10 lg:px-0 mt-10'>
        <MembershipForm  />
      </div>
    </div>
  )
}

export default FAQ