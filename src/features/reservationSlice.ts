import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IReservationState {
    value: string[]
}

const initialState: IReservationState = {
    value: ["David", "Carlos"]
}

//Slice
export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

//action creators
//Here we export the actions defined in the createSlice reducer property
export const {addReservation, removeReservation} = reservationSlice.actions


//Here we export the reducer contained inside the  reservationSlice
//it will be used by the store.
//this seems like it is not working
// export default  reservationSlice.reducer
//------------
// looks like extracting the value into a variable
// and exporting said variable works
const reservationReducer = reservationSlice.reducer
export default reservationReducer