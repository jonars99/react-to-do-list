import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewToDo from './Components/NewToDo';
import ToDoList from './Components/ToDoList';
import StatusBar from './Components/StatusBar';

function App() {
  return (
    <div>
      <h4>My to do list</h4>
      <NewToDo />
      <ToDoList />
      <StatusBar />
    </div>
  );
}

export default App;
