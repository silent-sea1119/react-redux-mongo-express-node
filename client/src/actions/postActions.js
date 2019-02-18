import axios from "axios";
import { ADD_POST, GET_ERRORS, GET_POST, GET_POSTS, POST_LOADING, DELETE_POST } from "./types";

export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addComment = (postId, commentData) => dispatch => {
  axios
    .post(`/api/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getPost = id => dispatch => {
  dispatch(setPostLoading());

  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      // as we aren't filling any form I don't want to return the ERRORS
      // so I'll call GET_POSTS again, but this time passing null as the payload
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

export const getPosts = () => dispatch => {
  dispatch(setPostLoading());

  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      // as we aren't filling any form I don't want to return the ERRORS
      // so I'll call GET_POSTS again, but this time passing null as the payload
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

export const deletePost = id => dispatch => {
  axios
    // backticks here it's to use a variable without concatenating
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        // just returning the id of the deleted post to then delete it
        // locally on the page
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addLike = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const removeLike = id => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
