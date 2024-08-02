// import React from "react";
// import "./header.css";

// function Header() {
//   return (
//     <>
//       <div className="heading">
//         <h1>Header</h1>
//         <div className="buttons">
//           <button>SignUp</button>
//           <button>Login</button>
//         </div>
//       </div>
//       <div>Hello</div>
//     </>
//   );
// }

// export default Header;
import React from 'react';
import { Button } from '@mui/material';
import './header.css';

function Header() {
  return (
    <>
      <div className="heading">
        <h1>Header</h1>
        <div className="buttons">
          <Button 
            variant="contained" 
            color="primary"
            sx={{ borderRadius: '20px', padding: '10px 20px' }}
          >
            SignUp
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            sx={{ borderRadius: '20px', padding: '10px 20px' }}
          >
            Login
          </Button>
        </div>
      </div>
      <div>Hello</div>
    </>
  );
}

export default Header;
