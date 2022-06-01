import {userType} from "../features/reservationSlice";
import * as React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addFoodToCustomer} from "../features/customerSlice";


interface ICustomerOrder {
    user: userType
}

const CustomerOrder: React.FC<ICustomerOrder> = ({user}) => {
    const dispatch = useDispatch();
    const [foodInput, setFoodInput] = useState("")

    const handleOnClickFood = () => {
        if (foodInput) {
            const userOrder = {id: user.id, food: foodInput};
            dispatch(addFoodToCustomer(userOrder))
            setFoodInput("")
        }
    }

    const userFoodOrderedFormatted = user.order.map((food) => <p>{food}</p>)

    return (
        <div className="customer-food-card-container">
            <p>{user.name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {userFoodOrderedFormatted}
                </div>
                <div className="customer-food-input-container">
                    <input
                        onChange={(e) => setFoodInput(e.target.value)}
                        value={foodInput}
                    />
                    <button onClick={handleOnClickFood}>Add</button>
                </div>
            </div>
        </div>

    )
}

export default CustomerOrder