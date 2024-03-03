import React, { useState } from 'react';

const NewToDo = (props) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      return;
    }

    const apiUrl = process.env.REACT_APP_TO_DO_API_URL;
    const apiKey = process.env.REACT_APP_TO_DO_KEY;
    fetch(`${apiUrl}/tasks?api_key=${apiKey}`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        task: {
          content: input
        }
      }),
    }).then(props.checkStatus)
      .then(props.json)
      .then((data) => {
        setInput('');
        props.fetchTasks();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <form onSubmit={handleSubmit} id="todo-form" className="d-flex justify-content-between">
      <input
        placeholder="new to do"
        onChange={handleInput}
        value={input}
        id="todo-input"
      ></input>
      <button className="btn add-btn">add</button>
    </form>
  );
}

export default NewToDo;
