import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useTaskFilter } from "../hooks/useTaskFilter";

const TaskFilter = () => {
  const { tasks } = useContext(TaskContext);
  const { counts } = useTaskFilter(tasks, "all");

  return (
    <div style={{ marginTop: 10, color: "white" }}>
      <p>
        Tasks: {counts.total} | Completed: {counts.completed}
      </p>
    </div>
  );
};

export default TaskFilter;
