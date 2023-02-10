"use strict";
(() => {
var exports = {};
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 4629:
/***/ ((module) => {

module.exports = require("@babel/core");

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = require("@babel/preset-react");

/***/ }),

/***/ 6247:
/***/ ((module) => {

module.exports = require("data-urls");

/***/ }),

/***/ 9659:
/***/ ((module) => {

module.exports = require("esbuild");

/***/ }),

/***/ 8046:
/***/ ((module) => {

module.exports = require("etag");

/***/ }),

/***/ 9514:
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ 1730:
/***/ ((module) => {

module.exports = require("postcss-modules");

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 2411:
/***/ ((module) => {

module.exports = import("postcss");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ contractNames)
/* harmony export */ });
const contractNames = {
    "0x79986af15539de2db9a5086382daeda917a9cf0c": "cryptovoxels",
    "0x1dfe7ca09e99d10835bf73044a23b73fc20623df": "moreloot",
    "0x1d20a51f088492a0f1c57f047a9e30c9ab5c07ea": "loomlock"
};


/***/ }),

/***/ 9294:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "contract_templates", "cryptovoxels.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    resolveId (source, importer) {
        return source;
    },
    async load (id) {
        id = id.replace(/^(eth?:\/(?!\/))/, "$1/");
        const match = id.match(/^eth:\/\/(0x[0-9a-f]+)\/([0-9]+)$/i);
        if (match) {
            const contractAddress = match[1];
            const tokenId = parseInt(match[2], 10);
            const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
            const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
                contractAddress,
                tokenId,
                contentId,
                name,
                description,
                components
            });
            // console.log('got glb id', id);
            return {
                code,
                map: null
            };
        } else {
            return null;
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5589:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'contract_templates', 'loomlock.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "contract_templates", "loomlock.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    resolveId (source, importer) {
        return source;
    },
    async load (id) {
        console.log("loomlock load id", {
            id
        });
        id = id.replace(/^(eth?:\/(?!\/))/, "$1/");
        const match = id.match(/^eth:\/\/(0x[0-9a-f]+)\/([0-9]+)$/i);
        if (match) {
            const contractAddress = match[1];
            const tokenId = parseInt(match[2], 10);
            const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
            const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
                contractAddress,
                tokenId,
                contentId,
                name,
                description,
                components
            });
            return {
                code,
                map: null
            };
        } else {
            return null;
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9956:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'contract_templates', 'moreloot.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "contract_templates", "moreloot.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    resolveId (source, importer) {
        return source;
    },
    async load (id) {
        // console.log('moreloot load id', {id});
        id = id.replace(/^(eth?:\/(?!\/))/, "$1/");
        const match = id.match(/^eth:\/\/(0x[0-9a-f]+)\/([0-9]+)$/i);
        if (match) {
            const contractAddress = match[1];
            const tokenId = parseInt(match[2], 10);
            const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
            const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
                contractAddress,
                tokenId,
                contentId,
                name,
                description,
                components
            });
            return {
                code,
                map: null
            };
        } else {
            return null;
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8628:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var etag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8046);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1918);
/* harmony import */ var _scripts_compile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_3__, _scripts_compile_js__WEBPACK_IMPORTED_MODULE_4__]);
([_util_js__WEBPACK_IMPORTED_MODULE_3__, _scripts_compile_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction





const _proxy = (req, res, u)=>new Promise((resolve, reject)=>{
        console.log("redirect asset 1", {
            u
        });
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
        if (/^\//.test(u)) {
            const cwd = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__/* .getCwd */ .UE)();
            u = path__WEBPACK_IMPORTED_MODULE_0__.join(cwd, u);
            console.log("fetch file locally", {
                cwd,
                u
            });
            const rs = fs__WEBPACK_IMPORTED_MODULE_1__.createReadStream(u);
            rs.pipe(res);
            rs.on("error", (err)=>{
                console.warn("got error", err.stack);
                reject(err);
            });
        } else {
            res.redirect(u);
        }
    });
async function handler(req, res) {
    console.log("got request", req.url);
    /* if (/\.glb/.test(req.url)) {
    console.log('\n\n\n\ncompile', req.headers, req.url, '\n\n\n\n');
  } */ // console.log('got url', {u: req.url});
    const u = req.url.replace(/^\/([a-zA-Z0-9]+:)/, "$1") // remove initial slash
    .replace(/^([a-zA-Z0-9]+:\/(?!\/))/, "$1/"); // add second slash to protocol, since it is truncated
    if (u) {
        // XXX note: sec-fetch-dest is not supported by Safari
        const dest = req.headers["sec-fetch-dest"];
        // const accept = req.headers['accept'];
        if (/* /^image\//.test(accept) || */ [
            "empty",
            "image"
        ].includes(dest) || dest.includes("github.io")) {
            console.log("\n\n\n\ncompile", req.headers, req.url, "\n\n\n\n");
            await _proxy(req, res, u);
        } else {
            let resultUint8Array, err;
            try {
                resultUint8Array = await (0,_scripts_compile_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(u);
            } catch (e) {
                err = e;
            }
            if (!err) {
                const resultBuffer = Buffer.from(resultUint8Array);
                const et = etag__WEBPACK_IMPORTED_MODULE_2__(resultBuffer);
                res.setHeader("ETag", et);
                // check if-none-match (multiple)
                if (req.headers["if-none-match"] && req.headers["if-none-match"].split(",").includes(et)) {
                    res.statusCode = 304;
                    res.setHeader("Access-Control-Allow-Methods", "*");
                    res.setHeader("Access-Control-Allow-Headers", "*");
                    // res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                    res.setHeader("Cache-Control", "no-cache");
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
                    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
                    console.log("304", u);
                    res.end();
                } else {
                    console.log("200", u);
                    res.setHeader("Content-Type", "application/javascript");
                    res.setHeader("Access-Control-Allow-Methods", "*");
                    res.setHeader("Access-Control-Allow-Headers", "*");
                    // res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                    res.setHeader("Cache-Control", "no-cache");
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
                    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
                    res.end(resultBuffer);
                }
            } else {
                console.warn(err);
                res.status(500).send(err.stack);
            }
        }
    } else {
        res.status(404).send("not found");
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4468:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ metaversefilePlugin)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7310);
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9514);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6113);
/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2411);
/* harmony import */ var postcss_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1730);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3437);
/* harmony import */ var _contracts_cryptovoxels_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9294);
/* harmony import */ var _contracts_moreloot_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9956);
/* harmony import */ var _contracts_loomlock_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5589);
/* harmony import */ var _types_jsx_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4237);
/* harmony import */ var _types_metaversefile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7791);
/* harmony import */ var _types_glb_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1436);
/* harmony import */ var _types_vrm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7325);
/* harmony import */ var _types_vox_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1868);
/* harmony import */ var _types_image_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7577);
/* harmony import */ var _types_gif_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8802);
/* harmony import */ var _types_glbb_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2491);
/* harmony import */ var _types_gltj_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6353);
/* harmony import */ var _types_html_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5596);
/* harmony import */ var _types_scn_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(908);
/* harmony import */ var _types_light_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6541);
/* harmony import */ var _types_text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6478);
/* harmony import */ var _types_video_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7392);
/* harmony import */ var _types_rendersettings_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2322);
/* harmony import */ var _types_spawnpoint_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3592);
/* harmony import */ var _types_wind_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(564);
/* harmony import */ var _types_lore_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(4247);
/* harmony import */ var _types_quest_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4932);
/* harmony import */ var _types_npc_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(598);
/* harmony import */ var _types_mob_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(8267);
/* harmony import */ var _types_react_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(8033);
/* harmony import */ var _types_group_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2297);
/* harmony import */ var _types_vircadia_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(9781);
/* harmony import */ var _types_directory_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(5337);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postcss__WEBPACK_IMPORTED_MODULE_4__, _contracts_cryptovoxels_js__WEBPACK_IMPORTED_MODULE_7__, _contracts_moreloot_js__WEBPACK_IMPORTED_MODULE_8__, _contracts_loomlock_js__WEBPACK_IMPORTED_MODULE_9__, _types_jsx_js__WEBPACK_IMPORTED_MODULE_10__, _types_metaversefile_js__WEBPACK_IMPORTED_MODULE_11__, _types_glb_js__WEBPACK_IMPORTED_MODULE_12__, _types_vrm_js__WEBPACK_IMPORTED_MODULE_13__, _types_vox_js__WEBPACK_IMPORTED_MODULE_14__, _types_image_js__WEBPACK_IMPORTED_MODULE_15__, _types_gif_js__WEBPACK_IMPORTED_MODULE_16__, _types_glbb_js__WEBPACK_IMPORTED_MODULE_17__, _types_gltj_js__WEBPACK_IMPORTED_MODULE_18__, _types_html_js__WEBPACK_IMPORTED_MODULE_19__, _types_scn_js__WEBPACK_IMPORTED_MODULE_20__, _types_light_js__WEBPACK_IMPORTED_MODULE_21__, _types_text_js__WEBPACK_IMPORTED_MODULE_22__, _types_video_js__WEBPACK_IMPORTED_MODULE_23__, _types_rendersettings_js__WEBPACK_IMPORTED_MODULE_24__, _types_spawnpoint_js__WEBPACK_IMPORTED_MODULE_25__, _types_wind_js__WEBPACK_IMPORTED_MODULE_26__, _types_lore_js__WEBPACK_IMPORTED_MODULE_27__, _types_quest_js__WEBPACK_IMPORTED_MODULE_28__, _types_npc_js__WEBPACK_IMPORTED_MODULE_29__, _types_mob_js__WEBPACK_IMPORTED_MODULE_30__, _types_react_js__WEBPACK_IMPORTED_MODULE_31__, _types_group_js__WEBPACK_IMPORTED_MODULE_32__, _types_vircadia_js__WEBPACK_IMPORTED_MODULE_33__, _types_directory_js__WEBPACK_IMPORTED_MODULE_34__, _util_js__WEBPACK_IMPORTED_MODULE_35__]);
([postcss__WEBPACK_IMPORTED_MODULE_4__, _contracts_cryptovoxels_js__WEBPACK_IMPORTED_MODULE_7__, _contracts_moreloot_js__WEBPACK_IMPORTED_MODULE_8__, _contracts_loomlock_js__WEBPACK_IMPORTED_MODULE_9__, _types_jsx_js__WEBPACK_IMPORTED_MODULE_10__, _types_metaversefile_js__WEBPACK_IMPORTED_MODULE_11__, _types_glb_js__WEBPACK_IMPORTED_MODULE_12__, _types_vrm_js__WEBPACK_IMPORTED_MODULE_13__, _types_vox_js__WEBPACK_IMPORTED_MODULE_14__, _types_image_js__WEBPACK_IMPORTED_MODULE_15__, _types_gif_js__WEBPACK_IMPORTED_MODULE_16__, _types_glbb_js__WEBPACK_IMPORTED_MODULE_17__, _types_gltj_js__WEBPACK_IMPORTED_MODULE_18__, _types_html_js__WEBPACK_IMPORTED_MODULE_19__, _types_scn_js__WEBPACK_IMPORTED_MODULE_20__, _types_light_js__WEBPACK_IMPORTED_MODULE_21__, _types_text_js__WEBPACK_IMPORTED_MODULE_22__, _types_video_js__WEBPACK_IMPORTED_MODULE_23__, _types_rendersettings_js__WEBPACK_IMPORTED_MODULE_24__, _types_spawnpoint_js__WEBPACK_IMPORTED_MODULE_25__, _types_wind_js__WEBPACK_IMPORTED_MODULE_26__, _types_lore_js__WEBPACK_IMPORTED_MODULE_27__, _types_quest_js__WEBPACK_IMPORTED_MODULE_28__, _types_npc_js__WEBPACK_IMPORTED_MODULE_29__, _types_mob_js__WEBPACK_IMPORTED_MODULE_30__, _types_react_js__WEBPACK_IMPORTED_MODULE_31__, _types_group_js__WEBPACK_IMPORTED_MODULE_32__, _types_vircadia_js__WEBPACK_IMPORTED_MODULE_33__, _types_directory_js__WEBPACK_IMPORTED_MODULE_34__, _util_js__WEBPACK_IMPORTED_MODULE_35__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























// import fog from '../types/fog.js';
// import background from '../types/background.js';











// import upath from 'unix-path';

const contracts = {
    cryptovoxels: _contracts_cryptovoxels_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    moreloot: _contracts_moreloot_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    loomlock: _contracts_loomlock_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
};
const loaders = {
    js: _types_jsx_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    jsx: _types_jsx_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    metaversefile: _types_metaversefile_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    glb: _types_glb_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
    vrm: _types_vrm_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
    vox: _types_vox_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
    png: _types_image_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    jpg: _types_image_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    jpeg: _types_image_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    svg: _types_image_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    mp4: _types_video_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
    mov: _types_video_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
    gif: _types_gif_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
    glbb: _types_glbb_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
    gltj: _types_gltj_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
    html: _types_html_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
    scn: _types_scn_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
    light: _types_light_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
    text: _types_text_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
    // fog,
    // background,
    rendersettings: _types_rendersettings_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
    spawnpoint: _types_spawnpoint_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
    lore: _types_lore_js__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z,
    quest: _types_quest_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z,
    npc: _types_npc_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z,
    mob: _types_mob_js__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z,
    react: _types_react_js__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
    group: _types_group_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z,
    wind: _types_wind_js__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
    vircadia: _types_vircadia_js__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z,
    "": _types_directory_js__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z
};
const dataUrlRegex = /^data:([^;,]+)(?:;(charset=utf-8|base64))?,([\s\S]*?)\.data$/;
const dataUrlRegexNoSuffix = /^data:([^;,]+)(?:;(charset=utf-8|base64))?,([\s\S]*?)$/;
const _getType = (id)=>{
    const o = url__WEBPACK_IMPORTED_MODULE_1__.parse(id, true);
    // console.log('get type', o, o.href.match(dataUrlRegex));
    let match;
    if (o.href && (match = o.href.match(dataUrlRegexNoSuffix))) {
        let type = match[1] || "";
        if (type === "text/javascript") {
            type = "application/javascript";
        }
        let extension;
        let match2;
        if (match2 = type.match(/^application\/(light|text|rendersettings|spawnpoint|lore|quest|npc|mob|react|group|wind|vircadia)$/)) {
            extension = match2[1];
        } else if (match2 = type.match(/^application\/(javascript)$/)) {
            extension = "js";
        } else {
            extension = mime_types__WEBPACK_IMPORTED_MODULE_2__.extension(type);
        }
        // console.log('got data extension', {type, extension});
        return extension || "";
    } else if (o.hash && (match = o.hash.match(/^#type=(.+)$/))) {
        return match[1] || "";
    } else if (o.query && o.query.type) {
        return o.query.type;
    } else if (match = o.path.match(/\.([^\.\/]+)$/)) {
        return match[1].toLowerCase() || "";
    } else {
        return "";
    }
};
/* const _resolvePathName = (pathName , source) => {
  // This check is specifically added because of windows
  // as windows is converting constantly all forward slashes into
  // backward slash
  if (process.platform === 'win32') {
    pathName = pathName.replaceAll('\\','/').replaceAll('//','/');
    pathName = path.resolve(upath.parse(pathName).dir, source);
    // Whenever path.resolve returns the result in windows it add the drive letter as well
    // Slice the drive letter (c:/, e:/, d:/ ) from the path and change backward slash
    // back to forward slash.
    pathName = pathName.slice(3).replaceAll('\\','/');
  } else {
    pathName = path.resolve(path.dirname(pathName), source);
  }
  return pathName;
}; */ const _resolveLoaderId = (loaderId)=>{
    /**
   * This check is specifically added because of windows 
   * as windows is converting constantly all forward slashes into
   * backward slash
   */ // console.log(loaderId);
    // const cwd = getCwd();
    if (process.platform === "win32") {
        // if(loaderId.startsWith(cwd) || loaderId.replaceAll('/','\\').startsWith(cwd)){
        //  loaderId = loaderId.slice(cwd.length);
        // }else if(loaderId.startsWith('http') || loaderId.startsWith('https')){
        //  loaderId = loaderId.replaceAll('\\','/');
        // }
        loaderId = loaderId.replaceAll("\\", "/");
    // if(loaderId.startsWith('http') || loaderId.startsWith('https')){
    //   loaderId = loaderId.replaceAll('\\','/');
    // }
    }
    return loaderId;
};
const mappedModules = {
    "metaversefile": {
        resolveId (source, importer) {
            // return source;
            return `/@map/${source}`;
        },
        load (id) {
            // console.log('return mapped', id);
            return {
                code: `\
          const {metaversefile} = globalThis.Metaversefile.exports;
          export default metaversefile;
        `
            };
        }
    },
    "three": {
        resolveId (source, importer) {
            // return source;
            return `/@map/${source}`;
        },
        load (id) {
            // console.log('return mapped', id);
            return {
                // code: `import * as THREE from '/public/three.module.js';`,
                code: `\
          const {THREE} = globalThis.Metaversefile.exports;
          const { ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, BackSide, BasicDepthPacking, BasicShadowMap, Bone, BooleanKeyframeTrack, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasTexture, CapsuleBufferGeometry, CapsuleGeometry, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, Color, ColorKeyframeTrack, ColorManagement, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, Data3DTexture, DataArrayTexture, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, FileLoader, FlatShading, Float16BufferAttribute, Float32BufferAttribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FramebufferTexture, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16BufferAttribute, Int32BufferAttribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LineSegments, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearSRGBColorSpace, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColorSpace, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricGeometry, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBFormat, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGBColorSpace, Scene, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Source, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SplineCurve, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16BufferAttribute, Uint32BufferAttribute, Uint8BufferAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsGroup, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, VideoTexture, WebGL1Renderer, WebGL3DRenderTarget, WebGLArrayRenderTarget, WebGLCubeRenderTarget, WebGLMultipleRenderTargets, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderer, WebGLUtils, WireframeGeometry, WrapAroundEnding, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, _SRGBAFormat, sRGBEncoding } = THREE;
          export { ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, BackSide, BasicDepthPacking, BasicShadowMap, Bone, BooleanKeyframeTrack, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasTexture, CapsuleBufferGeometry, CapsuleGeometry, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, Color, ColorKeyframeTrack, ColorManagement, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, Data3DTexture, DataArrayTexture, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, FileLoader, FlatShading, Float16BufferAttribute, Float32BufferAttribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FramebufferTexture, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16BufferAttribute, Int32BufferAttribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LineSegments, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearSRGBColorSpace, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColorSpace, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricGeometry, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBFormat, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGBColorSpace, Scene, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Source, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SplineCurve, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16BufferAttribute, Uint32BufferAttribute, Uint8BufferAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsGroup, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, VideoTexture, WebGL1Renderer, WebGL3DRenderTarget, WebGLArrayRenderTarget, WebGLCubeRenderTarget, WebGLMultipleRenderTargets, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderer, WebGLUtils, WireframeGeometry, WrapAroundEnding, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, _SRGBAFormat, sRGBEncoding };
          // export default THREE;
        `
            };
        }
    },
    "react": {
        resolveId (source, importer) {
            // return source;
            return `/@map/${source}`;
        },
        load (id) {
            // console.log('return mapped', id);
            return {
                code: `\
          const {React} = globalThis.Metaversefile.exports;
          const {forwardRef, createContext, createElement, Fragment, Children, isValidElement, cloneElement, memo, Component, useEffect, useState, useRef, useLayoutEffect, useMemo, useCallback, useContext, useReducer, useImperativeHandle, useDebugValue} = React;
          export {forwardRef, createContext, createElement, Fragment, Children, isValidElement, cloneElement, memo, Component, React, useEffect, useState, useRef, useLayoutEffect, useMemo, useCallback, useContext, useReducer, useImperativeHandle, useDebugValue};
          export default React;
        `
            };
        }
    }
};
const buildCssModulesJs = async (css, cssFullPath, options = {})=>{
    const { localsConvention ="camelCaseOnly" , inject =true , generateScopedName , cssModulesOption ={} ,  } = options;
    // const css = await readFile(cssFullPath);
    let cssModulesJSON = {};
    const result = await (0,postcss__WEBPACK_IMPORTED_MODULE_4__["default"])([
        postcss_modules__WEBPACK_IMPORTED_MODULE_5__({
            localsConvention,
            generateScopedName,
            getJSON (cssSourceFile, json) {
                cssModulesJSON = {
                    ...json
                };
                return cssModulesJSON;
            },
            ...cssModulesOption
        }), 
    ]).process(css, {
        from: cssFullPath,
        map: false
    });
    const classNames = JSON.stringify(cssModulesJSON);
    const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHash)("sha256");
    hash.update(cssFullPath);
    const digest = hash.digest("hex");
    let injectedCode = "";
    if (inject === true) {
        injectedCode = `
(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    `;
    } else if (typeof inject === "function") {
        injectedCode = inject(result.css, digest);
    }
    const jsContent = `
const digest = '${digest}';
const css = \`${result.css}\`;
${injectedCode}
export default ${classNames};
export { css, digest };
  `;
    return jsContent;
};
function metaversefilePlugin() {
    return {
        name: "metaversefile",
        enforce: "pre",
        async resolveId (source, importer) {
            // console.log('resolve id', {source, importer});
            const mappedModule = mappedModules[source];
            if (mappedModule) {
                // console.log('resolve mapped', {source});
                return mappedModule.resolveId(source, importer);
            }
            /* // do not resolve node module subpaths
      if (/^((?:@[^\/]+\/)?[^\/:\.][^\/:]*)(\/[\s\S]*)$/.test(source)) {
        // console.log('resolve bail');
        return null;
      } */ // scripts/compile.js: handle local compile case
            if (/^\.+\//.test(source)) {
                if (importer) {
                    if (/^data:/.test(importer)) {
                        const cwd = (0,_util_js__WEBPACK_IMPORTED_MODULE_35__/* .getCwd */ .UE)();
                        // console.log('resolve data');
                        return path__WEBPACK_IMPORTED_MODULE_0__.join(cwd, source);
                    } else {
                        const match = importer.match(/^(#[\s\S]*)$/);
                        const hash = match ? match[1] : "";
                        // const oldSource = source;
                        if (/^\//.test(importer)) {
                            const fakeBase = "https://example.com";
                            importer = `${fakeBase}${importer}`;
                            // console.log('resolve source importer A 1', {source, importer});
                            source = new url__WEBPACK_IMPORTED_MODULE_1__.URL(source, importer).href.slice(fakeBase.length) + hash;
                        // console.log('resolve source importer A 2', {source, oldSource, importer});
                        } else {
                            // console.log('resolve source importer B 1', {source, importer});
                            source = new url__WEBPACK_IMPORTED_MODULE_1__.URL(source, importer).href + hash;
                        // console.log('resolve source importer B 2', {source, oldSource, importer});
                        }
                    }
                } else {
                    source = source.replace(/^\.+/, "");
                }
            }
            let match1;
            if (match1 = source.match(dataUrlRegex)) {
                // source = source.replace(/\.data$/, '');
                source = "data:" + match1[1] + (match1[2] ? ";" + match1[2] : "") + "," + decodeURIComponent(match1[3]);
            }
            // console.log('rollup resolve id', {source, importer});
            if (/^ipfs:\/\//.test(source)) {
                source = source.replace(/^ipfs:\/\/(?:ipfs\/)?/, "https://cloudflare-ipfs.com/ipfs/");
                const o = new url__WEBPACK_IMPORTED_MODULE_1__.parse(source, true);
                if (!o.query.type) {
                    const res = await fetch(source, {
                        method: "HEAD"
                    });
                    if (res.ok) {
                        const contentType = res.headers.get("content-type");
                        const typeTag = mime_types__WEBPACK_IMPORTED_MODULE_2__.extension(contentType);
                        if (typeTag) {
                            source += `#type=${typeTag}`;
                        } else {
                            console.warn("unknown IPFS content type:", contentType);
                        }
                    } else {
                        throw new Error("IPFS content not found: " + source);
                    }
                }
            }
            if (match1 = source.match(/^eth:\/\/(0x[0-9a-f]+)\/([0-9]+)$/)) {
                const address = match1[1];
                const contractName = _constants_js__WEBPACK_IMPORTED_MODULE_6__/* .contractNames */ .D[address];
                const contract = contracts[contractName];
                const resolveId = contract?.resolveId;
                // console.log('check contract', resolveId);
                if (resolveId) {
                    const source2 = await resolveId(source, importer);
                    // console.log('resolve contract', {source, source2});
                    return source2;
                }
            }
            /* if (/^weba:\/\//.test(source)) {
        const {resolveId} = protocols.weba;
        const source2 = await resolveId(source, importer);
        return source2;
      } */ const type = _getType(source);
            const loader = loaders[type];
            const resolveId1 = loader?.resolveId;
            if (resolveId1) {
                const source21 = await resolveId1(source, importer);
                // console.log('resolve rewrite', {type, source, source2});
                if (source21) {
                    // console.log('resolve loader', {source2});
                    return source21;
                }
            }
            // console.log('resolve default', {source});
            if (source) {
                return source;
            } else {
                throw new Error(`could not resolve`);
            }
        },
        async load (id) {
            // console.log('got load id', {id});
            if (/\.css$/.test(id)) {
                const css = await (0,_util_js__WEBPACK_IMPORTED_MODULE_35__/* .readFile */ .pJ)(id);
                const result = await buildCssModulesJs(css, id);
                return {
                    code: result
                };
            }
            let match;
            if (match = id.match(/^\/@map\/(.+)$/)) {
                const id2 = match[1];
                const mappedModule = mappedModules[id2];
                if (mappedModule) {
                    const res = mappedModule.load(id2);
                    // console.log('return result', res);
                    return res;
                }
            }
            id = id.replace(/^(eth:\/(?!\/))/, "$1/");
            // .replace(/^(weba:\/(?!\/))/, '$1/');
            // console.log('contract load match', id.match(/^eth:\/\/(0x[0-9a-f]+)\/([0-9]+)$/));
            if (match = id.match(/^eth:\/\/(0x[0-9a-f]+)\/([0-9]+)$/)) {
                const address = match[1];
                const contractName = _constants_js__WEBPACK_IMPORTED_MODULE_6__/* .contractNames */ .D[address];
                const contract = contracts[contractName];
                const load = contract?.load;
                // console.log('load contract 1', load);
                if (load) {
                    const src = await load(id);
                    // console.log('load contract 2', src);
                    if (src !== null && src !== undefined) {
                        return src;
                    }
                }
            }
            /* if (/^weba:\/\//.test(id)) {
        const {load} = protocols.weba;
        const src = await load(id);
        if (src !== null && src !== undefined) {
          return src;
        }
      } */ // console.log('load 2');
            const type = _getType(id);
            const loader = loaders[type];
            const load1 = loader?.load;
            if (load1) {
                id = _resolveLoaderId(id);
                const src1 = await load1(id);
                if (src1 !== null && src1 !== undefined) {
                    return src1;
                }
            }
            // console.log('load 2', {id, type, loader: !!loader, load: !!load});
            if (/^https?:\/\//.test(id)) {
                const res1 = await fetch(id);
                if (res1.ok) {
                    const text = await res1.text();
                    return text;
                } else {
                    throw new Error(`invalid status code: ${res1.status} ${id}`);
                }
            } else if (match = id.match(dataUrlRegexNoSuffix)) {
                // console.log('load 3', match);
                // const type = match[1];
                const encoding = match[2];
                const src2 = match[3];
                // console.log('load data url!!!', id, match);
                if (encoding === "base64") {
                    return atob(src2);
                } else {
                    return decodeURIComponent(src2);
                }
            } else {
                throw new Error(`could not load "${id}"`);
            }
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4412:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var esbuild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9659);
/* harmony import */ var _babel_preset_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _plugins_rollup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_plugins_rollup_js__WEBPACK_IMPORTED_MODULE_2__]);
_plugins_rollup_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

 // note: needed the esbuild plugin, but will be tree-shaken by next.js if removed here

const metaversefilePluginInstance = (0,_plugins_rollup_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
const metaversefilePluginProxy = {
    name: "metaversefile",
    setup (build) {
        build.onResolve({
            filter: /^/
        }, async (args)=>{
            try {
                const p = await metaversefilePluginInstance.resolveId(args.path, args.importer);
                return {
                    path: p,
                    namespace: "metaversefile"
                };
            } catch (err) {
                return {
                    errors: [
                        {
                            text: err.stack
                        }, 
                    ]
                };
            }
        });
        build.onLoad({
            filter: /^/
        }, async (args)=>{
            try {
                let c = await metaversefilePluginInstance.load(args.path);
                c = c.code;
                return {
                    contents: c
                };
            } catch (err) {
                return {
                    errors: [
                        {
                            text: err.stack
                        }, 
                    ]
                };
            }
        });
    }
};
async function compile(moduleUrl) {
    const o = await esbuild__WEBPACK_IMPORTED_MODULE_0__.build({
        entryPoints: [
            moduleUrl, 
        ],
        bundle: true,
        format: "esm",
        plugins: [
            metaversefilePluginProxy, 
        ],
        write: false,
        outdir: "out"
    });
    if (o.outputFiles.length > 0) {
        return o.outputFiles[0].contents;
    } else if (o.errors.length > 0) {
        throw new Error(o.errors[0].text);
    } else {
        throw new Error("no output");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compile);
// check if start script
if ("file:///home/a/webaverse/packages/compiler/scripts/compile.js" === `file://${process.argv[1]}`) {
    (async ()=>{
        const moduleUrl = process.argv[2];
        if (!moduleUrl) {
            throw new Error("no module url specified");
        }
        if (/^\.\.\//.test(moduleUrl)) {
            throw new Error("module url cannot be above current directory");
        }
        const b = await compile(moduleUrl);
        console.log(b);
    })();
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5337:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6544);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1918);
/* harmony import */ var _metaversefile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7791);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_2__, _util_js__WEBPACK_IMPORTED_MODULE_3__, _metaversefile_js__WEBPACK_IMPORTED_MODULE_4__]);
([node_fetch__WEBPACK_IMPORTED_MODULE_2__, _util_js__WEBPACK_IMPORTED_MODULE_3__, _metaversefile_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'html.js'));
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "html.js"), "utf8");
const _resolveHtml = async (id, importer)=>{
    const code = fillTemplate(templateString, {
        srcUrl: JSON.stringify(id)
    });
    return {
        code,
        map: null
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async resolveId (id, importer) {
        // const oldId = id;
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__/* .createRelativeFromAbsolutePath */ .wT)(id);
        // console.log('load directory', oldId, id, /^https?:\/\//.test(id), /\/$/.test(id));
        if (/^https?:\/\//.test(id) && /\/$/.test(id)) {
            const metaversefilePath = id + ".metaversefile";
            const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])(metaversefilePath, {
                method: "HEAD"
            });
            if (res.ok) {
                const metaversefileStartUrl = await _metaversefile_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].resolveId */ .Z.resolveId(metaversefilePath, id);
                // console.log('got metaversefile', {metaversefilePath, metaversefileStartUrl, id: id + '.fakeFile'});
                return metaversefileStartUrl;
            } else {
                // console.log('got html', id, importer);
                const indexHtmlPath = id + "index.html";
                const res1 = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])(indexHtmlPath, {
                    method: "HEAD"
                });
                if (res1.ok) {
                    return indexHtmlPath;
                } else {
                    throw new Error(`directory index.html fetch failed: ${res1.status} "${id}"`);
                }
            }
        } else if (/^\//.test(id)) {
            // console.log('got pre id 1', {id});
            const cwd = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__/* .getCwd */ .UE)();
            id = path__WEBPACK_IMPORTED_MODULE_0__.resolve(id);
            const idFullPath = path__WEBPACK_IMPORTED_MODULE_0__.join(cwd, id);
            const isDirectory = await new Promise((accept, reject)=>{
                fs__WEBPACK_IMPORTED_MODULE_1__.lstat(idFullPath, (err, stats)=>{
                    accept(!err && stats.isDirectory());
                });
            });
            if (isDirectory) {
                const metaversefilePath1 = path__WEBPACK_IMPORTED_MODULE_0__.join(id, ".metaversefile");
                const metaversefileFullPath = path__WEBPACK_IMPORTED_MODULE_0__.join(cwd, metaversefilePath1);
                const metaversefileExists = await new Promise((accept, reject)=>{
                    fs__WEBPACK_IMPORTED_MODULE_1__.lstat(metaversefileFullPath, (err, stats)=>{
                        accept(!err && stats.isFile());
                    });
                });
                // console.log('got pre id 2', {id, metaversefilePath, metaversefileFullPath, metaversefileExists});
                if (metaversefileExists) {
                    const fakeImporter = path__WEBPACK_IMPORTED_MODULE_0__.join(id, ".fakeFile");
                    const fakeId = path__WEBPACK_IMPORTED_MODULE_0__.join(path__WEBPACK_IMPORTED_MODULE_0__.dirname(fakeImporter), ".metaversefile");
                    // console.log('exists 1.1', {metaversefilePath, fakeId, fakeImporter});
                    const metaversefileStartUrl1 = await _metaversefile_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].resolveId */ .Z.resolveId(fakeId, fakeImporter);
                    // console.log('exists 1.2', {metaversefilePath, metaversefileStartUrl});
                    // console.log('got metaversefile', {metaversefilePath, metaversefileStartUrl, id: id + '.fakeFile'});
                    return metaversefileStartUrl1;
                } else {
                    // console.log('exists 2');
                    const indexHtmlPath1 = path__WEBPACK_IMPORTED_MODULE_0__.join(id, "index.html");
                    const indexHtmlFullPath = path__WEBPACK_IMPORTED_MODULE_0__.join(cwd, indexHtmlPath1);
                    const indexHtmlExists = await new Promise((accept, reject)=>{
                        fs__WEBPACK_IMPORTED_MODULE_1__.lstat(indexHtmlFullPath, (err, stats)=>{
                            accept(!err && stats.isFile());
                        });
                    });
                    if (indexHtmlExists) {
                        // console.log('exists 3', {indexHtmlPath});
                        return indexHtmlPath1;
                    } else {
                        // console.log('exists 4');
                        throw new Error(`directory index.html does not exist: "${id}"`);
                    }
                }
            } else {
                throw new Error(`not a directory: "${id}"`);
            }
        } else {
            throw new Error(`unknown path format: "${id}"`);
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8802:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'gif.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "gif.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1436:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'glb.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "glb.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2491:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'glbb.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "glbb.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6353:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'gltj.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "gltj.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2297:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'group.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "group.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5596:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'html.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "html.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7577:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'image.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "image.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4237:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7310);
/* harmony import */ var _babel_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4629);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6544);
/* harmony import */ var data_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6247);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_4__, _util_js__WEBPACK_IMPORTED_MODULE_6__]);
([node_fetch__WEBPACK_IMPORTED_MODULE_4__, _util_js__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const textDecoder = new TextDecoder();
const jsx = {
    /* async resolveId(source, importer) {
    if (/^\.\//.test(source) && /^data:/.test(importer)) {
      return path.join(cwd, source);
    } else {
      return undefined;
    }
  }, */ async load (id) {
        let src;
        if (/https?:/i.test(id)) {
            const o = url__WEBPACK_IMPORTED_MODULE_2__.parse(id, true);
            o.query.noimport = 1 + "";
            id = url__WEBPACK_IMPORTED_MODULE_2__.format(o);
            const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_4__["default"])(id);
            if (res.ok) {
                src = await res.text();
            } else {
                throw new Error(`invalid status code: ${res.status} "${id}"`);
            }
        } else if (/^data:/.test(id)) {
            const o1 = data_urls__WEBPACK_IMPORTED_MODULE_5__(id);
            if (o1) {
                const { body  } = o1;
                src = textDecoder.decode(body);
            } else {
                throw new Error("invalid data url");
            }
        } else {
            let p = "." + id.replace(/#[\s\S]+$/, "");
            const cwd = (0,_util_js__WEBPACK_IMPORTED_MODULE_6__/* .getCwd */ .UE)();
            const oldP = p;
            p = path__WEBPACK_IMPORTED_MODULE_0__.resolve(cwd, p);
            src = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(p, "utf8");
        }
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_6__/* .parseIdHash */ .Po)(id);
        const spec = _babel_core__WEBPACK_IMPORTED_MODULE_3__.transform(src, {
            presets: [
                "@babel/preset-react"
            ]
        });
        let { code  } = spec;
        code += `

export const contentId = ${JSON.stringify(contentId)};
export const name = ${JSON.stringify(name)};
export const description = ${JSON.stringify(description)};
export const type = 'js';
export const components = ${JSON.stringify(components)};
`;
        return {
            code,
            map: null
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsx);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6541:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'light.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "light.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        console.log("got id", id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4247:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'lore.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "lore.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7791:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7310);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const _jsonParse2 = (s)=>{
    try {
        const result = JSON.parse(s);
        return {
            result
        };
    } catch (error) {
        return {
            error
        };
    }
};
const metaversefile = {
    async resolveId (id, importer) {
        const s = await (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fetchFileFromId */ .r_)(id, importer, "utf8");
        if (s !== null) {
            const { result , error  } = _jsonParse2(s);
            if (!error) {
                const { name , description , start_url , components  } = result;
                if (start_url) {
                    const _mapUrl = ()=>{
                        if (/^https?:\/\//.test(start_url)) {
                            const o = url__WEBPACK_IMPORTED_MODULE_1__.parse(start_url, true);
                            const s = (0,url__WEBPACK_IMPORTED_MODULE_1__.format)(o);
                            return s;
                        } else if (/^https?:\/\//.test(id)) {
                            const o1 = url__WEBPACK_IMPORTED_MODULE_1__.parse(id, true);
                            o1.pathname = path__WEBPACK_IMPORTED_MODULE_0__.join(path__WEBPACK_IMPORTED_MODULE_0__.dirname(o1.pathname), start_url);
                            const s1 = (0,url__WEBPACK_IMPORTED_MODULE_1__.format)(o1);
                            return s1;
                        } else if (/^\//.test(id)) {
                            id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
                            const o2 = url__WEBPACK_IMPORTED_MODULE_1__.parse(id, true);
                            o2.pathname = path__WEBPACK_IMPORTED_MODULE_0__.join(path__WEBPACK_IMPORTED_MODULE_0__.dirname(o2.pathname), start_url);
                            const s2 = (0,url__WEBPACK_IMPORTED_MODULE_1__.format)(o2);
                            return s2;
                        } else {
                            throw new Error(".metaversefile scheme unknown");
                        }
                    };
                    const _makeHash = (mapped_start_url)=>{
                        const searchParams = new URLSearchParams();
                        searchParams.set("contentId", mapped_start_url);
                        if (name) {
                            searchParams.set("name", name);
                        }
                        if (description) {
                            searchParams.set("description", description);
                        }
                        if (Array.isArray(components)) {
                            searchParams.set("components", JSON.stringify(components));
                        }
                        const s = searchParams.toString();
                        return s ? "#" + s : "";
                    };
                    let u = _mapUrl();
                    if (u) {
                        u += _makeHash(u);
                        return u;
                    } else {
                        return u;
                    }
                } else {
                    throw new Error('.metaversefile has no "start_url": string', {
                        id,
                        s
                    });
                }
            } else {
                throw new Error(".metaversefile could not be parsed: " + error.stack);
            }
        } else {
            throw new Error(".metaversefile could not be loaded");
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (metaversefile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8267:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'mob.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "mob.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 598:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'npc.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "npc.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4932:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'quest.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "quest.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8033:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'react.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "react.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2322:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'rendersettings.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "rendersettings.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 908:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'scn.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "scn.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3592:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'spawnpoint.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "spawnpoint.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6478:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'text.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "text.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7392:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'video.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "video.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9781:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'vircadia.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "vircadia.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1868:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'vox.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "vox.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7325:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'vrm.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "vrm.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 564:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_js__WEBPACK_IMPORTED_MODULE_2__]);
_util_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const dirname = path.dirname(import.meta.url.replace(/^[a-z]+:\/\//, ''));
// const templateString = fs.readFileSync(path.join(dirname, '..', 'type_templates', 'wind.js'), 'utf8');
const templateString = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_0__.resolve(".", "public", "type_templates", "wind.js"), "utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    async load (id) {
        id = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createRelativeFromAbsolutePath */ .wT)(id);
        const { contentId , name , description , components ,  } = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .parseIdHash */ .Po)(id);
        const code = (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .fillTemplate */ .tJ)(templateString, {
            srcUrl: JSON.stringify(id),
            contentId: JSON.stringify(contentId),
            name: JSON.stringify(name),
            description: JSON.stringify(description),
            components: JSON.stringify(components)
        });
        return {
            code,
            map: null
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1918:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Po": () => (/* binding */ parseIdHash),
/* harmony export */   "UE": () => (/* binding */ getCwd),
/* harmony export */   "pJ": () => (/* binding */ readFile),
/* harmony export */   "r_": () => (/* binding */ fetchFileFromId),
/* harmony export */   "tJ": () => (/* binding */ fillTemplate),
/* harmony export */   "wT": () => (/* binding */ createRelativeFromAbsolutePath)
/* harmony export */ });
/* unused harmony exports jsonParse, resolveFileFromId */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7310);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_3__]);
node_fetch__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function jsonParse(s) {
    try {
        return JSON.parse(s);
    } catch (err) {
        return null;
    }
}
const resolveFileFromId = (id, importer)=>{
    id = id.replace(/^[\/\\]+/, "");
    let match;
    // console.log('load', id, match);
    if (match = id.match(/^ipfs:\/+([a-z0-9]+)((?:\/?[^\/\?]*)*)(\?\.(.+))?$/i)) {
        return `https://ipfs.webaverse.com/ipfs/${match[1]}${match[2]}`;
    /* } else if (match = id.match(/^\/@proxy\/(.+)$/)) {
    return match[1]; */ } else {
        return null;
    }
};
const getCwd = ()=>path__WEBPACK_IMPORTED_MODULE_0__.resolve(process.cwd(), process.env.BASE_CWD ?? "");
const readFile = async (id)=>{
    if (/^https?:\/\//.test(id)) {
        const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
        const text = await res.text();
        return text;
    } else {
        // read from disk
        const rs = fs__WEBPACK_IMPORTED_MODULE_1__.createReadStream(id);
        const chunks = [];
        for await (const chunk of rs){
            chunks.push(chunk);
        }
        return Buffer.concat(chunks).toString("utf8");
    }
};
const fetchFileFromId = async (id, importer, encoding = null)=>{
    //  .replace(/^\/@proxy\//, '')
    //  .replace(/^(https?:\/(?!\/))/, '$1/');
    if (/^https?:\/\//.test(id)) {
        const u = url__WEBPACK_IMPORTED_MODULE_2__.parse(id, true);
        u.query.noimport = 1 + "";
        id = (0,url__WEBPACK_IMPORTED_MODULE_2__.format)(u);
        const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
        if (encoding === "utf8") {
            const s = await res.text();
            return s;
        } else {
            const arrayBuffer = await res.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            return buffer;
        }
    } else {
        return await new Promise((accept, reject)=>{
            const cwd = getCwd();
            const p = path__WEBPACK_IMPORTED_MODULE_0__.join(cwd, id.replace(/^[\/\\]+/, ""));
            // console.log('read dir', {id, importer, p});
            fs__WEBPACK_IMPORTED_MODULE_1__.readFile(p, encoding, (err, d)=>{
                if (!err) {
                    accept(d);
                } else {
                    if (err.code === "ENOENT") {
                        accept(null);
                    } else {
                        reject(err);
                    }
                }
            });
        });
    }
};
const fillTemplate = function(templateString, templateVars) {
    // eslint-disable-next-line no-new-func
    return new Function("return `" + templateString + "`;").call(templateVars);
};
const createRelativeFromAbsolutePath = (path)=>{
    /* const cwd = process.cwd();
  if (path.startsWith(cwd.replaceAll('\\','/'))) {
    path = path.slice(cwd.length);
  } */ return path;
};
const parseIdHash = (id)=>{
    let contentId = "";
    let name = "";
    let description = "";
    let components = [];
    const match = id.match(/#([\s\S]+)$/);
    if (match) {
        const q = new URLSearchParams(match[1]);
        const qContentId = q.get("contentId");
        if (qContentId !== undefined) {
            contentId = qContentId;
        }
        const qName = q.get("name");
        if (qName !== undefined) {
            name = qName;
        }
        const qDescription = q.get("description");
        if (qDescription !== undefined) {
            description = qDescription;
        }
        const qComponents = q.get("components");
        if (qComponents !== undefined) {
            components = jsonParse(qComponents) ?? [];
        }
    }
    if (!contentId) {
        contentId = id.match(/^([^#]*)/)[1];
    }
    if (!name) {
        if (/^data:/.test(contentId)) {
            name = contentId.match(/^data:([^\;\,]*)/)[1];
        } else {
            name = contentId.match(/([^\/\.]*)(?:\.[a-zA-Z0-9]*)?$/)[1];
        }
    }
    return {
        contentId,
        name,
        description,
        components
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8628));
module.exports = __webpack_exports__;

})();