import React, { Component } from "react";
import dateFormat from "dateformat";

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
        <div className="col-12 col-md-12 col-lg-12 p-3">
          <div className="p-3 text-danger border">
            <h4>Họ và tên: {staff.name}</h4>
            <div>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</div>
            <div>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </div>
            <div>Phòng ban: {staff.department.name}</div>
            <div>Số ngày nghỉ còn lại {staff.annualLeave}</div>
            <div>Số ngày đã làm thêm: {staff.overTime}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="pl-3">Bấm vào tên nhân viên để xem thông tin</div>
          </div>
        </div>
      );
    }
  }
  render() {
    const listStaff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4">
          <div onClick={() => this.onStaffSelect(staff)}>
            <div className="p-3 my-3 bg-primary text-white">{staff.name}</div>
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
