import React from 'react'

const Display = (props) => {
    console.log(props)
  return (
   <>
    <h1 className='display'>{props.data}</h1>
   </>
  )
}

export default Display