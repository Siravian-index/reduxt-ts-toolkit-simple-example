import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IReservationState {
    value: string[]
}

const initialState: IReservationState = {
    value: []
}

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
            addReservation: (state, action: PayloadAction<string>) => {
                state.value.push(action.payload)
            }
    }
})

//this seems like it is not working
export default reservationSlice.reducer