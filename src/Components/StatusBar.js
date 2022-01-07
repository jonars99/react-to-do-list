import React from 'react';

const StatusBar = (props) => {
  
  const toggleFilter = (e) => {
    props.setFilter(e.target.name);
  }

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-evenly status-bar">
        <label>
          <input type="checkbox" name="all" checked={props.filter === "all"} onChange={toggleFilter} /> all
        </label>
        <label>
          <input type="checkbox" name="active" checked={props.filter === "active"} onChange={toggleFilter} /> active
        </label>
        <label>
          <input type="checkbox" name="completed" checked={props.filter === "completed"} onChange={toggleFilter} /> completed
        </label>
      </div>
    </div>
  );
}

export default StatusBar;
