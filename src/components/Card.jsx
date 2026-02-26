import useGlobalReducer from "../hooks/useGlobalReducer"

export const contactCard = () => {
   const {store, dispatch} = useGlobalReducer()

    const contactCard = () => {

        return [
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">{}</img>
                    <div class="card-body">
                        <h5 class="card-title">{}</h5>
                
                    </div>
            </div>
        ]
    }};

    export default contactCard;
