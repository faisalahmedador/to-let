import {
  CHANGE_SEARCH_FIELD,
  CHANGE_LOCATION,
  CHANGE_BED,
  CHANGE_BATH,
  CHANGE_LOWER_LIMIT,
  CHANGE_UPPER_LIMIT,
  CHANGE_PROPERTY_TYPE,
} from "../Constants";

export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const setLowerLimit = (text) =>({
    
    type: CHANGE_LOWER_LIMIT,
    payload: text
})


export const setUpperLimit = (text) =>({
    type: CHANGE_UPPER_LIMIT,
    payload: text
})


export const setLocation = (text) =>({
    type: CHANGE_LOCATION,
    payload: text
})

export const setBed = (text) =>({
    type: CHANGE_BED,
    payload: text
})

export const setBath = (text) =>({
    type: CHANGE_BATH,
    payload: text
})


export const setPropertyType = (text) =>({
    type: CHANGE_PROPERTY_TYPE,
    payload: text
})