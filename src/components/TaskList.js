import React from "react";
import "./TaskList.css";

const TaskList = props => {
  const tab = props.props.tasks;

  const tasks = tab.map((task, index) => {
    return (
      <div key={index} className="task">
        <p className="taskNumber">Task numer {index + 1} </p>
        <p className="taskValue">{task}</p>
      </div>
    );
  });

  return <div className="results">{tasks}</div>;
};
export default TaskList;
