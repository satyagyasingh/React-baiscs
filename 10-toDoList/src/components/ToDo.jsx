import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function ToDo({ task, deleteTodo, editToDo }) {
  return (
    <div
      className="flex justify-between items-center bg-violet-800 text-white py-3 px-4 
    rounded-md m-4 cursor-pointer"
    >
      <p>{task.task}</p> {/* Display task text */}
      <div className="flex items-center gap-x-4">
        <AiFillEdit className="text-xl" onClick={() => editToDo(task.id)} /> {/* Trigger edit */}
        <BsFillTrashFill
          className="text-xl"
          onClick={() => deleteTodo(task.id)} // Delete task by ID
        />
      </div>
    </div>
  );
}

export default ToDo;
