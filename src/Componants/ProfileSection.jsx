import ProfileImage from '../assets/robertButcher1.jpg'
import { motion } from 'framer-motion'

export const ProfileSection = () => {
  return (
    <div className="relative flex min-h-screen items-end justify-center" id='hero'>
        <motion.img 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          duration:1.5
        }}
        className="absolute w-full h-full inset-0 object-cover" src={ProfileImage}
        alt=''
        />
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          duration:1.5
        }}
        className='absolute z-10 bg-gradient-to-b from-transparent from-60% to-black inset-0 lg:from-30% ' />
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          duration:1.5,
          delay:1.6
        }}
        className='absolute z-20 max-w-3xl mx-4 pb-20 '>
            <h1 className='md:text-5xl text-2xl tracking-wide uppercase font-bold pb-2 '>Robert Butcher</h1>
            <p className='md:text-2xl text-lg font-semibold '>Full-stack developer with a flair for graphic design.</p>
        </motion.div>
    </div>
  )
}
