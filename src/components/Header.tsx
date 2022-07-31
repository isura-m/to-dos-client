import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface HeaderProps {
  count: number;
}

const Header = (props: HeaderProps) => {
  const handleClick = () => {
    console.log("Add Icon");
  };
  return (
    <div className="header">
      <h1>To-Dos</h1>
      <h1 className="add">
        <AddCircleIcon onClick={handleClick} fontSize="large" />
      </h1>
    </div>
  );
};

export default Header;
