import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import Card from "./Card"

const containerVar={
    hidden:{
        opacity:0,
        y:-20
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            staggerChildren:0.4
        }
    }
}

const itemVar={
    hidden:{
        opacity:0,
        y:-20
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
        }
    }
}

const Projects = () => {
    
  return (
    <div className="container mx-auto mb-4 mt-6 text-center " id="projects">
        <h1 className="text-3xl mt-20 font-normal mb-4 text-center">Projects</h1>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVar}
        viewport={{once:true}}
        className="flex items-center justify-center md:justify-between gap-[6px] flex-row flex-wrap">
            {
                PROJECTS.map((project,index)=>{
                    return(
                        <>
                        <motion.div key={index} 
                        initial="hidden"
                        whileInView="visible"
                        variants={itemVar}
                        viewport={{once:true}}
                        >
                        <Card
                        image={project.image}
                        title={project.title}
                        subTitle={project.subtitle}
                        link={'#'}/>
                        </motion.div>
                        </>
                    )
                })
            }
        </motion.div>
    </div>
  )
}

export default Projects