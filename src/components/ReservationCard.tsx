import * as React from "react";
import {useDispatch} from "react-redux";
import {removeReservation, userType} from "../features/reservationSlice";
import {addCustomer} from "../features/customerSlice";


interface IReservationCard {
    user: userType
}

const ReservationCard: React.FC<IReservationCard> = ({user}) => {
    const dispatch = useDispatch()
    const removeCardByIndex = () => {
        dispatch(removeReservation(user.id))
    //    dispatch action to add user to right panel
        dispatch(addCustomer(user))
    }
    return <div onClick={() => removeCardByIndex()} className="reservation-card-container">{user.name}</div>
}

export default ReservationCard