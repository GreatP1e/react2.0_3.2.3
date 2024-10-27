import { http, HttpResponse } from "msw";
import { baseUrl } from "../../api/constants";
import { responseAll, responseOne } from "./response";

const urlAll = new URL("v3/launches", baseUrl);
const urlOne = new URL("v3/launches", baseUrl);
urlAll.searchParams.set("launch_year", "2020");

export const handlers = [
  http.get(urlAll.href, () => {
    return HttpResponse.json(responseAll);
  }),
  http.get(urlOne.href + "//d/", () => {
    return HttpResponse.json(responseOne);
  }),
];
