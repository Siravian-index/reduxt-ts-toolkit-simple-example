import * as React from "react";
import {useDispatch} from "react-redux";
import {removeReservation, userType} from "../features/reservationSlice";


interface IReservationCard {
    user: userType
}

const ReservationCard: React.FC<IReservationCard> = ({user}) => {
    const dispatch = useDispatch()
    const removeCardByIndex = () => {
        dispatch(removeReservation(user.id))
    }
    return <div onClick={() => removeCardByIndex()} className="reservation-card-container">{user.name}</div>
}

export default ReservationCard