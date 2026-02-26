import useGlobalReducer from "./useGlobalReducer";

const useActions = () => {
  const { store, dispatch } = useGlobalReducer();
    
  const callConsolelog = () => {
    console.log(store);
    return
  }
  return {callConsolelog}
};
export default useActions;