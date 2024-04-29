import React from 'react'
import { useState } from 'react'
import Display from './display'
import Keypad from './keypad'




const Caluclator = () => {
    const [display,setdisplay]=useState(0)
    
    const HandleBtnClick=(event)=>{
      const current_value = event.target.value
      console.log(current_value)
      if (display === 0){
        setdisplay(current_value)
      }
      else{
        setdisplay(previous=>previous + "" +current_value)
      }
      if (current_value ==  '='){
        
           let result = eval(display)
           setdisplay(result)
      }else if(current_value == "AC"){
        setdisplay(0)
      }
      else if (current_value=='C') {
        const screen_value = display + ''
         if (screen_value.length > 1){
          setdisplay(screen_value.substring(0,screen_value.length-1))

         }
         else{
          setdisplay(0)
         }


      }

    
        
    }
  return (
    <>

    <div className='container'>
    <div className='calc'>
    <Display data={display} />
    <Keypad onClick={HandleBtnClick}/>
    </div>
    </div>
    
    </>
  )
}

export default Caluclator
