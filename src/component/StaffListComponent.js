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
  onStaffSelect(staff) {
    this.setState({ selectStaff: staff });
  }
  renderStaff(staff) {
    if (staff != null) {
      return (
        <Card>
          <h4>Họ và tên: {staff.name}</h4>
          <div>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</div>
          <div>
            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </div>
          <div>Phòng ban: {staff.department.name}</div>
          <div>Số ngày nghỉ còn lại {staff.annualLeave}</div>
          <div>Số ngày đã làm thêm: {staff.overTime}</div>
        </Card>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div>Bấm vào tên nhân viên để xem thông tin</div>
          </div>
        </div>
      );
    }
  }
  render() {
    const listStaff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-4 m-1">
          <div onClick={() => this.onStaffSelect(staff)}>
            <Card>{staff.name}</Card>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{listStaff}</div>
        <div className="row">{this.renderStaff(this.state.selectStaff)}</div>
      </div>
    );
  }
}

export default StaffList;
