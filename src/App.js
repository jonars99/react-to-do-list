import React, { useState, useEffect, useCallback }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewToDo from './Components/NewToDo';
import ToDoList from './Components/ToDoList';
import StatusBar from './Components/StatusBar';
import './styles/style.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const checkStatus = (response) => {
    if (response.ok) {
      return response;
    }
    throw new Error('Error: request was a 404 or 500');
  }

  const json = (response) => response.json()

  const fetchTasks = useCallback(() => {
    fetch("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=204")
      .then(checkStatus)
      .then(json)
      .then((response) => {
        setTasks(response.tasks);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 todo-wrapper">
          <div>
            <h4 className="mb-3">My to do list</h4>
            <NewToDo 
              tasks={tasks} 
              setTasks={setTasks} 
              fetchTasks={fetchTasks} 
              checkStatus={checkStatus} 
              json={json} 
              filter={filter} />
            <ToDoList 
              tasks={tasks} 
              key={tasks.id}
              fetchTasks={fetchTasks}
              checkStatus={checkStatus}
              json={json} 
              filter={filter} />
            <StatusBar
              filter={filter}
              setFilter={setFilter} />
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
