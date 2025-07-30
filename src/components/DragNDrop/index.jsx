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
        const updatedTodos = result.todos.map((todo) => ({
          ...todo,
          status: "inProgress",
        }));
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);

  const handleOnDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const handleOnDrop = (event, status) => {
    const id = event.dataTransfer.getData("id");
    const updatedTodos = todos.filter((todoItem) => {
      if (todoItem.id.toString() === id) {
        todoItem.status = status;
      }
      return todoItem;
    });
    setTodos(updatedTodos);
  };

  const renderTodos = () => {
    const TodoListToRender = {
      inProgress: [],
      completed: [],
    };

    todos.forEach((todoItem) => {
      TodoListToRender[todoItem.status].push(
        <div
          onDragStart={(event) => handleOnDragStart(event, todoItem.id)}
          draggable
          key={todoItem.id}
        >
          <div className="bg-indigo-600 px-4 py-4 m-3 rounded-2xl ">
            {todoItem.todo}
          </div>
        </div>
      );
    });
    return TodoListToRender;
  };

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
        <div className="flex text-2xl h-[600px] text-center">
          <div
            className=" w-[500px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(event) => handleOnDrop(event, "inProgress")}
          >
            <h3 className="mb-10">ToDo</h3>
            {renderTodos().inProgress}
          </div>
          <div
            className="w-[500px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(event) => handleOnDrop(event, "completed")}
          >
            <h3 className="mb-10">Completed</h3>
            {renderTodos().completed}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragNDrop;
