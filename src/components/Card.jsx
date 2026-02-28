import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import useActions from "../hooks/useActions";

export const ContactCard = ({ name, email, phone, address, id }) => {
  const { store, dispatch } = useGlobalReducer();
  const { getContacts } = useActions();

    const deleteContact = async () => { 
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/diego/contacts/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        console.log("error: ", response.status, response.statusText);
        return;
      }
      getContacts(); // Refresh the contact list after deletion
    };

  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      {/* <img src="..." className="card-img-top" alt="...">{}</img> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">{email}</h5>
        <h5 className="card-title">{phone}</h5>
        <h5 className="card-title">{address}</h5>
      </div>
      <div>
        <Link to={`edit-contact/${id}`}><button className="btn btn-primary">Edit</button></Link>
        <button className="btn btn-danger" onClick={() => deleteContact()}>
          Delete
        </button>
      </div>

      <div className="button"></div>
    </div>
  );
};

export default ContactCard;
