import React, { useEffect, useState } from 'react'

const UseFetch = (url, options={}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async()=>{
        try {
            setLoading(true);
            const response = await fetch(url, {});
            const result = await response.json();
            const data = result.products.map(item=> item.title);
            console.log(data);
            setData(data);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[url])


  return (
    {loading, error , data}
  )
}

export default UseFetch