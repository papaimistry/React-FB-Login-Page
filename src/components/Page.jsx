import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

import "../styles/style.scss";

const Page = () => {
  const [value, setValue] = useState({
    email: "",
    pass: "",
  });

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <>
      <div className="header">
        <div className="head">
          <img
            src={require("../assets/WhatsApp Image 2023-03-08 at 11.41.47.jpg")}
            alt="Phone_Pic"
          />
        </div>
        <div className="head">
          <p>Get Facebook for Android and browser faster.</p>
        </div>
      </div>

      <div className="logo">
        <img src={require("../assets/Facebook-Logo.wine3.png")} alt="fbLogo" />
      </div>

      <div className="from">
        <div>
          <input
            className="input"
            type="text"
            placeholder="Mobile number or Email address"
            onChange={(event) =>
              setValue((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>

        <div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(event) =>
              setValue((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
        </div>

        <div>
          <button onClick={handleSubmit} id="log">
            Log In
          </button>
        </div>

        <div>
          <p id="fpass">Forgotten Password?</p>
        </div>

        <div className="black-lines">
          <p>or</p>
        </div>

        <div>
          <button id="newAcc">Create new account</button>
        </div>
      </div>

      <div className="lang">
        <div>
          <b>English (UK)</b>
        </div>
        <div>বাংলা</div>
        <div>हिन्दी</div>
        <div>اردو</div>
        <div>नेपाली</div>
        <div>Español</div>
        <div>Français (France)</div>
        <div>
          <button>
            <AiOutlinePlus />
          </button>
        </div>
      </div>

      <div className="about">About . Help . More</div>
      <div className="meta">Meta © 2023</div>
    </>
  );
};

export default Page;
