import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function RenderStaffList({ staff }) {
  return (
    <Card className="bg-light">
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardTitle className="text-center">{staff.name}</CardTitle>
      </Link>
    </Card>
  );
}

//

const DepartmentStaffDetail = (props) => {
  const staffs = props.staff
    .sort((a, b) => {
      return a.id - b.id;
    })
    .map((staff) => {
      return (
        <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-3">
          <RenderStaffList staff={staff} />
        </div>
      );
    });

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/department">Phòng Ban</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {props.staff[0].departmentId === "Dept01"
                ? "Sale"
                : props.staff[0].departmentId === "Dept02"
                ? "HR"
                : props.staff[0].departmentId === "Dept03"
                ? "Marketing"
                : props.staff[0].departmentId === "Dept04"
                ? "IT"
                : "Finance"}
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">{staffs}</div>
      </div>
    );
  } else {
    return <div>Nothing</div>;
  }
};

export default DepartmentStaffDetail;
