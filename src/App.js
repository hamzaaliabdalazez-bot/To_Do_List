import "./App.css";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import ProgressBar from "./Components/ProgressBar";
import TaskFilter from "./Components/TaskFilter";

import { TaskProvider } from "./Context/TaskContext";


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8A2BE2",
    },
    secondary: {
      main: "#00e5ff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskProvider>
        <Container maxWidth="sm">
          <Box
            sx={{
              mt: 6,
              p: 4,
              borderRadius: 3,
              bgcolor: "#1e1e2f",
              boxShadow: "0 0 25px rgba(138,43,226,0.5)",
            }}
          >
            <Header />
            <TodoForm />
            <TaskFilter />
            <ProgressBar />
            <TodoList />
          </Box>
        </Container>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
