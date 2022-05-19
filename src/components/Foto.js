import React from 'react'

const Foto = () => {
    
    
    
    
  return (
    <div >
        <div className='mainContainer'>
           <svg><rect></rect></svg>
             <div className='fotoCont'>
                 <img className='styleFoto' onClick={(e)=>{window.open(e.target.src)}} src="miFoto2.png" alt="" />
             </div>
        </div>
    </div>
  )
}

export default Foto