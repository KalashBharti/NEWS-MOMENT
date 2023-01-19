import React from 'react'
import spinner from '../images/spinner.gif'
export default function Spinner() {
  return (
    <div className='text-center' style={{marginTop:"20vh"}} >
      <img  src={spinner} alt="" />
    </div>
  )
}
