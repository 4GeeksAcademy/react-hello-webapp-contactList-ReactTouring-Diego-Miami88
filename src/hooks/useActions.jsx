import { useEffect } from "react";
import useGlobalReducer from "./useGlobalReducer";

const useActions = () => {
  const { store, dispatch } = useGlobalReducer();
    
  const callConsolelog = () => {
    console.log(store);
    return
  }
  return {callConsolelog, useEffect}
};
export default useActions;