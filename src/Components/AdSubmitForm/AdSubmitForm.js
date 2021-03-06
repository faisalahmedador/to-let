import React, { useEffect, useState } from "react";
import "./_adsubmitform.scss";
import Rent from "./Forms/Rent";

import Sale from "./Forms/Sale";
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
    // document.getElementById(id).style.borderTop = "2px solid";
    // document.getElementById(id).style.boxShadow =
    //   "0px 0px 15px -5px rgba(0, 0, 0, 0.68) !important";

    if (
      document.getElementById("rent").classList.contains("type_focused")
    ) {
      document.getElementById("rent").classList.remove("type_focused");
    }

    if (
      document.getElementById("sale").classList.contains("type_focused")
    ) {
      document.getElementById("sale").classList.remove("type_focused");
    }

      document.getElementById(id).className += ' type_focused'
    // Cookies.set("selected", { value, id });

    // for (var i = 1; i <= 2; i++) {
    //   if (i !== value) {
    //     if (i === 1) {
    //       document.getElementById("rent").style.borderTop = "none";
    //       // document.getElementById(id).style.boxShadow = "none";
    //     }

    //     if (i === 2) {
    //       document.getElementById("sale").style.borderTop = "none";
    //       // document.getElementById(id).style.boxShadow = "none";
    //     }
    //   }
    // }
  };

  useEffect(() => {
    if (!set) {
      setStep(1);
      document.getElementById('rent').className += ' type_focused'
      set = true;
    }
  }, [set]);

  return (
    <div className="p-3 ad-submit-main">
      <div className="tabs">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item mr-5" >
            <a
              className="nav-link" id="rent"
              href="#"
              onClick={() => handleStep(1, "rent")}
            >
              Rent
            </a>
          </li>

          <li className="nav-item" >
            <a
              className="nav-link" id="sale"
              href="#"
              onClick={() => handleStep(2, "sale")}
            >
              Sale
            </a>
          </li>
        </ul>
      </div>
      <div>
        {step === 1 && <Rent />}

        {step === 2 && <Sale />}
      </div>
    </div>
  );
};

export default AdSubmitForm;
