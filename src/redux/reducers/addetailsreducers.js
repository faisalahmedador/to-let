import {
  CHANGE_IMAGE_1,
  CHANGE_IMAGE_2,
  CHANGE_IMAGE_3,
  CHANGE_IMAGE_4,
  // UPDATE_IMAGE,
} from "../Constants";
import img1 from "../../Assets/images/image1.jpg";
import img2 from "../../Assets/images/image2.jpg";
import img3 from "../../Assets/images/image3.jpg";
import img4 from "../../Assets/images/image4.jpg";
import img5 from "../../Assets/images/image5.jpg";

const initialImage = {
  bigImage: img1,
  smallImage1: img2,
  smallImage2: img3,
  smallImage3: img4,
  smallImage4: img5,
};

export const Add = (state = initialImage, action = {}) => {
  let image = state.bigImage;
  switch (action.type) {
    case CHANGE_IMAGE_1:
      return { ...state, smallImage1: image, bigImage: action.payload };
    case CHANGE_IMAGE_2:
      return { ...state, smallImage2: image, bigImage: action.payload };
    case CHANGE_IMAGE_3:
      return { ...state, smallImage3: image, bigImage: action.payload };
    case CHANGE_IMAGE_4:
      return { ...state, smallImage4: image, bigImage: action.payload };
    // case UPDATE_IMAGE:
    //   return {
    //     ...state,
    //     bigImage: action.payload.bigImage,
    //     smallImage1: action.payload.smallImage1,
    //     smallImage2: action.payload.smallImage2,
    //     smallImage3: action.payload.smallImage3,
    //     smallImage4: action.payload.smallImage4,
    //   };
    default:
      return state;
  }
};
