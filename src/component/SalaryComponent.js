import React, { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderSalary({ staff }) {
  return (
    <div>
      <Card className="p-3 bg-light text-dark">
        <CardTitle className="text-left">{staff.name}</CardTitle>
        <CardText className="text-left">Mã số nhân viên: {staff.id}</CardText>
        <CardText className="text-left">
          Hệ số lương: {staff.salaryScale}
        </CardText>
        <CardText className="text-left">
          Số ngày làm thêm: {staff.overTime}
        </CardText>
        <CardText className="text-center bg-secondary text-white p-1">
          Lương: {(staff.salaryScale * 3e6 + staff.overTime * 2e5).toFixed(0)}
        </CardText>
      </Card>
    </div>
  );
}

function SalaryList(props) {
  // const salary = props.staffs.map((staff) => {
  //   return (
  //     <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-3">
  //       <RenderSalary staff={staff} />
  //     </div>
  //   );
  // });

  const [option, setOption] = useState();

  const AscOrder = props.staffs
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    .map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-3">
          <RenderSalary staff={staff} />
        </div>
      );
    });

  const DesOrder = props.staffs
    .sort((a, b) => {
      return b.name.localeCompare(a.name);
    })
    .map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-3">
          <RenderSalary staff={staff} />
        </div>
      );
    });

  const SalaryInc = props.staffs
    .sort((a, b) => {
      const fa = a.salaryScale * 3e6 + a.overTime * 2e5;
      const fb = b.salaryScale * 3e6 + b.overTime * 2e5;
      return fa - fb;
    })
    .map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-3">
          <RenderSalary staff={staff} />
        </div>
      );
    });

  const SalaryDec = props.staffs
    .sort((a, b) => {
      const fa = a.salaryScale * 3e6 + a.overTime * 2e5;
      const fb = b.salaryScale * 3e6 + b.overTime * 2e5;
      return fb - fa;
    })
    .map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-3">
          <RenderSalary staff={staff} />
        </div>
      );
    });

  return (
    <div className="container p-3">
      <div className="row justify-content-between">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div>
          <select
            className="form-control"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="Tên (A đến Z)" selected>
              Xếp theo: Tên (A đến Z)
            </option>
            <option value="Tên (Z đến A)">Tên (Z đến A)</option>
            <option value="Lương tăng dần">Lương tăng dần</option>
            <option value="Lương giảm dần">Lương giảm dần</option>
          </select>
        </div>
      </div>
      {/* <div className="row">{SalaryDec}</div> */}
      <div className="row">
        {option === "Tên (A đến Z)"
          ? AscOrder
          : option === "Tên (Z đến A)"
          ? DesOrder
          : option === "Lương tăng dần"
          ? SalaryInc
          : option === "Lương giảm dần"
          ? SalaryDec
          : AscOrder}
      </div>
    </div>
  );
}

export default SalaryList;
