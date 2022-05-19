import React from 'react'

function Nombre() {
  return (
    <div className='nombre'>
        <div className='datosNombre'>
        <h1 className='tituloNombre'>Ramiro Ocampo Rodríguez</h1>
        <h3 className='titulo2Nombre'>Ingeniero en Sistemas Computacionales</h3>
        <h2 className='titulo3Nombre'>ESCOM IPN</h2>
        
        </div>
        <img className='logoIPN' onClick={()=>window.open("https://www.ipn.mx/")} src="logoIPN.png" alt="" />
        <img className='escom' onClick={()=>window.open("https://www.escom.ipn.mx/")}src="escom.png" alt="" />
        
    </div>
  )
}

export default Nombre