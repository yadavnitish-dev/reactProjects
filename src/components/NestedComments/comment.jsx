


import React from 'react'

function Comment({comment, key}) {
  return (
    <li key={key}>{comment.comment}</li>
  )
}

export default Comment