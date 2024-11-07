import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left text-white p-4">
      <div className="flex flex-col items-center lg:items-start lg:w-2/4 w-full mb-6 lg:mb-0">
        <p className="text-base lg:text-lg mb-2 lg:mb-3">
          Hi, my name is
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-3">Paolo Baltazar,</h1>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-10">front-end developer</h1>

        <p className="text-sm lg:text-lg text-center lg:text-left w-full lg:w-3/5 mb-6">
          Aspiring web developer passionate about creating dynamic and responsive websites. I specialize in HTML, CSS, JavaScript, and React, aiming to build efficient and user-friendly applications.
        </p>
        
        <button className="px-4 py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700">
          Resume
        </button>
      </div>

      <div className="flex justify-center lg:justify-end w-full lg:w-1/4">
        <img className="w-60 h-60 lg:w-full lg:h-full rounded-full object-cover" src={profile} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
