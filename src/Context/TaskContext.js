import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [actionDialog, setactionDialog] = useState(null);
  const [dialog, setDialog] = useState(null);
  const [editing, setEditing] = useState(false);
  // console.log(tasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (task) => {
    // console.log(task);
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTask = (id, newText, newCategory, newDeadline) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              name: newText,
              category: newCategory,
              deadline: newDeadline,
            }
          : task,
      ),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleComplete,
        editTask,
        setactionDialog,
        actionDialog,
        dialog,
        setDialog,
        editing,
        setEditing,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
