import {configureStore} from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

export const store = configureStore({
    //convine the slices into one big reducer
    reducer: {
        reservations: reservationReducer,
        customers: customerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>