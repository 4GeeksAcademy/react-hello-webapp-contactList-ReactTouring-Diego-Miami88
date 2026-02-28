import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import useActions from "../hooks/useActions";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const { getContacts } = useActions();
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    nameInput: "",
    emailInput: "",
    addressInput: "",
    phoneInput: "",
  });

  const postContact = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://playground.4geeks.com/contact/agendas/diego/contacts",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputValues.nameInput,
          email: inputValues.emailInput,
          phone: inputValues.phoneInput, 
          address: inputValues.addressInput,
        }), //match variable name on inputValues
      },
    );

    if (!response.ok) {
      console.log("error: ", response.status, response.statusText);
      return;
    }

    const data = await response.json();
    getContacts();
    navigate("/");
    return data;
  };

  return (
    <>
      <h1> Add contact</h1>
      <form onSubmit={(e) => postContact(e)}>
        <fieldset>
          <label for="nameInput">name</label>
          <input
            type="text"
            id="nameInput"
            className="form-control"
            value={inputValues.nameInput}
            onChange={(event) =>
              setInputValues({ ...inputValues, nameInput: event.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <label for="emailInput">email</label>
          <input
            type="text"
            id="emailInput"
            className="form-control"
            value={inputValues.emailInput}
            onChange={(event) =>
              setInputValues({ ...inputValues, emailInput: event.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <label for="phoneInput">phone</label>
          <input
            type="text"
            id="phoneInput"
            className="form-control"
            value={inputValues.phoneInput}
            onChange={(event) =>
              setInputValues({ ...inputValues, phoneInput: event.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <label for="addressInput">address</label>
          <input
            type="text"
            id="addressInput"
            className="form-control"
            value={inputValues.addressInput}
            onChange={(event) =>
              setInputValues({ ...inputValues, addressInput: event.target.value })
            }
          />
        </fieldset>
        <div>
          <Link to="/">
            <button className="btn btn-danger"> back home</button>
          </Link>
          <button type="submit" className="btn btn-success ms-2">
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};
