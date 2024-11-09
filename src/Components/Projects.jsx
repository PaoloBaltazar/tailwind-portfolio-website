import littleLemon from '../assets/little-lemon.png'
import todolist from '../assets/todo-list.png'
import weatherApp from '../assets/weather-app.png'

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-16">
      <section className="text-white content-center">
        <div className='justify-items-center mb-8'>
          <div className="border-b-2 border-fuchsia-600">
            <h1 className="font-bold text-3xl mb-3 lg:text-6xl">Projects</h1>
          </div>
          
          <h2 className="font-medium text-lg mt-2 lg:text-xl">Check out some of my work right here</h2>
        </div>

        <div className="grid gap-8 justify-items-center mb-16 md:grid-cols-2 lg:grid-cols-3">
          <div class="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={littleLemon} class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 class="font-serif text-2xl font-bold text-white">Little Lemon Restaurant</h1>
              <h1 class="text-sm font-light text-gray-200">React - HTML - CSS</h1>
            </div>
          </div>

          <div class="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={todolist} class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 class="font-serif text-2xl font-bold text-white">Todo-List App</h1>
              <h1 class="text-sm font-light text-gray-200">JavaScript - HTML - CSS</h1>
            </div>
          </div>

          <div class="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={weatherApp} class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 class="font-serif text-2xl font-bold text-white">Weather App</h1>
              <h1 class="text-sm font-light text-gray-200">JavaScript - HTML - CSS</h1>
            </div>
          </div>
        </div>
        
      </section>

    </div>
  )
}

export default Projects;