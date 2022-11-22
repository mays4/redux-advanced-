import {createStore} from 'redux';
import counterReducer from './counter';
import authReducer from './auth' 
import {configureStore} from '@reduxjs/toolkit'





// const CounterReducer =(state=initialState,action)=>{
//    if(action.type === 'increment'){
//     return {counter : state.counter + 1,
//       showCounter: state.showCounter
   
//    }
//    } if(action.type === 'increase'){
//       return {counter : state.counter + action.amount,
//          showCounter: state.showCounter}
//    }
//    if(action.type === 'decrement'){
//     return {counter : state.counter -1,
//       showCounter: state.showCounter}
//    }
//    if(action.type==='toggle'){
//       return{
//          showCounter: !state.showCounter,
//          counter:state.counter
//       }
//    }
//    return state;
// }
// const store = createStore(CounterReducer);
// const store = createStore(counterSlice);
const store = configureStore({
   // reducer:{
   //    counter: counterSlice.reducer,auth :authSlice.reducer
   // }
   reducer:{
      counter: counterReducer,auth :authReducer
   }
   
   // reducer : counterSlice.reducer
})



export default store;
