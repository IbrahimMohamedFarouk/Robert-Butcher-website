import { TESTIMONIALS } from "../constants"
import { motion } from "framer-motion"


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
      y:-30
  },
  visible:{
      opacity:1,
      y:0,
      transition:{
          duration:1,
      }
  }
}


const Testimonials = () => {
  return (
    <div className="container text-center my-3 mx-auto" id='testimonials'>
        <h3 className="text-3xl mt-20 font-normal mb-4 text-center tracking-wide">What people say</h3>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVar}
        viewport={{once:true}}
        className="flex flex-col gap-2 md:gap-5 justify-center items-center">
          {
            TESTIMONIALS.map((comment,index)=>{
              return(
                <motion.div 
                variants={itemVar}
                key={index} className="flex flex-col md:flex-row justify-between items-center gap-6
                rounded-lg border-[1px] border-[#ddd] px-6 py-3 max-w-[80%]">
                  <a href="#">
                    <img src={comment.image} alt={comment.title} width={70} height={70}  className="rounded-[50%]"/>
                  </a>
                  <div className="flex items-start justify-center flex-col gap-2 text-left">
                    <p className=" text-sm font-light tracking-wide ">``{comment.quote}``</p>
                    <h3 className="text-md font-bold tracking-wide text-yellow-500 ">{comment.name}</h3>
                    <h4 className="text-xl font-light tracking-wide">{comment.title}</h4>
                  </div>
                </motion.div>
              )
            })
          }
        </motion.div>
    </div>
  )
}

export default Testimonials