import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Make sure to create this CSS file

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error state
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  // Validation function
  const validation = () => {
    let isValid = true;

    if (fullName.trim() === "") {
      setFullNameError("Full name is empty");
      isValid = false;
    }
    if (email === "" || !email.includes("@")) {
      setEmailError("Email is empty or invalid");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is empty");
      isValid = false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  // Register function
  const handleRegister = async (e) => {
    e.preventDefault();
    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!validation()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        toast.error(errorMessage);
      } else {
        toast.success("Registration successful! Please check your email.");
        navigate("/login");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-box shadow-lg rounded">
        <div className="row">
          {/* Right Side - Form */}
          <div className="col-md-12 p-4 d-flex flex-column justify-content-center">
            <h2 className="text-center mb-4 text-black">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group mb-3">
                <label className="text-black">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
                {fullNameError && <p className="text-danger">{fullNameError}</p>}
              </div>

              <div className="form-group mb-3">
                <label className="text-black">Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {emailError && <p className="text-danger">{emailError}</p>}
              </div>

              <div className="form-group mb-3">
                <label className="text-black">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {passwordError && <p className="text-danger">{passwordError}</p>}
              </div>

              <div className="form-group mb-3">
                <label className="text-black">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                {confirmPasswordError && (
                  <p className="text-danger">{confirmPasswordError}</p>
                )}
              </div>

              <button type="submit" className="btn-navy w-100">
                Register
              </button>

              <div className="text-center mt-3">
                <p className="text-black">
                  Already have an account?{" "}
                  <a href="../login" className="text-blue">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
