import * as React from "react";


interface IReservationCard {
    name: string
}

const ReservationCard: React.FC<IReservationCard> = ({name}) => {
    return <div className="reservation-card-container">{name}</div>
}

export default ReservationCard