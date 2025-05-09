import { DECREMENT, INCREMENT } from "./actions"

const initialState = {
    count:10,
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT:{
            return {...state,count:state.count+1}
        }
        case DECREMENT:{
            return {...state,count:state.count-1}
        }
        default:{
            return state
        }
    }
}

export default CounterReducer;