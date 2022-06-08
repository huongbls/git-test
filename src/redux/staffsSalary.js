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
    case ActionTypes.ADD_STAFF:
      return { ...state, staffsSalary: action.payload };
    case ActionTypes.DELETE_STAFF:
      const filterStaffsSalary = state.staffsSalary.filter(
        (staff) => staff.id !== action.payload
      );
      return { ...state, staffsSalary: filterStaffsSalary };
    default:
      return state;
  }
};
