import React from "react";
import { useForm } from "react-hook-form";

const Info = ({handleNext,handleBack}) => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        handleNext(data);
        // dispatch(adSubmitAction(data));
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Location</h2>
      <div className="row">
        <div className="col-md-6">
          <label>District</label>
          <select name="district" ref={register({ required: true })}>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Khulna</option>
          </select>
        </div>
        <div className="col-md-6">
          <label>Area</label>
          <select name="area" ref={register({ required: true })}>
            <option>B.baria</option>
            <option>Pirojpur</option>
            <option>Asulia</option>
          </select>
        </div>
        <div className="col-md-4">
          <label>Sector no(optional)</label>
          <input type="text" name="sector" ref={register} />
        </div>
        <div className="col-md-4">
          <label>Road no(optional)</label>
          <input type="text" name="road" ref={register} />
        </div>
        <div className="col-md-4">
          <label>House no(optional)</label>
          <input type="text" name="house" ref={register} />
        </div>
      </div>
      <h2>Contact details</h2>
      <div className="row">
        <div className="col-md-6">
          <label>Name</label>
          <input
            type="text"
            name="name"
            ref={register({ required: true, maxLength: 20 })}
          />
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input
            type="text"
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
        </div>
        <div className="col-md-6">
          <label>Mobile number</label>
          <input
            type="text"
            name="mobile1"
            ref={register({ required: true, min: 11 })}
          />
        </div>
        <div className="col-md-6">
          <label>Mobile number(optional)</label>
          <input type="text" name="mobile 2" ref={register} />
        </div>
        <div className="col-md-12">
          <div className="d-flex justify-content-center mt-5">
            <label></label>
            <div className="d-flex justify-content-center mt-5">
              <label></label>
              <button
                className="room_button  p-3 mr-2"
                onClick={(e) => handleBack(e)}
              >
                Back
              </button>
              <input type="submit" name="submit" className="ml-2 room_button" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Info;
