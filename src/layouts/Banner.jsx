import React from 'react';
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
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