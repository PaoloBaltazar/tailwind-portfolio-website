import profile from '../assets/profile.jpg';
import { Spotlight } from "./ui/Spotlight";
import SocialLinks from './SocialLinks'; // Import the SocialLinks component

const Home = () => {
  return (
    <div className="h-screen w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center overflow-x-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-50 md:-top-20"
        fill="white"
      />
      
      <div className="hidden md:block">
        <SocialLinks />
      </div>

      <section className="max-w-7xl mx-auto grid gap-10 content-center justify-items-center md:grid-cols-2">
        <div className="text-white text-center content-center md:text-left md:ml-16">
          <p className="font-primaryRegular text-lg md:text-md lg:text-xl">Hi, my name is</p>
          <h1 className="font-primaryBold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Paolo Baltazar,</h1>
          <h1 className="font-primaryBold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8">Web Developer</h1>

          <p className="font-primaryRegular mb-8 lg:text-lg">
            Aspiring web developer passionate about creating dynamic and responsive websites. I specialize in HTML, CSS, JavaScript, and React, aiming to build efficient and user-friendly applications.
          </p>
          
          <a href="https://tinyurl.com/BaltazarGabrielPaolo-Resume" target="_blank" rel="noopener noreferrer">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Download Resume
              </span>
            </button>
          </a>
        </div>

        <div className="md:m-16 content-center">
          <img className="w-60 rounded-t-full rounded-b-full md:w-full" src={profile} alt="Profile" />
        </div>
      </section>
    </div>
  );
};

export default Home;
