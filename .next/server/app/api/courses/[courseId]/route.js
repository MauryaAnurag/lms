"use strict";
(() => {
var exports = {};
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

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

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 6224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 1267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 5226:
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

// NAMESPACE OBJECT: ./app/api/courses/[courseId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PATCH: () => (PATCH),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/@mux/mux-node/dist/mux.mjs + 54 modules
var mux = __webpack_require__(6161);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(5839);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(3302);
;// CONCATENATED MODULE: ./app/api/courses/[courseId]/route.ts




const { Video } = new mux/* default */.Z(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET);
const dynamic = "force-dynamic";
async function DELETE(req, { params }) {
    try {
        const { userId } = (0,utils/* auth */.I)();
        if (!userId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        const course = await db.db.course.findUnique({
            where: {
                id: params.courseId,
                userId: userId
            },
            include: {
                chapters: {
                    include: {
                        muxData: true
                    }
                }
            }
        });
        if (!course) {
            return new next_response/* default */.Z("Not found", {
                status: 404
            });
        }
        for (const chapter of course.chapters){
            if (chapter.muxData?.assetId) {
                await Video.Assets.del(chapter.muxData.assetId);
            }
        }
        const deletedCourse = await db.db.course.delete({
            where: {
                id: params.courseId
            }
        });
        return next_response/* default */.Z.json(deletedCourse);
    } catch (error) {
        console.log("[COURSE_ID_DELETE]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}
async function PATCH(req, { params }) {
    try {
        const { userId } = (0,utils/* auth */.I)();
        const { courseId } = params;
        const values = await req.json();
        if (!userId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        const course = await db.db.course.update({
            where: {
                id: courseId,
                userId
            },
            data: {
                ...values
            }
        });
        return next_response/* default */.Z.json(course);
    } catch (error) {
        console.log("[COURSE_ID]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}
async function GET(req, { params }) {
    const { courseId } = params; // Extract courseId from params
    const { userId } = (0,utils/* auth */.I)(); // Get the authenticated user's ID
    // If no userId is found, return Unauthorized
    if (!userId) {
        return new next_response/* default */.Z("Unauthorized", {
            status: 401
        });
    }
    try {
        // Fetch course details, including chapters and attachments, ordered by position and creation date
        const course = await db.db.course.findUnique({
            where: {
                id: courseId,
                userId
            },
            include: {
                chapters: {
                    orderBy: {
                        position: "asc"
                    }
                },
                attachments: {
                    orderBy: {
                        createdAt: "desc"
                    }
                }
            }
        });
        if (!course) {
            return new next_response/* default */.Z("Course not found", {
                status: 404
            });
        }
        // Fetch categories, ordered by name
        const categories = await db.db.category.findMany({
            orderBy: {
                name: "asc"
            }
        });
        // Respond with the course and categories
        return next_response/* default */.Z.json({
            course,
            categories
        });
    } catch (error) {
        console.error("Error fetching course details:", error);
        return new next_response/* default */.Z("Internal Server Error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcourses%2F%5BcourseId%5D%2Froute&name=app%2Fapi%2Fcourses%2F%5BcourseId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5BcourseId%5D%2Froute.ts&appDir=C%3A%5CUsers%5Canura%5CDownloads%5CLMS%20Platform%20-%20Source%20Code%5Cnext13-lms-platform-master%5Capp&appPaths=%2Fapi%2Fcourses%2F%5BcourseId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/courses/[courseId]/route","pathname":"/api/courses/[courseId]","filename":"route","bundlePath":"app/api/courses/[courseId]/route"},"resolvedPagePath":"C:\\Users\\anura\\Downloads\\LMS Platform - Source Code\\next13-lms-platform-master\\app\\api\\courses\\[courseId]\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/courses/[courseId]/route"

    

/***/ }),

/***/ 3302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [501,335,548,766,161,839], () => (__webpack_exec__(5226)));
module.exports = __webpack_exports__;

})();