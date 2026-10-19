'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"llms.txt": "b77f02d8b8f1941ce28fd2e34613a0fb",
"flutter_bootstrap.js": "2ce40242a5d10f94f3f2e521701ea418",
"main.dart.js_79.part.js": "4729dcea6e7c123ae62ff44eedd7c2da",
"main.dart.js_69.part.js": "738a6b8a03fe44a4d227331260190d6a",
"main.dart.js_24.part.js": "99a0beb4913359c7ea6c09502acd6eb4",
"main.dart.js_34.part.js": "8ab5261ef7129d72484fee85ee58c16b",
"main.dart.js_56.part.js": "a4ec568dcfce243df83b577dd32845a3",
"version.json": "0a03db536b89b891effbb294534d61bd",
"main.dart.js_7.part.js": "dd0bf683a67439c26487387761bc9be6",
"main.dart.js_60.part.js": "f050f251e22391855620ded77b33aa69",
"main.dart.js_70.part.js": "477056aabda9cc83a95c335ace766c44",
"main.dart.js_12.part.js": "77d638dade51ebd128c3b08f0b10d61a",
"main.dart.js_71.part.js": "08fb5cea863911373082ed1b33abd0e7",
"main.dart.js_61.part.js": "c7cc7d48cd847ce3f6e413618c7c6a67",
"main.dart.js_6.part.js": "6f34bf6a5a14febafc389db339832852",
"index.html": "6a3bbaaf9a91aeaf76f113b4f6717fb3",
"/": "6a3bbaaf9a91aeaf76f113b4f6717fb3",
"main.dart.js_13.part.js": "72d8aea5e5aabce40e92ca3fc71b8264",
"main.dart.js_78.part.js": "3a8dc26c9d9e52e77dca97d40e37b417",
"main.dart.js_35.part.js": "5210bfbbe8fab84f3e21df012a5e7b68",
"main.dart.js_25.part.js": "a66ccc9104b428ee826ce9f2ac0427d3",
"main.dart.js_57.part.js": "b59ffec54686919452fe7a0f790d8a9a",
"main.dart.js_47.part.js": "21e40cbaccee18c8fd43c7454034bfe7",
"main.dart.js_11.part.js": "64a1487ab333c6c91bc32acb55c42341",
"main.dart.js_4.part.js": "d0934f747ffc515cb1e16610df59e1eb",
"main.dart.js_73.part.js": "7feaee9fbf2fcaf5228d3af249fa362e",
"main.dart.js": "04ca4d2a0c629f14dcd794e9242473cc",
"main.dart.js_18.part.js": "2ce6f84cba5af9cfedf10542a17d001c",
"main.dart.js_45.part.js": "2588a0c4f8350ed387f423b5b9138f67",
"main.dart.js_55.part.js": "c3bea7be5b1c23e84193373e0a4669a5",
"main.dart.js_27.part.js": "d8fa121f2948ee93b14ad8e3b9734f5a",
"main.dart.js_37.part.js": "c045c1883ab0af9e6d6b332a2df42657",
"main.dart.js_19.part.js": "c587b9c0a898186fd9a9c2f4a98611de",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_54.part.js": "df34d9b7b611efe14eaa6c6855c10c39",
"main.dart.js_44.part.js": "b7116e5127699a869369123635852d85",
"main.dart.js_36.part.js": "7471294878cfbdb6a493cbcb66273601",
"main.dart.js_26.part.js": "d0126a8e85d2e7dccdc2e2c73419bb58",
"main.dart.js_10.part.js": "9e884b41bf7726f017fff18356805f0c",
"main.dart.js_72.part.js": "ff106344d6b649dcb346d77f631a5177",
"main.dart.js_5.part.js": "a8adf30648d8e82691716474f3b3a6f6",
"main.dart.js_62.part.js": "3a6c7bd462e5ddb6452bcaf990cb109f",
"main.dart.js_58.part.js": "338e041fb43d9ba4d3d2e5553deed2bd",
"main.dart.js_77.part.js": "a65bf5b69305a874b4e2530bce303820",
"favicon.png": "92e16d96b2c5b95189f71d556f319b88",
"main.dart.js_41.part.js": "c4877a591324ad6d141a76f8f612d0c0",
"main.dart.js_51.part.js": "2c526379c9dde3d03014f347f2d1c47c",
"main.dart.js_23.part.js": "15cc083496d2ba14237dcba873738972",
"main.dart.js_33.part.js": "890ab879f54fbbeaa44ec1ff86572d57",
"main.dart.js_9.part.js": "c7c97e22d3874c120c3548c57cae2539",
"main.dart.js_50.part.js": "be9f921e53ece2e747e5b46ea4db2724",
"main.dart.js_40.part.js": "8e0d264d038f503fe6846a4890f957f7",
"main.dart.js_32.part.js": "5fc89ce6e259300d0613fd00bccddd97",
"main.dart.js_22.part.js": "a50399c0d7ec8f5a9ed11fffb2fa68f9",
"main.dart.js_8.part.js": "7d511be32058f55c56af2c964b3dbe92",
"icons/Icon-192.png": "1ed47145ed711c0189165bf83d296879",
"icons/Icon-maskable-192.png": "1ed47145ed711c0189165bf83d296879",
"icons/Icon-maskable-512.png": "6f013cd639d0fc33484aa92a54ca7257",
"icons/Icon-512.png": "6f013cd639d0fc33484aa92a54ca7257",
"manifest.json": "ba84e326af66945c455ef6775a75f45f",
"main.dart.js_49.part.js": "97af21a54154eb5765fa81db507ddc82",
"main.dart.js_59.part.js": "850bea609d3037f337d20fa9b6da3f76",
"main.dart.js_14.part.js": "0c5b7f8db558793e70e8b5d68d4866e1",
"sitemap.xml": "fd90951b3ada23e60da05235aa571c45",
"main.dart.js_76.part.js": "e6e9d80d379224984b4e9ad8a94ee20b",
"main.dart.js_66.part.js": "6b8d9303a8120a6f831dc9da6a516bc4",
"main.dart.js_1.part.js": "4dfa39066e99149f4eeddb478ca1166c",
"main.dart.js_20.part.js": "9955bff32e1c554fbdeb7501dd0d4513",
"main.dart.js_30.part.js": "4d76f0b906e746b1e11c88b18621f8f2",
"main.dart.js_42.part.js": "9e6c1f84d54bf187ad15401805552867",
"main.dart.js_52.part.js": "8bb11736bb7a980a7a18db9af65c0e6f",
"robots.txt": "45c20b8c25c070795a59191d1464c3f7",
"main.dart.js_39.part.js": "51d86877b329cfbc310969fac79f000d",
"main.dart.js_29.part.js": "1a0d75b7f641b4cd1937fca47edfd219",
"main.dart.js_80.part.js": "e594fb4fad02b28d23578677b03da55b",
"main.dart.js_64.part.js": "40695b1eef877a562296287eec17264f",
"main.dart.js_3.part.js": "fadf06957a9d8af50bf3483d67a9e32f",
"main.dart.js_74.part.js": "7d1a9eaea6e42a9102036c0a8b1a12be",
"main.dart.js_16.part.js": "baf74fe30459d4aacf61141234add023",
"assets/AssetManifest.json": "af236ac12b2f46aec036331dff11b999",
"assets/NOTICES": "fbae10533bdd8b0bb4b138455bbc9dcc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "23d5ab055984af9152000a8085800921",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "028cdb9d815cee3bf5762aedd42eeae8",
"assets/fonts/MaterialIcons-Regular.otf": "9a53d29fc11ee142ff665f8e1b16b6ae",
"main.dart.js_28.part.js": "8b18eb974f8e2656f504c8658d288348",
"main.dart.js_38.part.js": "202e40fbd78036ccc6acd71087aeb66a",
"main.dart.js_75.part.js": "fbd9942ad55825895f305894645fc25d",
"main.dart.js_2.part.js": "555da55e8852211b8811562518dec8f4",
"main.dart.js_65.part.js": "b9f99d4e36c58652990de679887c11a4",
"main.dart.js_17.part.js": "33024a1761ecb33e1b43ec10b1a4e40a",
"main.dart.js_31.part.js": "894cb51161d41a02cc70c6fa0a323b32",
"main.dart.js_21.part.js": "6e2b293558009cb357923c090a004606",
"sw.js": "69311778e8294a3aaa3db49bfcbad7b0",
"main.dart.js_53.part.js": "54f1c4f1f6d275dfb93f0af3c2e1d1f8",
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
