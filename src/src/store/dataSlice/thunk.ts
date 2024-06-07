import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLogin } from "./dataSlice";




/**
 * Performs the logout operation.
 * @remarks
 * This function is an async thunk that dispatches the 'auth/logout' action.
 * It retrieves the current state using `thunkAPI.getState()` and logs the `dataSlice` value.
 * Finally, it dispatches the `setLogin` action with the value `false`.
 * @param _ - The payload (not used in this case).
 * @param thunkAPI - The `thunkAPI` object provided by Redux Toolkit.
 */
export const performLogout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      // Obtener el estado actual
      const {dataSlice}:any = thunkAPI.getState();
      console.log(dataSlice)      
     thunkAPI.dispatch(setLogin(false));
    }
  );