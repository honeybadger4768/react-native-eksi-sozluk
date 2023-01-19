import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    isDark: boolean
}

export type PAChangeDark = {
    isDark: boolean
}

const initialState: AppState = {
    isDark: true
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeDark: (state, action: PayloadAction<PAChangeDark>) =>{
            state.isDark = action.payload.isDark
        }
    },
})

export const { } = appSlice.actions
export default appSlice.reducer
