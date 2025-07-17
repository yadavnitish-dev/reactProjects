
import UseFetch from '.'

const UseFetchHook = () => {

    const {loading, error, data} = UseFetch("https://dummyjson.com/products",{})
  return (
    <div>
        {loading? <div>Loading Data !!! Please Wait...</div>: null}
        {error ? <div>{`${error} . Error Occured!!!`}</div>: null}
        {data && data.length ? data.map((item,idx)=><div key={idx}>{item}</div>):null}
    </div>
  )
}

export default UseFetchHook