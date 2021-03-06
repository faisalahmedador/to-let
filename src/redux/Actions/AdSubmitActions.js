import { SUBMIT_NEW_ADD } from "../Constants";

export const adSubmitAction = (data) => {
  return {
    type: SUBMIT_NEW_ADD,
    payload: data,
  };
};
