import github from '../assets/github-icon.png'
import linkedIn from '../assets/linkedin-icon.png'
import mail from '../assets/mail-icon.png'

const Footer = () => {
  return (
    <div className="border-t border-white/[0.2]">
      <section>
        <div className="text-white justify-items-center py-16">
          <h1 className='font-primaryBold text-4xl mb-8'> GPB </h1>

          <div className="flex gap-5 mb-8">
            <img className= 'h-10 cursor-pointer' src={github}/>
            <img className= 'h-10 cursor-pointer' src={linkedIn}/>
            <img className= 'h-10 cursor-pointer' src={mail}/>
          </div>

          <p className='font-primaryRegular text-sm'> 2024 copyright all right reserved</p>
        </div>
        
      </section>
    </div>
  )
}

export default Footer;