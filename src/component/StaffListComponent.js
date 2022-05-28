import React, { useState, useRef } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button,
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
    </div>
  );
}

export default StaffList;
