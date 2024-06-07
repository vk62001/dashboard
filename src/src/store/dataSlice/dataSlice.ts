import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react'

export interface CounterState {
  count: number,
  loggedIn: boolean,
}

const initialState: CounterState = {
  count: 0,
  loggedIn: true,
}

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setLogin } = dataSlice.actions
