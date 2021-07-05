import React from "react";
import background from "../image/background.jpg";
import Footer from "./Footer";
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "676px"
      }}
    >
      <div>
        <div className="homepage"
          style={{
            paddingTop: "267px"
          }}
        >
          <p style={{ textAlign: "center" }}>
            CIPHERS SCHOOL FSD TEST ASSIGNMENT
          </p>
          <h5 style={{ textAlign: "center" }}>
            Glad to see you, have a nice day !!
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
