import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

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

interface HeaderProps {
  count: number;
}

const Header = (props: HeaderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskNotes, setTaskNotes] = useState("");
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="header">
      <h1>To-Dos</h1>
      <h1 className="add">
        <AddCircleIcon onClick={handleClick} fontSize="large" />
      </h1>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a Task
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
          <Button sx={{ mt: 2 }} variant="outlined">
            Create
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
