import { setupServer } from "msw/node";
import resolveHandlers from "./resolver";

export const server = setupServer(...resolveHandlers())