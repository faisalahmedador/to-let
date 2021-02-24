import adhouse from '../images/adhouse.jpg';
import apartment from '../images/landingPage.jpg';
import image1 from '../images/image2.jpg'

export const addDetails = [
  {
    id: 1,
    description: "2000 squre feet flat in Uttora for sell",
    area: "3000 sq.ft",
    location: " Uttora, Dhaka",
    specification: {
      bedroom: 4,
      bathroom: 2,
    },
    available: "10/11/2020",
    contact: "000000",
    price: 11000000,
    verified: true,
    img:[{ img: adhouse }, { img: apartment } ]
  },

  {
    id: 2,
    description: "3000 squre feet flat in Niketon for rent",
    area: "2000 sq.ft",
    location: "Niketon, Dhaka",
    specification: {
      bedroom: 2,
      bathroom: 2,
    },
    available: "20/10/2020",
    contact: "000000",
    price: 25000,
    verified: true,
    img:[{ img: image1 }, { img: adhouse }, {img: apartment}  ]
  },

  {
    id:3,
    description: "2000 squre feet flat in Badda for rent",
    area: "1500 sq.ft",
    location: " Badda, Dhaka",
    specification: {
      bedroom: 2,
      bathroom: 2,
    },
    available: "20/10/2020",
    contact: "000000",
    price: 20000,
    verified: false,
    img:[{ img: adhouse }, {img: apartment} , { img: image1 }]
  },
];

// export const catagory =[
//   {
//     id: 1,
//     type: 'duplex',
//   },
//   {
//     id: 2,
//     type: 'apartment',
//   },
//   {
//     id: 3,
//     type: 'familyhouse',
//   },
//   {
//     id: 4,
//     type: 'sublet',
//   },
//   {
//     id: 5,
//     type: 'duplex',
//   },
//   {
//     id: 6,
//     type: 'duplex',
//   }
  
// ]
