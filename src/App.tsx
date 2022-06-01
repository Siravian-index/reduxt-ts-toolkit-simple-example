import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import ReservationCard from "./components/ReservationCard";
import {useState} from "react";
import {addReservation, userType} from "./features/reservationSlice";
import {nanoid} from "nanoid";
import CustomerOrder from "./components/CustomerOrder";

function App() {
    const dispatch = useDispatch()
    const [reservationNameInput, setReservationInput] = useState("")
    //with useSelector we pick the slice of state we want to work with
    const reservations = useSelector((state: RootState) => state.reservations.value)
    const newCustomers = useSelector((state: RootState) => state.customers.value)
    //mapping to generate JSX markup
    const reservationDataFormatted = reservations.map((user) => <ReservationCard user={user} key={user.id}/>)
    const customersDataFormatted = newCustomers.map((user) => <CustomerOrder user={user} key={user.id}/>)

    const handleReservations = () => {
        if (reservationNameInput) {
            const newUser: userType = {name: reservationNameInput, id: nanoid(), order: []}
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
                    {customersDataFormatted}
                </div>
            </div>
        </div>
    );
}

export default App
