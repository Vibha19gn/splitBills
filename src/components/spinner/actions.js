import { OPEN_SPINNER, CLOSE_SPINNER } from "./action-types";
import {actionCreator} from "../../utils/action-creators";

export const openSpinner = actionCreator(
 OPEN_SPINNER, "");

export const closeSpinner = actionCreator(
  CLOSE_SPINNER, "");
