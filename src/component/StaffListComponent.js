import React, { Component } from "react";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectStaff: null,
      selectColumn: 3,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ selectColumn: event.target.value });
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
    const col = this.state.selectColumn;
    const x = "col-12 col-md-6 col-lg-" + 12 / col;
    const listStaff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className={x}>
          <div onClick={() => this.onStaffSelect(staff)}>
            <div className="p-3 my-3 bg-primary text-white">{staff.name}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="d-none d-lg-block">
            <label htmlFor="input-column" className="text-primary pl-3 pt-3">
              Select display column (for laptop only)
            </label>
            <br></br>
            <div className="col-lg-9 pb-3">
              <select
                className="form-control"
                value={this.state.selectColumn}
                onChange={this.handleChange.bind(this)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>6</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">{listStaff}</div>
        <div className="row">{this.renderStaff(this.state.selectStaff)}</div>
      </div>
    );
  }
}

export default StaffList;
