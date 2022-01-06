import React, { useState } from 'react';

const NewToDo = (props) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`submitted ${input}`);

    if (!input) {
      return;
    }

    fetch("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=your-key", {
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

  //post to api
  //fetch tasks to update dom

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="new to do"
        onChange={handleInput}
        value={input}
      ></input>
      <button className="btn btn-success">add</button>
    </form>
  );
}

export default NewToDo;
