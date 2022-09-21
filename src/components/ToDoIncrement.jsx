// Untuk membuat state harus pake fungsi bawaan react namanya useState
import React,  {useState} from 'react';


{ /* dibawah ini agar reactive harus di ubah dulu dari variabel menjadi state */}
// let counter = 0;
{ /* Perbedaan <state></state> dan props
props = digunakann parsing data ke child/anak komponen (diparsing dari app.js kedalam clild)
state = kalo state hidupnya dalam function sendiri
*/}
const ToDoIncrement = () => {

  //local variabel yang reacttive == state

  // Definisikan State
  // index 0 == nama variabel reactive (state)
  //index 1 == nama fungsi ang digunakan untuk memutasikan (mengganti) variabel reactive
  const [counter, setCounter] = useState(0);

  // Definisikan fungsi yang akan dipanggil / mengghandel onclick
  const buttonTambahCounterOnClickHandler = () => {
    { /* selalu asuumsikan state adalah IMMUTABEL (tidak boleh di re-assign) */}
    // sehingga caranya harus memanggil setCounter
    // counter = counter + 1;
    setCounter (counter + 1);
    {console.log(counter)}
  };

  return (
    <>
      <div style={ { margin: "0.5em 0em"}}>
        { /* belum reactive, agar reactive pake yang namanya State */ }
        { /* State ini sebetulnya akan di return lagi / tampilan nya di render ulang di state */ }
        { /* let counter = 0 , harus diubah menjadi state dulu */}
        { counter }
      </div>
      
      <div >
        { /* button can clicked */ } 
        { /* onclick */ }
        { /* click => onClick */ }
        { /* akan mengarah pada suatu funsi yang dibuat dalam componen nya */ }
        
        <button onClick={buttonTambahCounterOnClickHandler}>Tambah Counter</button>
      </div>
    </>
  );
};

export default ToDoIncrement;
