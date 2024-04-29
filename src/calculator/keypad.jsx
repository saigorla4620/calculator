import React from 'react'
import Button from './button'

const Keypad = (props) => {
    console.log("keypad",props)
  return (
   <>
   <div className='row'>
    <Button value="7" className="button" onClick={props.onClick}/>
    <Button value="8" className="button" onClick={props.onClick}/>
    <Button value="9" className="button" onClick={props.onClick}/>
    <Button value="+" className="operator" onClick={props.onClick}/>

   </div>
   
   <div className='row'>
    <Button value="4" className="button" onClick={props.onClick}/>
    <Button value="5" className="button" onClick={props.onClick}/>
    <Button value="6" className="button" onClick={props.onClick}/>
    <Button value="-" className="operator" onClick={props.onClick}/>

   </div>
   <div className='row'>
    <Button value="1" className="button" onClick={props.onClick}/>
    <Button value="2" className="button" onClick={props.onClick}/>
    <Button value="3" className="button" onClick={props.onClick}/>
    <Button value="*" className="operator" onClick={props.onClick}/>

   </div>

   <div className="row">
    <Button value="0"  className="button" onClick={props.onClick}/>
    <Button value="C"  className="button" onClick={props.onClick}/>
    <Button value="AC" className="button" onClick={props.onClick}/>
    <Button value="/"  className="operator" onClick={props.onClick}/>
   </div>

   <div className='btn_equal'>
     <Button value="." className="operator" onClick={props.onClick}/>
      <Button value="=" className="equal" onClick={props.onClick} />
   </div>

   </>
  )
}

export default  Keypad