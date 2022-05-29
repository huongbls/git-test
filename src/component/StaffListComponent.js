"use strict";

import React, { useState, useRef } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
  Label,
  Select,
  Option,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

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
function AddStaff() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allValues, setAllValues] = useState({
    fullname: "",
    dateofbirth: "",
    startdate: "",
    department: "Sales",
    salaryscale: "1",
    annualleave: "0",
    overtime: "0",
  });

  const [allTouched, setTouched] = useState({
    touched: {
      fullname: false,
      dateofbirth: false,
      startdate: false,
    },
  });

  const [submitClick, setSubmitClick] = useState(0);

  const buttonSubmitClick = (event) => {
    setSubmitClick(submitClick + 1);
  };

  const validate = (fullname, dateofbirth, startdate) => {
    const errors = {
      fullname: "",
      dateofbirth: "",
      startdate: "",
    };
    if (allTouched.touched.fullname && fullname.length < 2)
      errors.fullname = "Yêu cầu nhiều hơn 2 ký tự";
    else if (allTouched.touched.fullname && fullname.length > 30)
      errors.fullname = "Yêu cầu ít hơn 30 ký tự";
    else if (submitClick && fullname === "") errors.fullname = "Yêu cầu nhập";

    if (allTouched.touched.dateofbirth && dateofbirth === "")
      errors.dateofbirth = "Yêu cầu nhập";
    else if (submitClick && dateofbirth === "")
      errors.dateofbirth = "Yêu cầu nhập";

    if (allTouched.touched.startdate && startdate === "")
      errors.startdate = "Yêu cầu nhập";
    else if (submitClick && startdate === "") errors.startdate = "Yêu cầu nhập";

    return errors;
  };

  const errors = validate(
    allValues.fullname,
    allValues.dateofbirth,
    allValues.startdate
  );

  const handleInputChange = (event) => {
    setAllValues({
      ...allValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    // alert("Current State is: " + JSON.stringify(allValues));
    if (
      errors.fullname !== "" ||
      errors.dateofbirth !== "" ||
      errors.startdate !== ""
    )
      event.preventDefault();
  };

  const handleBlur = (field) => (event) => {
    setTouched({ touched: { ...allTouched.touched, [field]: true } });
  };

  return (
    <Form
      onSubmit={(values) => handleSubmit(values)}
      isOpen={modalIsOpen}
      toggle={() => setModalIsOpen(true)}
    >
      <FormGroup>
        <div className="form-group row">
          <Label
            htmlFor="fullname"
            className="col-sm-12 col-md-4 col-form-label"
          >
            Tên
          </Label>
          <div className="col-sm-12 col-md-8">
            <Input
              type="text"
              id="fullname"
              name="fullname"
              className="form-control"
              placeholder="Họ và tên"
              value={allValues.fullname}
              // valid={errors.fullname === ""}
              invalid={errors.fullname !== ""}
              onBlur={handleBlur("fullname")}
              onChange={handleInputChange}
            />
            <FormFeedback>{errors.fullname}</FormFeedback>
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <div className="form-group row">
          <Label
            htmlFor="dateofbirth"
            className="col-sm-12 col-md-4 col-form-label"
          >
            Ngày Sinh
          </Label>
          <div className="col-sm-12 col-md-8">
            <Input
              type="date"
              id="dateofbirth"
              name="dateofbirth"
              value={allValues.dateofbirth}
              className="form-control"
              // valid={errors.dateofbirth === ""}
              invalid={errors.dateofbirth !== ""}
              onBlur={handleBlur("dateofbirth")}
              onChange={handleInputChange}
            />
            <FormFeedback>{errors.dateofbirth}</FormFeedback>
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <div className="form-group row">
          <Label
            htmlFor="startdate"
            className="col-sm-12 col-md-4 col-form-label"
          >
            Ngày vào công ty
          </Label>
          <div className="col-sm-12 col-md-8">
            <Input
              type="date"
              id="startdate"
              name="startdate"
              value={allValues.startdate}
              className="form-control"
              // valid={errors.startdate === ""}
              invalid={errors.startdate !== ""}
              onBlur={handleBlur("startdate")}
              onChange={handleInputChange}
            />
            <FormFeedback>{errors.startdate}</FormFeedback>
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <div className="form-group row">
          <Label
            htmlFor="department"
            className="col-sm-12 col-md-4 col-form-label"
          >
            Phòng Ban
          </Label>
          <div className="col-sm-12 col-md-8">
            <Input
              type="select"
              name="department"
              value={allValues.department}
              onChange={handleInputChange}
            >
              <option>Sales</option>
              <option>HR</option>
              <option>Marketing</option>
              <option>IT</option>
              <option>Finance</option>
            </Input>
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <div className="form-group row">
          <Label
            htmlFor="salaryscale"
            className="col-sm-12 col-md-4 col-form-label"
          >
            Hệ số lương
          </Label>
          <div className="col-sm-12 col-md-8">
            <Input
              type="number"
              id="salaryscale"
              name="salaryscale"
              min="0"
              value={allValues.salaryscale}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <div className="form-group row">
          <Label
            htmlFor="annualleave"
            className="col-sm-12 col-md-4 col-form-label"
          >
            Số ngày nghỉ còn lại
          </Label>
          <div className="col-sm-12 col-md-8">
            <Input
              type="number"
              id="annualleave"
              name="annualleave"
              min="0"
              value={allValues.annualleave}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <div className="form-group row">
          <Label
            htmlFor="overtime"
            className="col-sm-12 col-md-4 col-form-label"
          >
            Số ngày đã làm thêm
          </Label>
          <div className="col-sm-12 col-md-8">
            <Input
              type="number"
              id="overtime"
              name="overtime"
              min="0"
              value={allValues.overtime}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <Col md={10}>
          <Button
            type="submit"
            color="primary"
            name="submit"
            onClick={buttonSubmitClick}
          >
            Thêm
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

function StaffList(props) {
  const staffs = props.staffs
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

  const [searchValue, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const nameStaff = React.createRef();

  const nameStaff = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault();
    setSearch(nameStaff.current.value.toUpperCase());
  };

  const searchStaff = props.staffs
    .filter((staff) => staff.name.toUpperCase().includes(searchValue))
    .map((staff) => {
      return (
        <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-3">
          <RenderStaffList staff={staff} />
        </div>
      );
    });

  return (
    <div className="container p-3">
      <div className="row justify-content-between">
        <div>
          <h3 className="pl-3">Nhân Viên</h3>
        </div>
        <div>
          <Button
            type="submit"
            className="bg-dark text-white"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            <span className="fa fa-plus fa-2xl"></span>
          </Button>
        </div>
        <div>
          <Form onSubmit={submitFormHandler}>
            <FormGroup className="d-inline-block pr-3">
              <Input
                type="text"
                id="nameStaff"
                name="nameStaff"
                placeholder="Search Name"
                defaultValue=""
                // value={searchValue}
                // onChange={(e) => setSearch(e.target.value.toUpperCase())}
                innerRef={nameStaff}
              />
            </FormGroup>
            <FormGroup className="d-inline-block">
              <Button
                type="submit"
                value="submit"
                color="primary"
                className="mb-1"
              >
                Tìm
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
      <hr></hr>
      <div className="row">{searchValue ? searchStaff : staffs}</div>

      <Modal
        isOpen={modalIsOpen}
        toggle={() => {
          setModalIsOpen(!modalIsOpen);
        }}
      >
        <ModalHeader
          toggle={() => {
            setModalIsOpen(!modalIsOpen);
          }}
        >
          Thêm nhân viên
        </ModalHeader>
        <ModalBody>
          <AddStaff />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default StaffList;
