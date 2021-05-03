/*
App  level states are initialised and a provider is exported which is used to wrap
the entire application.
*/

import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// initial state
const AlertState = (props) => {
  // global state for alert
  const initialState = null;

  // dispatch type to reduce
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  return (
    <AlertContext.Provider
      value={{
        // value contains any variable that should be available to the entire application
        alert: state, // it's not an object because the entire state was set to null (const initialState = null)
        // setAlert,
      }} // value contains any variable that should be available to the entire application
    >
      {/* because the entire application will be wrap with the provider*/}
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
