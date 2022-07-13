import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Photos.css";

export default function Photos() {
  const [value, setValue] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteImg = async (id) => {
    await axios
      .delete(`http://localhost:3000/${id}`)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row row-cols-4 row justify-content-md-center">
        {[...value].map((option) => (
          <div
            className="card mt-3"
            key={option._id}
            style={{ display: "flex", width: "18rem" }}
          >
            <img
              className="col card-img-top"
              src={option.pic}
              alt={option.name}
            />
            <div className="card-body">
              <h5 className="card-title mb-3">{option.name}</h5>
              <div className="buttons_container">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setKey(option.pic)}
                >
                  Open
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img className="img_open" src={key} alt={option.name} />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="btn btn-danger"
                  onClick={() => deleteImg(option._id)}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
