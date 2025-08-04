import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="flex flex-col border-1 rounded-xl items-center mt-15 px-60 py-15 gap-1.5">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="h-25 w-25 rounded-full"
      />
      <div className="text-indigo-600 text-2xl underline">
        <a target="_blank" href={`https:/github.com/${user.login}`}>
          {user.login}
        </a>
      </div>
      <div className="flex flex-col items-center gap-2 mt-5 ">
        <div>Repositories : {user.public_repos}</div>
        <div>Followers : {user.followers}</div>
        <div>Following : {user.following}</div>
      </div>
    </div>
  );
};

export default Profile;
