import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

function RenderSalary({ staff }) {
  return (
    <div>
      <Card className="p-3">
        <CardTitle className="text-left">{staff.name}</CardTitle>
        <CardText className="text-left">Mã số nhân viên: {staff.id}</CardText>
        <CardText className="text-left">
          Hệ số lương: {staff.salaryScale}
        </CardText>
        <CardText className="text-left">
          Số ngày làm thêm: {staff.overTime}
        </CardText>
        <CardText className="text-left">
          Lương: {(staff.salaryScale * 3e6 + staff.overTime * 2e5).toFixed(0)}
        </CardText>
      </Card>
    </div>
  );
}

function SalaryList(props) {
  const salary = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-3">
        <RenderSalary staff={staff} />
      </div>
    );
  });

  return (
    <div className="container p-3">
      <h3> Bảng Lương</h3>
      <hr></hr>
      <div className="row">{salary}</div>
    </div>
  );
}

export default SalaryList;
