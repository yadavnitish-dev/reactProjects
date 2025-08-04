import React, { useEffect, useState } from "react";
import Profile from "./card.jsx";
import { Search } from "lucide-react";
import { FcSearch } from "react-icons/fc";

const GithubProfile = () => {
  const [userName, setUserName] = useState("yadavnitish-dev");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGithubProfile = async () => {
    const responce = await fetch(`https://api.github.com/users/${userName}`);
    const result = await responce.json();
    console.log(result);
    if (result) {
      setUserData(result);
      setLoading(false);
      setUserName("");
    }
  };

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  if (loading) {
    return <h1>Loading data... Plese wait!!!</h1>;
  }

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white">
      <h1 className="text-8xl font-medium pt-30">Github Profile Finder</h1>
      <div className=" flex mt-20">
        <input
          type="text"
          placeholder="Enter Github Profile"
          value={userName}
          className=" border-1 border-gray-300 text-gray-300 bg-black px-5 py-2 rounded-l-full outline-none w-[350px]"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-r-full border-1 border-gray-300"
          onClick={fetchGithubProfile}
        >
          <Search />
        </button>
         
      </div>
      <div>{userData !== null ? <Profile user={userData} /> : null}</div>
    </div>
  );
};

export default GithubProfile;
