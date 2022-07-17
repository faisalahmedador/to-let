import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  USER_LOGOUT, SIGNIN_LOGGEDOUT,
} from "../Constants";

function signinReducer(state = {}, action) {
  switch (action.type) {
    case SIGNIN_LOGGEDOUT:
      return { logged_out: true}
    case SIGNIN_REQUEST:
      return { loading: true };
    case SIGNIN_SUCCESS:
      return { loading: false, success: action.payload };

    case SIGNIN_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export { signinReducer };
