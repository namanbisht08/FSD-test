import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer
        // className="text-center text-lg-start bg-light text-muted"
        style={{
          margin: 0,
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          height: "50px",
          backgroundColor:"#66DE93",
        }}
      >
        <div>
          © 2021 Copyright: By Naman Singh Bisht
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
