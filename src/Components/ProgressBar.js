import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = () => {
  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter((t) => t.completed).length;

  const percent = tasks.length === 0 ? 0 : (completed / tasks.length) * 100;

  return (
    <div style={{ marginTop: 20,color:"white" }}>
      <LinearProgress variant="determinate" value={percent} />
      <p>{Math.round(percent)}% Completed</p>
    </div>
  );
};

export default ProgressBar;
