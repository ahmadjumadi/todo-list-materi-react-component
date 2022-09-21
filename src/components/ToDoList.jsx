import React from 'react';

// const todos = ["Belajar Fundamental React", "Ngoding Sampe Lemas Kaka"];

const ToDoList = ({propsTodos}) => {
  return (
    <>
      <h3>Listing Todo List</h3>
      <ul>
        {
          propsTodos.map((todo, i) => {
            return (
              <li key={i}>{todo}</li>
            );})
        }
      </ul>
    </>
  );
};

export default ToDoList;
