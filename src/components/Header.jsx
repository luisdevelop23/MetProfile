import React from 'react'
//*img
import Logo from '../assets/icons/logogreend.svg'
const Header = () => {
  return (
    <div className='w-full flex justify-between justify-items-center my-6   round-3xl bg-fd'>
        <div className='w-1/2 px-10 flex justify-center flex-col gap-y-3'>
            <h1 className='text-3xl nnf-extra-bold prc logo ease-in-out duration-100'>MET PROFILE</h1>
            <p className='text-lg nnf-semi-bold '>es la plataforma ideal para profesionales que desean destacar en línea. Crea y personaliza tu perfil profesional, conecta con oportunidades y expande tu red de contactos de manera efectiva y profesional.</p>
            <button className='gb-prc nnf-bold uppercase py-2 w-1/2 rounded-lg logo ease-linear duration-700'>
                Crear tu perfil
            </button>
        </div>
        <div className='w-1/2  flex justify-center p-4  py-8 rounded-3xl'>
            <img src={Logo} className='w-60 logo ease-in-out duration-1000' alt="" />
        </div>
    </div>
  )
}

export default Header