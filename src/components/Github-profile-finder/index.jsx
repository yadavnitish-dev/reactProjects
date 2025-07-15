import React, { useEffect, useState } from "react";
import Profile from "./card.jsx";

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
    <div>
      <div className="flex justify-center mt-10 gap-3">
        <input
          type="text"
          placeholder="Enter Github Profile"
          value={userName}
          className="bg-gray-200 text-black px-5 py-2 rounded-xl"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="bg-violet-500 text-white px-5 py-2 rounded-xl"
          onClick={fetchGithubProfile}
        >
          Search
        </button>
      </div>
      <div>{userData !== null ? <Profile user={userData} /> : null}</div>
    </div>
  );
};

export default GithubProfile;
