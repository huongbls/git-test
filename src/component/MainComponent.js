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
    // const StaffPage = () => {
    //   return (
    //     <StaffList
    //       staffs={this.state.staffs}
    //       promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
    //       leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    //     />
    //   );
    // };

    // const DishWithId = ({ match }) => {
    //   return (
    //     <DishDetail
    //       dish={
    //         this.state.dishes.filter(
    //           (dish) => dish.id === parseInt(match.params.dishId, 10)
    //         )[0]
    //       }
    //       comments={this.state.comments.filter(
    //         (comment) => comment.dishId === parseInt(match.params.dishId, 10)
    //       )}
    //     />
    //   );
    // };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/staff"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          {/* <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} /> */}
          <Redirect to="/staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
