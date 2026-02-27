import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import ContactCard from "../components/Card.jsx";
import { useEffect } from "react";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const { callConsolelog } = useActions()


	const getContact = async () => {
		try {
			const resp = await fetch(
				'https://playground.4geeks.com/contact/agendas/diego/contacts',
				{
					method: "GET",
					headers: { "content-type": "application/json" },
				},
			);
			if (resp.ok) {
				const data = await resp.json() // wait for the response then store un-jsonified
				dispatch({ type: 'update_contacts', payload: data.contacts })
			}
		} catch (error) {
			console.error("error Creating contact Card for:", error);
		};
	}
	
	

	useEffect(() => {
		getContact();
	}, []);


	return (
		<div className="text-center mt-5">
			


			<button onClick={() => callConsolelog()}>Call console.log</button>

			{store.contacts.map((contact, index) => (
				<ContactCard
				key={contact.id || index}
				name={contact.name}
				email={contact.email}
				phone={contact.phone}
				address={contact.address}
				id={contact.id}
				
			/>))}

		</div>
	);
}; 