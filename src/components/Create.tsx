import React, { useState } from "react";

const Create = () => {
  const [createText, setCreateText] = useState("");

  const handleChange = (e: any) => {
    setCreateText(e.target.value);
  };

  return (
    <div className="create">
      <input onChange={handleChange} placeholder="Create New"></input>

      {createText && (
        <div>
          <input placeholder="Notes"></input>
          <button>+</button>
        </div>
      )}
    </div>
  );
};

export default Create;
