import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";

export const addBike = createAsyncThunk(
  "bike/add",
  async (bikesData, { rejectWithValue }) => {
    try {
      const data = await Http.post("/bike/", bikesData);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const BikeAll = createAsyncThunk(
  "bike/all",
  async (data, { rejectWithValue }) => {
    try {
      const data = await Http.get("/bike/all");
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getBikeById = createAsyncThunk(
  "bike/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/bike/${id}`);
      console.log(data.data, "getbikebyid");
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const editBikeById = createAsyncThunk(
  "bike/edit",
  async (item, { rejectWithValue }) => {
    try {
      const data = await Http.put(`/bike/update/${item.id}`, item.formdata);
      console.log(data.data, "editbikebyid from bikeAction");
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const deleteBike = createAsyncThunk(
  "bike/delete",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.delete(`/bike/delete/${id}`);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
