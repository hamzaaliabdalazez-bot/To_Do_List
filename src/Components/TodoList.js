import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [filter, setFilter] = useState("all");
  const { tasks } = useContext(TaskContext);
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }
    if (filter === "active") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
          marginBottom: 10,
        }}
      >
        <button
          style={{
            backgroundColor: "#8A2BE2",
            border: "none",
            padding: 3,
            borderRadius: 3,
            color: "white",
          }}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          style={{
            backgroundColor: "#8A2BE2",
            border: "none",
            padding: 3,
            borderRadius: 3,
            color: "white",
          }}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          style={{
            backgroundColor: "#8A2BE2",
            border: "none",
            padding: 3,
            borderRadius: 3,
            color: "white",
          }}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
