import React, { useState } from "react";
import "../../Components/Login/style.scss";
import logo from "../../img/logo.png";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import {Modal } from "react-bootstrap";

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [signin, setSignin] = useState({});

  

  const singinHandel = (e) => {
    setSignin({...signin,[e.target.name]: e.target.value})
  };

  const singinSubmit = (e) => {
    e.preventDefault();
    console.log(signin);
  };

  return (
    <>
      {openModal && (
        <div className="main-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Create Your Account</Modal.Title>
              <AiOutlineClose onClick={() => setOpenModal(false)} />
            </Modal.Header>
            <form>
              <Modal.Body>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control my-4"
                  // onChange={HandelChange}
                  // value={state.name}
                  name="name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  // onChange={HandelChange}
                  className="form-control my-4"
                  // value={state.email}
                  name="email"
                />
                <input
                  type="Text"
                  placeholder="Phone"
                  className="form-control my-4"
                  // onChange={HandelChange}
                  // value={state.phone}
                  name="phone"
                />
                <input
                  type="Password"
                  placeholder="Password"
                  className="form-control my-4"
                  // onChange={HandelChange}
                  // value={state.password}
                  name="password"
                />
              </Modal.Body>

              <Modal.Footer>
                <button className="w-100 my-4" type="submit">
                  Sign Up
                </button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </div>
      )}

      {login && (
        <div className="main-modal">
          <Modal.Dialog>
            <div className="icon">
              <IoLogoTwitter />
            </div>
            <Modal.Header>
              <Modal.Title>Sign in to Twitter</Modal.Title>
              <AiOutlineClose onClick={() => setLogin(false)} />
            </Modal.Header>
            <form onSubmit={singinSubmit}>
              <Modal.Body>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control my-4"
                  onChange={singinHandel}
                  name="Email"
                />

                <input
                  type="Password"
                  placeholder="Password"
                  className="form-control my-4"
                  onChange={singinHandel}
                  name="Password"
                />
              </Modal.Body>

              <Modal.Footer>
                <button className="w-100 my-4" type="submit">
                  Sign in
                </button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </div>
      )}

      <div className="signup">
        <div className="row">
          <div className="col-md-6 img">
            <IoLogoTwitter />
          </div>
          <div className="col-md-6 img1">
            <div className="container">
              <img src={logo} alt="" />
              <h1>Happening now</h1>
              <h3>Join Twitter today.</h3>
              <button className="btn2" onClick={() => setOpenModal(true)}>
                Sign up with phone or email
              </button>
              <p>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>

              <h5>Already have an account?</h5>
              <button className="btn1" onClick={() => setLogin(true)}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
