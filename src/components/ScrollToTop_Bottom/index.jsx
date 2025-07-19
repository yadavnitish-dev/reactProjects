import React ,{useRef }from 'react'
import UseFetch from '../Custom-UseFetch'

const ScrollToTop_Bottom = () => {

    const {loading, error , data} = UseFetch("https://dummyjson.com/products?limit=100");

    const handleScrollTop =()=>{
        window.scrollTo({
            top : 0, behavior: 'smooth'
        })
    }

    const bottomRef = useRef(null)

    const handleScrollBottom =()=>{
        bottomRef.current.scrollIntoView({behavior: "smooth"})
    }

    


  return (
    <div className='text-center mt-10'>
        <h2 className='text-3xl font-medium'>List of Products</h2>
        <button className='px-3 py-1 text-white bg-violet-500 rounded-xl mt-5 mb-3' onClick={handleScrollBottom}>Scroll to Bottom</button>
        <div>
            {loading? <div>Loading Data !!! Please Wait...</div>: null}
            {error ? <div>{`${error} . Error Occured!!!`}</div>: null}
            {data && data.length ? data.map((item,idx)=><div key={idx}>{item}</div>):null}
        </div>
        <button className='px-3 py-1 text-white bg-violet-500 rounded-xl mb-3 mt-5' onClick={handleScrollTop}>Scroll to Top</button>
        <div ref={bottomRef} className='text-3xl font-medium'>End of product list</div>
    </div>
  )
}

export default ScrollToTop_Bottom