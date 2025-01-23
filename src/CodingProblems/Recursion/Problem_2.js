//Flatten a given multilevel object
// const employee = {
//   id: 101,
//   name: "John Doe",
//   position: "Senior Developer",
//   department: {
//     name: "SX/BSV-IF2",
//     manager: {
//       name: "Jane Smith",
//       position: "CTO",
//     },
//   },
//   contactDetails: {
//     email: "john.doe@example.com",
//     phone: "+1 555 123 4567",
//     address: {
//       street: "789 Developer Lane",
//       city: "Tech City",
//       state: "NY",
//     },
//   },
// };

//Output

// const flattenedEmployee = {
//   employee_id: 101,
//   employee_name: "John Doe",
//   employee_position: "Senior Developer",
//   employee_department_name: "SX/BSV-IF2",
//   employee_department_manager_name: "Jane Smith",
//   employee_department_manager_position: "CTO",
//   employee_email: "john.doe@example.com",
//   employee_phone: "+1 555 123 4567",
//   employee_address_street: "789 Developer Lane",
//   employee_address_city: "Tech City",
//   employee_address_state: "NY",
// };

//Solution
const employee = {
  id: 101,
  name: "John Doe",
  position: "Senior Developer",
  department: {
    name: "SX/BSV-IF2",
    manager: {
      name: "Jane Smith",
      position: "CTO",
    },
  },
  contactDetails: {
    email: "john.doe@example.com",
    phone: "+1 555 123 4567",
    address: {
      street: "789 Developer Lane",
      city: "Tech City",
      state: "NY",
    },
  },
};

let flattenedObject = {};

const flattenObjectMethod = (obj, objName) => {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObjectMethod(obj[key], objName + "_" + key);
    } else {
      flattenedObject[objName + "_" + key] = obj[key];
    }
  }
};

flattenObjectMethod(employee, "employee");
console.log(flattenedObject);
