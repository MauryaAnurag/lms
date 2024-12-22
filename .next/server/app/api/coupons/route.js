"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 3696:
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

// NAMESPACE OBJECT: ./app/api/coupons/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(3302);
;// CONCATENATED MODULE: ./app/api/coupons/route.ts
// pages/api/admin/coupons.ts

 // Assuming you have a db instance for Prisma
async function POST(req, res) {
    try {
        const { couponCode } = await req.json();
        console.log(req.body);
        // Validate if couponCode is provided
        if (!couponCode) {
            return next_response/* default */.Z.json({
                message: "Coupon code is required"
            }, {
                status: 400
            });
        }
        // Fetch the coupon from the database
        const coupon = await db.db.coupon.findUnique({
            where: {
                code: couponCode
            }
        });
        // If the coupon doesn't exist
        if (!coupon) {
            return next_response/* default */.Z.json({
                valid: false
            }, {
                status: 200
            });
        }
        // If coupon is found, return discount percentage
        return next_response/* default */.Z.json({
            valid: true,
            discountPercentage: coupon.discountPercentage
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error applying coupon:", error);
        return next_response/* default */.Z.json({
            message: "Internal Server Error"
        }, {
            status: 200
        });
    }
}
async function GET(req) {
    try {
        // Fetch all coupons from the database
        const coupons = await db.db.coupon.findMany();
        // If no coupons exist, return an empty array
        if (!coupons || coupons.length === 0) {
            return next_response/* default */.Z.json({
                message: "No coupons found"
            }, {
                status: 200
            });
        }
        // Return the list of coupons
        return next_response/* default */.Z.json(coupons, {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching coupons:", error);
        return next_response/* default */.Z.json({
            message: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
// Update Coupon
async function PUT(req, res) {
    try {
        const { id, code, discountPercentage } = await req.json();
        // Validation
        if (!code || !discountPercentage) {
            return next_response/* default */.Z.json({
                message: "Code and Discount are required"
            }, {
                status: 400
            });
        }
        const updatedCoupon = await db.db.coupon.update({
            where: {
                id
            },
            data: {
                code,
                discountPercentage
            }
        });
        return next_response/* default */.Z.json(updatedCoupon, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return next_response/* default */.Z.json({
            message: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
// Delete Coupon
async function DELETE(req, res) {
    try {
        const { id } = await req.json();
        const deletedCoupon = await db.db.coupon.delete({
            where: {
                id
            }
        });
        return next_response/* default */.Z.json(deletedCoupon, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return next_response/* default */.Z.json({
            message: "Internal Server Error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcoupons%2Froute&name=app%2Fapi%2Fcoupons%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcoupons%2Froute.ts&appDir=C%3A%5CUsers%5Canura%5CDownloads%5CLMS%20Platform%20-%20Source%20Code%5Cnext13-lms-platform-master%5Capp&appPaths=%2Fapi%2Fcoupons%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/coupons/route","pathname":"/api/coupons","filename":"route","bundlePath":"app/api/coupons/route"},"resolvedPagePath":"C:\\Users\\anura\\Downloads\\LMS Platform - Source Code\\next13-lms-platform-master\\app\\api\\coupons\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/coupons/route"

    

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [501,335], () => (__webpack_exec__(3696)));
module.exports = __webpack_exports__;

})();