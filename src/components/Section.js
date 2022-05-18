import React from 'react'

const Section = () => {
  return (
    <div>
        <div className='educ'>
            <h3 className='anexos'>ANEXOS:</h3>
            <a className="titulo" href="titulo1.png">TITULO</a>
            <a className="acta" href="acta.png">ACTA DE NACIMENTO</a>
            <a className="curp" href="curp.png">CURP</a>
            <a className="cedula" href="cedula.png">CEDULA</a>
        </div>
        <div className='cartasCont'>
        <h3 className='cartas'>CARTAS DE RECOMENDACION:</h3>
        <a className="carta1" href="carta1.pdf">CARTA1</a>
        <a className="carta2" href="carta2.pdf">CARTA2</a>
        </div>
        <div className='experCont'>
        <h3 className='exper'>EXPERIENCIA PROFESIONAL:</h3>
        <p>INSYS-CORP: 2002-2003, lider de proyecto, apoyo en el departamento de ingenieria para la implementación de proyectos de seguridad informática.</p>
        <p className='uba'>Universidad Bancaria de Mexico: 2003-2004 profesor matemáticas y programación, niveles bachillerato y licenciatura.</p>
        <p className='mtm'>MTM-TELECOM: 2004-2007, gerente de proyectos, diseño integral de soluciones para proyectos de telecomunicaciones, configuración y programación de conmutadores.</p>
        <p className='fam'>2007-2021: Gerente en los negocios familiares.</p>
        <p>ACTUALMENTE: tomando cursos de actualización en las pricipales herramientas de programación html, css, javascript, React, Node, Express, MongoDb.</p>
        </div>

    </div>
  )
}

export default Section