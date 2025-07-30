import { useEffect, useState } from "react";

function DragNDrop() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos?limit=5");
      const result = await response.json();

      if (result && result?.todos && result?.todos.length > 0) {
        setLoading(false);
        setTodos(result?.todos);
        console.log(todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center h-screen text-center bg-black text-white items-center">
        Loading data.... Please wait!!!!!
      </div>
    );

  return (
    <div>
      <h1 className="bg-black text-white pt-20 text-8xl text-center">
        Drag N Drop
      </h1>
      <div className="flex flex-col justify-center items-center h-[725px] text-white bg-black">
        <div className="flex bg-green-600 text-2xl h-[600px] text-center">
          <div className="bg-violet-600 w-[500px]">To Do</div>
          <div className="bg-indigo-600 w-[500px]">Completed</div>
        </div>
      </div>
    </div>
  );
}

export default DragNDrop;
