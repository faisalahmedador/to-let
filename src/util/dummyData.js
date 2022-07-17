export const questionList = [
  // {
  //   question: "কি চাচ্ছেন?",
  //   radioOptions: [
  //     {
  //       id: 1,
  //       value: '',
  //       label: "বাসা ভাড়া দিতে",
  //     },
  //     {
  //       id: 2,
  //       value: '',
  //       label: "বাসা কিনতে",
  //     },
  //   ],
  // },
  {
    question: "কি ভাড়া দিবেন ?",
    value: 'type',
    radioOptions: [
      { id: 1, label_bn: "ফ্লাট", label: 'flat'},
      { id: 2, label_bn: "আপার্টমেন্ট", label: 'apartment'},
      { id: 3, label_bn: "ছেলেদের মেস", label: 'mass_for_male'},
      { id: 4, label_bn: "মেয়েদের মেস", label: 'mass_for_female'},
      { id: 5, label_bn: "সাবলেট", label: 'sublet'},
      { id: 6, label_bn: "ডুপ্লেক্স", label: 'duplex'},
      { id: 7, label_bn: "ফরেনার আপার্টমেন্ট", label: 'foreigner apartment'},
      { id: 8, label_bn: "পেয়িং গেস্ট", label: 'paying guest'},
    ],
  },

  {
    question: "কয় তলায় ?",
    value: 'floor',
    dropOptions: [
      { id: 1, label_bn: "১", label: '1' },
      { id: 2, label_bn: "২", label: '2' },
      { id: 3, label_bn: "৩", label: '3'},
      { id: 4, label_bn: "৪", label: '4'},
      { id: 5, label_bn: "৫", label: '5'},
      { id: 6, label_bn: "৬", label: '6'},
      { id: 7, label_bn: "৭", label: '7'},
      { id: 8, label_bn: "৮", label: '8'},
      { id: 9, label_bn: "৯", label: '9'},
      { id: 10, label_bn: "১০", label: '10'},
      { id: 11, label_bn: "১১", label: '11'},
    ],
  },
  {
    question: "কয় রুম?",
    value: 'rooms',
    dropOptions: [
      { id: 1, label_bn: "১", label: '1' },
      { id: 2, label_bn: "২", label: '2' },
      { id: 3, label_bn: "৩", label: '3'},
      { id: 4, label_bn: "৪", label: '4'},
      { id: 5, label_bn: "৫", label: '5'},
      { id: 6, label_bn: "৬", label: '6'},
      { id: 7, label_bn: "৭", label: '7'},
      { id: 8, label_bn: "৮", label: '8'},
      { id: 9, label_bn: "৯", label: '9'},
      { id: 10, label_bn: "১০", label: '10'},
      { id: 11, label_bn: "১১", label: '11'},
    ],
  },
  {
    question: "টয়লেট/ওয়াশরুম কয়টি ?",
    value: 'toilet',
    dropOptions: [
      { id: 1, label_bn: "১", label: '1' },
      { id: 2, label_bn: "২", label: '2' },
      { id: 3, label_bn: "৩", label: '3'},
      { id: 4, label_bn: "৪", label: '4'},
      { id: 5, label_bn: "৫", label: '5'},
      { id: 6, label_bn: "৬", label: '6'},
      { id: 7, label_bn: "৭", label: '7'},
      { id: 8, label_bn: "৮", label: '8'},
      { id: 9, label_bn: "৯", label: '9'},
      { id: 10, label_bn: "১০", label: '10'},
      { id: 11, label_bn: "১১", label: '11'},
    ],
  },
  {
    question: "ড্রয়িং/ডাইনিং এটাচ নাকি আলাদা ?",
    value: 'attached_drawing_dinning',
    radioOptions: [
      { id: 1, label_bn: "এটাচ", label: 'attach' },
      { id: 2, label_bn: "আলাদা", label: 'separate' },
    ],
  },
  {
    question: "এটাচ টয়লেটসহ বেডরুম কয়টি ?",
    value: 'attached_toilet',
    dropOptions: [
      { id: 1, label_bn: "১", label: '1' },
      { id: 2, label_bn: "২", label: '2' },
      { id: 3, label_bn: "৩", label: '3'},
      { id: 4, label_bn: "৪", label: '4'},
      { id: 5, label_bn: "৫", label: '5'},
      { id: 6, label_bn: "৬", label: '6'},
      { id: 7, label_bn: "৭", label: '7'},
      { id: 8, label_bn: "৮", label: '8'},
      { id: 9, label_bn: "৯", label: '9'},
      { id: 10, label_bn: "১০", label: '10'},
      { id: 11, label_bn: "১১", label: '11'},
    ],
  },
  {
    question: "বারান্দা কয়টি ?",
    value: 'balcony',
    dropOptions: [
      { id: 1, label_bn: "১", label: '1' },
      { id: 2, label_bn: "২", label: '2' },
      { id: 3, label_bn: "৩", label: '3'},
      { id: 4, label_bn: "৪", label: '4'},
      { id: 5, label_bn: "৫", label: '5'},
      { id: 6, label_bn: "৬", label: '6'},
      { id: 7, label_bn: "৭", label: '7'},
      { id: 8, label_bn: "৮", label: '8'},
      { id: 9, label_bn: "৯", label: '9'},
      { id: 10, label_bn: "১০", label: '10'},
      { id: 11, label_bn: "১১", label: '11'},
    ],
  },
  
  {
    question: "এলপি গ্যাস নাকি লাইনের গ্যাস ?",
    value: 'gas',
    radioOptions: [
      { id: 1, label_bn: "এলপি", label: 'lp' },
      { id: 2, label_bn: "লাইন", label: 'line' },
    ],
  },
  {
    question: "মাসিক ভাড়া কত ?",
    inputTypeNumber: true,
    value: 'rent'
  },
  {
    question: "এডভান্স কত ?",
    inputTypeNumber: true,
    value: 'advance_rent'
  },

  {
    question: "বাসার ছবি সিলেক্ট করুন",
    value: 'images',
    selectImages: true
  },

  {
    question: "বাসার এড্রেস",
    address: true,
    value: 'address'
  },

  {
    question: "আপনার কন্টাক্ট নাম্বার দিন",
    inputTypeNumber: true,
    value: 'contact_no'
  },
];


export const dummyAdds = [{
  add: [{ type: { id: 1, label: 'ফ্লাট' } },


  { floor: { id: 2, label: '২' } },


  { rooms: { id: 3, label: '৩' } },


  { toilet: { id: 7, label: '৭' } },


  { attached_drawing_dining: { id: 1, label: 'এটাচ' } },


  { attached_toilet: { id: 4, label: '৪' } },



  { balcony: { id: 6, label: '৬' } },


  { gas: { id: 1, label: 'এলপি' } },


  { monthly_rent: "144" },


  { advance: "11" },


  { images: { 0: 'data:image/jpeg;base64,/9j/4gIcSUNDX1BST0ZJTEUAAQE…sdzi4guW+W4oG4IZ5XVvXUvQ+/bIgoyH+f+Ey103fvln/2Q==' } },


  {
    address: {
      division: {},
      road: {},
      houseName: {},
      union: {},
      upozilla: {},
      zilla: {}

    }
  }]
},

{
  add: [{ type: { id: 1, label: 'ফ্লাট' } },


  { floor: { id: 2, label: '২' } },


  { rooms: { id: 3, label: '৩' } },


  { toilet: { id: 7, label: '৭' } },


  { attached_drawing_dining: { id: 1, label: 'এটাচ' } },


  { attached_toilet: { id: 4, label: '৪' } },



  { balcony: { id: 6, label: '৬' } },


  { gas: { id: 1, label: 'এলপি' } },


  { monthly_rent: "144" },


  { advance: "11" },


  { images: { 0: 'data:image/jpeg;base64,/9j/4gIcSUNDX1BST0ZJTEUAAQE…sdzi4guW+W4oG4IZ5XVvXUvQ+/bIgoyH+f+Ey103fvln/2Q==' } },


  {
    address: {
      division: {},
      road: {},
      houseName: {},
      union: {},
      upozilla: {},
      zilla: {}

    }
  }]
},

{
  add: [{ type: { id: 1, label: 'ফ্লাট' } },


  { floor: { id: 2, label: '২' } },


  { rooms: { id: 3, label: '৩' } },


  { toilet: { id: 7, label: '৭' } },


  { attached_drawing_dining: { id: 1, label: 'এটাচ' } },


  { attached_toilet: { id: 4, label: '৪' } },



  { balcony: { id: 6, label: '৬' } },


  { gas: { id: 1, label: 'এলপি' } },


  { monthly_rent: "144" },


  { advance: "11" },


  { images: { 0: 'data:image/jpeg;base64,/9j/4gIcSUNDX1BST0ZJTEUAAQE…sdzi4guW+W4oG4IZ5XVvXUvQ+/bIgoyH+f+Ey103fvln/2Q==' } },


  {
    address: {
      division: {},
      road: {},
      houseName: {},
      union: {},
      upozilla: {},
      zilla: {}

    }
  }]
},





]
