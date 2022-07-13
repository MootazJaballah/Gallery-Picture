import React from "react";
import { useState } from "react";
import axios from "axios";

export default function NavBar() {
  const [picName, setPicName] = useState("");
  const [picLink, setPicLink] = useState("");

  const onUpload = async () => {
    await axios
      .post("http://localhost:3000/", {
        name: picName,
        pic: picLink,
      })
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid container">
        <span className="navbar-brand mb-0 h1 d-flex align-items-center">
          <img
            src="https://sunrust.org/wiki/images/a/a9/Gallery_icon.png"
            alt="logo"
            height="50px"
          />
          <samp style={{ fontSize: "2rem" }}>Gallery</samp>
        </span>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
              data-bs-whatever="@mdo"
            >
              Upload Image
            </button>

            <div
              className="modal fade"
              id="exampleModal1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Upload
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Picture Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          onChange={(e) => setPicName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Picture Link:
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                          onChange={(e) => setPicLink(e.target.value)}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        onUpload();
                      }}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
