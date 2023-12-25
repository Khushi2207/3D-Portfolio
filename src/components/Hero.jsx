import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas'
import { github, linkedin } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl 
      mx-auto ${styles.paddingX} flex flex-row
      items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <a href="https://github.com/Khushi2207" target="_blank">
            <img src={github} alt="github" className='w-12 h-15 object-contains' />
          </a>
          &nbsp;
          <a href="https://www.linkedin.com/in/khushi-gupta-2207/" target="_blank">
            <img src={linkedin} alt="linkedin" className='w-11 h-11 object-contains' />
          </a>
        </div>
        <div className='flex flex-col justify-center
        items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>
            Khushi</span></h1>
            <p className={`${styles.heroSubText} mt-2 
            text-white-100`}>
              Software Developer Engineer at 
              <br className='sm:block hidden'/>
              Truminds Software Systems
            </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-7 bottom-32
      w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl 
          border-4 border-secondary flex justify-center 
          items-start p-2'>
            <motion.div 
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero