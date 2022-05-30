// import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
// import StaffList from "./component/StaffListComponent";
// import "./App.css";
// import { STAFFS, DEPARTMENTS, ROLE } from "./shared/staffs";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       staffs: STAFFS,
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
//           </div>
//         </Navbar>
//         <StaffList staffs={this.state.staffs} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import Main from "./component/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
