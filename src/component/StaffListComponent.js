import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaffList({ staff }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardTitle className="text-center">{staff.name}</CardTitle>
      </Link>
    </Card>
  );
}

function StaffList(props) {
  const staffs = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-3">
        <RenderStaffList staff={staff} />
      </div>
    );
  });

  return (
    <div className="container p-3">
      <h3> Nhân Viên</h3>
      <hr></hr>
      <div className="row">{staffs}</div>
    </div>
  );
}

export default StaffList;
