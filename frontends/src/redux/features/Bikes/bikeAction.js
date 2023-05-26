import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";

export const addBike = createAsyncThunk(
  "bikes/add",
  async (bikesData, { rejectWithValue }) => {
    try {
      const data = await Http.post("/bikes/create", bikesData);
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
  "bikes/all",
  async (data, { rejectWithValue }) => {
    try {
      const data = await Http.get("/bikes");
      return data.data.data;
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
  "bikes/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/bikes/${id}`);
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
  "bikes/edit",
  async (item, { rejectWithValue }) => {
    try {
      const data = await Http.patch(`/bikes/${item.id}`, item.formdata);
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
  "bikes/delete",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.delete(`/bikes/${id}`);
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
