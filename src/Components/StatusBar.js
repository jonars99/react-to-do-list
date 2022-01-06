import React from 'react';

const StatusBar = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-evenly">
        <label>
          <input type="checkbox" name="all" /> all
        </label>
        <label>
          <input type="checkbox" name="active" /> active
        </label>
        <label>
          <input type="checkbox" name="completed" /> completed
        </label>
      </div>
    </div>
  );
}

export default StatusBar;
