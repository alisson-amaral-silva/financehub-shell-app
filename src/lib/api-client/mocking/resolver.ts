import { RequestHandler } from "msw";
import { mockDataset } from "./types";
import { mockSets } from "./fixtures";

export default function resolveHandlers(): RequestHandler[] {
  const dataset =
    process.env.NEXT_PUBLIC_MOCK_DATASET ?? mockDataset.DEVELOPMENT;
  return [...mockSets[dataset]];
}
