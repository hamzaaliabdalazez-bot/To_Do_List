import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const TaskFilter = () => {
  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div style={{ marginTop: 10, color: "white" }}>
      <p>
        Tasks: {tasks.length} | Completed: {completed}
      </p>
    </div>
  );
};

export default TaskFilter;
