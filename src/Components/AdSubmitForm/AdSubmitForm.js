import React, { useEffect, useState } from "react";
import "./_adsubmitform.scss";
import Residential from "./Forms/Residential";
import Commercial from "./Forms/Commercial";
import Bachelor from "./Forms/Bachelor";
import Sell from "./Forms/Sell";
// import Cookies from "js-cookie";

const AdSubmitForm = () => {
  const [step, setStep] = useState(0);

  let set = false;

  //   useEffect(() => {
  //     if (editProfile) {
  //       document.getElementById("edit-profile").className += " account-focused";
  //     }
  //   }, [editProfile]);

  const handleStep = (value, id) => {
    setStep(value);
    document.getElementById(id).style.borderTop = "2px solid";
    // Cookies.set("selected", { value, id });

    for (var i = 1; i <= 4; i++) {
      if (i !== value) {
        if (i === 1) {
          document.getElementById("residential").style.borderTop = "none";
        }
        if (i === 2) {
          document.getElementById("commercial").style.borderTop = "none";
        }
        if (i === 3) {
          document.getElementById("bachelor_house").style.borderTop = "none";
        }
        if (i === 4) {
          document.getElementById("sell").style.borderTop = "none";
        }
      }
    }
  };

  useEffect(() => {
    if (!set) {
      setStep(1);
      document.getElementById("residential").style.borderTop = "2px solid";
      set = true
    }
  }, [set]);

  return (
    <div className="p-3 ad-submit-main">
      <div className="tabs">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item" id="residential">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleStep(1, "residential")}
            >
              Residensial
            </a>
          </li>
          <li className="nav-item" id="commercial">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleStep(2, "commercial")}
            >
              Commercial
            </a>
          </li>
          <li className="nav-item" id="bachelor_house">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleStep(3, "bachelor_house")}
            >
              Bachelor
            </a>
          </li>

          <li className="nav-item" id="sell">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleStep(4, "sell")}
            >
              Sell
            </a>
          </li>
        </ul>
      </div>
      <div>
        {step === 1 && <Residential />}
        {step === 2 && <Commercial />}
        {step === 3 && <Bachelor />}
        {step === 4 && <Sell />}
      </div>
    </div>
  );
};

export default AdSubmitForm;
