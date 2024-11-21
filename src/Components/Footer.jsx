import github from '../assets/github-icon.png'
import linkedIn from '../assets/linkedin-icon.png'
import mail from '../assets/mail-icon.png'

const Footer = () => {
  return (
    <div className="pt-20">
      <section className='overflow-x-hidden'>
        <div className="text-white content-center justify-items-center py-12 pt-">

          <div className="bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-600 to-transparent h-[1.5px] w-full mb-8" />
        
          <div className="flex gap-5 mb-4 content-center justify-items-center">
            <img className= 'h-8 cursor-pointer' src={github}/>
            <img className= 'h-8 cursor-pointer' src={linkedIn}/>
            <img className= 'h-8 cursor-pointer' src={mail}/>
          </div>

          <p className='font-primaryRegular text-sm text-center'> 2024 copyright all right reserved</p>
        </div>
        
      </section>
    </div>
  )
}

export default Footer;