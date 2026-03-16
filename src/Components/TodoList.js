import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import TodoItem from "./TodoItem";
import "../App.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const TodoList = () => {
  const [filter, setFilter] = useState("all");
  const { tasks, deleteTask, dialog, setDialog, setEditing } =
    useContext(TaskContext);
  const [task, settask] = useState({});

  
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }
    if (filter === "active") {
      return !task.completed;
    }
    return true;
  });
    const closeDialog = () => setDialog(null);
    const actionDialog = (task) => {
      console.log(task);

      if (dialog === "delete") {
        deleteTask(task.id);
      } else {
        setEditing(false);
      }
      closeDialog();
    };
    const cancleActionDialog = () => setDialog("cancel");
    const deleteActinoDialog = (task) => {
      settask(task);
      console.log(task);
      setDialog("delete");
    };
  

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 15,
            marginBottom: 10,
          }}
          className="category-buttons"
        >
          <button
            style={{
              border: "none",
              padding: 3,
              borderRadius: 3,
              color: "white",
            }}
            className="button-category"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            style={{
              border: "none",
              padding: 3,
              borderRadius: 3,
              color: "white",
            }}
            className="button-category"
            onClick={() => setFilter("active")}
          >
            Not-complete
          </button>
          <button
            style={{
              border: "none",
              padding: 3,
              borderRadius: 3,
              color: "white",
            }}
            className="button-category"
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            cancleActionDialog={cancleActionDialog}
            deleteActinoDialog={deleteActinoDialog}
          />
        ))}
        <Dialog
          open={dialog === "cancel" || dialog === "delete"}
          onClose={closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {dialog === "delete"
              ? "Your Task will be Deleted"
              : "Your Edits will be Undo"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialog === "delete"
                ? "You sure you want to delete your task? This action cannot be undone."
                : "You sure you want to cancel your edits? This action cannot be undone."}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Disagree</Button>
            <Button
              onClick={() => actionDialog(task)}
              autoFocus
              style={{ color: "red" }}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
};

export default TodoList;
