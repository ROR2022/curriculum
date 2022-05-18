import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar'>
            <h3 className='contact'>Contacto:</h3>
            <a href="https://goo.gl/maps/fWLZdrwmv3k4HYdJA">
            <img className='ubicon' src="ubi.png" alt="" />
                <p className='direc'> 
                    Privada  Orquidea 109-3 Col. Colosio Tampico,Tamps.</p>
            </a>
            <a href="tel:+528332998900">
            <img className='tel' src="telefono.png" alt="" />

                <p className='telefono'> 
                    833-299-8900</p>
            
            </a>
            <a href="https://api.whatsapp.com/send?phone=5218332998900&text=%C2%A1Hola%20saludos!">
                    <img className='wats' src="wats.png" alt="noImg" />
            </a>
            <a href="mailto:rami.ror279@gmail.com">
            <img className='email' src="email.png" alt="" />
                <p className='correo'> 
                    rami.ror279@gmail.com</p>
            </a>
            <h3 className='habil'>Habilidades:</h3>
            <ul className='habilist'>
                <li>Responsable</li>
                <li>Innovador</li>
                <li>Enfocado en Resultados</li>
                <li>Analítico</li>
                <li>Receptivo y alta capacidad de adaptacion a cambios</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar