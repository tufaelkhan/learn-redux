import { useSelector } from "react-redux";

function Counter() {
    const count = useSelector((state) => state.counter.count)
    console.log(count);
    return (
        <div className="text-center">
            <button className="btn brightness-0">increment</button>
            <div>
                <h1>0</h1>
            </div>
            <button className="btn brightness-0">decrement</button>
        </div>
    );
}

export default Counter;