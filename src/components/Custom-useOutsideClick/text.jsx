import React, {useRef, useState} from 'react'
import useOutsideClick from '.';

const UseOutsideClickHook = () => {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, ()=>setShowContent(false))

  return (
    <div>
        {showContent ?(
            <div ref={ref} className='text-center mt-20'>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, adipisci!</h1>    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nulla minima, autem optio quibusdam non, repellendus cumque vero facere dolor maiores totam dignissimos quisquam ut recusandae earum ratione harum.</p>
            </div>)
        :(
            <div className='text-center mt-10'><button className="" onClick={()=>setShowContent(true)}>Show Content</button></div>

        )}
    </div>
  )
}

export default UseOutsideClickHook