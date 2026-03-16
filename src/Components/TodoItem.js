import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const TodoItem = ({ task, deleteActinoDialog, cancleActionDialog }) => {
  const { toggleComplete, editTask, editing, setEditing } =
    useContext(TaskContext);

  const [text, setText] = useState(task.name);
  const [category, setCategory] = useState(task.category);
  const [deadline, setDeadline] = useState(task.deadline);
  // single dialog state: null | 'cancel' | 'delete'

  const handleEdit = () => {
    editTask(task.id, text, category, deadline);

    setEditing(false);
  };

  return (
    <Card
      sx={{
        mb: 2,
        bgcolor: task.completed ? "#003300" : "#2b2b40",
      }}
      className="task-card"
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Stack direction="column" spacing={1} mt={2}>
              {editing ? (
                <TextField
                  fullWidth
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ fontSize: "45px" }}
                />
              ) : (
                <Typography
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                  style={{ fontSize: "30px" }}
                >
                  {task.name}
                </Typography>
              )}
              {editing ? (
                <TextField
                  select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ fontSize: "25px" }}
                >
                  <MenuItem value="Work">Work</MenuItem>
                  <MenuItem value="Study">Study</MenuItem>
                  <MenuItem value="Personal">Personal</MenuItem>
                </TextField>
              ) : (
                <Typography variant="body2" style={{ fontSize: "25px" }}>
                  Category: {task.category}
                </Typography>
              )}
              {editing ? (
                <TextField
                  type="date"
                  label="Deadline"
                  InputLabelProps={{ shrink: true }}
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  style={{ fontSize: "20px" }}
                />
              ) : (
                <Typography variant="body2" style={{ fontSize: "20px" }}>
                  Deadline: {task.deadline}
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction="column" spacing={1} mt={2}>
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
              {editing ? (
                <Button onClick={cancleActionDialog} color="error">
                  Cancel
                </Button>
              ) : (
                <Button
                  color="error"
                  onClick={() => {
                    deleteActinoDialog(task);
                  }}
                >
                  Delete
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// memoize item so it only re-renders when its task object changes
export default React.memo(TodoItem);
