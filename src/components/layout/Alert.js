import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  // initialise GithubContext
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    // if alert is not null, show the div
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"> {alert.msg}</i>
      </div>
    )
  );
};

export default Alert;

// racf -> functional component
// rce: class based component that exports at the bottom
