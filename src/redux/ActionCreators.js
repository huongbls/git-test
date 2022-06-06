import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/departments";
import { STAFFSSALARY } from "../shared/staffsSalary";

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  setTimeout(() => {
    dispatch(addStaffs(STAFFS));
  }, 2000);
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));
  setTimeout(() => {
    dispatch(addDepartments(DEPARTMENTS));
  }, 2000);
};

export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});

export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess,
});

export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload: departments,
});

export const fetchStaffsSalary = () => (dispatch) => {
  dispatch(staffsSalaryLoading(true));
  setTimeout(() => {
    dispatch(addStaffsSalary(STAFFSSALARY));
  }, 2000);
};

export const staffsSalaryLoading = () => ({
  type: ActionTypes.STAFFSSALARY_LOADING,
});

export const staffsSalaryFailed = (errmess) => ({
  type: ActionTypes.STAFFSSALARY_FAILED,
  payload: errmess,
});

export const addStaffsSalary = (staffsSalary) => ({
  type: ActionTypes.ADD_STAFFSSALARY,
  payload: staffsSalary,
});
