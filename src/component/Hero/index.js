import React from 'react'
import {motion} from 'framer-motion'
import './index.css'

 const Hero = () => {

const image  = [

  './image/rb.png',
];


  return (
    <div className='hero-container'>
          <h1 className='hero-heading'> Discover Our Delicious Recipes</h1>
          <p className='hero-para'>Enjoy our selection of delicious recipes for various cuisines around the world.</p>
         
          <motion.div
          className='slider-container'
          initial = {{x: "100%"}}
          animate = {{x: "5%"}}
          transition={{type:'spring', stiffness: 200, damping: 20}}

          
          >

         <motion.div
         className='slider'
         drag = "x"
         dragConstraints={{left: 0, right: 0}}

         >
          {
            image.map((image, index) => (
              <motion.img
              src={image}
              alt="recipe"
              key={index}
              drag="x"
              dragElastic={0.8}
              dragMomentum={false}
              dragMomentumLock={true}
              dragBoundaries={{ left: 0, right: 0 }}
              className="rb-image"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              
              
              />


            ))
          }



         </motion.div>


         <button className='prev'>Previous</button>
            <button className='view-recipe'>View Recipes</button>
           
            
          </motion.div>

    </div>
  )
}

export default Hero