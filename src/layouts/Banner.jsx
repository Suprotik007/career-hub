import React from 'react';
import { motion } from "motion/react"
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content lg:flex-row-reverse">
    <div className='flex-1'>
        <motion.img
         src={img1}
         animate={{y:[0,290,0]}}
         transition={{duration:8,repeat:Infinity}}
         className='max-w-sm border-s-8 rounded-t-[40px] border-b-8 border-blue-500' alt="" />
    </div>
    <div className='flex-1'>
        <motion.img src={img2}
        animate={{x:[0,290,0]}}
         transition={{duration:7,repeat:Infinity}} className='max-w-sm border-s-8 rounded-t-[40px] border-b-8 border-blue-500' alt="" />
    </div>
    <div>
      <motion.h1
       animate={{ 
        rotate: 360 ,
        transition:{duration:2}
        }} className="text-5xl font-bold">Latest jobs</motion.h1>
      <motion.h1
      initial={{scale:0}}
      animate={{scale:1,transition:{duration:2}}} className="py-6 text-3xl font-bold">
        Remote 
        <motion.span animate={{
            color:['#ff5733','#33ff33','##8a33ff'],
            transition:{duration:2,repeat:Infinity}
            }}>
            
            Jobs</motion.span> 
            For you
      </motion.h1>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;