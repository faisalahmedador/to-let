import {
  CHANGE_SEARCH_FIELD,
  CHANGE_LOCATION,
  CHANGE_BED,
  CHANGE_BATH,
  CHANGE_LOWER_LIMIT,
  CHANGE_UPPER_LIMIT,
  CHANGE_PROPERTY_TYPE,
} from "../Constants";

const initialSearch = {
  searchField: "",
  catagory: "Property Type",
  location: "DHAKA",
  bed: "Beds",
  bath: "Baths",
  lower_limit: null,
  upper_limit: null,
  priceUpdate: false
};


export const Search = (state = initialSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    case CHANGE_PROPERTY_TYPE:
      return { ...state, catagory: action.payload };
    case CHANGE_LOCATION:
      return { ...state, location: action.payload };
      case CHANGE_BED:
        return { ...state, bed: action.payload };
        case CHANGE_BATH:
      return { ...state, bath: action.payload };
    case CHANGE_LOWER_LIMIT: 
        return {...state, lower_limit: action.payload, priceUpdate: true};
    case CHANGE_UPPER_LIMIT:
        return {...state, upper_limit: action.payload, priceUpdate: true}
    default:
      return state;
  }
};
