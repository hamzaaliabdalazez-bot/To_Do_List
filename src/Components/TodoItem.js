import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const TodoItem = ({ task }) => {
  const { deleteTask, toggleComplete, editTask } = useContext(TaskContext);

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.name);

  const handleEdit = () => {
    editTask(task.id, text);
    setEditing(false);
  };

  return (
    <Card
      sx={{
        mb: 2,
        bgcolor: task.completed ? "#003300" : "#2b2b40",
      }}
    >
      <CardContent sx={{display:"flex" , justifyContent:"space-between"}}>
        <Stack direction="column" spacing={1} mt={2}>
          {editing ? (
            <TextField
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <Typography
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </Typography>
          )}
          <Typography variant="body2">Category: {task.category}</Typography>
          <Typography variant="body2">Deadline: {task.deadline}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={2}>
          <Button
            variant="contained"
            color="success"
            onClick={() => toggleComplete(task.id)}
          >
            Done
          </Button>
          {editing ? (
            <Button onClick={handleEdit}>Save</Button>
          ) : (
            <Button onClick={() => setEditing(true)}>Edit</Button>
          )}
          <Button color="error" onClick={() => deleteTask(task.id)}>
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
