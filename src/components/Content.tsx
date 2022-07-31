import React, { useState } from "react";
import Task from "./Task";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface Task {
  task: string;
  notes: string;
  done: boolean;
  _id: string;
}
interface ContentProps {
  tasks: Task[];
  getTasks: () => Promise<void>;
  setShowDoneTasks: (show: boolean) => void;
  showDoneTasks: boolean;
}
const Content = (props: ContentProps) => {
  return (
    <div>
      <button
        className="toggle-show-done"
        onClick={() => {
          props.setShowDoneTasks(!props.showDoneTasks);
        }}
      >
        Show / Hide Completed Tasks
      </button>

      {props.tasks
        .filter((task) => {
          if (props.showDoneTasks) {
            return true;
          } else {
            return !task.done;
          }
        })
        .map((task) => {
          return <Task key={task._id} task={task} getTasks={props.getTasks} />;
        })}
    </div>
  );
};

export default Content;
