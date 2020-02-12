import TextBold from "../../common/text-bold";
import Name from "./components/name";

export const API_ENDPOINT = "https://api.myjson.com";
export const API_ENDPOINT_CUSTOMERS = `${API_ENDPOINT}/bins/rz0wi​`;
export const STATE_KEY = "customers";

export const columns = [
  {
    name: "Customer Id",
    field: "customerId",
    headerComponent: TextBold
  },
  {
    name: "Customer Name",
    field: "customerName",
    component: Name
  },
  {
    name: "Age",
    field: "age"
  },
  {
    name: "Gender",
    field: "gender"
  }
];

