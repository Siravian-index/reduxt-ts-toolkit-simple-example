import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import ReservationCard from "./components/ReservationCard";
import {useState} from "react";
import {addReservation} from "./features/reservationSlice";
import {nanoid} from "nanoid";

function App() {
    const dispatch = useDispatch()
    const [reservationNameInput, setReservationInput] = useState("")
    //with useSelector we pick the slice of state we want to work with
    const reservations = useSelector((state: RootState) => state.reservations.value)
    // console.log(reservations)
    const reservationDataFormatted = reservations.map((user) => <ReservationCard user={user} key={user.id}/>)

    const handleReservations = () => {
        if (reservationNameInput) {
            const newUser = {name: reservationNameInput, id: nanoid()}
            dispatch(addReservation(newUser))
            setReservationInput("")
        }
    }

    return (
        <div className="App">
            <div className="container">
                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            {reservationDataFormatted}
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <input
                            onChange={(e) => setReservationInput(e.target.value)}
                            value={reservationNameInput}
                        />
                        <button onClick={() => handleReservations()}>Add</button>
                    </div>
                </div>
                <div className="customer-food-container">
                    <div className="customer-food-card-container">
                        <p>Selena Gomez</p>
                        <div className="customer-foods-container">
                            <div className="customer-food"></div>
                            <div className="customer-food-input-container">
                                <input/>
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
