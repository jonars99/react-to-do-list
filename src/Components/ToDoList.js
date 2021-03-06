import React from 'react';

const ToDoList = (props) => {

  let toDoListy;
  if (props.tasks.length === 0) {
    toDoListy = 
      <div className="d-flex justify-content-center">
        <p className="fst-italic fw-light">add some tasks!</p>
      </div>
  }
  else {
    toDoListy = props.tasks.filter((todo) => {
      if (props.filter === "all") {
          return true;
      } else if (props.filter === "active") {
          return !todo.completed;
      } else {
          return todo.completed;
      }
    }).map((todo) =>
      <div className="d-flex justify-content-between align-items-center px-2 my-3 todo" key={todo.id}>
        <input type="checkbox" checked={todo.completed} onChange={() => checkTask(todo)}></input>
        <p className="my-2">{todo.content}</p>
        <button className="btn delete-btn" onClick={() => deleteTask(todo)}>X</button>
      </div>
    );
  }

  const checkTask = (todo) => {
    if (!todo.id) {
      return;
    }
    const todoStatus = todo.completed ? 'active' : 'complete';

    fetch((`https://altcademy-to-do-list-api.herokuapp.com/tasks/${todo.id}/mark_${todoStatus}?api_key=your-key`), {
      method: "PUT",
      mode: "cors",
    }).then(props.checkStatus)
      .then(props.json)
      .then((data) => {
        props.fetchTasks();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteTask = (todo) => {
    if (!todo.id) {
      return;
    }

    fetch((`https://altcademy-to-do-list-api.herokuapp.com/tasks/${todo.id}?api_key=your-key`), {
      method: "DELETE",
      mode: "cors",
    }).then(props.checkStatus)
      .then(props.json)
      .then((data) => {
        props.fetchTasks();
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div className="row">
      <div className="col-12 my-2">
        {toDoListy}
      </div>
    </div>
  );
}

export default ToDoList;
