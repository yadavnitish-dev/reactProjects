import React from 'react'

const Suggestions = ({data}) => {
  return (
    <ul>
        {data && data.length ? data.map((item,index)=><li key={index}>{item}</li>) : ""}
    </ul>
  )
}

export default Suggestions