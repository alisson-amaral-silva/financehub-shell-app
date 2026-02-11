import { http, HttpResponse } from "msw";
import balance from "./balance.json";
import { MockList } from "../../types";
import { urlBalance } from "../../../resources";

const balanceGetHandler: MockList = {
  getBalance: http.get(urlBalance, () => {
    return HttpResponse.json(balance);
  }),
};

export default balanceGetHandler;
