import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";
import "../App.css";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      role: ROLE,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Main;
