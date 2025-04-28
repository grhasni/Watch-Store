import React from "react";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    // console.log(email, password);
    // Add your login logic here, such as sending a request to your server
    // or checking the credentials against a database.
  };

  return (
    <div className="login text-center" style={{ marginTop: "75px" }}>
      <div
        className="cancel"
        onClick={() => {
          setIsLoggedIn(true);
          navigate("/");
        }}
      >
        <MdCancel color="#c5a75a" />
      </div>
      <div className="heading">Login Information</div>
      <div className="text">
        Please input your email and login to your account to get access to your
        Profile.
      </div>
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="email"
          id="email"
          className="m-2"
          placeholder="Enter Email.."
          required
          style={{ height: "50px", width: "100%" }}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter Password.."
          required
          className="m-2"
          style={{ height: "50px", width: "100%" }}
        />
        <div className="forget">Forget Password?</div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            type="submit"
            style={{
              height: "50px",
              width: "100%",
              color: "white",
              backgroundColor: "#c5a75a",
              border: "none",
            }}
          >
            Log In
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>
          By clicking Login you are agreeing with our{" "}
          <Link to="/*">Terms & Condition</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
