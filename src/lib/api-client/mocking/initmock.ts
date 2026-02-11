import { worker } from "./browser";

export async function initMocks() {
  if (typeof window !== "undefined") {
    await worker.start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });

    console.log("[MSW] Mock Service Worker started");
    console.log("[MSW] API requests will be intercepted and mocked");
  }
}
export * from "../analytics/types";
export * from "../balance/types";
export * from "../bill/types";
export * from "../goal/types";
export * from "../types";
export * from "../user/types";
export { mockSets } from "./fixtures/index";
