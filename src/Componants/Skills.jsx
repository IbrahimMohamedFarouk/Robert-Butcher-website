import { motion } from "framer-motion"
import { SKILLS } from "../constants"

const containerVar={
    hidden:{
        opacity:0,
        y:20
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.4
        }
    }
}

const itemVar={
    hidden:{
        opacity:0,
        x:-20
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:1,
        }
    }
}

const Skills = () => {
  return (
    <div className='container text-center my-3 mx-auto ' id='skills'>
        <h3 className='text-3xl mt-20 font-normal mb-4 text-center tracking-wide'>Skills</h3>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVar}
        viewport={{once:true}}
        className="mx-2 md:mx-4 bg-gradient-to-b from-zinc-900 to-zinc-950
         rounded-lg px-2 md:p-6 ">
                {
                    SKILLS.map((skill,index)=>{
                        return(
                            <motion.div 
                            variants={itemVar}
                            key={index} className="flex items-center justify-between ">
                                <div className="text-center flex justify-between items-center gap-2 pb-2">
                                    {skill.icon}
                                    {skill.name}
                                </div>
                                <div className="px-4 text-lg border-b-2 border-yellow-500">{skill.experience}</div>
                            </motion.div>
                        )
                    })
                }
        </motion.div>
    </div>
  )
}

export default Skills