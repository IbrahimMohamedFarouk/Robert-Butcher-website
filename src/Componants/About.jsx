import { motion } from "framer-motion"


export const About = () => {
  return (
    <div className="container mx-auto mb-4" id="about">
        <h2 className="flex items-center justify-center text-2xl tracking-wide pt-8 pb-4">About</h2>
        <motion.h3 
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{
          duration:1
        }}
        viewport={{once:true}}
        className="flex items-center justify-center text-2xl px-2 md:text-6xl tracking-normal font-semibold uppercase pb-4">I create dynamic, responsive websites that blend creativity with efficiency
        </motion.h3>
        <motion.p
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{
          duration:1
        }}
        viewport={{once:true}}
        className="text-lg md:text-2xl px-2">Hello! Im Robert Butcher, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I m an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I m developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.</motion.p>
    </div>
  )
}
