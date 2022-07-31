import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Create from "./components/Create";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await axios.get(
        (process.env.REACT_APP_SERVER_URL as string) + "/to-dos"
      );
      setTasks(response.data.tasks);
    };
    getTasks();
  }, []);

  return (
    <div>
      <Header count={tasks.length} />
      <Create />
      <Content tasks={tasks} />
    </div>
  );
}

export default App;

//REACT_APP_SERVER_URL
