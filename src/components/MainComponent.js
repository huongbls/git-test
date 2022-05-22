import React, { Component } from "react";

import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import "../App.css";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectDish: dishId });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
          <DishDetail
            selectDish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectDish
              )[0]
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
