export const questions = [
  {
    id: 1,
    name: "name",
    label: "Name",
    for: "name",
    type: "text",
    placeholder: "Your Name",
    progressNo: 1,
    value: "",
  },
  {
    id: 2,
    name: "surname",
    for: "surname",
    label: "Surname",
    type: "text",
    placeholder: "Your Surname",
    progressNo: 1,
  },
  {
    id: 3,
    name: "country",
    for: "country",
    label: "Country",
    type: "text",
    placeholder: "Your Country",
    progressNo: 1,
    value: "",
  },
  {
    id: 4,
    name: "occupation",
    for: "occupation",
    label: "Occupation",
    type: "text",
    placeholder: "Your Occupation",
    progressNo: 1,
    value: "",
  },

  {
    id: "gender",
    question_name: "Gender",
    progressNo: 2,
    values: [
      {
        id: 5,
        for: "female",
        label: "Female",
        type: "radio",
        value: "Female",
        name: "female",
      },
      {
        id: 6,
        for: "male",
        label: "male",
        type: "radio",
        value: "Male",
        name: "male",
      },
    ],
  },

  {
    id: "language",
    question_name: "Language",
    progressNo: 2,
    values: [
      {
        id: 7,
        for: "english",
        label: "English",
        type: "checkbox",
        value: "english",
        name: "english",
      },
      {
        id: 8,
        for: "spanish",
        label: "Spanish",
        type: "checkbox",
        value: "spanish",
        name: "spanish",
      },
      {
        id: 9,
        for: "others",
        label: "Others",
        type: "checkbox",
        value: "others",
        name: "others",
      },
    ],
  },

  {
    id: 10,
    name: "email",
    for: "email",
    label: "E-mail Address",
    type: "email",
    placeholder: "Your E-mail Address ",
    progressNo: 3,
    value: "",
  },
  {
    id: 11,
    name: "phone",
    for: "phone",
    label: "Phone Number",
    type: "number",
    placeholder: " Phone Number",
    progressNo: 3,
    value: "",
  },
  {
    id: 12,
    name: "website",
    for: "website",
    label: "Website",
    type: "website",
    placeholder: "Your Website Name",
    progressNo: 3,
    value: "",
  },
  {
    id: 13,
    name: "password",
    for: "password",
    label: "Password",
    type: "password",
    placeholder: "Type a password",
    progressNo: 4,
    value: "",
  },
  // {
  //   id: 14,
  //   name: "password",
  //   for: "password",
  //   type: "password",
  //   placeholder: "Confirm your password",
  //   progressNo: 4,
  //   // value: "",
  // },
];
  