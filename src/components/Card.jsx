import useGlobalReducer from "../hooks/useGlobalReducer"

export const ContactCard = ({name, email, phone, address, id}) => {
   const {store, dispatch} = useGlobalReducer()

    

        return (
            <div className="card" style={{width: 18+"rem"}}>
                {/* <img src="..." className="card-img-top" alt="...">{}</img> */}
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">{email}</h5>
                        <h5 className="card-title">{phone}</h5>
                        <h5 className="card-title">{address}</h5>
                
                    </div>
            </div>
        )
    };

    export default ContactCard;
