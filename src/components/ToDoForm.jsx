import React, {useState} from 'react';

const ToDoForm = ({propsSubmitHandler }) => {

  const [inputTodo, setInputTodo] = useState("");

  const todoInputOnChangeHandler = (event) => {
    setInputTodo(event.target.value)
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    propsSubmitHandler(inputTodo);
    //kosongan input todo input setelah do klik
    setInputTodo("");
  };

  return (
    <form action='' onSubmit={formSubmitHandler}>
      <div style={
        {
          marginBottom : '0.5em',
        }
      }>
        <label htmlFor="todo-input" style={
          {
            marginRight : '0.5em',
          }
        }>Input Kerjaan Baru :</label>
        { /* berarti untuk input hartus memiliki statu state untuk menampung value dari input */}
        <input 
              type="text" 
              name="todo-input" 
              id="todo-input" 
              className='todo-input' 
              value={inputTodo} 
              onChange={todoInputOnChangeHandler} 
        />
      </div>
      <div>
        <button type="submit">Tambah Todo</button>
      </div>
    </form>
  );
};

export default ToDoForm;
