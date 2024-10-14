import React, { useState } from "react";

function Form({createTodo}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(value);
        setValue('');
        // Handle the task submission logic here
      };
    const [value,setValue] = useState('');
  return (
    <form onSubmit={handleSubmit} className="m-4 font-primary w-full">
      <input
        value={value}
        type="text"
        className="outline-none bg-transparent border border-gray-500
        p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
        placeholder="Add some task"
        onChange={(e)=>{
            setValue(e.target.value)
            // console.log(e.target.value)
        }}
      />
      <button className="bg-gray-300 border-4 border-black p-2 text-black cursor-pointer rounded ml-2">
        Add Task
      </button>

    </form>
  );
}

export default Form;
