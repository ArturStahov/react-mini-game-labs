import { useDispatch, useSelector } from "react-redux";


import { addNumbers, clearNumbers } from "../store/reducers/numbers/numbersReducer";
import { numbersSelector } from '../store/selectors/selectors';

const GamePage = () => {
    const dispatch = useDispatch();
    const numbers = useSelector(numbersSelector);

    return (
        <div>

        </div>
    )
}
export { GamePage }