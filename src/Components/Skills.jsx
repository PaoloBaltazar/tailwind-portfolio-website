import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="text-white content-center">
        <div className='justify-items-center mb-8'>
          <div className="border-b-2 border-fuchsia-600">
            <h1 className="font-bold text-3xl mb-3 lg:text-7xl">Skills</h1>
          </div>
          
          <h2 className="font-medium text-lg mt-2 lg:text-xl">These are the technologies I've worked with </h2>
        </div>

        <div className="grid gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          <div className="w-80 h-56 text-center border content-center justify-items-center">
            <h1 className='font-medium text-3xl mb-4'>JavaScript</h1>
            <img className='w-16' src={javascript}/>
          </div>

          <div className="w-80 h-56 text-center border content-center justify-items-center">
            <h1 className='font-medium text-3xl mb-4'>React.js</h1>
            <img className='w-16' src={react}/>
          </div>

          <div className="w-80 h-56 text-center border content-center justify-items-center">
            <h1 className='font-medium text-3xl mb-4'>Python</h1>
            <img className='w-16' src={python}/>
          </div>

          <div className="w-80 h-56 text-center border content-center justify-items-center">
            <h1 className='font-medium text-3xl mb-4'>HTML</h1>
            <img className='w-16' src={html}/>
          </div>

          <div className="w-80 h-56 text-center border content-center justify-items-center">
            <h1 className='font-medium text-3xl mb-4'>CSS</h1>
            <img className='w-16' src={css}/>
          </div>

          <div className="w-80 h-56 text-center border content-center justify-items-center">
            <h1 className='font-medium text-3xl mb-4'>Tailwind</h1>
            <img className='w-16' src={tailwind}/>
          </div>
        </div>
        
        

        
        
      </section>

    </div>
  )
}

export default Skills;