import React, { useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewToDo from './Components/NewToDo';
import ToDoList from './Components/ToDoList';
import StatusBar from './Components/StatusBar';
import './styles/style.css';

function App() {
  const [tasks, setTasks] = useState([
    {	
      id: 4798,
      content:	"have to do this",
      completed:	false
    },
    {
      id:	4800,
      content:	"to do",
      completed:	false
    },
    {
      id:	4820,
      content:	"asdf",
      completed:	false
    }
  ]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 todo-wrapper">
          <div>
            <h4 className="foo">My to do list</h4>
            <NewToDo />
            <ToDoList key={tasks.id} tasks={tasks} setTasks={setTasks}/>
            <StatusBar />
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
