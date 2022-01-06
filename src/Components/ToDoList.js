import React from 'react';

const ToDoList = (props) => {

  const toDoListy = props.tasks.map((item) =>
    <div key={item.id}>
      <input type="checkbox"></input>
      <p>{item.content}</p>
      <button>delete</button>
    </div>
  );

  return (
    <div className="row">
      <div className="col-12">
        {toDoListy}
      </div>
    </div>
  );
}

export default ToDoList;
