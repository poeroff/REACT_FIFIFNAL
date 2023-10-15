
import shoes from "../../imgfile/shoes.png";
import pants from "../../imgfile/pants.png"
import girl from "../../imgfile/girl.PNG"
import classes from "./Slidershow.module.css";
import React from 'react';

import { motion,  AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Sliderimg from "./Sliderimg";


const Slideshow = () => {
  const [x , setx] = useState(0);
  const [count, setcount] =useState(0)
  const [mouse, setmouse] =useState(false);
  const [stop, setstop] = useState(0);

  const rightHandler = () => {
    if(count == 2){
      setcount(0)
      return
    }
    setTimeout(() => {
      setcount(count+1)
    },500)
  }
  const leftHandler = () =>{
    if(count === 0){
      setcount(2)
      return
    }
    setTimeout(() => {
      setcount(count-1);
      
      
    },500)
  
  }
  const mousein = () =>{
    setmouse(true)

  }
  const mouseout = () =>{
    setmouse(false)
    

  }
  useEffect(() => {
   
      if(mouse === false){
        setTimeout(() =>{
          if(count === 2){
            setcount(0)
            return
          }
          setcount(count+1)
    
        },5000)
      }
    
  },[count,mouse])




  


  return (
    <React.Fragment >
      <AnimatePresence>
      <div className={classes.slider} >
          {count === 0 && <motion.div className={classes.img}  initial = {{opacity: 0, x : 0}} animate={{opacity:1,x : 0}} transition={{duration:0.75}} exit={{opacity:0, x:0}}> <Sliderimg img1 ={shoes} img2={pants} img3={girl}></Sliderimg> </motion.div>}
          {count === 1 && <motion.div className={classes.img}  initial = {{opacity: 0, x : 0}} animate={{opacity:1, x:0}} transition={{duration:0.75}} exit={{ opacity: 0, x: 0 }}> <Sliderimg img1 ={girl} img2={girl} img3={girl}></Sliderimg> </motion.div>}
          {count === 2 && <motion.div className={classes.img}  initial = {{opacity: 0, x : 0}} animate={{opacity:1, x:0}} transition={{duration:0.75}} exit={{ opacity: 0, x: 0 }}> <Sliderimg img1 ={girl} img2={shoes} img3={girl}></Sliderimg> </motion.div>}
      </div>
      </AnimatePresence>
     
       

     
      <div className={classes.button}>
        <button  type ="button" onClick={leftHandler} onMouseOver={mousein} onMouseOut={mouseout} > left </button>
        <p> {count}/17</p>
        <button  type ="button"  onClick={rightHandler} onMouseOver={mousein} onMouseOut={mouseout}> right</button>
      </div>
     
    </React.Fragment>
  )
}

export default Slideshow;