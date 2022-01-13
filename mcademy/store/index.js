import { createStore } from "redux";


const dataReducer = (state={authToken:"",number:""},action) =>{

    console.log("inside store");
    if(action.type == "LOG IN")
    {

        console.log(action.accessToken);
        return{
        authToken : action.accessToken,
        number:action.phoneNumber
        }
    }

    if(action.type == "LOG OUT"){
        return{
            authToken : action.accessToken,
            number:action.phoneNumber
            }
    }
    
    return state;
};

const store = createStore(dataReducer);
export default store;