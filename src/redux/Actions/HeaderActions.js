import { SHADOW, POSITION } from "../Constants";

export const setShadow = (text) => {
  return {
    type: SHADOW,
    payload: text,
  };
};


export const setPosition = (text) => {
    return {
      type: POSITION,
      payload: text,
    };
  };