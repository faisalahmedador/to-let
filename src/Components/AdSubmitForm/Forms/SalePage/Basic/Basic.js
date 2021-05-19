import React, { createRef, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Basic = ({ handleNext }) => {
  const { register, errors, handleSubmit } = useForm();
  const [rooms, setRooms] = useState([{}]);
  const [roomProperties, setRoomProperties] = useState([
    {
      room_type: "",
      attached_bathroom: false,
      attached_balconies: false,
      window: "",
    },
  ]);

  const handleRoom = (e) => {
    e.preventDefault();
    let room_add = [...rooms, {}];
    let room_props = [
      ...roomProperties,
      {
        room_type: "",
        attached_bathroom: false,
        attached_balconies: false,
        window: "",
      },
    ];
    setRooms(room_add);
    setRoomProperties(room_props);
  };

  const handleChange = (index) => (e) => {
    e.preventDefault();
    let props_value = [...roomProperties];
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);

    props_value[index][name] = value;

    setRoomProperties(props_value);

    console.log(e.target.name, e.target.value);
  };

  const handleBath = (index) => {
    // e.preventDefault();
    console.log(index);
    let props_value = [...roomProperties];

    let value = props_value[index]["attached_bathroom"];
    console.log(value);

    props_value[index]["attached_bathroom"] = !value;

    setRoomProperties(props_value);

    // console.log(e.target.name, e.target.value);
  };

  const handleBalcony = (index) => {
    // e.preventDefault();
    console.log(index);
    let props_value = [...roomProperties];

    let value = props_value[index]["attached_balconies"];
    console.log(value);

    props_value[index]["attached_balconies"] = !value;

    setRoomProperties(props_value);

    // console.log(e.target.name, e.target.value);
  };

  const onSubmit = (data) => {
    data["room_details"] = roomProperties
    
    handleNext(data);
    // dispatch(adSubmitAction(data));
  };

  if (roomProperties) {
    console.log(roomProperties);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Basic Information</h2>
      <div className="row">
        <div className="col-md-3">
          <label>Catagory</label>
          <select name="catagory" ref={register({ required: true })}>
            <option>Choose a catagory</option>
            <option>Family House</option>
            <option>Office</option>
            <option>Shop</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>Size(sq. ft)</label>
          <span className="price-input" ref={register}>
            <input
              type="text"
              name="property_size"
              className="price-input-text"
            />
            <label className="pr-2">sq.ft</label>
          </span>
          {/* <input type="text" name="property_size" /> */}
        </div>
        <div className="col-md-3">
          <label>Facing</label>
          <select name="facing" ref={register}>
            <option>Choose a side</option>
            <option>East</option>
            <option>West</option>
            <option>North</option>
            <option>South</option>
          </select>
        </div>

        <div className="col-md-3">
          <label>Floor no</label>{" "}
          <select name="floor_no" ref={register({ required: true })}>
            <option>Choose a floor number</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>Floor type</label>{" "}
          <select name="floor_type" ref={register}>
            <option>Choose type of floor</option>
            <option>Tiled</option>
            <option>Mosaic</option>
            <option>Marble</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>Dining Type</label>{" "}
          <select name="Dining type" ref={register}>
            <option>Choose a type</option>
            <option>Space</option>
            <option>Room</option>
            <option>No dining space/room</option>
          </select>
        </div>
      </div>

      <h3 className="text-left">
        (Choose a room with its specification. This will help your client to
        understand better.)
      </h3>
      {rooms.map((item, index) => (
        <div className="row">
          <div className="col-md-3">
            <label>Room Type</label>
            <select name="room_type" onChange={handleChange(index)}>
              <option>Select a type</option>
              <option>Dining</option>
              <option>Drawing</option>
              <option>Master bedroom</option>
              <option>Bedroom</option>
              <option>kichen</option>
              <option>Prayer room</option>
              <option>Hall room</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-md-3">
            <label>Window on which side?</label>{" "}
            <select name="window" onChange={handleChange(index)}>
              <option>Choose a side</option>
              <option>no window</option>
              <option>East</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Attached Options</label>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center justify-content-start">
                <input
                  type="checkbox"
                  // checked={roomProperties[index].attached_bathroom}
                  name="attached_bathroom"
                  onChange={() => handleBath(index)}
                />
                <span> Attached Bathroom</span>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-start">
                <input
                  type="checkbox"
                  name="attached_balconies"
                  // defaultChecked={roomProperties[index].attached_bathroom}
                  onChange={() => handleBalcony(index)}
                />
                <span>Attached Balconies</span>
              </div>
            </div>
          </div>

          {/* <div className="col-md-3">
            <label>Has Attached Bathroom?</label>{" "}
            <div className="d-flex align-items-center justify-content-center mt-5">
              <input type="checkbox" name="attached_bathroom" />
              <span>Attached Bath</span>
            </div>

            <select name="attached_bathroom">
              <option>Choose a option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div> */}

          {/* <div className="col-md-3">
            <label>Has Attached Balconies?</label>{" "}
            <select name="attached_balconies">
              <option>Choose a option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div> */}

          {index === rooms.length - 1 ? (
            <div className="col-md-12">
              <div className="d-flex justify-content-end mt-5">
                <label></label>
                <button
                  className="room_button  p-3"
                  onClick={(e) => handleRoom(e)}
                >
                  Add more room
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}

      <div className="row">
        <div className="col-md-6">
          <label>Selling Price</label>
          <span className="price-input">
            <input
              type="number"
              name="price"
              className="price-input-text"
              ref={register({ required: true, min: 1000 })}
            />
            <label className="">BDT</label>
          </span>
        </div>

        {/* <div className="col-md-3">
          <label>Service Charge</label>
          <span className="price-input">
            <input
              type="number"
              name="price_service"
              className="price-input-text"
              ref={register}
            />
            <label className="">BDT</label>
          </span>
        </div> */}
       
        <div className="col-md-3">
          <label>Avialable from</label>{" "}
          <select name="avialable_from" ref={register({ required: true })}>
            <option>Choose a month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <div className="col-md-3">
          <label>Price Options</label>
          <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-start">
              <input type="checkbox" name="negotiable" ref={register} />
              <span> price negotiable</span>
            </div>
            {/* <div className="col-md-4 d-flex align-items-center justify-content-start">
              <input
                type="checkbox"
                name="electricity_included"
                ref={register}
              />{" "}
              <span>Electricity bill included</span>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-start">
              <input type="checkbox" name="gas_included" ref={register} />
              <span>Gas bill included</span>
            </div> */}
          </div>
        </div>
        {/* <div className="col-md-6">
          <label>Preferred rental</label>
          <select ref={register}>
            <option>small family</option>
            <option>male only</option>
            <option>female only</option>
          </select>
        </div> */}
        <div className="col-md-12">
          <div className="d-flex justify-content-center mt-5">
            <label></label>

            <input
              type="submit"
              name="next"
              value="next"
              className="room_button"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Basic;
