import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MultiImageInput from "react-multiple-image-input";

const Detailed = ({handleNext, handleBack}) =>{
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        handleNext(data);
        // dispatch(adSubmitAction(data));
      };

      const crop = {
        unit: "px", // default, can be 'px' or '%'
        x: 200,
        y: 200,
        width: 200,
        height: 200,
      };

      const [images, setImages] = useState({});
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Detailed Information</h2>
        <div className="row">
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
              style={{ border: "1px solid rgba(0,0,0,.3)" }}
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
            <input type="checkbox" name="generator" ref={register} />
            <span>Generator facilities</span>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-start">
            <input type="checkbox" name="guard" ref={register} />
            <span>Security guard</span>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-start">
            <input type="checkbox" name="parking" ref={register} />
            <span>Parking facilities</span>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-start">
            <input type="checkbox" name="gas" ref={register} />
            <span>Gas line</span>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-start">
            <input type="checkbox" name="cctv" ref={register} />
            <span>CCTV facilities</span>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-start">
            <input type="checkbox" name="wifi" ref={register} />
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
          <div className="col-md-12">
            <div className="d-flex justify-content-center mt-5">
              <label></label>
              <button
                className="room_button  p-3 mr-2"
                onClick={(e) => handleBack(e)}
              >
                Back
              </button>
              <input
                type="submit"
                name="next"
                className="ml-2 room_button"
              />
            </div>
          </div>
        </div>
      </form>
    )
}

export default Detailed