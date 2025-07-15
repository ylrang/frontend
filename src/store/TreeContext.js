import React, { createContext, useReducer } from "react";
import treeReducer from "./TreeReducer";

export const TreeContext = createContext();

export const TreeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(treeReducer, []);

  return (
    <TreeContext.Provider value={{ state, dispatch }}>
        {children}
    </TreeContext.Provider>
  );
};
