export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        picture: "",
        id: 1,
        description: "Make the bed",
        background: null,
      },
      
    ],
    contacts: []
  }
}

export default function storeReducer(store, action = {}) { // parameters pass store and action
  switch(action.type){ // this block determines how to update the state based on the "intent"
    case 'add_task':

      const { id,  color, } = action.payload // its extracts id and color form th action.payload

      return {
        ...store, // reducers never modify the existing state directly. Instead, they use the spread operator(...store) to create a shallow copy of the beofre applying updtates.
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo)) // 
      };
    case "update_contacts": // this completly replaces the contacts array in the store with whatever is provided in the action.payload
      return {
        ...store,
        contacts: action.payload
      }
    default:
      throw Error('Unknown action.'); // if a unknown action type is sent, it throws an error. This is a common patter in React's useReducer to catch bugs early.
  }    
}
