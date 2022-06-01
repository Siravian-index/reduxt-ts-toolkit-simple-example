import {userType} from "../features/reservationSlice";
import * as React from "react";


interface ICustomerOrder {
    user: userType
}

const CustomerOrder: React.FC<ICustomerOrder> = ({user}) => {
    return (

        <div className="customer-food-card-container">

            <p>{user.name}</p>
            <div className="customer-foods-container">
                <div className="customer-food"></div>
                <div className="customer-food-input-container">
                    <input/>
                    <button>Add</button>
                </div>
            </div>
        </div>

    )
}

export default CustomerOrder