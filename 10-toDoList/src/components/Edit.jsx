import React, { useState } from "react";

function Edit({ editTask, task }) {
  // Use task.task to prefill the current task value
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated task text and task ID
    editTask(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="m-4 font-primary w-full">
      <input
        value={value}
        type="text"
        className="outline-none bg-transparent border border-gray-500
        p-5 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
        placeholder="Update the task"
        onChange={(e) => setValue(e.target.value)} // Update value on change
      />
      <button className="bg-gray-300 border-4 border-black p-2 text-black cursor-pointer rounded ml-2">
        Update Task
      </button>
    </form>
  );
}

export default Edit;
