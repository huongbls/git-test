import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import DeparmentList from "./DepartmentComponent";
import SalaryList from "./SalaryComponent";
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";
import "../App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    role: state.role,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: localStorage.staffs
        ? JSON.parse(localStorage.getItem("staffs"))
        : STAFFS,
      departments: DEPARTMENTS,
      role: ROLE,
    };
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
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
          <Route
            exact
            path="/salary"
            component={() => <SalaryList staffs={this.props.staffs} />}
          />
          <Redirect to="/staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
