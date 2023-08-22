import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

function Counter() {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    console.log(count);

    return (
        <div className="text-center">
            <button onClick={() => dispatch(increment())} className="btn brightness-0">increment</button>
            <br />
            <button onClick={() => dispatch(incrementByValue(3))} className="btn brightness-0">increment by value</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => dispatch(decrement())} className="btn brightness-0">decrement</button>
        </div>
    );
}

export default Counter;