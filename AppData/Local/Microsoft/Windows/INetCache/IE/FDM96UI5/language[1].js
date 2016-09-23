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
    exports.__esModule = !0;
    var _this = this, _drpCoreSystemRegistry = __webpack_require__(17), _drpCoreOs = __webpack_require__(9), _drpCoreSystemFso = __webpack_require__(5), regPath = window.Reg;
    window.languages = {};
    var load = function(filename) {
        return new Promise(function(resolve) {
            if ("file:" === document.location.protocol) if (!_drpCoreSystemFso.fso.FileExists(filename)) return resolve();
            var script = document.createElement("script");
            script.src = filename;
            script.type = "text/javascript";
            document.documentElement.insertBefore(script, document.documentElement.lastChild);
            script.onload = script.onerror = function() {
                if (!script.executed) {
                    script.executed = !0;
                    resolve();
                }
            };
            script.onreadystatechange = function() {
                if ("complete" === script.readyState) script.onload();
                if ("loaded" === script.readyState) {
                    setTimeout(script.onload, 0);
                    script.onreadystatechange = null;
                }
            };
        });
    }, changeLanguage = window.changeLanguage = function(lang) {
        return regeneratorRuntime.async(function(context$1$0) {
            for (;;) switch (context$1$0.prev = context$1$0.next) {
              case 0:
                _drpCoreSystemRegistry.RegWrite(regPath + "lang", lang);
                context$1$0.next = 3;
                return regeneratorRuntime.awrap(loadLanguage(lang));

              case 3:
              case "end":
                return context$1$0.stop();
            }
        }, null, _this);
    };
    exports.changeLanguage = changeLanguage;
    var loadLanguage = window.loadLanguage = function(lang) {
        var langQueue, _iterator, _isArray, _i, _ref, l, language;
        return regeneratorRuntime.async(function(context$1$0) {
            for (;;) switch (context$1$0.prev = context$1$0.next) {
              case 0:
                if (!lang) lang = getLang();
                langQueue = [ lang ];
                if (-1 !== lang.indexOf("-")) langQueue.unshift(lang.split("-")[0]);
                if (!lang.startsWith("ru") && !lang.startsWith("en")) [ "uk", "az", "by", "hy", "ka" ].some(function(l) {
                    lang.startsWith(l);
                }) ? langQueue.unshift("ru") : langQueue.unshift("en");
                _iterator = langQueue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();

              case 5:
                if (!_isArray) {
                    context$1$0.next = 11;
                    break;
                }
                if (!(_i >= _iterator.length)) {
                    context$1$0.next = 8;
                    break;
                }
                return context$1$0.abrupt("break", 21);

              case 8:
                _ref = _iterator[_i++];
                context$1$0.next = 15;
                break;

              case 11:
                _i = _iterator.next();
                if (!_i.done) {
                    context$1$0.next = 14;
                    break;
                }
                return context$1$0.abrupt("break", 21);

              case 14:
                _ref = _i.value;

              case 15:
                l = _ref;
                if (window.languages[l]) {
                    context$1$0.next = 19;
                    break;
                }
                context$1$0.next = 19;
                return regeneratorRuntime.awrap(load("languages/" + l + ".js"));

              case 19:
                context$1$0.next = 5;
                break;

              case 21:
                langQueue = langQueue.filter(function(l) {
                    return window.languages[l];
                });
                lang = langQueue[langQueue.length - 1];
                language = {};
                langQueue.forEach(function(l) {
                    Object.assign(language, window.languages[l]);
                });
                window.lang = lang;
                window.language = language;
                Object.entries(language).forEach(function(_ref2) {
                    var key = _ref2[0], value = _ref2[1], el = document.getElementById(key);
                    if (el) el.innerHTML = value;
                });

              case 28:
              case "end":
                return context$1$0.stop();
            }
        }, null, _this);
    };
    exports.loadLanguage = loadLanguage;
    var getLang = function() {
        if (_drpCoreSystemRegistry.RegExists(regPath + "lang")) return _drpCoreSystemRegistry.RegRead(regPath + "lang");
        if (_drpCoreOs.OSVersion >= 6) return _drpCoreSystemRegistry.RegRead("HKCU\\Control Panel\\International\\LocaleName").toLowerCase(); else {
            var code = parseInt(_drpCoreSystemRegistry.RegRead("HKCU\\Control Panel\\International\\Locale"), 16), ruCodes = [ 1079, 44, 29740, 2092, 30764, 1068, 25, 1049, 2073, 34, 1058, 1067, 1059 ];
            if (-1 !== ruCodes.indexOf(code)) return "ru";
        }
        return "en";
    };
}, , , , , function(module, exports) {
    "use strict";
    exports.__esModule = !0;
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    exports.fso = fso;
}, , function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    exports.__esModule = !0;
    var _libWshShell = __webpack_require__(8), _libWshShell2 = _interopRequireDefault(_libWshShell), objShell = new ActiveXObject("Shell.Application");
    exports.objShell = objShell;
    exports.WshShell = _libWshShell2["default"];
}, function(module, exports) {
    "use strict";
    exports.__esModule = !0;
    exports["default"] = new ActiveXObject("WScript.Shell");
    module.exports = exports["default"];
}, function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    exports.__esModule = !0;
    var _libWshShell = __webpack_require__(8), _libWshShell2 = _interopRequireDefault(_libWshShell), _wmi = __webpack_require__(10), is64 = "AMD64" === _libWshShell2["default"].ExpandEnvironmentStrings("%PROCESSOR_ARCHITECTURE%") || "%PROCESSOR_ARCHITEW6432%" !== _libWshShell2["default"].ExpandEnvironmentStrings("%PROCESSOR_ARCHITEW6432%");
    exports.is64 = is64;
    var arch = is64 ? "64" : "86";
    exports.arch = arch;
    var _getWMIObjects = _wmi.getWMIObjects([ "Version", "CSDVersion", "Caption", "OSArchitecture" ], "Win32_OperatingSystem"), _getWMIObjects$0 = _getWMIObjects[0], Version = _getWMIObjects$0.Version, CSDVersion = _getWMIObjects$0.CSDVersion, Caption = _getWMIObjects$0.Caption, OSVersionS = Version.replace(/.\d\d.*/, "");
    exports.OSVersionS = OSVersionS;
    var OSVersion = parseFloat(OSVersionS) || 5;
    exports.OSVersion = OSVersion;
    var OSCSDVersion = CSDVersion || "";
    exports.OSCSDVersion = OSCSDVersion;
    var OSArchitecture = OSArchitecture || "";
    exports.OSArchitecture = OSArchitecture;
    var versions = {
        "5.0": "2000",
        "5.1": "XP",
        "5.2": "Server 2003",
        "6.0": "Vista",
        "6.1": "7",
        "6.2": "8",
        "6.3": "8.1",
        "6.4": "9",
        "10.0": "10"
    }, OSName = versions[OSVersionS] || OSVersionS;
    exports.OSName = OSName;
    var m = CSDVersion && /^Service Pack (\d+)$/i.exec(CSDVersion), OSVersionSP = m ? parseInt(m[1], 10) : 0;
    exports.OSVersionSP = OSVersionSP;
    var OSCaption = Caption.replace(/Microsoft /i, "");
    exports.OSCaption = OSCaption;
}, function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    exports.__esModule = !0;
    var _libIterate = __webpack_require__(11), _libIterate2 = _interopRequireDefault(_libIterate), locator = new ActiveXObject("WbemScripting.SWbemLocator");
    exports.locator = locator;
    var objWMIService = function() {
        var wmi = void 0, namespace = "root\\cimv2";
        try {
            wmi = locator.ConnectServer(null, namespace);
        } catch (err) {}
        if (!wmi) {
            var cmd = "net start winmgmt";
            new ActiveXObject("WScript.Shell").Run(cmd, 0, !0);
            wmi = locator.ConnectServer(null, namespace);
        }
        return wmi;
    }.call();
    exports.objWMIService = objWMIService;
    var getWMIObjects = function(names, source, where) {
        var wmi = arguments.length <= 3 || void 0 === arguments[3] ? objWMIService : arguments[3];
        try {
            var _ret = function() {
                var results = [], query = "SELECT * FROM " + source;
                if (where) query += " WHERE " + where;
                var colItems = wmi.ExecQuery(query, "WQL");
                _libIterate2["default"](colItems, function(objItem) {
                    var obj = {};
                    names.forEach(function(name) {
                        try {
                            if (objItem[name] || objItem[name].toArray) if (objItem[name].toArray) obj[name] = objItem[name].toArray(); else obj[name] = objItem[name];
                        } catch (e) {}
                    });
                    results.push(obj);
                });
                return {
                    v: results
                };
            }();
            if ("object" == typeof _ret) return _ret.v;
        } catch (e) {
            return [];
        }
    };
    exports.getWMIObjects = getWMIObjects;
}, function(module, exports) {
    "use strict";
    exports.__esModule = !0;
    exports["default"] = function(collection, iterator) {
        var colItems = new Enumerator(collection);
        for (colItems.moveFirst(); !colItems.atEnd(); colItems.moveNext()) iterator(colItems.item());
    };
    module.exports = exports["default"];
}, , , , , , function(module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0;
    var _shell = __webpack_require__(7), _wmi = __webpack_require__(10), REG_CORS = "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\1\\1406";
    exports.REG_CORS = REG_CORS;
    var RegExists = function(path) {
        try {
            _shell.WshShell.RegRead(path);
            return !0;
        } catch (err) {
            return !1;
        }
    };
    exports.RegExists = RegExists;
    var RegRead = function(path) {
        try {
            return _shell.WshShell.RegRead(path);
        } catch (err) {}
    };
    exports.RegRead = RegRead;
    var RegWrite = function(path, value) {
        var type = arguments.length <= 2 || void 0 === arguments[2] ? "REG_SZ" : arguments[2];
        try {
            return _shell.WshShell.RegWrite(path, value, type);
        } catch (err) {}
    };
    exports.RegWrite = RegWrite;
    var RegDelete = function(path) {
        try {
            return _shell.WshShell.RegDelete(path);
        } catch (err) {}
    };
    exports.RegDelete = RegDelete;
    var RegReadSmart = function(path) {
        var result = void 0;
        path = path.replace("HKEY_LOCAL_MACHINE\\", "HKLM\\").replace("HKEY_CURRENT_USER\\", "HKCU\\");
        result = RegRead32(path);
        if (!result && -1 !== path.indexOf("\\SOFTWARE\\Microsoft\\")) {
            var tmpPath = path.replace("\\SOFTWARE\\Microsoft\\", "\\SOFTWARE\\Wow6432Node\\Microsoft\\");
            result = RegRead32(tmpPath);
        }
        if (!result) result = RegRead64(path);
        return result;
    };
    exports.RegReadSmart = RegReadSmart;
    var RegRead32 = function(path) {
        var result = void 0;
        try {
            result = _shell.WshShell.RegRead(path);
        } catch (err) {
            result = "";
        }
        return result;
    };
    exports.RegRead32 = RegRead32;
    var RegRead64 = function(path) {
        var HKEY_LOCAL_MACHINE = 2147483650, HKEY_CURRENT_USER = 2147483649, context = new ActiveXObject("WbemScripting.SWbemNamedValueSet");
        context.Add("__ProviderArchitecture", 64);
        context.Add("__RequiredArchitecture", !0);
        var wbem = _wmi.locator.ConnectServer(null, "root\\default", null, null, null, null, null, context), StdRegProv = wbem.Get("StdRegProv"), method = StdRegProv.Methods_.Item("GetStringValue"), inParameters = method.InParameters.SpawnInstance_();
        if (0 === path.indexOf("HKLM\\")) inParameters.hDefKey = HKEY_LOCAL_MACHINE; else if (0 === path.indexOf("HKCU\\")) inParameters.hDefKey = HKEY_CURRENT_USER;
        inParameters.sSubKeyName = path.substring(5);
        inParameters.sValueName = "";
        var outParameters = StdRegProv.ExecMethod_("GetStringValue", inParameters, 0, context);
        return outParameters.sValue;
    };
    exports.RegRead64 = RegRead64;
} ]);