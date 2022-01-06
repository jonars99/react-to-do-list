import React from 'react';

const NewToDo = () => {
  return (
    <form>
      <input
        placeholder="new to do"
      ></input>
      <button className="btn btn-success">add</button>
    </form>
  );
}

export default NewToDo;
