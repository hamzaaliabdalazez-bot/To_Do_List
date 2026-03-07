import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";


const TodoForm = () => {
  const { addTask } = useContext(TaskContext);

  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: task,
      deadline: deadline,
      category: category,
      completed: false,
    };
    addTask(newTask);

    setTask("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} mb={3}>
        <TextField
          label="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />

        <TextField
          type="date"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Study">Study</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
        </TextField>

        <Button type="submit" variant="contained">
          Add Task
        </Button>
 
      </Stack>
    </form>
  );
};

export default TodoForm;
