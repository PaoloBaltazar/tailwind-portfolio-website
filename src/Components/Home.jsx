import profile from '../assets/profile.jpg';
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Home = () => {
  return (
    <div className="h-lvh w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-50 md:-top-20"
        fill="white"
      />
      <section className='max-w-7xl mx-auto px-4 grid gap-8 content-center justify-items-center md:grid-cols-2'>
        <div className='text-white text-center content-center md:text-left md:m-8'>
          <p className='font-primaryMedium text-lg md:text-md lg:text-xl'>Hi, my name is</p>
          <h1 className='font-primaryBold text-3xl md:text-5xl lg:text-6xl'>Paolo Baltazar,</h1>
          <h1 className='font-primaryBold text-3xl md:text-5xl lg:text-6xl mb-8'>Software Engineer</h1>

          <p className='font-primaryRegular mb-8 lg:text-lg'>
            Aspiring web developer passionate about creating dynamic and responsive websites. I specialize in HTML, CSS, JavaScript, and React, aiming to build efficient and user-friendly applications.
          </p>
          
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <AceternityLogo />
              <span>Resume</span>
            </HoverBorderGradient>
          </div>
        </div>

        <div className='md:m-16 content-center'>
          <img className="w-60 rounded-t-full rounded-b-full md:w-full " src={profile} alt="Profile"/>
        </div>
      </section>
    </div>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Home;
