import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

// This declares the global worker scope to TypeScript, ensuring strict type safety
// `__SW_MANIFEST` is the injection point where Next.js dynamically injects your hashed build files.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  // Automatically caches all generated Next.js assets (HTML, CSS, JS, images)
  precacheEntries: self.__SW_MANIFEST,
  
  // CRITICAL FIX: Forces the new service worker to instantly kick out the old one
  skipWaiting: true,
  
  // CRITICAL FIX: Forces the new service worker to immediately control all open tabs
  clientsClaim: true,
  
  // Improves perceived load times by fetching navigation requests in parallel with worker boot
  navigationPreload: true,
  
  // Uses Serwist's official Next.js caching strategy to ensure 100% Lighthouse scores
  runtimeCaching: defaultCache,
});

// Bootstraps the service worker and registers all necessary fetch/activate/install listeners
serwist.addEventListeners();

