import { HANDLE_INPUT } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export const initState = {
  name: "",
  surname: "",
  country: "",
  occupation: "",
  email: "",
  phone: "",
  website: "",
  password: "",
};
