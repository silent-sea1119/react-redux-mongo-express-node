import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./types";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// add experience to a profile
export const addExperience = (expData, history) => dispatch => {
  axios
    .post("api/profile/experience", expData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteExperience = id => dispatch => {
  axios
    .delete(`api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
}

// add education to a profile
export const addEducation = (eduData, history) => dispatch => {
  axios
    .post("api/profile/education", eduData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteEducation = id => dispatch => {
  axios
    .delete(`api/profile/education/${id}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

// delete account and profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("are you sure?")) {
    axios
      .delete("/api/profile")
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
