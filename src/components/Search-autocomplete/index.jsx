import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

const Autocomplete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick =(event)=>{
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users/?limit=100");
      const result = await response.json();
      const data = result.users.map((user) => user.firstName);

      if (data && data.length) {
        setUsers(data);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        {loading ? (
          <h1>loading data !!! please wait...</h1>
        ) : (
          <input
            type="text"
            placeholder="Enter Username"
            className="px-5 py-3 rounded-xl bg-gray-200 outline-0"
            value={searchParam}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="flex justify-center mt-5">
        {showDropdown ? <Suggestions data={filteredUsers} handleClick = {handleClick}/> : ""}
      </div>
      
    </div>
  );
};

export default Autocomplete;
