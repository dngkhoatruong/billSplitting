import React, { useReducer } from "react";
import Context from "./context";
import reducer, { initState } from "./reducer";

const Provider = ({ children }: any) => {
   const [state, dispatch] = useReducer(reducer, initState);

   return (
      <Context.Provider value={[state, dispatch]}>{
         children
      }</Context.Provider>
   )
};

export default Provider;