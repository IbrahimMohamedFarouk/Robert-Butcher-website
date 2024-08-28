
import logo from '../assets/logo.png'
import {SOCIAL_MEDIA_LINKS} from '../constants'
import {motion} from "framer-motion"

const containerVar={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transtion:{
      duration:0.8,
      staggerChildren:0.5
    }
  }
}

const itemVar={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transtion:{
      duration:0.8,
    }
  }
}

const Footer = () => {
  return (
    <div className="container text-center my-3 mx-auto  w-1/2 " id="footer">
        <div 
        className="flex flex-col justify-between items-center gap-3text">
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transtion={{
              duration:0.5,
              delay:1
            }}className='flex flex-col text-left'>
                <img src={logo} width={100} height={100}/>
                <span className='w-[30px] h-2 bg-yellow-500 mt-2 rounded-md'></span>
            </motion.div>
            <motion.div  
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            className='flex items-center justify-between gap-2 flex-row my-2'>
            {SOCIAL_MEDIA_LINKS.map(link=>(
                <motion.a 
                variants={itemVar}
                key={link.id} href={link.href} className='w-[25px] h-[25px] hover:text-yellow-500'>{link.icon}</motion.a>
            ))}
            </motion.div>
            <p className='text-sm '>Devloped By <span className='text-yellow-500'>Ibrahim Mohamed</span><br></br>All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer