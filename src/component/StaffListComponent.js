import React, { useState } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
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

  const [searchValue, setSearch] = useState();

  const searchStaff = props.staffs
    .filter((staff) =>
      // staff.name.toUpperCase().includes(searchValue.toUpperCase())
      staff.name.toUpperCase().includes(searchValue)
    )
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
          <label>
            <input
              name="numberOfGuests"
              placeholder="Search Name"
              value={searchValue}
              onChange={(e) => setSearch(e.target.value.toUpperCase())}
            />
          </label>
        </div>
      </div>
      <hr></hr>
      <div className="row">{searchValue ? searchStaff : staffs}</div>
    </div>
  );
}

export default StaffList;
