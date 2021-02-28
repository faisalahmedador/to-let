import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MultiImageInput from "react-multiple-image-input";

const Residensial = () => {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  const [images, setImages] = useState({});
  const { register, errors, handleSubmit } = useForm();
  return (
    <div className='residential-form-main'>
    <div className='container'>
      <form>
      <div className='residential-form'>
        <h2>Basic Information</h2>
        <div className="row">
          <div className="col-md-3">
            <label>Property Size(sq. ft)</label>
            <input type="text" name="property_size" />
          </div>
          <div className="col-md-3">
            <label>Facing</label>
            <select name="facing">
              <option>Choose a side</option>
              <option>East</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
            </select>
          </div>
          <div className="col-md-3">
            <label>Rooms</label>
            <select name="rooms">
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
            <select name="bedroom">
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
            <select name="attached_bathroom">
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
            <select name="common_bathroom">
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
            <select name="balconies">
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
            <select name="floor_no">
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
            <select name="floor_type">
              <option>Choose type of floor</option>
              <option>Tiled</option>
              <option>Mosaic</option>
              <option>Marble</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-3">
            <label>Dining Position</label>{" "}
            <select name="Dining position">
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
          <div className="col-md-6">
            <label>Price</label>
            <span className='price-input'>
              <input type="text" name="price" className='price-input-text'/>
              <label>BDT</label>
            </span>
          </div>
          <div className="col-md-6">
            <label>Price Options</label>
            <div className="row">
              <div className="col-md-4">
                <input type="radio" name="negotiable" /> price negotiable
              </div>
              <div className="col-md-4">
                <input type="radio" name="electricity_included" /> Electricity
                bill included
              </div>
              <div className="col-md-4">
                <input type="radio" name="gas_included" /> Gas bill included
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <input type="radio" name="avialable_from" /> Available from
          </div>
          <div className="col-md-6">
            <label>Preferred rental</label>
            <select>
              <option>small family</option>
              <option>male only</option>
              <option>female only</option>
            </select>
          </div>

          <div className="col-md-12">
            <label>Description(optional)</label>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
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
              images={images}
              setImages={setImages}
              cropConfig={{ crop, ruleOfThirds: false }}
            />
          </div>
        </div>

        <h2>Other facilities(optional)</h2>
        <div className="row">
          <div className="col-md-3">
            <input type="radio" name="lift" /> Lift facilities
          </div>
          <div className="col-md-3">
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
          </div>
        </div>
        <h2>Location</h2>
        <div className="row">
          <div className="col-md-6">
            <label>District</label>
            <select name="district">
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Khulna</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Area</label>
            <select name="area">
              <option>B.baria</option>
              <option>Pirojpur</option>
              <option>Asulia</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Sector no(optional)</label>
            <input type="text" name="sector" />
          </div>
          <div className="col-md-4">
            <label>Road no(optional)</label>
            <input type="text" name="road" />
          </div>
          <div className="col-md-4">
            <label>House no(optional)</label>
            <input type="text" name="house" />
          </div>
        </div>
        <h2>Contact details</h2>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <imput type='text' name='name' />
          </div>
          <div className="col-md-6">
            <label>Area</label>
            <input type='text' name='area'/>
          </div>
          <div className="col-md-6">
            <label>Mobile number</label>
            <input type="text" name="mobile1" />
          </div>
          <div className="col-md-6">
            <label>Mobile number(optional)</label>
            <input type="text" name="mobile 2" />
          </div>
          <div className="col-md-4">
            <label>House no(optional)</label>
            <input type="text" name="house" />
          </div>
        </div>

        <input type='submit' name = 'submit' />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Residensial;
