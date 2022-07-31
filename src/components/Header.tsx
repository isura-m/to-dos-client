import React from "react";

interface HeaderProps {
  count: number;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <h1>To-Dos</h1>
      <h1 className="count">{props.count}</h1>
    </div>
  );
};

export default Header;
