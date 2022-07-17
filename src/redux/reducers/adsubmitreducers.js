import {
  SUBMIT_NEW_AD_REQUEST,
  SUBMIT_NEW_AD_SUCCESS,
  SUBMIT_NEW_AD_FAILED,
} from "../Constants";

function adsubmitReducers(state = {}, action) {
  switch (action.type) {
    case SUBMIT_NEW_AD_REQUEST:
      return { loading: true };
    case SUBMIT_NEW_AD_SUCCESS:
      // SINGLEInfo(action.payload);
      return { loading: false, add_post: action.payload };

    case SUBMIT_NEW_AD_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export {adsubmitReducers}
