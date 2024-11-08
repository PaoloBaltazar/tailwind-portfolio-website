import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className='h-lvh grid gap-8 content-center justify-items-center md:grid-cols-2'>
        <div className='text-white text-center content-center md:text-left md:m-16'>
          <p className='font-medium text-lg lg:text-xl'>Hi, my name is</p>
          <h1 className='font-bold text-3xl lg:text-5xl'>Paolo Baltazar,</h1>
          <h1 className='font-bold text-3xl lg:text-5xl mb-8'>front-end developer</h1>

          <p className='text-base mb-8 md:text-lg'>
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
