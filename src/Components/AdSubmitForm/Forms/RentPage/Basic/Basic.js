import React, { createRef, useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

const Basic = ({ handleNext }) => {
  const { register,  handleSubmit,formState: { errors } } = useForm();
  const [rooms, setRooms] = useState([]);
  const [roomProperties, setRoomProperties] = useState([
    {
      room_type: "",
      attached_bathroom: false,
      attached_balconies: false,
      window: "",
    },
  ]);

  const handleRoom = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let room_add = [],
      room_props = [];

    for (let i = 0; i < e.target.value; i++) {
      room_add = [...room_add, {}];
      room_props = [
        ...room_props,
        {
          room_type: "",
          attached_bathroom: false,
          attached_balconies: false,
          window: "",
        },
      ];
    }

    // let room_props = [
    //   ...roomProperties,
    //   {
    //     room_type: "",
    //     attached_bathroom: false,
    //     attached_balconies: false,
    //     window: "",
    //   },
    // ];
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
    data["room_details"] = roomProperties;

    handleNext(data);
    // dispatch(adSubmitAction(data));
  };

  if (roomProperties) {
    console.log(roomProperties);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Basic Information</h2>
      <Container
        fluid
        style={{
          backgroundColor: "rgba(113, 94, 241, .8)",
          padding: "10px 10px",
          borderRadius: ".5rem",
          boxShadow: "0 0 9px -2px rgba(0,0,0,.5)",
        }}
      >
        <Form.Row>
          <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
            <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
              Catagory
            </p>

            <Form.Control
              as="select"
              size="lg"
              name="catagory"
              ref={register({ required: true })}
            >
              <option disabled>Choose a catagory</option>
              <option>Family House</option>
              <option>Office</option>
              <option>Shop</option>
              <option>Bachelor</option>
              <option>Hostel</option>
              <option>Sublet</option>
            </Form.Control>
            {errors && <p>error</p>}
          </Col>
          <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
            <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
              Size(sq. ft)
            </p>
            {/* <span className="price-input" ref={register}>
              <input
                type="text"
                name="property_size"
                className="price-input-text"
              />
              <label className="pr-2">sq.ft</label>
            </span> */}

            <Form.Control type="text" size="lg"></Form.Control>
            {/* <input type="text" name="property_size" /> */}
          </Col>
          <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
            <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
              facing
            </p>
            <Form.Control name="facing" ref={register} as="select" size="lg">
              <option disabled>choose a side</option>
              <option>On front side</option>
              <option>On Back side</option>
            </Form.Control>
          </Col>

          <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
            <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
              Floor
            </p>
            <Form.Control
              as="select"
              size="lg"
              name="floor_no"
              ref={register({ required: true })}
            >
              <option disabled>Choose a floor number</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </Col>
          <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
            <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
              Floor Type
            </p>
            <Form.Control
              as="select"
              size="lg"
              name="floor_type"
              ref={register}
            >
              <option disabled>Choose type of floor</option>
              <option>Tiled</option>
              <option>Mosaic</option>
              <option>Marble</option>
              <option>Other</option>
            </Form.Control>
          </Col>
          <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
            <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
              Dining Type
            </p>
            <Form.Control
              as="select"
              size="lg"
              name="Dining type"
              ref={register}
            >
              <option>Choose a type</option>
              <option>Space</option>
              <option>Room</option>
              <option>No dining space/room</option>
            </Form.Control>
          </Col>

          <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
            <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
              number of rooms
            </p>
            <Form.Control
              as="select"
              size="lg"
              name="rooms"
              ref={register}
              onChange={(e) => handleRoom(e)}
            >
              <option>Choose a number</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Form.Control>
          </Col>
        </Form.Row>

        {rooms.map((item, index) => (
          <Form.Row>
            <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
              <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
                Room Type
              </p>
              <Form.Control
                as="select"
                size="lg"
                name="room_type"
                onChange={handleChange(index)}
              >
                <option disabled>Select a type</option>
                <option>Dining</option>
                <option>Drawing</option>
                <option>Master bedroom</option>
                <option>Bedroom</option>
                <option>kichen</option>
                <option>Prayer rsoom</option>
                <option>Hall room</option>
                <option>Other</option>
              </Form.Control>
            </Col>

            <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
              <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
                Window on which side?
              </p>
              <Form.Control
                as="select"
                size="lg"
                name="window"
                onChange={handleChange(index)}
              >
                <option>Choose a side</option>
                <option>no window</option>
                <option>East</option>
                <option>West</option>
                <option>North</option>
                <option>South</option>
              </Form.Control>
            </Col>

            <Col lg={6} xs={12} style={{ margin: "5px 0" }}>
              <Form.Row>
                <Col
                  lg={6}
                  xs={12}
                  style={{ margin: "5px 0" }}
                  className="d-flex align-items-center justify-content-start mt-5"
                >
                  <Form.Control
                    type="checkbox"
                    size="lg"
                    style={{width: 'auto'}}
                    name="attached_bathroom"
                    onChange={() => handleBath(index)}
                  />
                  {/* <input
                    type="checkbox"
                    // checked={roomProperties[index].attached_bathroom}
                    name="attached_bathroom"
                    onChange={() => handleBath(index)}
                  /> */}
                  <span style={{ margin: "5px", color: "white", textAlign: "left" }} className=''> Attached Bathroom</span>
                </Col>
                <Col
                  lg={6}
                  xs={12}
                  style={{ margin: "5px 0"}}
                  className="d-flex align-items-center justify-start mt-5"
                >
                  {/* <input
                    type="checkbox"
                    name="attached_balconies"
                    // defaultChecked={roomProperties[index].attached_bathroom}
                    onChange={() => handleBalcony(index)}
                  /> */}
                  <Form.Control
                    type="checkbox"
                    size="lg"
                    style={{width: 'auto'}}
                    name="attached_balconies"
                    onChange={() => handleBalcony(index)}
                  />
                  <span style={{ margin: "5px", color: "white", textAlign: "left" }} className=''>Attached Balconies</span>
                </Col>
              </Form.Row>
            </Col>
          </Form.Row>
        ))}

        <Form.Row>
        <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
        <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
                Price
              </p>
          {/* <span className="price-input">
            <input
              type="number"
              name="price"
              className="price-input-text"
              ref={register({ required: true, min: 1000 })}
            />
            <label className="">BDT</label>
          </span> */}
          <Form.Control type='number' size='lg '  name="price"
              className=""
              ref={register({ required: true, min: 1000 })}/>
        </Col>

        <Col lg={3} xs={12} style={{ margin: "5px 0" }}>
        <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
                Service Charge
              </p>
          {/* <span className="price-input">
            <input
              type="number"
              name="price_service"
              className="price-input-text"
              ref={register}
            />
            <label className="">BDT</label>
          </span> */}
          <Form.Control type='number' size='lg ' name="price_service"
              className="price-input-text"
              ref={register}/>
        </Col>
        <Col lg={6} xs={12} style={{ margin: "5px 0" }}>
           <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
                Price Options
              </p>
          <Form.Row>
            <Col lg={4} xs={12} className="d-flex align-items-center justify-content-start">
              {/* <input type="checkbox" name="negotiable" ref={register} />
              <span> price negotiable</span> */}
              <Form.Control
                    type="checkbox"
                    size="lg"
                    style={{width: 'auto'}}
                    name="negotiable" ref={register} 
                  />
                  <span style={{  color: "white", textAlign: "left" }} className=''>price negotiable</span>
            </Col>
            <Col lg={4} xs={12} className="d-flex align-items-center justify-content-start">
              {/* <input
                type="checkbox"
                name="electricity_included"
                ref={register}
              /> */}

              <Form.Control
                    type="checkbox"
                    size="lg"
                    style={{width: 'auto'}}
                    name="electricity_included"
                ref={register} 
                  />
              <span style={{  color: "white", textAlign: "left" }} className=''>Electricity bill included</span>
            </Col>
            <Col lg={4} xs={12} className="d-flex align-items-center justify-content-start">
              {/* <input type="checkbox" name="gas_included" ref={register} /> */}
              <Form.Control
                    type="checkbox"
                    size="lg"
                    style={{width: 'auto'}}
                    name="gas_included" ref={register} />
                  
              <span style={{  color: "white", textAlign: "left" }} className=''>Gas bill included</span>
            </Col>
          </Form.Row>
        </Col>
        <Col lg={6} xs={12} style={{ margin: "5px 0" }}>
        <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
                Available form
              </p>
          <Form.Control
                as="select"
                size="lg" name="avialable_from" ref={register({ required: true })}>
            <option disabled>Choose a month</option>
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
          </Form.Control>
        </Col>
        <Col lg={6} xs={12} style={{ margin: "5px 0" }}>
        <p style={{ margin: "5px", color: "white", textAlign: "left" }}>
                Preferred rental
              </p>
          <Form.Control
                as="select"
                size="lg" ref={register}>
            <option>small family</option>
            <option>male only</option>
            <option>female only</option>
          </Form.Control>
        </Col>
        <Col lg={12} xs={12} style={{ margin: "5px 0" }}>
          <div className="d-flex justify-content-center mt-5">
            <label></label>

            <input
              type="submit"
              name="next"
              value="next"
              className="room_button"
            />
          </div>
        </Col>
      </Form.Row>
      </Container>

      {/* <h3 className="text-left">
        (Choose a room with its specification. This will help your client to
        understand better.)
      </h3> */}

     
    </Form>
  );
};

export default Basic;
