import React, { useState } from 'react'
import Modal from './Modal'



const PopUpModal = () => {

    const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-screen flex flex-col items-center gap-6 bg-black text-white'>
        <h1 className='text-5xl font-bold mt-5'>Popup Modal</h1>
        <button onClick={()=>setShowModal(true)} className='bg-violet-500 px-4 py-2 rounded-lg text-lg'>Get the ebook</button>
        {showModal && <Modal onClose={()=>setShowModal(false)}/>}
    </div>
  )
}

export default PopUpModal    
