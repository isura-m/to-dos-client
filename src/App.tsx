import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showDoneTasks, setShowDoneTasks] = useState<boolean>(true);

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
      <Header getTasks={getTasks} count={tasks.length} />

      <Content
        getTasks={getTasks}
        tasks={tasks}
        setShowDoneTasks={setShowDoneTasks}
        showDoneTasks={showDoneTasks}
      />
    </div>
  );
}

export default App;

//REACT_APP_SERVER_URL
