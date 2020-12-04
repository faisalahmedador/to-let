import { SHADOW, POSITION } from "../Constants";

const initialHeader = {
  shadow: "false",
  position: "absolute",
};

export const Header = (state = initialHeader, action = {}) => {
  switch (action.type) {
    case SHADOW:
      return { ...state, shadow: action.payload };
    case POSITION:
      return { ...state, position: action.payload };
    default:
      return state;
  }
};
