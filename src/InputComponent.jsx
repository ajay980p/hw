import { useDispatch } from "react-redux";
import { dataInput } from "./features/receiveSlice";

const InputComponent = () => {

    const dispatch = useDispatch();

    const handleData = (value) => {
        let newValue = parseInt(value, 10);
        dispatch(dataInput(newValue))
    }

    return (
        <div>
            <input onChange={(e) => handleData(e.target.value)} type="number" defaultValue="10" />
        </div>
    );
}

export default InputComponent;
