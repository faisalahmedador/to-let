import {
  CHANGE_IMAGE_1,
  CHANGE_IMAGE_2,
  CHANGE_IMAGE_3,
  CHANGE_IMAGE_4,
  //UPDATE_IMAGE
} from "../Constants";

export const setImage_1 = (text) => ({
  type: CHANGE_IMAGE_1,
  payload: text,
});

export const setImage_2 = (text) => ({
    type: CHANGE_IMAGE_2,
    payload: text,
});

export const setImage_3 = (text) => ({
    type: CHANGE_IMAGE_3,
    payload: text,
});

export const setImage_4 = (text) => ({
    type: CHANGE_IMAGE_4,
    payload: text,
});

// export const setUpdate = (text) => ({
//     type: UPDATE_IMAGE,
//     payload: text 
// })