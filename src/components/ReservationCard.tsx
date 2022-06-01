import * as React from "react";
import {useDispatch} from "react-redux";
import {removeReservation} from "../features/reservationSlice";


interface IReservationCard {
    name: string
    index: number
}

const ReservationCard: React.FC<IReservationCard> = ({name, index}) => {
    const dispatch = useDispatch()
    const removeCardByIndex = () => {
        dispatch(removeReservation(index))
    }
    return <div onClick={() => removeCardByIndex()} className="reservation-card-container">{name}</div>
}

export default ReservationCard