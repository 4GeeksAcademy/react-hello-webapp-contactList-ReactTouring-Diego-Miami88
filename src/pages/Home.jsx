import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import contactCard from "../components/Card.jsx";



export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
	const {callConsolelog}= useActions()
  const getContact = async () => {
	try {
		const resp = await fecth(
			'https://playground.4geeks.com/contact/agendas/diego/contacts',
			{
				method: "GET",
				headers: {"content-type": "application/json"},
			},
		);
		if (resp.ok){
			const data = await resp.json() // wait for the response then store un-jsonified
		}
	}catch(error){
		console.error("error Creating contact Card for:",error);
	};
  }


	return (
		<div className="text-center mt-5">
			<h1>{contactCard}</h1>
			

				<button onClick={()=>callConsolelog()}>Call console.log</button>
				
		</div>
	);
}; 