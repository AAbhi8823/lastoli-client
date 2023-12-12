import React, { useState } from "react";
import "./SignIn.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import SignUp from "../SignUp/SignUp";

export default function SignIn({ onClose }) {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [loginMode, setLoginMode] = useState("phone");
  const countryOptions = [
    { label: "+1 USA", value: "+1", flag: "🇺🇸" },
    { label: "+44 UK", value: "+44", flag: "🇬🇧" },
    { label: "+91 In", value: "+91", flag: "🇮🇳" },
  ];
  const handleMobileNumberChange = (event) => {
    const cleanedInput = event.target.value.replace(/\D/g, "");
    console.log("cleanedInput.length::>>>>", cleanedInput.length);
    if (cleanedInput.length <= 10) {
      setPhoneNumber(cleanedInput);
    } else {
      return;
    }
  };

  const handleLoginModeChange = () => {
    setLoginMode((prevMode) => (prevMode === "phone" ? "email" : "phone"));
  };

  const handleCountryCodeChange = (selectedOption) => {
    setSelectedCountryCode(selectedOption);
  };

  const renderLoginContent = () => {
    if (loginMode === "phone") {
      return (
        <>
          <div className="login-section-item">
            <Select
              id="countryCode"
              options={countryOptions}
              onChange={handleCountryCodeChange}
              value={selectedCountryCode}
              getOptionLabel={(option) => (
                <span>
                  {option.flag} {option.label}
                </span>
              )}
              getOptionValue={(option) => option.value}
            />
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleMobileNumberChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="get-topbutton">
            <button>GET OTP</button>
          </div>
        </>
      );
    } else if (loginMode === "email") {
      return (
        <div className="login-section-item-email">
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
        </div>
      );
    }
  };

  return (
    <div id="login-popup" className="login-popup">
      <div className="leftbanner">lefe</div>
      <div className="login-section">
        <p>Login/Sign up</p>
        {renderLoginContent()}
        <div className="line">or continue with</div>
        <div className="login-with-email">
          <button onClick={() => handleLoginModeChange("email")}>
            Login with Email/Password
          </button>
        </div>
      </div>
      <button className="cancel-button" onClick={onClose}>
        <IoIosCloseCircleOutline />
      </button>
    </div>
  );
}
