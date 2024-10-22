import ky from "ky";
import { baseUrl } from "./constants";
import { LaunchFullType } from "../types";

export const getLaunch = async (flight_number: number) => {
  const url = new URL(`v3/launches/${flight_number}`, baseUrl);
  try {
    return await ky.get<LaunchFullType>(url).json();
  } catch (err) {
    console.log(err);
  }
};
