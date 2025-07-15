import React from 'react'
import Modal from './Modal'



const PopUpModal = () => {
  return (
    <div className='h-screen flex flex-col items-center gap-6 bg-black text-white'>
        <h1 className='text-5xl font-bold mt-5'>Popup Modal</h1>
        <button className='bg-violet-500 px-4 py-2 rounded-lg text-lg'>Get the ebook</button>
        <Modal/>
    </div>
  )
}

export default PopUpModal    
