import React from "react";
import Task from "./Task";

interface Task {
  task: string;
  notes: string;
  _id: string;
}
interface ContentProps {
  tasks: Task[];
}
const Content = (props: ContentProps) => {
  return (
    <div>
      {" "}
      {props.tasks.map((task) => {
        return <Task key={task._id} task={task} />;
      })}
      {/* <Task /> */}
    </div>
  );
};

export default Content;
