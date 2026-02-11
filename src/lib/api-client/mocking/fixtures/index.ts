import { RequestHandler } from "msw";
import { mockDataset, MockSets } from "../types";
import userHandler from "./user";
import balanceHandler from "./balance";
import transactionHandler from "./transaction";
import goalHandler from "./goal";
import billHandler from "./bills";
import analyticsHandler from "./analytics";

const all = (mocks: { [k: string]: RequestHandler }) =>
  Object.keys(mocks).map((mockItem) => mocks[mockItem]);

export const mockSets: MockSets = {
  [mockDataset.DEVELOPMENT]: [
    ...all(userHandler),
    ...all(balanceHandler),
    ...all(transactionHandler),
    ...all(goalHandler),
    ...all(billHandler),
    ...all(analyticsHandler),
  ],
};