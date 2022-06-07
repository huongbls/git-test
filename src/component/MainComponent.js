import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import DeparmentList from "./DepartmentComponent";
import DepartmentStaffDetail from "./DepartmentDetailComponent";
import SalaryList from "./SalaryComponent";
import "../App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addStaff,
  fetchStaffs,
  fetchDepartments,
  fetchStaffsSalary,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchStaffsSalary: () => {
    dispatch(fetchStaffsSalary());
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   staffs: localStorage.staffs
    //     ? JSON.parse(localStorage.getItem("staffs"))
    //     : STAFFS,
    //   departments: DEPARTMENTS,
    //   role: ROLE,
    // };
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchStaffsSalary();
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}
        />
      );
    };

    const DepartmentWithId = ({ match }) => {
      return (
        <DepartmentStaffDetail
          staff={this.props.staffs.staffs.filter(
            (staff) => staff.departmentId === match.params.deptId
          )}
          department={this.props.departments}
          // department={this.props.departments.departments.filter(
          //   (department) => department.id === parseInt(match.params.deptId, 10)
          // )}
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staff"
            component={() => <StaffList staffs={this.props.staffs} />}
          />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Route
            exact
            path="/department"
            component={() => (
              <DeparmentList departments={this.props.departments} />
            )}
          />
          <Route path="/department/:deptId" component={DepartmentWithId} />
          <Route
            exact
            path="/salary"
            component={() => (
              <SalaryList staffsSalary={this.props.staffsSalary} />
            )}
          />
          <Redirect to="/staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
