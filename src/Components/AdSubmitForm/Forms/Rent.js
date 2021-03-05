import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MultiImageInput from "react-multiple-image-input";

const Rent = () => {
  const crop = {
    unit: "px", // default, can be 'px' or '%'
    x: 200,
    y: 200,
    width: 200,
    height: 200,
  };

  document.getElementsByClassName("ck-voice-label").innerHTML =
    "Description(optional)";
  const [images, setImages] = useState({});
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="form-main">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-details">
            <h2>Basic Information</h2>

            <div className="row">
              <div className="col-md-3">
                <label>Catagory</label>
                <select name="catagory" ref={register({ required: true })}>
                  <option>Choose a catagory</option>
                  <option>Family House</option>
                  <option>Office</option>
                  <option>Shop</option>
                  <option>Bachelor</option>
                  <option>Hostel</option>
                  <option>Sublet</option>
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
                <label>Rooms</label>
                <select name="rooms" ref={register}>
                  <option>Select number of rooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
              <div className="col-md-3">
                <label>Bedroom</label>
                <select name="bedroom" ref={register}>
                  <option>Select number of bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>

              <div className="col-md-3">
                <label>Attached Bath room</label>{" "}
                <select name="attached_bathroom" ref={register}>
                  <option>Select number of bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>

              <div className="col-md-3">
                <label>Common Bath room</label>{" "}
                <select name="common_bathroom" ref={register}>
                  <option>Select number of bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
              <div className="col-md-3">
                <label>Balconies</label>{" "}
                <select name="balconies" ref={register}>
                  <option>Select number of balconies</option>
                  <option>N/A</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
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

            <br />
            <h2>Detailed Information</h2>
            <div className="row">
              <div className="col-md-3">
                <label>Price</label>
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

              <div className="col-md-3">
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
              </div>
              <div className="col-md-6">
                <label>Price Options</label>
                <div className="row">
                  <div className="col-md-4 d-flex align-items-center justify-content-start">
                    <input type="checkbox" name="negotiable" ref={register} />
                    <span> price negotiable</span>
                  </div>
                  <div className="col-md-4 d-flex align-items-center justify-content-start">
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
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label>Avialable from</label>{" "}
                <select
                  name="avialable_from"
                  ref={register({ required: true })}
                >
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
              <div className="col-md-6">
                <label>Preferred rental</label>
                <select ref={register}>
                  <option>small family</option>
                  <option>male only</option>
                  <option>female only</option>
                </select>
              </div>

              <div className="col-md-12">
                <CKEditor
                  // ref={register}
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    ClassicEditor.create(document.querySelector("#editor"), {
                      toolbar: [
                        "bold",
                        "italic",
                        "link",
                        "undo",
                        "redo",
                        "numberedList",
                        "bulletedList",
                      ],
                    }).catch((error) => {
                      console.log(error);
                    });
                    console.log("Editor is ready to use!", editor.config);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <div className="col-md-12">
                <label>Upload images</label>
                <MultiImageInput
                  // ref={register({ required: true})}
                  images={images}
                  setImages={setImages}
                  cropConfig={{ crop, ruleOfThirds: false }}
                  theme="light"
                />
              </div>
            </div>

            <h2>Other facilities(optional)</h2>
            <div className="row">
              {/* <div className="col-md-3">
                <input type="radio" name="lift" /> Lift facilities
              </div> */}
              <div className="col-md-3 d-flex align-items-center justify-content-start">
                <input type="checkbox" name="lift" ref={register} />
                <span>Lift facilities</span>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-start">
                <input type="checkbox" name="generator" ref={register}/>
                <span>Generator facilities</span>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-start">
                <input type="checkbox" name="guard" ref={register}/>
                <span>Security guard</span>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-start">
                <input type="checkbox" name="parking" ref={register}/>
                <span>Parking facilities</span>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-start">
                <input type="checkbox" name="gas" ref={register}/>
                <span>Gas line</span>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-start">
                <input type="checkbox" name="cctv" ref={register}/>
                <span>CCTV facilities</span>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-start">
                <input type="checkbox" name="wifi" ref={register}/>
                <span>WIFI facilities</span>
              </div>
              {/* <div className="col-md-3">
                <input type="radio" name="generator" /> Generator facilities
              </div>
              <div className="col-md-3">
                <input type="radio" name="guard" /> Security guard
              </div>
              <div className="col-md-3">
                <input type="radio" name="parking" /> Parking facilities
              </div>
              <div className="col-md-3">
                <input type="radio" name="gas" /> Gas line
              </div>
              <div className="col-md-3">
                <input type="radio" name="cctv" /> CCTV facilities
              </div>
              <div className="col-md-3">
                <input type="radio" name="wifi" /> WIFI facilities
              </div> */}
            </div>
            <h2>Location</h2>
            <div className="row">
              <div className="col-md-6">
                <label>District</label>
                <select name="district" ref={register({ required: true})}>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Khulna</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Area</label>
                <select name="area" ref={register({required: true})}>
                  <option>B.baria</option>
                  <option>Pirojpur</option>
                  <option>Asulia</option>
                </select>
              </div>
              <div className="col-md-4">
                <label>Sector no(optional)</label>
                <input type="text" name="sector" ref={register}/>
              </div>
              <div className="col-md-4">
                <label>Road no(optional)</label>
                <input type="text" name="road" ref={register}/>
              </div>
              <div className="col-md-4">
                <label>House no(optional)</label>
                <input type="text" name="house" ref={register}/>
              </div>
            </div>
            <h2>Contact details</h2>
            <div className="row">
              <div className="col-md-6">
                <label>Name</label>
                <input type="text" name="name" ref={register({required: true, maxLength: 20})}/>
              </div>
              <div className="col-md-6">
                <label>Email</label>
                <input type="text" name="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/>
              </div>
              <div className="col-md-6">
                <label>Mobile number</label>
                <input type="text" name="mobile1" ref={register({ required: true, min: 11})} />
              </div>
              <div className="col-md-6">
                <label>Mobile number(optional)</label>
                <input type="text" name="mobile 2" ref={register}/>
              </div>
            </div>
          </div>
          <input type="submit" name="submit" className="form_submit" />
        </form>
      </div>
    </div>
  );
};

export default Rent;
