import React, {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import ToDoIncrement from './components/ToDoIncrement';

function App() {

  const [todos, stateTodos] = useState([
    "Belajar Fundamental React", 
    "Ngoding Sampe Lemas Kaka",
    "Coba Sampe Lemas Kaka"
  ]);

  const fungsiPenambahTodos = (todo) => {
    console.log('todo input adalah', todo);
    // berarti kita harus menambahkan arrar baru berasarkan todos yang lama
    stateTodos([...todos, todo]);
  };

  return (
    <div className="App">

      <header>
        <h1>Aplikasi ToDo List Petama</h1>
      </header>

      <section>
        <ToDoIncrement />
      </section>

      <section className="section" style={{ margin: "2em 0em" }}>
        <ToDoForm propsSubmitHandler={fungsiPenambahTodos} />

        { /* Karena akan di kirim todoList gunakan props */}
        <ToDoList propsTodos={todos} />
      </section>

      <footer>
        <h3>Dibuat oleh Ahmad Jumadi &copy; 2022 </h3>
      </footer>
      
    </div>
  );
}

export default App;
