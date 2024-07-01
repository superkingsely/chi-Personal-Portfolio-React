import React, { useState } from 'react'
import '../project-slider/Slider.css'

const Slider = () => {
  const [count,setCount]=useState(0)

    const handleslideright=()=>{
        if(count===0 || count >-200){
    
          setCount(prev=>prev-100)
        }
        // let right:any=slidesref.current
        // console.log(right.style.left='-200%')
      }
      const handleslideleft=()=>{
        // console.log('left',slides)
        if(count<0){
          setCount(prev=>prev+100)
        }
    
      }
  return (
    <section id="projects">
        <div className="section-content">
          <div className="slider mx-auto max-w-[500px] h-[300px] border relative overflow-hidden mt-[10vh]">
            <span className="left z-10 " onClick={() => handleslideleft()}>
              v
            </span>
            <div
              className="slides flex w-[300%] h-[100%] absolute top-0  "
            //   ref={slidesref}
              style={{ left: `${count}%` }}
            >
              <div className="slide1 w-[500px] h-[100%] bg-red-600"></div>
              <div className="slide1 w-[500px] h-[100%] bg-green-600"></div>
              <div className="slide1 w-[500px] h-[100%] bg-blue-600"></div>
            </div>
            <span className="right" onClick={handleslideright}>
              v
            </span>
          </div>
        </div>
      </section>
  )
}

export default Slider