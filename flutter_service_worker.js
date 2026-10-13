'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "240b221f4a41c492d14298fb9e4f5e70",
"main.dart.js_24.part.js": "0074969cffab859de7c65c2f513e20f3",
"version.json": "0a03db536b89b891effbb294534d61bd",
"main.dart.js_7.part.js": "9a7200d0ae0abdb3b725297ca60c05d6",
"main.dart.js_12.part.js": "fe1d010c76bc5896efb76e0f19951d50",
"main.dart.js_6.part.js": "f2164a17d5bfa0b401901e376fd29cfb",
"index.html": "499121ffd5cb5a08dd78105d32396d36",
"/": "499121ffd5cb5a08dd78105d32396d36",
"main.dart.js_13.part.js": "3545a2b98b9f078c5c385f6e890f851d",
"main.dart.js_25.part.js": "d10677a09040790ddbcb6bb52acd5b33",
"main.dart.js_11.part.js": "deba015351f01653b47488174f544ea5",
"main.dart.js_4.part.js": "1e96d2929f2d9031643f6eb7edb54cb2",
"main.dart.js": "3270c8adeb3c873b7691e12c817e6f85",
"main.dart.js_18.part.js": "db55f4e9b8e850d171708b4c528d34ba",
"main.dart.js_19.part.js": "8651012fb465c157fa4dfdc2bfbf6a4a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_10.part.js": "b0d9f6fd7b069cbc24a7441864cdee87",
"main.dart.js_5.part.js": "5dc070f3a102d08f36cd2796e130c5d6",
"main.dart.js_15.part.js": "eabc9d4d752ce004b765ca0efb72bda1",
"favicon.png": "92e16d96b2c5b95189f71d556f319b88",
"main.dart.js_23.part.js": "3a45625a7f50fbfd4885e1f40b0f29ce",
"main.dart.js_9.part.js": "1069c1dd184e7d8eae1ea6b6c61faec4",
"main.dart.js_22.part.js": "844d3059a725bfc939779876b1194798",
"main.dart.js_8.part.js": "2e8caa7c29492a5b929f061f5436f7c3",
"icons/Icon-192.png": "1ed47145ed711c0189165bf83d296879",
"icons/Icon-maskable-192.png": "1ed47145ed711c0189165bf83d296879",
"icons/Icon-maskable-512.png": "6f013cd639d0fc33484aa92a54ca7257",
"icons/Icon-512.png": "6f013cd639d0fc33484aa92a54ca7257",
"manifest.json": "ba84e326af66945c455ef6775a75f45f",
"main.dart.js_14.part.js": "2c56541e0b3c41cbe8235a86a3d130c4",
"main.dart.js_1.part.js": "3723b52ef8339a7a72c0d5e8c4679b5c",
"main.dart.js_20.part.js": "e56fcb86eefad0a4512919af72648b47",
"main.dart.js_3.part.js": "2e1c3127834b412627cb9f1f8a433641",
"main.dart.js_16.part.js": "c5be3892f62a863ebd0171c0ca9e664c",
"assets/AssetManifest.json": "af236ac12b2f46aec036331dff11b999",
"assets/NOTICES": "fbae10533bdd8b0bb4b138455bbc9dcc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "23d5ab055984af9152000a8085800921",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "028cdb9d815cee3bf5762aedd42eeae8",
"assets/fonts/MaterialIcons-Regular.otf": "78d85af88b9cc776df199ff7b96f21d0",
"main.dart.js_2.part.js": "69016d1616fa51d17a883d67bb6b76a1",
"main.dart.js_21.part.js": "f156f1e3da342b2dee924fb6728af78a",
"sw.js": "9602117f83a568947449ddc29db27d3e",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
