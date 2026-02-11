import { http, HttpResponse } from "msw";
import user from "./user.json";
import { MockList } from "../../types";
import { urlUser } from "../../../resources";

const userGetHandler: MockList = {
  getUser: http.get(urlUser, () => {
    return HttpResponse.json(user);
  }),
};

export default userGetHandler;
