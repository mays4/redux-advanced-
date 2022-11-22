import classes from './Counter.module.css';
import{useSelector,useDispatch} from 'react-redux';
import {counterActions} from '../store/counter'
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state=> state.counter.showCounter)
  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter())
  };
   const incrementHandler = ()=>{
    dispatch(counterActions.increment())
    //  dispatch({type:'increment'})
   };
   const decrementHandler = ()=>{
    //  dispatch({type:'decrement'})
     dispatch(counterActions.decrement())
   }
   const increaseHandler = ()=>{
    // dispatch({type:'increase',amount:10})
    dispatch(counterActions.increase(10))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}
      </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      
    </main>
  );
};

export default Counter;