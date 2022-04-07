'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "07170ee78b3aacbd0fc15479daa4d957",
"assets/assets/images/anime1.jpg": "28573d909ee58b0049c064b07dcfecfb",
"assets/assets/images/avatar_image/avatarbbh.jpg": "ca824582656876b5927f59bba0fceb5a",
"assets/assets/images/avatar_image/avatarchen.jpg": "01acb65cc2a5f9fec5488705579c60c7",
"assets/assets/images/avatar_image/avatardo.jpg": "59afafcb150ec5d44a1ab916ac1f8f1b",
"assets/assets/images/avatar_image/avatarkai.jpg": "689419e47df692552902bc5920b1de19",
"assets/assets/images/avatar_image/avatarlay.jpg": "84a3cf618ea10ec8b397d2134888f91f",
"assets/assets/images/avatar_image/avatarpcy.jpg": "3165017817744fdf6d10eb11e158275f",
"assets/assets/images/avatar_image/avatarsehun.jpg": "617e1f731b22feac2cc62a9f94a315a2",
"assets/assets/images/avatar_image/avatarsuho.png": "fe67d42c24d638f8a5d09a2dbb82d313",
"assets/assets/images/avatar_image/avatarxiumin.jpg": "64f3677cef596f29131ee307227524a4",
"assets/assets/images/baekhyun_1.jpg": "78a6c1d3fb94d967f1ff0e6328ef21a9",
"assets/assets/images/bbhflip_1.jpg": "e0f47d99f8ee8e6f8f61dc19f15a4aa4",
"assets/assets/images/bbhflip_2.jpg": "b34745d9e35c7f0a08c0d8b330a31c1c",
"assets/assets/images/bbhgif.gif": "2616a3d13758a05983a320e85dd9abef",
"assets/assets/images/bg_power.jpg": "a4c4f46123c5493f0ded06e71892dbe8",
"assets/assets/images/bg_yn2.jpg": "9d2954b043a79b5bfcc74f29087fbced",
"assets/assets/images/carousel/1_bbh/crs1.jpg": "0d20e23eedb7155d963e35cb4cd46c24",
"assets/assets/images/carousel/1_bbh/crs2.jpg": "231e4095050b6a6353555ac497472d1e",
"assets/assets/images/carousel/1_bbh/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/1_bbh/crs4.jpg": "c8f4093ad2440a1fa49d9306405ddbf9",
"assets/assets/images/carousel/1_bbh/crs5.jpg": "1a0a3a53335895da3679f9df76d21448",
"assets/assets/images/carousel/1_bbh/crs6.gif": "05c407127f012cfc261045ce8947f007",
"assets/assets/images/carousel/2_xiumin/crs1.jpg": "37b5c7204b16bb386d016cc3283cfdb0",
"assets/assets/images/carousel/2_xiumin/crs2.jpg": "c1ae4a0df19568e041edab87f2cccae4",
"assets/assets/images/carousel/2_xiumin/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/3_suho/crs1.jpg": "e204847e40f21ff15f444d3c4466e62e",
"assets/assets/images/carousel/3_suho/crs2.jpg": "7a450547645d64715e6c6e7aaa00c8f0",
"assets/assets/images/carousel/3_suho/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/4_lay/crs1.jpg": "8ca0f9fbe8326156ec2d01705ea71a17",
"assets/assets/images/carousel/4_lay/crs2.jpg": "755e8851ba6ef2d12b216563c426db09",
"assets/assets/images/carousel/4_lay/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/5_chen/crs1.jpg": "ee19ec6feead141f33e54908c39ffea6",
"assets/assets/images/carousel/5_chen/crs2.jpg": "b7c44728656fa4e43c20e7b73587be2e",
"assets/assets/images/carousel/5_chen/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/6_pcy/crs1.jpg": "75c11f2d3808d18cef13b592f1078663",
"assets/assets/images/carousel/6_pcy/crs2.jpg": "cf0c291a9461924578767d0f8ec2fd5c",
"assets/assets/images/carousel/6_pcy/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/7_do/crs1.jpg": "eb4790bbca697804424a9a04c5cb492f",
"assets/assets/images/carousel/7_do/crs2.jpg": "5a7f18e44f607f764bc2d8776af7719d",
"assets/assets/images/carousel/7_do/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/8_kai/crs1.jpg": "9be91ca573fcf8a8de56e0a6cd8f26f7",
"assets/assets/images/carousel/8_kai/crs2.jpg": "454b00e361d3e37e85a857d5720b988c",
"assets/assets/images/carousel/8_kai/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/carousel/9_sehun/crs1.jpg": "766277a13e0bc3fe7179d2c2f3dac43a",
"assets/assets/images/carousel/9_sehun/crs2.jpg": "6b31f5d3397af62bd27713a08aa033bd",
"assets/assets/images/carousel/9_sehun/crs3.jpg": "2d720867117478904985f1ad5d4e8eb3",
"assets/assets/images/chenflip_1.jpg": "446749357daba84c1f46f63652e2fe7d",
"assets/assets/images/chenflip_2.jpg": "768611cb65d4e38c27fdf9bfa47755c9",
"assets/assets/images/chengif.gif": "cd2f1570676af105b3c05295b2b9f6a9",
"assets/assets/images/doflip_1.jpg": "7beb0de0438be0cf89e867be0f7915c8",
"assets/assets/images/doflip_2.jpg": "5b7af90befc861efa4191c4d4009f097",
"assets/assets/images/dogif.gif": "23c191739076f8825e3bc42177930d3f",
"assets/assets/images/galaxy_bg1.jpg": "0b47f8f681a2d8b793fcf429cc411d57",
"assets/assets/images/kaiflip_1.jpg": "a8ecf40ae9cf99e74fb2bd54e4067fb4",
"assets/assets/images/kaiflip_2.jpg": "3bf67dae6d811377c5df207e68e4d1e2",
"assets/assets/images/kaigif.gif": "cf4edd336c1292c24119caa3aefc575f",
"assets/assets/images/layflip_1.jpg": "229f7dd83ed439ba433b8034afcf383d",
"assets/assets/images/layflip_2.jpg": "f0057bff03994a401b838b96e15afcd3",
"assets/assets/images/laygif.gif": "c66e5678289ee50466ee6b423f6c03a6",
"assets/assets/images/pcyflip_1.jpg": "54f9a1f39d3fc3dc5f25e9a763d6fd77",
"assets/assets/images/pcyflip_2.jpg": "4908a7968753ff97ceb2798ead3c7731",
"assets/assets/images/pcygif.gif": "92a3cec9f874b6aa3623cf1e0a78ae2c",
"assets/assets/images/sehunflip_1.jpg": "fa4d4ba6c234f3a7b0c3730585cc474e",
"assets/assets/images/sehunflip_2.jpg": "ebabc78f507dfc8fe6ca4c6da7f6fc2d",
"assets/assets/images/sehungif.gif": "157ff01cc2c1093f40a83b63a8e3abed",
"assets/assets/images/suhoflip_1.jpg": "3f4383dc2b7a4099f9a877fbf8791ba1",
"assets/assets/images/suhoflip_2.jpg": "ae90198e30cc634cca76d4c0741e374c",
"assets/assets/images/suhogif.gif": "8e728487dac7dbf74127cd007a6a0355",
"assets/assets/images/xiuminflip_1.jpg": "52abc6281d5f35c6e2de26ca702cc021",
"assets/assets/images/xiuminflip_2.jpg": "9523deb42d46a55e4e4923888b44b37a",
"assets/assets/images/xiumingif.gif": "0250be0edf7295ba0fe372a2a599617e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "025ca9a557494ad8f1c2507e995e3dc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6f53a9887391dea0ac2d71dd547ab02f",
"/": "6f53a9887391dea0ac2d71dd547ab02f",
"main.dart.js": "d6d1621cf553523d486776070f86b4c7",
"manifest.json": "34d60a83ae929f39054f2ceeb6d9fc85",
"version.json": "1d188648d780692ac1de8dff01bb090b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
