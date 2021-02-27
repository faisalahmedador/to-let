import React, { useEffect, useState } from "react";
import "./_adsubmitform.scss";

const AdSubmitForm = () => {
  const [step, setStep] = useState(0);

  //   useEffect(() => {
  //     if (editProfile) {
  //       document.getElementById("edit-profile").className += " account-focused";
  //     }
  //   }, [editProfile]);

  const handleStep = (value, id) => {
    setStep(value);
    document.getElementById(id).style.borderTop = "2px solid";

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
            
        </div>

    </div>
  );
};

export default AdSubmitForm;
