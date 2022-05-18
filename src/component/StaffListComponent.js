import React, { Component } from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectStaff: null,
    };
  }
  render() {
    const listStaff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-4 m-1">
          <Card>{staff.name}</Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{listStaff}</div>
        <div className="row">Bấm vào tên nhân viên để xem thông tin</div>
      </div>
    );
  }
}

export default StaffList;
