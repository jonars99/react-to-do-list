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
    toDoListy = props.tasks.map((item) =>
      <div className="d-flex justify-content-between my-3" key={item.id}>
        <input type="checkbox" checked={item.completed}></input>
        <p className="my-2">{item.content}</p>
        <button className="btn btn-danger">delete</button>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-12">
        {toDoListy}
      </div>
    </div>
  );
}

export default ToDoList;
