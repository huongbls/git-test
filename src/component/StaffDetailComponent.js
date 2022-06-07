import React, { Component } from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { FadeTransform } from "react-animation-components";

function RenderStaffImg({ staff }) {
  return (
    <div className="col-12 col-md-4 col-lg-3 pb-3">
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.8) translateY(50%)",
        }}
      >
        <Card>
          <CardImg
            width="100%"
            object
            src={staff.image}
            alt={staff.name}
          ></CardImg>
        </Card>
      </FadeTransform>
    </div>
  );
}
function RenderStaffInfo({ staff }) {
  if (staff != null) {
    return (
      <div className="col-12 col-md-8 col-lg-9">
        <h4>Họ và tên: {staff.name}</h4>
        <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
        <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
        <p>
          Phòng ban:{" "}
          {staff.departmentId === "Dept01"
            ? "Sale"
            : staff.departmentId === "Dept02"
            ? "HR"
            : staff.departmentId === "Dept03"
            ? "Marketing"
            : staff.departmentId === "Dept04"
            ? "IT"
            : "Finance"}
        </p>
        <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
        <p>Số ngày nghỉ làm thêm: {staff.overTime}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const StaffDetail = (props) => {
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
              <Link to="/staff">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <RenderStaffImg staff={props.staff} />
          <RenderStaffInfo staff={props.staff} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default StaffDetail;
