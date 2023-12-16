import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async(id = null, { rejectWithValue }) => {
        try {
       const response = await axios.get("http://localhost:5000/products");
       return response?.data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
        productsFetch.pending, (state) =>{
            state.status = "pending"
        }).addCase(
        productsFetch.fulfilled, (state, action) =>{
             state.status = "success"
             state.items.push(action.payload)
         }).addCase(
         productsFetch.rejected, (state, action) =>{
             state.status = "rejected"
             state.error = action.payload
         }); 
                                }
} );

export default productsSlice.reducer;