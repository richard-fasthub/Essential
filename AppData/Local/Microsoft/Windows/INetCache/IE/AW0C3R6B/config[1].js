!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = !0;
        return module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    window.version = "17.7.9";
    window.buildDate = "2016-08-26";
    window.sha = "6c4f415";
    window.env = "development";
    window.isCamaro = !0;
    window.updateEndpoint = "http://update.drp.su/v2/";
    window.softEndpoint = "http://update.drp.su/v2/soft/?callback";
    window.apiEndpoint = "http://api.drp.su/api";
    window.npsEndpoint = "http://update.drp.su/nps/bin/tools/run.hta";
    window.isOnline = !0;
} ]);