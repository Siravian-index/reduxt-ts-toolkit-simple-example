import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userType} from "./reservationSlice";


interface ICustomerState {
    value: userType[]
}

interface IOrderPlaced {
    id: string
    food: string
}

const initialState: ICustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<userType>) => {
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state, action: PayloadAction<IOrderPlaced>) => {
            const user = state.value.find((user) => user.id === action.payload.id)
            if (user) {
                user.order.push(action.payload.food)
            }
        }
    }
})

export const {addFoodToCustomer, addCustomer} = customerSlice.actions

const customerReducer = customerSlice.reducer
export default customerReducer