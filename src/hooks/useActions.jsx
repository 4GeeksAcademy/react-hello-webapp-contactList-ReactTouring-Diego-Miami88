import { useEffect } from "react";
import useGlobalReducer from "./useGlobalReducer";

const useActions = () => {
  const { store, dispatch } = useGlobalReducer();

  const getContacts = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/contact/agendas/diego/contacts",
    );

    if (!response.ok) {
      console.log("error ', Response.status, response.statusText");
      return;
    }
    const data = await response.json();
    console.log(data.contacts)
    dispatch({ type: "update_contacts", payload: data.contacts});
    return data
  };

  return {getContacts}
};

export default useActions;
