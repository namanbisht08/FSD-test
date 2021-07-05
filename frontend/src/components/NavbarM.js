import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function NavbarM() {
  return (
    <React.Fragment>
        <nav style={{background:"#66DE93",height:"45px",textAlign:'center',display:"block"}}>
        <Link style={{marginRight:"300px",color:"white",fontSize:"20px"}} to="/">Home</Link>
        <Link style={{marginRight:"300px",color:"white",fontSize:"20px"}} to="/posts">Posts</Link>
        <Link style={{marginRight:"300px",color:"white",fontSize:"20px"}} to="/posts/id/comments">Posts Id</Link>
        </nav>
    </React.Fragment>
  );
}

export default NavbarM;
