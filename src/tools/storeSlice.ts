import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface StoreState {
  activeNav: string
}

// Define the initial state using that type
const initialState: StoreState = {
  activeNav: "home"
}

export const storeSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setActiveNav: (state, action: PayloadAction<string>) => {
      state.activeNav = action.payload
    }
  }
})

export const { setActiveNav } = storeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.store.activeNav

export default storeSlice.reducer