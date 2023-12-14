// // import React from 'react'

// // import {Link} from 'react-router-dom'
// // function Navbar() {
// //   return (
// //    <div>
// //      <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //    <div className="container-fluid">
// //      <Link className="navbar-brand" to="/">Navbar</Link>
// //      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //      </button>
// //     <div className="collapse navbar-collapse" id="navbarNav">
// //        <ul className="navbar-nav">
// //          <li className="nav-item">
// //            <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
// //          </li>
// //         <li className="nav-item">
// //            <Link className="nav-Link" to="Login/">Login</Link>
// //          </li>
     
// //       </ul>
// //      </div>
// //   </div>
// // </nav>

// //     </div>
// //   )
// // }
// // import { disconnect } from 'mongoose';
// import React from 'react';
// import { Link,useNavigate  } from 'react-router-dom';
// import Badge from 'react-bootstrap/Badge';
// function Navbar() {


// const navigate=useNavigate();
// const handleLogout=()=>{
//   localStorage.removeItem("authToken");
//   navigate("/login")
// }

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-success ">
//         <div className="container-fluid">
//         <Link className="navbar-brand fs-4 blue-link" to="/">
//       FOOD APP
//     </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2">
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/">Home</Link>
//               </li>
//               {(localStorage.getItem("authToken"))?
//                       <li className="nav-item">
//                       <Link className="nav-link" aria-current="page" to="/">My Orders</Link>
//                     </li>
//                     :""
//                     }
           
//             </ul>
//             {(!localStorage.getItem("authToken"))?
//         <div className='d-flex'>
//                 <Link className="btn bg-white text-success mx-1 " to="/Login">Login</Link>
            
            
//               <Link className="btn bg-white text-success mx-1 "to="/creatuser">Signup</Link>
//               </div>
//               :
//               <div>
//               <div className ='btn bg-white text-success mx-2'>
//                     My Cart{" "}
//                     <Badge pill bg="danger">  2 </Badge>
//               </div>
//               <div className ='btn bg-white text-danger mx-2' onClick={handleLogout}>
//               Logout
//       </div>
//       </div>
// } 
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }





// export default Navbar
/* eslint-disable react/jsx-no-undef */

import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './ContextReducer';
import Modal from '../Model';
import Cart from '../screens/Cart';
export default function Navbar(props) {

    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')

        navigate("/login")
    }

    const loadCart = () => {
        setCartView(true)
    }

    const items = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                            </li>
                            {(localStorage.getItem("token")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                            </form> :
                            <div>

                                <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={items.length} >
                                        <ShoppingCartIcon />
                                    </Badge>
                                    Cart
                                </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

                                <button onClick={handleLogout} className="btn bg-white text-success" >Logout</button></div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}