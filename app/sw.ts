import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry } from "serwist";
import { Serwist } from "serwist";

// 1. Explicitly define what 'self' is in this file
// This tells TypeScript: "Treat 'self' as a ServiceWorkerGlobalScope 
// AND allow this custom property that will exist at runtime."
declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
};

const serwist = new Serwist({
  // 2. TypeScript will now be happy because 'self' is explicitly defined above
  precacheEntries: self.__SW_MANIFEST,

  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();

