import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface TaskDetails {
  task: string;
  notes: string;
  done: boolean;
  _id: string;
}
interface TaskProps {
  task: TaskDetails;
  getTasks: () => Promise<void>;
}

const Task = (props: TaskProps) => {
  const [taskName, setTaskName] = useState(props.task.task);
  const [taskNotes, setTaskNotes] = useState(props.task.notes);
  const [showModal, setShowModal] = useState(false);
  const [done, setDone] = useState<boolean>(props.task.done);

  useEffect(() => {
    const markAsDone = async () => {
      try {
        await axios.put(
          (process.env.REACT_APP_SERVER_URL as string) +
            "/to-dos/" +
            props.task._id +
            "/done",
          { done }
        );
      } catch (err) {
        console.log(err);
      }
    };
    markAsDone();
  }, [done]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        (process.env.REACT_APP_SERVER_URL as string) +
          "/to-dos/" +
          props.task._id
      );
      setShowModal(false);
      props.getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        (process.env.REACT_APP_SERVER_URL as string) +
          "/to-dos/" +
          props.task._id,
        {
          task: taskName,
          notes: taskNotes,
        }
      );
      setShowModal(false);
      props.getTasks();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="content">
        <h2 className="task-name">
          <Checkbox
            checked={done}
            onChange={(e: any) => {
              setDone(e.target.checked);
            }}
          />
          <span
            onClick={() => {
              setShowModal(true);
            }}
            className={done ? "done" : ""}
          >
            {taskName}
          </span>
        </h2>
        <p className="notes">{taskNotes}</p>
        <div className="icons"></div>
      </div>

      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Task
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <TextField
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
                label="Task"
                value={taskName}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <TextField
                onChange={(e) => {
                  setTaskNotes(e.target.value);
                }}
                label="Notes"
                value={taskNotes}
              />
            </FormControl>
            <Button
              sx={{ mt: 2 }}
              color="error"
              variant="contained"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              sx={{ mt: 2, ml: 1 }}
              variant="outlined"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Task;
