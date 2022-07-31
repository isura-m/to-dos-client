import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await axios.get(
      (process.env.REACT_APP_SERVER_URL as string) + "/to-dos"
    );
    setTasks(response.data.tasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Header count={tasks.length} />
      <Content tasks={tasks} />
    </div>
  );
}

export default App;

//REACT_APP_SERVER_URL
