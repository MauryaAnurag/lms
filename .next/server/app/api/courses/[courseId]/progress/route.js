"use strict";
(() => {
var exports = {};
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 8849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 2286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 7503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 9411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 7742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 4492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 2477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 1041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 7261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 5628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 1267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 7426:
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

// NAMESPACE OBJECT: ./app/api/courses/[courseId]/progress/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./actions/get-progress.ts
var get_progress = __webpack_require__(1001);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(3302);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(5839);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: ./app/api/courses/[courseId]/progress/route.ts




const dynamic = "force-dynamic";
async function GET(req, { params }) {
    try {
        const { userId } = (0,utils/* auth */.I)();
        if (!userId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        // Fetch the course by ID along with chapters and user progress
        const course = await db.db.course.findUnique({
            where: {
                id: params.courseId
            },
            include: {
                chapters: {
                    where: {
                        isPublished: true
                    },
                    include: {
                        userProgress: {
                            where: {
                                userId
                            }
                        }
                    },
                    orderBy: {
                        position: "asc"
                    }
                }
            }
        });
        if (!course) {
            return new next_response/* default */.Z("Course not found", {
                status: 404
            });
        }
        // Calculate the overall progress of the course
        const progressCount = await (0,get_progress/* getProgress */.x)(userId, course.id);
        // Include the overall progress count in the response
        return next_response/* default */.Z.json({
            ...course,
            progress: progressCount
        });
    } catch (error) {
        console.log("[FETCH_COURSE_ERROR]", error);
        return new next_response/* default */.Z("Internal Server Error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fprogress%2Froute&name=app%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fprogress%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fprogress%2Froute.ts&appDir=C%3A%5CUsers%5Canura%5CDownloads%5CLMS%20Platform%20-%20Source%20Code%5Cnext13-lms-platform-master%5Capp&appPaths=%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fprogress%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/courses/[courseId]/progress/route","pathname":"/api/courses/[courseId]/progress","filename":"route","bundlePath":"app/api/courses/[courseId]/progress/route"},"resolvedPagePath":"C:\\Users\\anura\\Downloads\\LMS Platform - Source Code\\next13-lms-platform-master\\app\\api\\courses\\[courseId]\\progress\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/courses/[courseId]/progress/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [501,335,548,839,1], () => (__webpack_exec__(7426)));
module.exports = __webpack_exports__;

})();