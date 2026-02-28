import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import ContactCard from "../components/Card.jsx";
import { useEffect } from "react";



export const Home = () => { // defined function component Home

	const { store, dispatch } = useGlobalReducer(); 
	const { getContacts } = useActions();
	 // Destrutures a custom action


	const createUser = async () => {
		const response = await fetch(
			"https://playground.4geeks.com/contact/agendas/diego",
			{
				method: "POST",
			},
		);
		if(!response.ok){
			console.log("error: ", response.status, response.statusText);
			getContacts();
			return;
		}
			const data = await response.json();
			console.log(data);
			return data;
	}
	
	const callConsoleLog = () => {
		console.log(store)
	}

	useEffect(() => { 
		createUser(); // this block is a HOOK !! is use to preform 'side effect' such as fetching data form an API 
	}, []);// the empty array ensures this code runs only one idmidiatly after the component firts renders 


	return ( // the root of the container for your components UI 
		<div className="text-center mt-5"> 
		
			<button onClick={() => callConsoleLog()}>Call console.log</button>

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