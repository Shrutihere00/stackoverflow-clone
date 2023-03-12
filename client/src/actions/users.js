import * as api from "../api";
export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.FETCHUSERS();
    dispatch({ type: "GET_USERS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.UPDATEPROFILE(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
