import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import ContactCard from "../components/Card.jsx";
import { useEffect } from "react";



export const Home = () => { // defined function component Home

	const { store, dispatch } = useGlobalReducer() // accesses the global state (store)
	const { callConsolelog } = useActions() // Destrutures a custom action


	const getContact = async () => { // declares the async function, allowing the use of await for a cleaner asychronous code 
		try {
			const resp = await fetch( // starts the HTTPS request awiat pauses execution unitl the server responds with headers 
				'https://playground.4geeks.com/contact/agendas/diego/contacts', // API target 
				{
					method: "GET",
					headers: { "content-type": "application/json" }, // configuration abject specifying a GET request and informing the server to expect/send JSON data
				},
			);
			if (resp.ok) {
				const data = await resp.json() // wait for the response then store un-jsonified
				dispatch({ type: 'update_contacts', payload: data.contacts })
			}
		} catch (error) {
			console.error("error Creating contact Card for:", error);
		};// this block to handle network failures or erros during the request
	}
	
	

	useEffect(() => { 
		getContact(); // this block is a HOOK !! is use to preform 'side effect' such as fetching data form an API 
	}, []);// the empty array ensures this code runs only one idmidiatly after the component firts renders 


	return ( // the root of the container for your components UI 
		<div className="text-center mt-5"> 
			


			<button onClick={() => callConsolelog()}>Call console.log</button>

			{store.contacts.map((contact, index) => ( // react requires a unique prop!!! remember for list of elements to track cahnges efficiently. it priotizes the datebase id, falling back to the array index if necesary
				<ContactCard
				key={contact.id || index}
				name={contact.name}
				email={contact.email}
				phone={contact.phone} // props created || imported from card.jsx
				address={contact.address}
				id={contact.id}
				
			/>))}

		</div>
	);
}; 