import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";

export const initialState = {
  staffs: localStorage.staffs
    ? JSON.parse(localStorage.getItem("staffs"))
    : STAFFS,
  departments: DEPARTMENTS,
  role: ROLE,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
