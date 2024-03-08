import {configureStore, createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    'Fazer café', 'Estudar Redux', 'Muito legal estudar', 'Estudar Zustand'
  ],
  reducers:{
    add: (state,action)=>{
      console.log(state,action)
    }
  }
})
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
})

export const {add} = todoSlice.actions