import { useDispatch , useSelector } from "react-redux";

const number = useSelector((state) => state.counter.value);

const dispatch = useDispatch();

const Counter = () => {
    return ( 
        <div>
            <h1>{number}</h1>
        </div>
     );
}
 
export default Counter;