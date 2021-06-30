import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";

const UseEffectAPI = () => {

    const getUsers = async () => {
        const response = await fetch('http://localhost:3001/posts');
        const data = await response.json();
        console.log(data);
    }

    useEffect(() =>{
        getUsers();   
    })

  return (
    <>
      <div className=" container-fluid mt-5">
        <div className=" row text-center">
          <div className="col-10 col-md-4 mt-5">
            <div className="d-flex align-items-center">
              <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0 textLeft"></h4>

                <div
                  className="card bg-light mb-3"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
