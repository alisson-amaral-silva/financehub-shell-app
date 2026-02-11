import { RequestHandler } from "msw";

export enum mockDataset {
  TESTING = "TESTING",
  PRODUCTION = "PRODUCTION",
  DEVELOPMENT = "DEVELOPMENT",
  INTEGRATION = "INTEGRATION",
}

export type MockList = {
  [name: string]: RequestHandler;
};

export type MockSets = {
  [dataset: string]: RequestHandler[];
};
