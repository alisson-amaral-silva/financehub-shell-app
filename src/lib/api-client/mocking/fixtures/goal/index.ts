import { MockList } from "../../types";
import goalGetHandlers from "./goalGetHandlers";
import goalPostHandler from "./goalPostHandler";
import goalPatchHandler from "./goalPatchHandler";
import goalDeleteHandler from "./goalDeleteHandler";

const handlers: MockList = {
  ...goalGetHandlers,
  ...goalPostHandler,
  ...goalPatchHandler,
  ...goalDeleteHandler,
};

export default handlers;
