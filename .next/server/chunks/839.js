"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 5839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ auth),
/* harmony export */   Q: () => (/* binding */ auth2)
/* harmony export */ });
/* unused harmony export cn */
/* harmony import */ var _clerk_clerk_sdk_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3478);



function cn(...inputs) {
    return twMerge(clsx(inputs));
}
// Mock function to simulate Clerk's `await auth(req)` behavior
function auth2() {
    const customUserId = "user_2oPq03UlW8M87Sp0efcNmfPM4bU"; // Hardcoded or retrieved from some logic
    // Simulating Clerk's auth object with the userId manually set
    return {
        userId: customUserId,
        sessionId: "mock-session-id",
        claims: {}
    };
}
async function auth(req) {
    const options = {
        jwtKey: `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2OOVqxwzb1ahi4g7/nNH
  quFvNCkAjODMJEwjTEJHkneCXXHA7oy8wptoS3vbOtMbOYMhUM5qgB3uycTaqPn2
  vdCEe9ZqOxCYG6WKdeSRu1ox/w9epPZpz2GfcWSGMi9aVugaacocA5me86P5eHLB
  gZ4VQF7pwXJL6ReM8cCo2EtUZG+ZN+4EWxiUSU5nlMR068ZWESQ90g7l0clDTF2S
  pQNV3cnjqNr319H8XoW51LKs4Yto0saRfoL96U7PqVnD1fUfkwEtRau/QKLapmlm
  KUnwwkVodQxWJQAWybGUEa2PySAgn7lIjIBzsh8G8O8Z7OJ4ddavo6MyLxMWsKkm
  SQIDAQAB
  -----END PUBLIC KEY-----
  `,
        issuer: "https://cool-piranha-0.clerk.accounts.dev"
    };
    try {
        const token = req.headers.get("authorization")?.split(" ")[1];
        if (!token) {
            return {
                userId: null,
                sessionId: null,
                claims: {}
            };
        }
        // Verify the session token dynamically with Clerk
        const user = await (0,_clerk_clerk_sdk_node__WEBPACK_IMPORTED_MODULE_0__.verifyToken)(token, options);
        console.log(user);
        return {
            userId: user.sub,
            sessionId: user.sid,
            claims: user.sid
        };
    } catch (error) {
        console.error("Authentication error:", error);
        return {
            userId: null,
            sessionId: null,
            claims: {}
        };
    }
}


/***/ })

};
;