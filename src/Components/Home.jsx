import profile from '../assets/profile.jpg';
import { Spotlight } from "./ui/Spotlight";

const Home = () => {
  return (
    <div className="h-lvh  rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
          
          <button className="px-4 py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700">
            Resume
          </button>
        </div>

        <div className='md:m-16 content-center'>
          <img className="w-60 rounded-t-full rounded-b-full md:w-full " src={profile} alt="Profile"/>
        </div>
      </section>
    </div>
  );
};

export default Home;
