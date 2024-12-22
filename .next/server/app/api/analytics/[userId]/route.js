"use strict";
(() => {
var exports = {};
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 9043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/analytics/[userId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: ./app/api/analytics/[userId]/route.ts
 // Assuming this function is already defined
 // export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
 //   const { userId } = params; // Now you can destructure `userId`
 //   if (!userId) {
 //     return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
 //   }
 //   try {
 //     // Fetch analytics data for the given userId
 //     const { data, totalRevenue, totalSales } = await getAnalytics(userId);
 //     return NextResponse.json({
 //       data,
 //       totalRevenue,
 //       totalSales,
 //     });
 //   } catch (error) {
 //     return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 });
 //   }
 // }

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fanalytics%2F%5BuserId%5D%2Froute&name=app%2Fapi%2Fanalytics%2F%5BuserId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2F%5BuserId%5D%2Froute.ts&appDir=C%3A%5CUsers%5Canura%5CDownloads%5CLMS%20Platform%20-%20Source%20Code%5Cnext13-lms-platform-master%5Capp&appPaths=%2Fapi%2Fanalytics%2F%5BuserId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/analytics/[userId]/route","pathname":"/api/analytics/[userId]","filename":"route","bundlePath":"app/api/analytics/[userId]/route"},"resolvedPagePath":"C:\\Users\\anura\\Downloads\\LMS Platform - Source Code\\next13-lms-platform-master\\app\\api\\analytics\\[userId]\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/analytics/[userId]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [501], () => (__webpack_exec__(9043)));
module.exports = __webpack_exports__;

})();