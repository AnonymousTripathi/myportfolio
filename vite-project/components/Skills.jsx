import React from 'react'
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10,-10],
    transform :{
      duration:duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})
const Skills = () => {
  return (
    <div className='pb-24'>
      <motion.h2 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y: -100}}
       transition={{ duration: 0.5}}
      className='my-20 text-center text-4xl'>Skills</motion.h2>
      <motion.div 
       whileInView={{opacity: 1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{ duration: 1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
         <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        className='p-4'>
          <FaHtml5  className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        className='p-4'>
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        className='p-4'>
          <SiJavascript  className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
        className='p-4'>
          <RiTailwindCssFill  className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />

        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        className='p-4'>
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
        className='p-4' >
          <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        className='p-4'>
          <FaNodeJs  className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        className='p-4'>
          <FaJava className="text-7xl text-orange-400" />
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default Skills
