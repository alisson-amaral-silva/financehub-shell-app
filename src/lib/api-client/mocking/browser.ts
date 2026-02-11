import { setupWorker } from "msw/browser";
import resolveHandlers from "./resolver";

export const worker = setupWorker(...resolveHandlers())