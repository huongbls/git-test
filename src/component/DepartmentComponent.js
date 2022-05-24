import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

function RenderDepartment({ dep }) {
  return (
    <div>
      <Card className="bg-light text-dark">
        <CardTitle className="text-left p-1">{dep.name}</CardTitle>
        <CardText className="text-left p-3">
          Số lượng nhân viên: {dep.numberOfStaff}
        </CardText>
      </Card>
    </div>
  );
}

function DeparmentList(props) {
  const deps = props.departments.map((dep) => {
    return (
      <div key={dep.id} className="col-12 col-md-6 col-lg-4 p-3">
        <RenderDepartment dep={dep} />
      </div>
    );
  });

  return (
    <div className="container p-3">
      <h3> Phòng Ban</h3>
      <hr></hr>
      <div className="row">{deps}</div>
    </div>
  );
}

export default DeparmentList;
