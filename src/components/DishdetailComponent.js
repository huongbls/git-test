import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import dateFormat from "dateformat";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectDish: null,
    };
  }
  // onDishSelect(dish) {
  //   this.setState({ selectDish: dish });
  // }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg
            width="100%"
            object
            src={dish.image}
            alt={dish.name}
          ></CardImg>
          <CardBody className="text-left">
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComment(dish) {
    if (dish != null) {
      // console.log(dish.price);

      const listItems = dish.comments.map((d) => (
        <div key={d.id}>
          <div className="p-2">{d.comment}</div>
          <div className="p-2">
            {"-- " + d.author}, {dateFormat(d.date, "mmm dd, yyyy")}
          </div>
        </div>
      ));

      return (
        <div className="text-left p-3">
          <h4>Comments</h4>
          <div>{listItems}</div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComment(this.props.selectDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
