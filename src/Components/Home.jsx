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
          
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Download Resume
            </span>
          </button>
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
