
import React from 'react'

const Profile = ({user}) => {
  return (
    <div className="flex flex-col mx-100 border-2 rounded-2xl items-center mt-10 px-5 py-5 gap-1.5">
        <img src={user.avatar_url} alt="avatar" className="h-20 w-20 rounded-full" />
        <div className='text-blue-500 text-2xl'>
          <a target="_blank" href={`https:/github.com/${user.login}`}>{user.login}</a>
        </div>
        <div>Repositories : {user.public_repos}</div>
        <div>Followers : {user.followers}</div>
        <div>Following : {user.following}</div>
      </div>
  )
}

export default Profile