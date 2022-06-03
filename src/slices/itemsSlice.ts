import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppDispatch } from "../app/store"
import API from "../utils/apiClient";

export type ItemsState = {
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  item: any | undefined;
  items: any[];
}

export const initialState: ItemsState = {
  loading: false,
  hasError: false,
  errorMessage: "",
  item: undefined,
  items: []
}

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<{errMessage: string}>) => {
      state.loading = false;
      state.errorMessage = action.payload.errMessage;
      state.hasError = true;
    },
    setItem: (state, action: PayloadAction<{item: any}>) => {
      state.item = action.payload.item;
    },
    setItems: (state, action: PayloadAction<{items: any[]}>) => {
      state.items = action.payload.items;
    },
  }
})

const {
  startLoading,
  setError,
  setItem,
  setItems
} = itemsSlice.actions

export const itemsSelector = (state: RootState) => state.items;

const itemsReducer = itemsSlice.reducer;
export default itemsReducer;

export const fetchItems = (query: string | null = '') => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading())
    const response = await API.get(`/items${ query ? `?search=${query}` : '' }`)  
    dispatch(setItems({ items: response.data.items.products }))
  } catch (error) {
    dispatch(setError({ errMessage: 'Server Error!!!' }))
  }
}

export const fetchItemById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading())
    const response = await API.get(`/items/${id}`)
    debugger
    dispatch(setItem({ item: response.data.item }))
  } catch (error) {
    dispatch(setError({ errMessage: 'Server Error!!!' }))
  }
}