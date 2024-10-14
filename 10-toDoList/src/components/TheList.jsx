import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import Edit from "./Edit"; // Import Edit component

function TheList() {
  const [todoValue, setTodo] = useState([]);

  // Create a new task
  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  // Delete a task by id
  const deleteTOdo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  // Toggle edit mode for a task
  const editToDo = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Edit the task text and exit edit mode
  const editTask = (task, id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="container bg-gray-700 mt-20 p-8 w-auto">
      <Form createTodo={createTodo} />
      {todoValue.map((obj) =>
        obj.isEditing ? (
          // Render Edit component when editing
          <Edit editTask={editTask} task={obj} key={obj.id} />
        ) : (
          // Render ToDo component when not editing
          <ToDo
            task={obj}
            deleteTodo={deleteTOdo}
            key={obj.id}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
}

export default TheList;
