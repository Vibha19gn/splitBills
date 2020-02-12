import fetch from 'isomorphic-fetch';
import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as config from "./config";
import {actions as spinnerActions} from "../../common/spinner";

export const results1 = [
  {
    "customerId": "121",
    "customerName": {
      "firstName": "vibha",
      "lastName": "G N",
    },
    "age": "23",
    "gender": "Female",
    "addresses": [
      {
        "id": 123,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "default": true
      },
      {
        "id": 234,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "shipping": true
      },
      {
        "id": 456,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "billing": true
      }
    ]
  },
  {
    "customerId": "123",
    "customerName": {
      "firstName": "vibha",
      "lastName": "G N",
    },
    "age": "34",
    "gender": "Male",
    "addresses": [
      {
        "id": 123,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "default": true
      },
      {
        "id": 234,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "shipping": true
      },
      {
        "id": 456,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "billing": true
      }
    ]
  }
];

export const fetchPostsSuccess = actionCreator(
  actionTypes.FETCH_CUSTOMERS_SUCCESS, "customers");

export const fetchPostsFailure = actionCreator(
  actionTypes.FETCH_CUSTOMERS_FAILURE, "error");


export function fetchCustomers() {
  return (dispatch) => {
    dispatch(spinnerActions.openSpinner());
    return fetch(`${config.API_ENDPOINT_CUSTOMERS}​`)
      .then(response => response.json())
      .then((result) => {
        dispatch(fetchPostsSuccess(results1));
        dispatch(spinnerActions.closeSpinner());
      }).catch(() => {
        dispatch(spinnerActions.closeSpinner());
        dispatch(fetchPostsFailure("Failed.Please try again"));
      });
  };
}
