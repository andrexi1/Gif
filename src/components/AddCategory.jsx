import React, { useState } from "react";

const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <h2>add category</h2>
      {value}
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default AddCategory;
