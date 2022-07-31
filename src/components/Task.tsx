import React from "react";

interface TaskDetails {
  task: string;
  notes: string;
  _id: string;
}
interface TaskProps {
  task: TaskDetails;
}

const Task = (props: TaskProps) => {
  return (
    <div className="content">
      <h2 className="task-name">{props.task.task}</h2>
      <p>{props.task.notes}</p>
      <button>Delete</button>
    </div>
  );
};

export default Task;
