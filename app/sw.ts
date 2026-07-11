import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

// We extend the global WorkerGlobalScope to include the injected __SW_MANIFEST
// This is the only "hack" needed now that webworker types are enabled globally.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

// 'self' is now automatically recognized as ServiceWorkerGlobalScope
// thanks to the 'webworker' lib in your tsconfig.json

const serwist = new Serwist({
  // Automatically caches all generated Next.js assets
  precacheEntries: self.__SW_MANIFEST,

  // Force the new service worker to instantly take control
  skipWaiting: true,
  clientsClaim: true,

  // Improves performance by fetching navigation requests in parallel
  navigationPreload: true,

  // Uses Serwist's official Next.js caching strategy
  runtimeCaching: defaultCache,
});

// Bootstraps the service worker
serwist.addEventListeners();

