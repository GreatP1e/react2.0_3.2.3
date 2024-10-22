import ky from "ky";
import { baseUrl } from "./constants";
import { LaunchType } from "../types";
export const getList = async () => {
  const url = new URL("v3/launches", baseUrl);
  url.searchParams.set("launch_year", "2020");
  try {
    return await ky.get<LaunchType[]>(url).json();
  } catch (err) {
    console.log(err);
  }
};
