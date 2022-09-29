import {IProgressBarItem} from "../Interfaces/IProgressBarItem";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ICubic} from "../Interfaces/ICubic";

interface progressBarState {
    items: IProgressBarItem[]
    totalValue: number
    totalCubics: number
    cubicsArray: ICubic[]
    width: number
    height: number
}

const initialState: progressBarState = {
    items: [
        {name: 'Sold', color: '#BD1FBE', value: 677},
        {name: 'Got free', color: '#FC64FF', value: 23},
        {name:'Got 1',color:"cyan",value:1},
    ],
    totalValue: 0,
    totalCubics: 0,
    cubicsArray: [],
    width: 1000,
    height: 50
}

export const progressBarSlice = createSlice({
    name: 'progressBar',
    initialState,
    reducers: {
        setTotalValue(state, action: PayloadAction<number>) {
            state.totalValue = action.payload
        },
        setTotalCubics(state, action: PayloadAction<number>) {
            state.totalCubics = action.payload
        },
        addItemToArray(state, action: PayloadAction<ICubic[]>) {
            state.cubicsArray = action.payload
        },
        addItem(state, action: PayloadAction<IProgressBarItem>) {
            state.items = [...state.items, action.payload]
        },
        setWidth(state, action: PayloadAction<number>) {
            state.width = action.payload
        },
        setHeight(state, action: PayloadAction<number>) {
            state.height = action.payload
        }
    }
})

export default progressBarSlice.reducer;