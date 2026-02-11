import { MockList } from "../../types";
import billGetHandler from "./billGetHandler";
import billPatchHandler from "./billPatchHandler";

const handlers: MockList = {
  ...billGetHandler,
  ...billPatchHandler
};

export default handlers;
