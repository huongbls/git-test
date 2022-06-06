// import { STAFFSSALARY } from "../shared/staffsSalary";

// export const StaffsSalary = (state = STAFFSSALARY, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

import * as ActionTypes from "./ActionTypes";

export const StaffsSalary = (
  state = {
    isLoading: true,
    errMess: null,
    staffsSalary: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFSSALARY:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffsSalary: action.payload,
      };
    case ActionTypes.STAFFSSALARY_LOADING:
      return { ...state, isLoading: true, errMess: null, staffsSalary: [] };
    case ActionTypes.STAFFSSALARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
