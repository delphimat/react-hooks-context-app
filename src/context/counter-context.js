import React, { useState, createContext } from "react";

// create Context obj
export const CounterContext = createContext();

// create Provider components ( to be consume and subscribe to changes )
export const CounterContextProvider = props => {
  const [count, setCount ] = useState(0);

  return (
      <CounterContext.Provider value={[count, setCount]}>
          {props.children}
      </CounterContext.Provider>
  )
};