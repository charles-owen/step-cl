(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Step"] = factory();
	else
		root["Step"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "65d7f04a0eb4544f78c4";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Step": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/step/index.js","common","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentsOnly */ "./vendor/cl/course/js/Console/Members/StudentsOnly.js");
//
//
//
//
//
//
//
//
//
//
//



var FetcherVue = Site.FetcherVue;
/**
 * Member fetcher component that can be used by views.
 *
 * @constructor MembersFetcherComponentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  // If the fetching value it true, the using client
  // is fetching more than just the membership and we will
  // wait for that as well.
  props: {
    fetching: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      students: false,
      studentsElement: null
    };
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$store.dispatch('members/more');
    },

    /**
     * Add "Students Only" to the menu bar
     * @memberof MembersFetcherComponentVue
     */
    addStudentsOnly: function addStudentsOnly() {
      this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__["StudentsOnly"].get();
      var element = this.$refs['students-only'];
      element.parentNode.removeChild(element);
      var extra = document.querySelector('div.cl-section-component span.extra');
      extra.appendChild(element);
      element.style.display = 'inline-block';
      this.studentsElement = element;
    },
    studentsOnlyChanged: function studentsOnlyChanged() {
      _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__["StudentsOnly"].set(this.students);
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    users: function users(state) {
      if (this.students) {
        return state.members.users.filter(function (user) {
          return user.role() === _Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"].STUDENT;
        });
      } else {
        return state.members.users;
      }
    },
    fetcher: function fetcher(state) {
      return state.members.fetcher;
    }
  }),
  components: {
    'fetcher': FetcherVue
  },
  mounted: function mounted() {
    var _this = this;

    this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__["StudentsOnly"].get();
    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.$store.commit('members/query', query);
    this.$store.dispatch('members/fetch');
    setTimeout(function () {
      _this.addStudentsOnly();
    }, 100);
  },
  beforeDestroy: function beforeDestroy() {
    this.studentsElement.parentNode.removeChild(this.studentsElement);
    var extras = document.querySelectorAll('div.cl-section-component span.extra');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var NOTVISITED = 'N'; // Section has not been visited by the user

var VISITED = 'V'; // Section has been visited, but is not yet done

var DONE = 'D'; // Section is completed

var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      results: null,
      assignment: null
    };
  },
  methods: {
    status: function status(user, sectionTag) {
      var s = this.results[user.member.id];

      if (s === undefined || s[sectionTag] === undefined) {
        // No look
        return '';
      }

      var t = s[sectionTag];

      if (t.status === DONE) {
        return "<img src=\"".concat(this.root, "/vendor/cl/site/img/check16.png\">");
      }

      return '';
    },
    sectionTotal: function sectionTotal(sectionTag, users) {
      var cnt = 0;

      var _iterator = _createForOfIteratorHelper(users),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var user = _step.value;
          var s = this.results[user.member.id];

          if (s === undefined || s[sectionTag] === undefined) {
            // No look
            continue;
          }

          var t = s[sectionTag];

          if (t.status === DONE) {
            cnt++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return cnt;
    },
    looked: function looked(user, sectionTag) {
      var s = this.results[user.member.id];

      if (s === undefined || s[sectionTag] === undefined) {
        // No look
        return false;
      }

      var t = s[sectionTag];
      return t.status !== NOTVISITED;
    },
    looksTotal: function looksTotal(sectionTag, users) {
      var cnt = 0;

      var _iterator2 = _createForOfIteratorHelper(users),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var user = _step2.value;
          var s = this.results[user.member.id];

          if (s === undefined || s[sectionTag] === undefined) {
            // No look
            continue;
          }

          var t = s[sectionTag];

          if (t.status !== NOTVISITED) {
            cnt++;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return cnt;
    },
    title: function title(user, sectionName) {
      return user.name + '/' + sectionName;
    },
    freezer: function freezer() {
      var div = this.$refs.container;
      var row1 = div.querySelector('tr.vertical');
      div.addEventListener('scroll', function (event) {
        var xs = div.querySelectorAll('.cl-fixed-x');

        for (var i = 0; i < xs.length; i++) {
          var el = xs[i];
          el.style.transform = 'translate(' + div.scrollLeft + 'px, 0)';
        }

        var ys = div.querySelectorAll('.cl-fixed-y');

        for (var _i = 0; _i < ys.length; _i++) {
          var _el = ys[_i];
          _el.style.transform = 'translate(0, ' + div.scrollTop + 'px)';
        }

        var xys = div.querySelectorAll('.cl-fixed-xy');

        for (var _i2 = 0; _i2 < xys.length; _i2++) {
          var _el2 = xys[_i2];
          _el2.style.transform = 'translate(' + div.scrollLeft + 'px, ' + div.scrollTop + 'px)';
        }
      });
    }
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Status');
  },
  mounted: function mounted() {
    var _this = this;

    this.$site.api.get('/api/step/statuses/' + this.assigntag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.results = response.getData('step-statuses').attributes;
        setTimeout(function () {
          _this.freezer();
        }, 500);
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      console.log(error);

      _this.$site.toast(_this, error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ConsoleComponentBase = Site.ConsoleComponentBase;
var DONE = 'D'; // Section is completed

/**
 * Status of a step assignment for a given user.
 * /cl/console/step/status/:assigntag/:memberid
 * @constructor StepUserStatusVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": ConsoleComponentBase,
  props: ['memberid', 'assigntag'],
  data: function data() {
    return {
      results: null,
      assignment: null,
      stepUser: null
    };
  },
  created: function created() {
    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Status');
  },
  mounted: function mounted() {
    var _this = this;

    this.addNav2Link('Exit', 4, '/cl/console/step/status/' + this.assigntag);
    this.$site.api.get('/api/step/statuses/' + this.memberid + '/' + this.assigntag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.stepUser = response.getData('user').attributes;
        _this.results = response.getData('step-member-statuses').attributes;

        _this.$parent.setTitle(': ' + _this.stepUser.name + ' ' + _this.assignment.shortname + ' Status');
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      console.log(error);

      _this.$site.toast(_this, error);
    });
  },
  methods: {
    look: function look(sectionTag) {
      var s = this.results[sectionTag];

      if (s === undefined) {
        // No look
        return '';
      }

      return this.time(s.look);
    },
    access: function access(sectionTag) {
      var s = this.results[sectionTag];

      if (s === undefined) {
        // No look
        return '';
      }

      return this.time(s.access);
    },
    status: function status(sectionTag) {
      var s = this.results[sectionTag];

      if (s === undefined) {
        // No look
        return '';
      }

      if (s.status === DONE) {
        return "<img src=\"".concat(this.root, "/vendor/cl/site/img/check16.png\">");
      }
    },
    time: function time(t) {
      return this.$site.TimeFormatter.absoluteUNIX(t, 'short');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.cl-step-statuses {\n  padding: 0.5em;\n  position: relative;\n}\ndiv.cl-step-statuses > div {\n  height: 800px;\n  overflow: scroll;\n}\ndiv.cl-step-statuses table {\n  position: relative;\n  z-index: 0;\n  margin: 0 auto;\n  padding: 0;\n}\ndiv.cl-step-statuses tbody {\n  position: relative;\n  z-index: -100;\n}\ndiv.cl-step-statuses th.cl-fixed-xy {\n  position: relative;\n  z-index: 20;\n}\ndiv.cl-step-statuses td.cl-fixed-x {\n  position: relative;\n  z-index: 0;\n}\ndiv.cl-step-statuses th.cl-fixed-y {\n  position: relative;\n  z-index: 10;\n}\ntd.cl-step-nolook {\n  background: #ccffff;\n}\ntd.cl-step-status-name {\n  white-space: nowrap;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("label", { ref: "students-only", staticStyle: { display: "none" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.students,
              expression: "students"
            }
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.students)
              ? _vm._i(_vm.students, null) > -1
              : _vm.students
          },
          on: {
            change: [
              function($event) {
                var $$a = _vm.students,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.students = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.students = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.students = $$c
                }
              },
              _vm.studentsOnlyChanged
            ]
          }
        }),
        _vm._v(" Students Only")
      ]),
      _vm._v(" "),
      _c(
        "fetcher",
        { attrs: { fetcher: _vm.fetcher, fetching: _vm.fetching } },
        [
          _vm._t("default", null, { users: _vm.users, students: _vm.students }),
          _vm._v(" "),
          _vm.users.length == 0
            ? _c("p", { staticClass: "centerbox comp center" }, [
                _vm._v(
                  "\n        There are currently no members enrolled in this section."
                )
              ])
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-step-statuses" }, [
    _c(
      "div",
      { ref: "container" },
      [
        _c("membersfetcher", {
          attrs: { fetching: _vm.results === null },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _vm.results !== null
                    ? _c("table", { staticClass: "tiny" }, [
                        _c(
                          "tr",
                          { staticClass: "vertical" },
                          [
                            _c("th", { staticClass: "cl-fixed-xy" }, [
                              _vm._v("User")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "cl-fixed-xy" }, [
                              _vm._v("Name")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "cl-fixed-y small" }, [
                              _c("div", [_vm._v("Looked")])
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.assignment.sections, function(section) {
                              return _c(
                                "th",
                                { staticClass: "cl-fixed-y small" },
                                [_c("div", [_vm._v(_vm._s(section.name))])]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(fetcher.users, function(user) {
                              return _c(
                                "tr",
                                [
                                  _c(
                                    "td",
                                    { staticClass: "cl-fixed-x" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to:
                                              _vm.root +
                                              "/cl/console/step/status/" +
                                              _vm.assigntag +
                                              "/" +
                                              user.member.id
                                          }
                                        },
                                        [_vm._v(_vm._s(user.userId))]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "cl-fixed-x cl-step-status-name"
                                    },
                                    [_vm._v(_vm._s(user.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      class: _vm.looked(user, "look")
                                        ? ""
                                        : "cl-step-nolook",
                                      attrs: {
                                        title: _vm.title(user, "Looked")
                                      }
                                    },
                                    [
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.status(user, "look")
                                          )
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.assignment.sections, function(
                                    section
                                  ) {
                                    return _c(
                                      "td",
                                      {
                                        class: _vm.looked(user, section.tag)
                                          ? ""
                                          : "cl-step-nolook",
                                        attrs: {
                                          title: _vm.title(user, section.name)
                                        }
                                      },
                                      [
                                        _c("span", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.status(user, section.tag)
                                            )
                                          }
                                        })
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            }),
                            _vm._v(" "),
                            _c("td", { staticClass: "cl-fixed-x" }, [
                              _vm._v(" ")
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "cl-fixed-x cl-step-status-name" },
                              [_vm._v(" ")]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.looksTotal("look", fetcher.users))
                              )
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.assignment.sections, function(section) {
                              return _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.sectionTotal(section.tag, fetcher.users)
                                  )
                                )
                              ])
                            }),
                            _vm._v(" "),
                            _c("tr")
                          ],
                          2
                        )
                      ])
                    : _vm._e()
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-step-statuses" }, [
    _vm.results !== null
      ? _c(
          "table",
          { staticClass: "small" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Look")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.look("look")))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.access("look")))]),
              _vm._v(" "),
              _c("td", [_vm._v(" ")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.assignment.sections, function(section) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(section.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.look(section.tag)))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.access(section.tag)))]),
                _vm._v(" "),
                _c("td", [
                  _c("span", {
                    domProps: { innerHTML: _vm._s(_vm.status(section.tag)) }
                  })
                ])
              ])
            })
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Section")]),
      _c("th", [_vm._v("Looked")]),
      _c("th", [_vm._v("Accessed")]),
      _c("th", [_vm._v("Status")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepStatus.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8b480f68", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepStatus.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepStatus.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue":
/*!*************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3eab44d2')) {
      api.createRecord('3eab44d2', component.options)
    } else {
      api.reload('3eab44d2', component.options)
    }
    module.hot.accept(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
(function () {
      api.rerender('3eab44d2', {
        render: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!********************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/StudentsOnly.js":
/*!*************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/StudentsOnly.js ***!
  \*************************************************************/
/*! exports provided: StudentsOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsOnly", function() { return StudentsOnly; });
var LOCAL_STORAGE_STUDENTS_ONLY = 'cl_students_only';
/**
 * Item in local storage that maintains the state of
 * "students only" in the console.
 * @constructor
 */

var StudentsOnly = function StudentsOnly() {};

StudentsOnly.get = function () {
  var localStorage = window.localStorage;
  var s = localStorage.getItem(LOCAL_STORAGE_STUDENTS_ONLY);
  return s === 'yes';
};

StudentsOnly.set = function (students) {
  var localStorage = window.localStorage;
  localStorage.setItem(LOCAL_STORAGE_STUDENTS_ONLY, students ? 'yes' : 'no');
};

/***/ }),

/***/ "./vendor/cl/course/js/Members/Member.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Members/Member.js ***!
  \***********************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");

/**
 * Member of a course
 * Attaches to a user Object
 * @constructor
 */

var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    this.created = json.created !== undefined ? json.created : null;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

    this.created = null; // When user was created

    role = null; // Membership role
  }

  this.role = function () {
    return role;
  };

  this.setRole = function (role_) {
    role = role_;
  };
};

Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].prototype);
Member.prototype.constructor = Member;
/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */

Member.prototype.getSection = function (store) {
  return store.getters['course/section'](this.semester, this.section);
};
/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */


Member.prototype.getAssignment = function (store, assigntag) {
  var section = this.getSection(store);
  return section.getAssignment(assigntag);
}; // The possible member roles
// Must match values in Member.php


Member.GUEST = 'G'; ///< Guest user visiting the site

Member.USER = 'U'; ///< Standard user from User, don't use for Member

Member.DROPPED = 'D'; ///< User has dropped the course

Member.STUDENT = 'T'; ///< Enrolled student in course

Member.STAFF = 'S'; ///< Any course staff

Member.GRADER = 'R'; ///< Graders

Member.ULA = 'L'; ///< Undergraduate Learning Assistant

Member.TA = 'E'; ///< Teaching assistant

Member.INSTRUCTOR = 'I'; ///< Course instructor

Member.ADMIN = 'A'; ///< Admin

Member.prototype.getRoles = function () {
  var roles = {};
  roles[Member.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[Member.DROPPED] = {
    name: 'Dropped',
    priority: 2
  };
  roles[Member.USER] = {
    name: 'User',
    priority: 3,
    skip: true
  };
  roles[Member.STUDENT] = {
    name: 'Student',
    priority: 4
  };
  roles[Member.STAFF] = {
    name: 'Staff',
    priority: 5,
    skip: true
  };
  roles[Member.GRADER] = {
    name: 'Grader',
    priority: 6
  };
  roles[Member.ULA] = {
    name: 'Undergraduate Learning Assistant',
    "short": 'ULA',
    priority: 7
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    "short": 'TA',
    priority: 8
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 9
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



/***/ }),

/***/ "./vendor/cl/course/js/SectionStatus.js":
/*!**********************************************!*\
  !*** ./vendor/cl/course/js/SectionStatus.js ***!
  \**********************************************/
/*! exports provided: SectionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionStatus", function() { return SectionStatus; });
/**
 * Constants that represent SectionStatus possible values.
 * @constructor
 */
var SectionStatus = function SectionStatus() {}; // Constants must match those in SectionStatus.php

SectionStatus.NOTVISITED = 'N'; ///< %Section has not been visited by the user

SectionStatus.VISITED = 'V'; ///< %Section has been visited, but is not yet done

SectionStatus.DONE = 'D'; ///< %Section is completed

SectionStatus.toString = function (status) {
  if (status === null) {
    return 'Unknown';
  }

  switch (status) {
    case SectionStatus.NOTVISITED:
    default:
      return 'Not yet visited';

    case SectionStatus.VISITED:
      return 'Visited';

    case SectionStatus.DONE:
      return 'Completed';
  }
};

/***/ }),

/***/ "./vendor/cl/site/js/TimeFormatter.js":
/*!********************************************!*\
  !*** ./vendor/cl/site/js/TimeFormatter.js ***!
  \********************************************/
/*! exports provided: TimeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return TimeFormatter; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Utility functions to format times.
 */

/**
 * Utility functions to format times.
 * @constructor
 */

var TimeFormatter = function TimeFormatter() {};
/**
 * Convert a time to the format we display
 * Time is relative to a specified time (or current time)
 * @param {moment} time Time to convert (moment)
 * @param {moment} currentTime Current time (moment)
 * @param {string} format Moment format
 * @returns {string}
 */

TimeFormatter.relative = function (time, currentTime, format) {
  if (currentTime === undefined || currentTime === null) {
    currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default.a.now();
  }

  var elapsed = currentTime.diff(time);

  if (elapsed < 60000) {
    return '<1 min ago';
  }

  if (elapsed < 3600000) {
    // Within an hour ago
    var mins = Math.floor(elapsed / 60000);
    return '' + mins + ' min ago';
  }
  /*
   * Determine if it was today
   */


  if (time.date() === currentTime.date() && time.month() === currentTime.month() && time.year() === currentTime.year()) {
    var hour = time.hour();
    var am = 'am';

    if (hour === 0) {
      hour = 12;
    } else if (hour === 12) {
      am = 'pm';
    } else if (hour > 12) {
      am = 'pm';
      hour -= 12;
    }

    var minute = time.minute();

    if (minute < 10) {
      minute = '0' + minute;
    }

    return "Today at " + hour + ':' + minute + am;
  }

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  }

  return time.format(format);
};
/**
 * Display a Unix time as an absolute time.
 * @param {int} time Unix time (seconds)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.absoluteUNIX = function (time, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  } else if (format === 'short') {
    format = 'ddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long') {
    format = 'dddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long-date') {
    format = 'dddd, M-DD-YYYY';
  } else if (format === 'short-time') {
    format = 'h:mma';
  } else if (format === 'long-time') {
    format = 'h:mm:ssa';
  }

  return t.format(format);
};
/**
 * Display a Unix time as a relative time.
 * @param {int} time Unix time (seconds)
 * @param {int} currentTime Current time as UNIX time (optional)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.relativeUNIX = function (time, currentTime, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);
  var c = currentTime !== undefined && currentTime !== null ? moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(currentTime) : moment__WEBPACK_IMPORTED_MODULE_0___default()();
  return this.relative(t, c, format);
};

/***/ }),

/***/ "./vendor/cl/site/js/Util/StickyNav.js":
/*!*********************************************!*\
  !*** ./vendor/cl/site/js/Util/StickyNav.js ***!
  \*********************************************/
/*! exports provided: StickyNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNav", function() { return StickyNav; });
/**
 * Make the nav bar 'sticky'. It sticks to the top
 * of the page instead of scrolling off.
 * @param sel Selector to find the nav bar.
 * @constructor
 */
var StickyNav = function StickyNav(sel) {
  var navs = [];
  var spacer = document.createElement('div');
  var installed = false;
  var els = document.querySelectorAll(sel);

  for (var i = 0; i < els.length; i++) {
    navs.push({
      nav: els[i],
      sticky: els[i].offsetTop
    });
  }

  window.addEventListener('scroll', function (event) {
    for (var _i = 0; _i < navs.length; _i++) {
      var nav = navs[_i];

      if (window.pageYOffset >= nav.sticky) {
        if (!installed) {
          nav.nav.classList.add("cl-sticky");
          nav.nav.parentNode.appendChild(spacer);
          installed = true;
        }

        spacer.style.height = nav.nav.clientHeight + 'px';
      } else {
        if (installed) {
          nav.nav.classList.remove("cl-sticky");
          spacer.parentNode.removeChild(spacer);
          installed = false;
        }
      }
    }
  });
};

/***/ }),

/***/ "./vendor/cl/step/img/progress-cur.png":
/*!*********************************************!*\
  !*** ./vendor/cl/step/img/progress-cur.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./vendor/cl/step/img/progress-left.png":
/*!**********************************************!*\
  !*** ./vendor/cl/step/img/progress-left.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./vendor/cl/step/img/progress-right.png":
/*!***********************************************!*\
  !*** ./vendor/cl/step/img/progress-right.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./vendor/cl/step/img/progress-sc.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-sc.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./vendor/cl/step/img/progress-si.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-si.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./vendor/cl/step/img/progress-tc.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-tc.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./vendor/cl/step/img/progress-ti.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-ti.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./vendor/cl/step/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/step/index.js ***!
  \*********************************/
/*! exports provided: Step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony import */ var _js_Step_StepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Step/StepFactory */ "./vendor/cl/step/js/Step/StepFactory.js");
/* harmony import */ var _js_Console_StepConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/StepConsole */ "./vendor/cl/step/js/Console/StepConsole.js");


var Step = _js_Step_StepFactory__WEBPACK_IMPORTED_MODULE_0__["StepFactory"].create(Site.Site);
 //
// Install the console components
//

if (Site.Site.console !== undefined) {
  _js_Console_StepConsole__WEBPACK_IMPORTED_MODULE_1__["StepConsole"].setup(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/step/js/Console/StepConsole.js":
/*!**************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepConsole.js ***!
  \**************************************************/
/*! exports provided: StepConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepConsole", function() { return StepConsole; });
/* harmony import */ var _StepStatus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepStatus.vue */ "./vendor/cl/step/js/Console/StepStatus.vue");
/* harmony import */ var _StepUserStatus_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepUserStatus.vue */ "./vendor/cl/step/js/Console/StepUserStatus.vue");
/**
 * @file
 * Step system console components
 */


var StepConsole = function StepConsole() {};

StepConsole.setup = function (Console) {
  Console.components.addRoute({
    route: '/step/status/:assigntag',
    component: _StepStatus_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    props: true
  });
  Console.components.addRoute({
    route: '/step/status/:assigntag/:memberid',
    component: _StepUserStatus_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    props: true
  });
  Console.course.assignmentLink('step', 'status', '/step/status/:assigntag');
};

/***/ }),

/***/ "./vendor/cl/step/js/Console/StepStatus.vue":
/*!**************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepStatus.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepStatus.vue?vue&type=template&id=67f1dcc6& */ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6&");
/* harmony import */ var _StepStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepStatus.vue?vue&type=script&lang=js& */ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StepStatus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepStatus.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StepStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67f1dcc6')) {
      api.createRecord('67f1dcc6', component.options)
    } else {
      api.reload('67f1dcc6', component.options)
    }
    module.hot.accept(/*! ./StepStatus.vue?vue&type=template&id=67f1dcc6& */ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepStatus.vue?vue&type=template&id=67f1dcc6& */ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6&");
(function () {
      api.rerender('67f1dcc6', {
        render: _StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/step/js/Console/StepStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepStatus.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepStatus.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6&":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepStatus.vue?vue&type=template&id=67f1dcc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepStatus.vue?vue&type=template&id=67f1dcc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepStatus_vue_vue_type_template_id_67f1dcc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/step/js/Console/StepUserStatus.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepUserStatus.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepUserStatus.vue?vue&type=template&id=642ea4f1& */ "./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1&");
/* harmony import */ var _StepUserStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepUserStatus.vue?vue&type=script&lang=js& */ "./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StepUserStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('642ea4f1')) {
      api.createRecord('642ea4f1', component.options)
    } else {
      api.reload('642ea4f1', component.options)
    }
    module.hot.accept(/*! ./StepUserStatus.vue?vue&type=template&id=642ea4f1& */ "./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepUserStatus.vue?vue&type=template&id=642ea4f1& */ "./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1&");
(function () {
      api.rerender('642ea4f1', {
        render: _StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/step/js/Console/StepUserStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StepUserStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepUserStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StepUserStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepUserStatus.vue?vue&type=template&id=642ea4f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/step/js/Console/StepUserStatus.vue?vue&type=template&id=642ea4f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepUserStatus_vue_vue_type_template_id_642ea4f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/step/js/Step/ImageLoader.js":
/*!***********************************************!*\
  !*** ./vendor/cl/step/js/Step/ImageLoader.js ***!
  \***********************************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
/**
 * Simple image loader that determines when all images have been loaded
 */
var ImageLoader = function ImageLoader() {
  var loading = 0;
  var func = null;

  this.load = function (src) {
    var img = new Image();

    img.onload = function () {
      loadedOne();
    };

    img.onerror = function () {
      loadedOne();
    };

    img.onabort = function () {
      loadedOne();
    };

    loading++;
    img.src = src;
    return img;
  };

  function loadedOne() {
    loading--;

    if (loading === 0 && func !== null) {
      func();
    }
  }

  this.loaded = function (_func) {
    if (loading === 0) {
      _func();
    }

    func = _func;
  };
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/Popup.js":
/*!*****************************************!*\
  !*** ./vendor/cl/step/js/Step/Popup.js ***!
  \*****************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/**
 * @file
 * Popup menu items.
 */
var Popup = function Popup(sel, data) {
  function initialize() {
    var elements = document.querySelectorAll(sel);

    for (var i = 0; i < elements.length; i++) {
      install(elements[i]);
    }
  }

  function install(element) {
    var json = JSON.parse(element.textContent);
    element.innerHTML = '';
    element.style.display = 'inline-block';
    var a = document.createElement('a');
    element.appendChild(a);
    var span = document.createElement('span');
    span.innerText = json.title;
    a.appendChild(span);
    var img = document.createElement('img');
    img.src = json.img;
    a.appendChild(img);

    a.onclick = function (event) {
      event.preventDefault();

      if (!window.focus) {
        return;
      }

      window.open(json.link, json.title, 'width=' + json.width + ', height=' + json.height + ', scrollbars=yes');
    };
  }

  initialize();
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/Progress.js":
/*!********************************************!*\
  !*** ./vendor/cl/step/js/Step/Progress.js ***!
  \********************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _ImageLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLoader.js */ "./vendor/cl/step/js/Step/ImageLoader.js");
/* harmony import */ var _img_progress_left_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/progress-left.png */ "./vendor/cl/step/img/progress-left.png");
/* harmony import */ var _img_progress_left_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_progress_left_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_progress_right_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/progress-right.png */ "./vendor/cl/step/img/progress-right.png");
/* harmony import */ var _img_progress_right_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_progress_right_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_progress_si_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/progress-si.png */ "./vendor/cl/step/img/progress-si.png");
/* harmony import */ var _img_progress_si_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_progress_si_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_progress_sc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/progress-sc.png */ "./vendor/cl/step/img/progress-sc.png");
/* harmony import */ var _img_progress_sc_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_progress_sc_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_progress_ti_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/progress-ti.png */ "./vendor/cl/step/img/progress-ti.png");
/* harmony import */ var _img_progress_ti_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_progress_ti_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_progress_tc_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/progress-tc.png */ "./vendor/cl/step/img/progress-tc.png");
/* harmony import */ var _img_progress_tc_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_progress_tc_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_progress_cur_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/progress-cur.png */ "./vendor/cl/step/img/progress-cur.png");
/* harmony import */ var _img_progress_cur_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_progress_cur_png__WEBPACK_IMPORTED_MODULE_7__);
/**
 * @file
 * Step progress indicator
 */








var Progress = function Progress(sel, data) {
  var NOTVISITED = 'N'; ///< %Section has not been visited by the user

  var VISITED = 'V'; ///< %Section has been visited, but is not yet done

  var DONE = 'D'; ///< %Section is completed

  var SECTION = 'S'; ///< Indicates this section is a regular section

  var TASK = 'T'; ///< Indicates this section is a task

  var QUIZ = 'Q'; ///< Indicates this section is a quiz

  var VIDEO = 'V'; ///< Indicates this section is a video

  var SPACING = 6; ///< Spacing between images

  var loader = new _ImageLoader_js__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"]();
  var left = loader.load(_img_progress_left_png__WEBPACK_IMPORTED_MODULE_1___default.a);
  var right = loader.load(_img_progress_right_png__WEBPACK_IMPORTED_MODULE_2___default.a);
  var si = loader.load(_img_progress_si_png__WEBPACK_IMPORTED_MODULE_3___default.a);
  var sc = loader.load(_img_progress_sc_png__WEBPACK_IMPORTED_MODULE_4___default.a);
  var ti = loader.load(_img_progress_ti_png__WEBPACK_IMPORTED_MODULE_5___default.a);
  var tc = loader.load(_img_progress_tc_png__WEBPACK_IMPORTED_MODULE_6___default.a);
  var cur = loader.load(_img_progress_cur_png__WEBPACK_IMPORTED_MODULE_7___default.a);
  var overX = null;
  loader.loaded(function () {
    var els = document.querySelectorAll(sel);

    var _loop = function _loop(i) {
      var li = els[i];
      var canvas = document.createElement('CANVAS');
      li.appendChild(canvas);
      canvas.height = 25;
      canvas.width = left.width + right.width + SPACING * data.sections.length;
      var div = document.createElement('DIV');
      li.appendChild(div);
      var context = canvas.getContext("2d");
      var x = 0;
      var y = 5;
      context.drawImage(left, x, y);
      x += left.width;
      var curX = 0;

      for (var _i = 0; _i < data.sections.length; _i++) {
        var section = data.sections[_i];
        var img = void 0;

        switch (section.type) {
          case 'T':
            img = section.status === DONE ? tc : ti;
            break;

          default:
            img = section.status === DONE ? sc : si;
            break;
        }

        if (section.tag === data.current) {
          curX = x - 1;
        }

        context.drawImage(img, x, y);
        x += SPACING;
      } // Draw the current location


      context.drawImage(cur, curX, y);
      context.drawImage(right, x, y);
      x += right.width;
      canvas.addEventListener("mouseenter", function (event) {});
      canvas.addEventListener("mousemove", function (event) {
        overX = event.offsetX;
        div.style.display = 'block';
        div.style.right = li.offsetWidth - overX - 10 + 'px';
        var s = (overX - left.width) / SPACING;

        if (s < 0 || s >= data.sections.length) {
          div.style.display = 'none';
        } else {
          div.textContent = data.sections[Math.floor(s)].name;
        }
      });
      canvas.addEventListener("click", function (event) {
        overX = event.offsetX;
        var s = (overX - left.width) / SPACING;

        if (s >= 0 && s < data.sections.length) {
          window.location = data.sections[Math.floor(s)].url;
        }
      });
      canvas.addEventListener("mouseleave", function (event) {
        div.style.display = 'none';
        overX = null;
      });
    };

    for (var i = 0; i < els.length; i++) {
      _loop(i);
    }
  });
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepFactory.js":
/*!***********************************************!*\
  !*** ./vendor/cl/step/js/Step/StepFactory.js ***!
  \***********************************************/
/*! exports provided: StepFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepFactory", function() { return StepFactory; });
/* harmony import */ var _StepSectionPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepSectionPage.js */ "./vendor/cl/step/js/Step/StepSectionPage.js");
/* harmony import */ var _StepPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepPage.js */ "./vendor/cl/step/js/Step/StepPage.js");


var StepFactory = function StepFactory() {};

StepFactory.create = function (site) {
  var Step = function Step() {};

  site.ready(function () {
    var en;

    if ((en = document.getElementById('cl-step')) !== null) {
      new _StepSectionPage_js__WEBPACK_IMPORTED_MODULE_0__["StepSectionPage"](JSON.parse(en.textContent));
    }

    if ((en = document.getElementById('cl-step-page')) !== null) {
      new _StepPage_js__WEBPACK_IMPORTED_MODULE_1__["StepPage"](JSON.parse(en.textContent));
    }
  });
  return Step;
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepNav.js":
/*!*******************************************!*\
  !*** ./vendor/cl/step/js/Step/StepNav.js ***!
  \*******************************************/
/*! exports provided: StepNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepNav", function() { return StepNav; });
/**
 * Step page navigation features
 * @constructor
 */
var StepNav = function StepNav(sel, data) {
  var _this2 = this;

  var sectionTag = data.current;
  var assignTag = data.tag;
  var SectionStatus = Site.site.SectionStatus;

  var install = function install(nav) {
    var element = nav.querySelector('.cl-step-mark-completed');

    if (element !== null) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        flag(SectionStatus.DONE, function () {
          window.location = data.url;
        });
      });
    }

    element = nav.querySelector('.cl-step-clear-completed');

    if (element !== null) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        flag(SectionStatus.VISITED, function () {
          window.location = data.url;
        });
      });
    }

    element = nav.querySelector('.cl-step-completed-next');

    if (element !== null) {
      element.addEventListener('click', function (event) {
        var _this = this;

        event.preventDefault();
        flag(SectionStatus.DONE, function () {
          window.location = _this.href;
        });
      });
    }
  };

  var flag = function flag(status, callback) {
    var params = {
      status: status
    };
    Site.api.post("/api/step/status/".concat(assignTag, "/").concat(sectionTag), params).then(function (response) {
      if (!response.hasError()) {
        callback();
      } else {
        Site.toast(_this2, response);
      }
    })["catch"](function (error) {
      Site.toast(_this2, error);
    });
  };

  var els = document.querySelectorAll(sel);

  for (var i = 0; i < els.length; i++) {
    install(els[i]);
  }
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepPage.js":
/*!********************************************!*\
  !*** ./vendor/cl/step/js/Step/StepPage.js ***!
  \********************************************/
/*! exports provided: StepPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepPage", function() { return StepPage; });
/* harmony import */ var _StepSectionsList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepSectionsList.js */ "./vendor/cl/step/js/Step/StepSectionsList.js");
/**
 * @file
 * Javascript object for managment of the main step page.
 */

var StepPage = function StepPage(data) {
  // Is there any quiz data?
  var en,
      quizResults = null;

  if ((en = document.getElementById('cl-quiz-results')) !== null) {
    quizResults = JSON.parse(en.textContent);
  }

  new _StepSectionsList_js__WEBPACK_IMPORTED_MODULE_0__["StepSectionsList"]('div.cl-step-sections', data, quizResults);
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepSection.js":
/*!***********************************************!*\
  !*** ./vendor/cl/step/js/Step/StepSection.js ***!
  \***********************************************/
/*! exports provided: StepSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepSection", function() { return StepSection; });
/**
 * @file
 * The definition of a step section
 */
var StepSection = function StepSection() {}; // Must match values in StepSection.php

StepSection.SECTION = 'S'; ///< Indicates this section is a regular section

StepSection.TASK = 'T'; ///< Indicates this section is a task

StepSection.QUIZ = 'Q'; ///< Indicates this section is a quiz

StepSection.VIDEO = 'V'; ///< Indicates this section is a video

StepSection.flag = function (assignTag, sectionTag, status, callback) {
  var _this = this;

  var params = {
    status: status
  };
  Site.api.post("/api/step/status/".concat(assignTag, "/").concat(sectionTag), params).then(function (response) {
    if (!response.hasError()) {
      callback();
    } else {
      Site.toast(_this, response);
    }
  })["catch"](function (error) {
    Site.toast(_this, error);
  });
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepSectionPage.js":
/*!***************************************************!*\
  !*** ./vendor/cl/step/js/Step/StepSectionPage.js ***!
  \***************************************************/
/*! exports provided: StepSectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepSectionPage", function() { return StepSectionPage; });
/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Progress */ "./vendor/cl/step/js/Step/Progress.js");
/* harmony import */ var site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/Util/StickyNav */ "./vendor/cl/site/js/Util/StickyNav.js");
/* harmony import */ var _StepNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepNav */ "./vendor/cl/step/js/Step/StepNav.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./vendor/cl/step/js/Step/Popup.js");
/**
 * @file
 * Javascript object for management of a step section page
 */




var StepSectionPage = function StepSectionPage(data) {
  new _Popup__WEBPACK_IMPORTED_MODULE_3__["Popup"]('span.cl-popup-menu-item', data);
  new _Progress__WEBPACK_IMPORTED_MODULE_0__["Progress"]('li.cl-step-progress', data);
  new site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_1__["StickyNav"]('nav.cl-stepnav');
  new _StepNav__WEBPACK_IMPORTED_MODULE_2__["StepNav"]('nav.cl-stepnav', data);
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepSectionsList.js":
/*!****************************************************!*\
  !*** ./vendor/cl/step/js/Step/StepSectionsList.js ***!
  \****************************************************/
/*! exports provided: StepSectionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepSectionsList", function() { return StepSectionsList; });
/* harmony import */ var _StepSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepSection.js */ "./vendor/cl/step/js/Step/StepSection.js");
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
/* harmony import */ var course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! course-cl/js/SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var StepSectionsList = function StepSectionsList(sel, data, quizResults) {
  this.start = function () {
    var element = document.querySelector(sel);

    if (element === null) {
      return;
    }

    element.innerHTML = "<h2><a id=\"sections\">".concat(data.sectionsTitle, "</a></h2>");
    var div = document.createElement('DIV');
    element.appendChild(div);
    div.innerHTML = data.sectionsBegin;
    var table = this.table();
    div.appendChild(table);
    var p = document.createElement('P');
    div.appendChild(p);
    p.classList.add('center');
    p.innerHTML = "This assignment is also available as a \n<a href=\"".concat(Site.root + '/cl/step/all/' + data.tag, "\" title=\"Single Page View\">single page</a>.");

    if (data.gradeLink !== undefined) {
      p = document.createElement('p');
      div.appendChild(p);
      p.classList.add('grade');
      p.innerHTML = "<p class=\"grade\"><img src=\"".concat(Site.root, "/vendor/cl/grades/img/grading.png\" width=\"114\" height=\"50\" alt=\"Grading Icon\">\n\t\t    <a class=\"cl-autoback\" href=\"").concat(Site.root).concat(data.gradeLink, "/").concat(data.tag, "\">Assignment Grading Page</a></p>");
    }

    var endDiv = document.createElement('DIV');
    div.appendChild(endDiv);
    endDiv.innerHTML = data.sectionsEnd;
  };

  this.table = function () {
    var table = document.createElement('TABLE');
    table.title = "Table of Step Sections";
    var tr = document.createElement('TR');

    if (quizResults !== null) {
      tr.innerHTML = "<th>&nbsp;</th><th>Section</th><th>&nbsp;</th>";
    } else {
      tr.innerHTML = "<th>&nbsp;</th><th>Section</th>";
    }

    table.appendChild(tr);

    var _iterator = _createForOfIteratorHelper(data.sections),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var section = _step.value;
        tr = this.taskRow(data, section);
        table.appendChild(tr);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return table;
  };

  this.taskRow = function (data, section) {
    var tr = document.createElement('TR'); //
    // Check mark column
    //

    var td1 = document.createElement('TD');
    td1.classList.add('stepcheck');
    tr.appendChild(td1);
    var root = Site.root;

    if (section.status === course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__["SectionStatus"].DONE) {
      td1.innerHTML = "<img alt=\"Check mark\" width=\"19\" height=\"14\" src=\"".concat(root, "/vendor/cl/site/img/check.png\">");
    }

    td1.onclick = function (event) {
      var div = document.createElement('DIV');
      div.classList.add('cl-dialog');
      var content = "<div class=\"tabular small\">\n<p><span class=\"label\">Section: </span><span>".concat(section.name, "</span></p>\n<p><span class=\"label\">Status: </span><span>").concat(course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__["SectionStatus"].toString(section.status), "</span></p>");

      if (section.status !== null && section.status !== course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__["SectionStatus"].NOTVISITED) {
        content += "\n<p><span class=\"label\">First Look: </span><span>".concat(site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(section.look), "</span></p>\n<p><span class=\"label\">Last Access: </span><span>").concat(site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(section.access), "</span></p>");
      }

      content += "</div>";
      div.innerHTML = content;
      var dialog = new dialog_cl__WEBPACK_IMPORTED_MODULE_3__["default"]({
        content: div,
        title: 'Section Status'
      });

      if (section.status === course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__["SectionStatus"].DONE) {
        var p = document.createElement('P');
        p.classList.add('center');
        div.appendChild(p);
        var button = document.createElement('BUTTON');
        button.textContent = 'Clear Status';
        p.appendChild(button);

        button.onclick = function (event) {
          _StepSection_js__WEBPACK_IMPORTED_MODULE_0__["StepSection"].flag(data.tag, section.tag, course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__["SectionStatus"].VISITED, function () {
            section.status = course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__["SectionStatus"].VISITED;
            td1.innerHTML = '';
            dialog.close();
          });
        };
      }
    }; //
    // The link itself
    //


    var td2 = document.createElement('TD');
    td2.classList.add('stepname');
    tr.appendChild(td2);
    var icon = data.icons[section.type];
    var img = "<img alt=\"".concat(icon.alt, "\" src=\"").concat(icon.file, "\">");
    td2.innerHTML = "".concat(img, " <a href=\"").concat(section.url, "\" title=\"").concat(section.name, "\" class=\"steplink\">").concat(section.name, "</a>"); //
    // Quiz status
    //

    if (quizResults !== null) {
      var td3 = document.createElement('TD');
      tr.appendChild(td3);
      var result = quizResults[section.tag];

      if (result !== undefined) {
        td3.innerHTML = result.points + '/' + result.maxpoints;
      } else {
        td3.innerHTML = '&nbsp;';
      }
    }

    return tr;
  };

  this.start();
};

/***/ }),

/***/ "./vendor/cl/users/js/Users/Membership.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Users/Membership.js ***!
  \************************************************/
/*! exports provided: Membership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return Membership; });
/**
 * @file
 * A membership associated with a user.
 *
 * This is a base object that will be inherited by
 * actual membership objects.
 */
var Membership = function Membership() {
  /// The User object for this membership
  this.user = null;
};



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBTdGF0dXMudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBVc2VyU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBTdGF0dXMudnVlPzdmODAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9hNzc3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2pzL0NvbnNvbGUvU3RlcFN0YXR1cy52dWU/NDRmZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBVc2VyU3RhdHVzLnZ1ZT9kNWMwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2pzL0NvbnNvbGUvU3RlcFN0YXR1cy52dWU/ZWRmNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlPzhjYzUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP2YyYWYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvU3R1ZGVudHNPbmx5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTWVtYmVycy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU3RhdHVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1RpbWVGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVXRpbC9TdGlja3lOYXYuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvaW1nL3Byb2dyZXNzLWN1ci5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvaW1nL3Byb2dyZXNzLWxlZnQucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2ltZy9wcm9ncmVzcy1yaWdodC5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvaW1nL3Byb2dyZXNzLXNjLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9pbWcvcHJvZ3Jlc3Mtc2kucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2ltZy9wcm9ncmVzcy10Yy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvaW1nL3Byb2dyZXNzLXRpLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBDb25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2pzL0NvbnNvbGUvU3RlcFN0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvanMvQ29uc29sZS9TdGVwU3RhdHVzLnZ1ZT9hMTViIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2pzL0NvbnNvbGUvU3RlcFN0YXR1cy52dWU/OTFhYSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBTdGF0dXMudnVlPzcwNzIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvanMvQ29uc29sZS9TdGVwVXNlclN0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvanMvQ29uc29sZS9TdGVwVXNlclN0YXR1cy52dWU/ZWI3YiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBVc2VyU3RhdHVzLnZ1ZT9iZGEwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1Byb2dyZXNzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvU3RlcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9TdGVwTmF2LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvU3RlcFBhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9TdGVwU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1N0ZXBTZWN0aW9uUGFnZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1N0ZXBTZWN0aW9uc0xpc3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMiXSwibmFtZXMiOlsiTE9DQUxfU1RPUkFHRV9TVFVERU5UU19PTkxZIiwiU3R1ZGVudHNPbmx5IiwiZ2V0IiwibG9jYWxTdG9yYWdlIiwid2luZG93IiwicyIsImdldEl0ZW0iLCJzZXQiLCJzdHVkZW50cyIsInNldEl0ZW0iLCJNZW1iZXIiLCJqc29uIiwiTWVtYmVyc2hpcCIsImNhbGwiLCJyb2xlIiwidW5kZWZpbmVkIiwiaWQiLCJzZW1lc3RlciIsInNlY3Rpb24iLCJjcmVhdGVkIiwic2V0Um9sZSIsInJvbGVfIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJnZXRTZWN0aW9uIiwic3RvcmUiLCJnZXR0ZXJzIiwiZ2V0QXNzaWdubWVudCIsImFzc2lnbnRhZyIsIkdVRVNUIiwiVVNFUiIsIkRST1BQRUQiLCJTVFVERU5UIiwiU1RBRkYiLCJHUkFERVIiLCJVTEEiLCJUQSIsIklOU1RSVUNUT1IiLCJBRE1JTiIsImdldFJvbGVzIiwicm9sZXMiLCJuYW1lIiwicHJpb3JpdHkiLCJza2lwIiwiU2VjdGlvblN0YXR1cyIsIk5PVFZJU0lURUQiLCJWSVNJVEVEIiwiRE9ORSIsInRvU3RyaW5nIiwic3RhdHVzIiwiVGltZUZvcm1hdHRlciIsInJlbGF0aXZlIiwidGltZSIsImN1cnJlbnRUaW1lIiwiZm9ybWF0IiwibW9tZW50Iiwibm93IiwiZWxhcHNlZCIsImRpZmYiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwiZGF0ZSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJhbSIsIm1pbnV0ZSIsImFic29sdXRlVU5JWCIsInQiLCJ1bml4IiwicmVsYXRpdmVVTklYIiwiYyIsIlN0aWNreU5hdiIsInNlbCIsIm5hdnMiLCJzcGFjZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbnN0YWxsZWQiLCJlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInB1c2giLCJuYXYiLCJzdGlja3kiLCJvZmZzZXRUb3AiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJTdGVwIiwiU3RlcEZhY3RvcnkiLCJTaXRlIiwiY29uc29sZSIsIlN0ZXBDb25zb2xlIiwic2V0dXAiLCJDb25zb2xlIiwiY29tcG9uZW50cyIsImFkZFJvdXRlIiwicm91dGUiLCJjb21wb25lbnQiLCJTdGVwU3RhdHVzVnVlIiwicHJvcHMiLCJTdGVwVXNlclN0YXR1c1Z1ZSIsImNvdXJzZSIsImFzc2lnbm1lbnRMaW5rIiwiSW1hZ2VMb2FkZXIiLCJsb2FkaW5nIiwiZnVuYyIsImxvYWQiLCJzcmMiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImxvYWRlZE9uZSIsIm9uZXJyb3IiLCJvbmFib3J0IiwibG9hZGVkIiwiX2Z1bmMiLCJQb3B1cCIsImRhdGEiLCJpbml0aWFsaXplIiwiZWxlbWVudHMiLCJpbnN0YWxsIiwiZWxlbWVudCIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiZGlzcGxheSIsImEiLCJzcGFuIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsIm9wZW4iLCJsaW5rIiwid2lkdGgiLCJQcm9ncmVzcyIsIlNFQ1RJT04iLCJUQVNLIiwiUVVJWiIsIlZJREVPIiwiU1BBQ0lORyIsImxvYWRlciIsImxlZnQiLCJwcm9ncmVzc0xlZnQiLCJyaWdodCIsInByb2dyZXNzUmlnaHQiLCJzaSIsInByb2dyZXNzU0kiLCJzYyIsInByb2dyZXNzU0MiLCJ0aSIsInByb2dyZXNzVEkiLCJ0YyIsInByb2dyZXNzVEMiLCJjdXIiLCJwcm9ncmVzc0N1ciIsIm92ZXJYIiwibGkiLCJjYW52YXMiLCJzZWN0aW9ucyIsImRpdiIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwieCIsInkiLCJkcmF3SW1hZ2UiLCJjdXJYIiwidHlwZSIsInRhZyIsImN1cnJlbnQiLCJvZmZzZXRYIiwib2Zmc2V0V2lkdGgiLCJsb2NhdGlvbiIsInVybCIsInNpdGUiLCJyZWFkeSIsImVuIiwiZ2V0RWxlbWVudEJ5SWQiLCJTdGVwU2VjdGlvblBhZ2UiLCJTdGVwUGFnZSIsIlN0ZXBOYXYiLCJzZWN0aW9uVGFnIiwiYXNzaWduVGFnIiwicXVlcnlTZWxlY3RvciIsImZsYWciLCJocmVmIiwiY2FsbGJhY2siLCJwYXJhbXMiLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImVycm9yIiwicXVpelJlc3VsdHMiLCJTdGVwU2VjdGlvbnNMaXN0IiwiU3RlcFNlY3Rpb24iLCJzdGFydCIsInNlY3Rpb25zVGl0bGUiLCJzZWN0aW9uc0JlZ2luIiwidGFibGUiLCJwIiwicm9vdCIsImdyYWRlTGluayIsImVuZERpdiIsInNlY3Rpb25zRW5kIiwidHIiLCJ0YXNrUm93IiwidGQxIiwiY29udGVudCIsImxvb2siLCJhY2Nlc3MiLCJkaWFsb2ciLCJEaWFsb2ciLCJidXR0b24iLCJjbG9zZSIsInRkMiIsImljb24iLCJpY29ucyIsImFsdCIsImZpbGUiLCJ0ZDMiLCJyZXN1bHQiLCJwb2ludHMiLCJtYXhwb2ludHMiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7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O1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Z0JnSCxJQUFJLENBQUNFLEdBQXJCLHNCQUFrQ0YsSUFBSSxDQUFDRyxJQUF2QyxRQUFUO0FBRUFKLE9BQUcsQ0FBQzlGLFNBQUosYUFBbUJqQixHQUFuQix3QkFBbUN6RyxPQUFPLENBQUM0SyxHQUEzQyx3QkFBMEQ1SyxPQUFPLENBQUN5QixJQUFsRSxtQ0FBNEZ6QixPQUFPLENBQUN5QixJQUFwRyxVQTFFbUMsQ0E0RW5DO0FBQ0E7QUFDQTs7QUFDQSxRQUFHeUssV0FBVyxLQUFLLElBQW5CLEVBQXlCO0FBQ3JCLFVBQUkyQixHQUFHLEdBQUdoSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBZ0osUUFBRSxDQUFDaEksV0FBSCxDQUFlK0ksR0FBZjtBQUVBLFVBQUlDLE1BQU0sR0FBRzVCLFdBQVcsQ0FBQ2xNLE9BQU8sQ0FBQ3VLLEdBQVQsQ0FBeEI7O0FBQ0EsVUFBR3VELE1BQU0sS0FBS2pPLFNBQWQsRUFBeUI7QUFDckJnTyxXQUFHLENBQUNuRyxTQUFKLEdBQWdCb0csTUFBTSxDQUFDQyxNQUFQLEdBQWdCLEdBQWhCLEdBQXNCRCxNQUFNLENBQUNFLFNBQTdDO0FBQ0gsT0FGRCxNQUVPO0FBQ0hILFdBQUcsQ0FBQ25HLFNBQUosR0FBZ0IsUUFBaEI7QUFDSDtBQUVKOztBQUdELFdBQU9vRixFQUFQO0FBQ0gsR0E5RkQ7O0FBZ0dBLE9BQUtULEtBQUw7QUFDSCxDQXpKTSxDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7Ozs7Ozs7QUFRQSxJQUFJM00sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUV4QjtBQUNBLE9BQUt1TyxJQUFMLEdBQVksSUFBWjtBQUNILENBSkQiLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN0ZXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3RlcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI2NWQ3ZjA0YTBlYjQ1NDRmNzhjNFwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJTdGVwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NsL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdmVuZG9yL2NsL3N0ZXAvaW5kZXguanNcIixcImNvbW1vblwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIHJlZj1cInN0dWRlbnRzLW9ubHlcIiA+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJzdHVkZW50c1wiIEBjaGFuZ2U9XCJzdHVkZW50c09ubHlDaGFuZ2VkXCI+IFN0dWRlbnRzIE9ubHk8L2xhYmVsPlxyXG4gICAgICA8ZmV0Y2hlciA6ZmV0Y2hlcj1cImZldGNoZXJcIiA6ZmV0Y2hpbmc9XCJmZXRjaGluZ1wiPlxyXG4gICAgICAgIDxzbG90IDp1c2Vycz1cInVzZXJzXCIgOnN0dWRlbnRzPVwic3R1ZGVudHNcIj48L3Nsb3Q+XHJcbiAgICAgICAgPHAgdi1pZj1cInVzZXJzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5cclxuICAgICAgICAgIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbWVtYmVycyBlbnJvbGxlZCBpbiB0aGlzIHNlY3Rpb24uPC9wPlxyXG4gICAgICA8L2ZldGNoZXI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHttYXBTdGF0ZX0gZnJvbSAndnVleCc7XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vLi4vTWVtYmVycy9NZW1iZXInXHJcbiAgICBpbXBvcnQge1N0dWRlbnRzT25seX0gZnJvbSAnLi9TdHVkZW50c09ubHknO1xyXG5cclxuICAgIGNvbnN0IEZldGNoZXJWdWUgPSBTaXRlLkZldGNoZXJWdWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZW1iZXIgZmV0Y2hlciBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCBieSB2aWV3cy5cclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RydWN0b3IgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIC8vIElmIHRoZSBmZXRjaGluZyB2YWx1ZSBpdCB0cnVlLCB0aGUgdXNpbmcgY2xpZW50XHJcbiAgICAgICAgLy8gaXMgZmV0Y2hpbmcgbW9yZSB0aGFuIGp1c3QgdGhlIG1lbWJlcnNoaXAgYW5kIHdlIHdpbGxcclxuICAgICAgICAvLyB3YWl0IGZvciB0aGF0IGFzIHdlbGwuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZmV0Y2hpbmc6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzRWxlbWVudDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZldGNoTW9yZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL21vcmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEFkZCBcIlN0dWRlbnRzIE9ubHlcIiB0byB0aGUgbWVudSBiYXJcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBhZGRTdHVkZW50c09ubHkoKSB7XHJcbiAgICAgICAgICAgIFx0dGhpcy5zdHVkZW50cyA9IFN0dWRlbnRzT25seS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ3N0dWRlbnRzLW9ubHknXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgICAgICAgICAgZXh0cmEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0dWRlbnRzT25seUNoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgIFx0U3R1ZGVudHNPbmx5LnNldCh0aGlzLnN0dWRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcnMoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0dWRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnJvbGUoKSA9PT0gTWVtYmVyLlNUVURFTlRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoZXI6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMuZmV0Y2hlclxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBTdHVkZW50c09ubHkuZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2ZldGNoJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3R1ZGVudHNPbmx5KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHVkZW50c0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnN0dWRlbnRzRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxldCBleHRyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXN0ZXAtc3RhdHVzZXNcIj5cclxuICAgIDxkaXYgcmVmPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtZW1iZXJzZmV0Y2hlciA6ZmV0Y2hpbmc9XCJyZXN1bHRzID09PSBudWxsXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0aW55XCIgdi1pZj1cInJlc3VsdHMgIT09IG51bGxcIj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJjbC1maXhlZC14eVwiPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cImNsLWZpeGVkLXh5XCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiY2wtZml4ZWQteSBzbWFsbFwiPjxkaXY+TG9va2VkPC9kaXY+PC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJjbC1maXhlZC15IHNtYWxsXCIgdi1mb3I9XCJzZWN0aW9uIGluIGFzc2lnbm1lbnQuc2VjdGlvbnNcIj48ZGl2Pnt7c2VjdGlvbi5uYW1lfX08L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjbC1maXhlZC14XCIgPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL3N0ZXAvc3RhdHVzLycgKyBhc3NpZ250YWcgKyAnLycgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNsLWZpeGVkLXggY2wtc3RlcC1zdGF0dXMtbmFtZVwiPnt7dXNlci5uYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIDpjbGFzcz1cImxvb2tlZCh1c2VyLCAnbG9vaycpID8gJycgOiAnY2wtc3RlcC1ub2xvb2snXCIgOnRpdGxlPVwidGl0bGUodXNlciwgJ0xvb2tlZCcpXCI+PHNwYW4gdi1odG1sPVwic3RhdHVzKHVzZXIsICdsb29rJylcIj48L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cInNlY3Rpb24gaW4gYXNzaWdubWVudC5zZWN0aW9uc1wiIDpjbGFzcz1cImxvb2tlZCh1c2VyLCBzZWN0aW9uLnRhZykgPyAnJyA6ICdjbC1zdGVwLW5vbG9vaydcIiA6dGl0bGU9XCJ0aXRsZSh1c2VyLCBzZWN0aW9uLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cInN0YXR1cyh1c2VyLCBzZWN0aW9uLnRhZylcIj48L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2wtZml4ZWQteFwiID4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2wtZml4ZWQteCBjbC1zdGVwLXN0YXR1cy1uYW1lXCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57e2xvb2tzVG90YWwoJ2xvb2snLCBmZXRjaGVyLnVzZXJzKX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cInNlY3Rpb24gaW4gYXNzaWdubWVudC5zZWN0aW9uc1wiPnt7c2VjdGlvblRvdGFsKHNlY3Rpb24udGFnLCBmZXRjaGVyLnVzZXJzKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcblxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWVtYmVyc2ZldGNoZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50IGZyb20gJ2NvdXJzZS1jbC9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlJztcclxuICBjb25zdCBOT1RWSVNJVEVEID0gJ04nOyAvLyBTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXHJcbiAgY29uc3QgVklTSVRFRCA9ICdWJztcdCAgLy8gU2VjdGlvbiBoYXMgYmVlbiB2aXNpdGVkLCBidXQgaXMgbm90IHlldCBkb25lXHJcbiAgY29uc3QgRE9ORSA9ICdEJztcdFx0ICAgIC8vIFNlY3Rpb24gaXMgY29tcGxldGVkXHJcblxyXG4gIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuXHQgICAgICBleHRlbmRzOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgICAgICBwcm9wczogWydhc3NpZ250YWcnXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50OiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBcdHN0YXR1cyh1c2VyLCBzZWN0aW9uVGFnKSB7XHJcbiAgICAgICAgXHRcdGNvbnN0IHMgPSB0aGlzLnJlc3VsdHNbdXNlci5tZW1iZXIuaWRdO1xyXG4gICAgICAgIFx0XHRpZihzID09PSB1bmRlZmluZWQgfHwgc1tzZWN0aW9uVGFnXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgXHRcdFx0Ly8gTm8gbG9va1xyXG4gICAgICAgIFx0XHRcdHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdCA9IHNbc2VjdGlvblRhZ107XHJcblxyXG4gICAgICAgIFx0XHRpZih0LnN0YXR1cyA9PT0gRE9ORSkge1xyXG4gICAgICAgIFx0XHRcdHJldHVybiBgPGltZyBzcmM9XCIke3RoaXMucm9vdH0vdmVuZG9yL2NsL3NpdGUvaW1nL2NoZWNrMTYucG5nXCI+YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgfSxcclxuXHQgICAgICAgIHNlY3Rpb25Ub3RhbChzZWN0aW9uVGFnLCB1c2Vycykge1xyXG4gICAgICAgICAgICBsZXQgY250ID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCB1c2VyIG9mIHVzZXJzKSB7XHJcblx0ICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMucmVzdWx0c1t1c2VyLm1lbWJlci5pZF07XHJcblx0ICAgICAgICAgICAgaWYocyA9PT0gdW5kZWZpbmVkIHx8IHNbc2VjdGlvblRhZ10gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0ICAgICAgICAgICAgLy8gTm8gbG9va1xyXG5cdFx0ICAgICAgICAgICAgY29udGludWU7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICBjb25zdCB0ID0gc1tzZWN0aW9uVGFnXTtcclxuXHJcblx0ICAgICAgICAgICAgaWYodC5zdGF0dXMgPT09IERPTkUpIHtcclxuXHRcdCAgICAgICAgICAgIGNudCsrO1xyXG5cdCAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHRcdCAgICAgICAgcmV0dXJuIGNudDtcclxuXHQgICAgICAgIH0sXHJcbiAgICAgICAgICBsb29rZWQodXNlciwgc2VjdGlvblRhZykge1xyXG5cdCAgICAgICAgICBjb25zdCBzID0gdGhpcy5yZXN1bHRzW3VzZXIubWVtYmVyLmlkXTtcclxuXHQgICAgICAgICAgaWYocyA9PT0gdW5kZWZpbmVkIHx8IHNbc2VjdGlvblRhZ10gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0ICAgICAgICAgIC8vIE5vIGxvb2tcclxuXHRcdCAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIGNvbnN0IHQgPSBzW3NlY3Rpb25UYWddO1xyXG5cclxuXHQgICAgICAgICAgcmV0dXJuIHQuc3RhdHVzICE9PSBOT1RWSVNJVEVEO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvb2tzVG90YWwoc2VjdGlvblRhZywgdXNlcnMpIHtcclxuICAgICAgICBcdFx0bGV0IGNudCA9IDA7XHJcbiAgICAgICAgXHRcdGZvcihsZXQgdXNlciBvZiB1c2Vycykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnJlc3VsdHNbdXNlci5tZW1iZXIuaWRdO1xyXG4gICAgICAgICAgICAgIGlmKHMgPT09IHVuZGVmaW5lZCB8fCBzW3NlY3Rpb25UYWddID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vIGxvb2tcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgdCA9IHNbc2VjdGlvblRhZ107XHJcblxyXG4gICAgICAgICAgICAgIGlmKHQuc3RhdHVzICE9PSBOT1RWSVNJVEVEKSB7XHJcbiAgICAgICAgICAgICAgXHRjbnQrKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGl0bGUodXNlciwgc2VjdGlvbk5hbWUpIHtcclxuICAgICAgICBcdFx0cmV0dXJuIHVzZXIubmFtZSArICcvJyArIHNlY3Rpb25OYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZyZWV6ZXIoKSB7XHJcbiAgICAgICAgXHRcdGNvbnN0IGRpdiA9IHRoaXMuJHJlZnMuY29udGFpbmVyO1xyXG4gICAgICAgIFx0XHRjb25zdCByb3cxID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3RyLnZlcnRpY2FsJyk7XHJcblx0ICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgICAgIGNvbnN0IHhzID0gZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbC1maXhlZC14Jyk7XHJcblx0ICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8eHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdCAgICAgICAgICAgIGNvbnN0IGVsID0geHNbaV07XHJcblx0XHQgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBkaXYuc2Nyb2xsTGVmdCArICdweCwgMCknO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgY29uc3QgeXMgPSBkaXYucXVlcnlTZWxlY3RvckFsbCgnLmNsLWZpeGVkLXknKTtcclxuXHQgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx5cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0ICAgICAgICAgICAgY29uc3QgZWwgPSB5c1tpXTtcclxuXHRcdCAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwgJyArIGRpdi5zY3JvbGxUb3AgKyAncHgpJztcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIGNvbnN0IHh5cyA9IGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuY2wtZml4ZWQteHknKTtcclxuXHQgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx4eXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdCAgICAgICAgICAgIGNvbnN0IGVsID0geHlzW2ldO1xyXG5cdFx0ICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgZGl2LnNjcm9sbExlZnQgKyAncHgsICcgKyBkaXYuc2Nyb2xsVG9wICsgJ3B4KSc7XHJcblx0ICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcblx0ICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cdCAgICAgICAgbGV0IHF1ZXJ5ID0ge1xyXG5cdFx0ICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG5cdFx0ICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG5cdCAgICAgICAgfTtcclxuXHJcblx0ICAgICAgICB0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG5cdCAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cdCAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBTdGF0dXMnKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5nZXQoJy9hcGkvc3RlcC9zdGF0dXNlcy8nICsgdGhpcy5hc3NpZ250YWcsIHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBcdHRoaXMucmVzdWx0cyA9IHJlc3BvbnNlLmdldERhdGEoJ3N0ZXAtc3RhdHVzZXMnKS5hdHRyaWJ1dGVzO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWV6ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBkaXYuY2wtc3RlcC1zdGF0dXNlcyB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICA+ZGl2IHtcclxuICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAtMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoLmNsLWZpeGVkLXh5IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuXHJcbiAgICB0ZC5jbC1maXhlZC14IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoLmNsLWZpeGVkLXkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGQuY2wtc3RlcC1ub2xvb2sge1xyXG4gICAgYmFja2dyb3VuZDogI2NjZmZmZjtcclxuICB9XHJcblxyXG4gIHRkLmNsLXN0ZXAtc3RhdHVzLW5hbWUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLXN0ZXAtc3RhdHVzZXNcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiIHYtaWY9XCJyZXN1bHRzICE9PSBudWxsXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5TZWN0aW9uPC90aD48dGg+TG9va2VkPC90aD48dGg+QWNjZXNzZWQ8L3RoPjx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TG9vazwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tsb29rKCdsb29rJyl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3thY2Nlc3MoJ2xvb2snKX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJzZWN0aW9uIGluIGFzc2lnbm1lbnQuc2VjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD57e3NlY3Rpb24ubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57e2xvb2soc2VjdGlvbi50YWcpfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7YWNjZXNzKHNlY3Rpb24udGFnKX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48c3BhbiB2LWh0bWw9XCJzdGF0dXMoc2VjdGlvbi50YWcpXCI+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcbiAgICBjb25zdCBET05FID0gJ0QnO1x0XHQgICAgLy8gU2VjdGlvbiBpcyBjb21wbGV0ZWRcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXR1cyBvZiBhIHN0ZXAgYXNzaWdubWVudCBmb3IgYSBnaXZlbiB1c2VyLlxyXG4gICAgICogL2NsL2NvbnNvbGUvc3RlcC9zdGF0dXMvOmFzc2lnbnRhZy86bWVtYmVyaWRcclxuICAgICAqIEBjb25zdHJ1Y3RvciBTdGVwVXNlclN0YXR1c1Z1ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZXh0ZW5kczogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICAgICAgcHJvcHM6IFsnbWVtYmVyaWQnLCAnYXNzaWdudGFnJ10sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0ZXBVc2VyOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFN0YXR1cycpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTmF2MkxpbmsoJ0V4aXQnLCA0LCAnL2NsL2NvbnNvbGUvc3RlcC9zdGF0dXMvJyArIHRoaXMuYXNzaWdudGFnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS9zdGVwL3N0YXR1c2VzLycgKyB0aGlzLm1lbWJlcmlkICsgJy8nICsgdGhpcy5hc3NpZ250YWcsIHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwVXNlciA9IHJlc3BvbnNlLmdldERhdGEoJ3VzZXInKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXNwb25zZS5nZXREYXRhKCdzdGVwLW1lbWJlci1zdGF0dXNlcycpLmF0dHJpYnV0ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuc3RlcFVzZXIubmFtZSArICcgJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFN0YXR1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgbG9vayhzZWN0aW9uVGFnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gdGhpcy5yZXN1bHRzW3NlY3Rpb25UYWddO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGxvb2tcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZShzLmxvb2spO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY2Nlc3Moc2VjdGlvblRhZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMucmVzdWx0c1tzZWN0aW9uVGFnXTtcclxuICAgICAgICAgICAgICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBsb29rXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWUocy5hY2Nlc3MpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXMoc2VjdGlvblRhZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMucmVzdWx0c1tzZWN0aW9uVGFnXTtcclxuICAgICAgICAgICAgICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBsb29rXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHMuc3RhdHVzID09PSBET05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5yb290fS92ZW5kb3IvY2wvc2l0ZS9pbWcvY2hlY2sxNi5wbmdcIj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aW1lKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIuYWJzb2x1dGVVTklYKHQsICdzaG9ydCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtc3RlcC1zdGF0dXNlcyB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuZGl2LmNsLXN0ZXAtc3RhdHVzZXMgPiBkaXYge1xcbiAgaGVpZ2h0OiA4MDBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbmRpdi5jbC1zdGVwLXN0YXR1c2VzIHRhYmxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1zdGVwLXN0YXR1c2VzIHRib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IC0xMDA7XFxufVxcbmRpdi5jbC1zdGVwLXN0YXR1c2VzIHRoLmNsLWZpeGVkLXh5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5kaXYuY2wtc3RlcC1zdGF0dXNlcyB0ZC5jbC1maXhlZC14IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbmRpdi5jbC1zdGVwLXN0YXR1c2VzIHRoLmNsLWZpeGVkLXkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxufVxcbnRkLmNsLXN0ZXAtbm9sb29rIHtcXG4gIGJhY2tncm91bmQ6ICNjY2ZmZmY7XFxufVxcbnRkLmNsLXN0ZXAtc3RhdHVzLW5hbWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHJlZjogXCJzdHVkZW50cy1vbmx5XCIsIHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0gfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R1ZGVudHMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3R1ZGVudHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnN0dWRlbnRzKVxuICAgICAgICAgICAgICA/IF92bS5faShfdm0uc3R1ZGVudHMsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgOiBfdm0uc3R1ZGVudHNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5zdHVkZW50cyxcbiAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnN0dWRlbnRzID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgIChfdm0uc3R1ZGVudHMgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zdHVkZW50cyA9ICQkY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3ZtLnN0dWRlbnRzT25seUNoYW5nZWRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgU3R1ZGVudHMgT25seVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZmV0Y2hlclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZldGNoZXI6IF92bS5mZXRjaGVyLCBmZXRjaGluZzogX3ZtLmZldGNoaW5nIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiwgbnVsbCwgeyB1c2VyczogX3ZtLnVzZXJzLCBzdHVkZW50czogX3ZtLnN0dWRlbnRzIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnVzZXJzLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgVGhlcmUgYXJlIGN1cnJlbnRseSBubyBtZW1iZXJzIGVucm9sbGVkIGluIHRoaXMgc2VjdGlvbi5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXN0ZXAtc3RhdHVzZXNcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyByZWY6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJzZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgZmV0Y2hpbmc6IF92bS5yZXN1bHRzID09PSBudWxsIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZlcnRpY2FsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1maXhlZC14eVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlVzZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1maXhlZC14eVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1maXhlZC15IHNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIkxvb2tlZFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFzc2lnbm1lbnQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLWZpeGVkLXkgc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3Moc2VjdGlvbi5uYW1lKSldKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtZml4ZWQteFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9zdGVwL3N0YXR1cy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFzc2lnbnRhZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbC1maXhlZC14IGNsLXN0ZXAtc3RhdHVzLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5sb29rZWQodXNlciwgXCJsb29rXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNsLXN0ZXAtbm9sb29rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSh1c2VyLCBcIkxvb2tlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YXR1cyh1c2VyLCBcImxvb2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYXNzaWdubWVudC5zZWN0aW9ucywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ubG9va2VkKHVzZXIsIHNlY3Rpb24udGFnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY2wtc3RlcC1ub2xvb2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSh1c2VyLCBzZWN0aW9uLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdGF0dXModXNlciwgc2VjdGlvbi50YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWZpeGVkLXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLWZpeGVkLXggY2wtc3RlcC1zdGF0dXMtbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiwqBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxvb2tzVG90YWwoXCJsb29rXCIsIGZldGNoZXIudXNlcnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hc3NpZ25tZW50LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VjdGlvblRvdGFsKHNlY3Rpb24udGFnLCBmZXRjaGVyLnVzZXJzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXN0ZXAtc3RhdHVzZXNcIiB9LCBbXG4gICAgX3ZtLnJlc3VsdHMgIT09IG51bGxcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiTG9va1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sb29rKFwibG9va1wiKSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY2VzcyhcImxvb2tcIikpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLCoFwiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmFzc2lnbm1lbnQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Moc2VjdGlvbi5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxvb2soc2VjdGlvbi50YWcpKSldKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmFjY2VzcyhzZWN0aW9uLnRhZykpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc3RhdHVzKHNlY3Rpb24udGFnKSkgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTZWN0aW9uXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJMb29rZWRcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjY2Vzc2VkXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTdGF0dXNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGVwU3RhdHVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOGI0ODBmNjhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGVwU3RhdHVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N0ZXBTdGF0dXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhYjQ0ZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlYWI0NGQyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlYWI0NGQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlYWI0NGQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhYjQ0ZDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2VhYjQ0ZDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWFiNDRkMiZcIiIsImNvbnN0IExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSA9ICdjbF9zdHVkZW50c19vbmx5JztcclxuXHJcbi8qKlxyXG4gKiBJdGVtIGluIGxvY2FsIHN0b3JhZ2UgdGhhdCBtYWludGFpbnMgdGhlIHN0YXRlIG9mXHJcbiAqIFwic3R1ZGVudHMgb25seVwiIGluIHRoZSBjb25zb2xlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBTdHVkZW50c09ubHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuU3R1ZGVudHNPbmx5LmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0bGV0IHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NUVURFTlRTX09OTFkpO1xyXG5cdHJldHVybiBzID09PSAneWVzJztcclxufVxyXG5cclxuU3R1ZGVudHNPbmx5LnNldCA9IGZ1bmN0aW9uKHN0dWRlbnRzKSB7XHJcblx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1NUVURFTlRTX09OTFksIHN0dWRlbnRzID8gJ3llcycgOiAnbm8nKTtcclxuXHJcbn0iLCJpbXBvcnQge01lbWJlcnNoaXB9IGZyb20gJy4uLy4uLy4uL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMnO1xyXG5cclxuLyoqXHJcbiAqIE1lbWJlciBvZiBhIGNvdXJzZVxyXG4gKiBBdHRhY2hlcyB0byBhIHVzZXIgT2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxubGV0IE1lbWJlciA9IGZ1bmN0aW9uKGpzb24pIHtcclxuICAgIE1lbWJlcnNoaXAuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBsZXQgcm9sZSA9ICdHJztcclxuXHJcbiAgICBpZihqc29uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZDtcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0ganNvbi5zZW1lc3RlcjtcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBqc29uLnNlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0ganNvbi5jcmVhdGVkICE9PSB1bmRlZmluZWQgPyBqc29uLmNyZWF0ZWQgOiBudWxsO1xyXG4gICAgICAgIHJvbGUgPSBqc29uLnJvbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSAwOyAgICAvLyBTeXN0ZW0gbWVtYmVyc2hpcCBJRFxyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBudWxsOyAgIC8vIFNlbWVzdGVyIGNvZGVcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBudWxsOyAgLy8gU2VjdGlvbiBJZFxyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IG51bGw7ICAgIC8vIFdoZW4gdXNlciB3YXMgY3JlYXRlZFxyXG4gICAgICAgIHJvbGUgPSBudWxsOyAgICAgICAvLyBNZW1iZXJzaGlwIHJvbGVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFJvbGUgPSBmdW5jdGlvbihyb2xlXykge1xyXG4gICAgICAgIHJvbGUgPSByb2xlXztcclxuICAgIH1cclxufVxyXG5cclxuTWVtYmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVtYmVyc2hpcC5wcm90b3R5cGUpO1xyXG5NZW1iZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY291cnNlIHNlY3Rpb24gZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRTZWN0aW9uID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICAgIHJldHVybiBzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKHRoaXMuc2VtZXN0ZXIsIHRoaXMuc2VjdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYW4gYXNzaWdubWVudCBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHBhcmFtIGFzc2lnbnRhZyBBc3NpZ25tZW50IHRhZ1xyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24oc3RvcmUsIGFzc2lnbnRhZykge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzdG9yZSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbi5nZXRBc3NpZ25tZW50KGFzc2lnbnRhZyk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGUgcG9zc2libGUgbWVtYmVyIHJvbGVzXHJcbi8vIE11c3QgbWF0Y2ggdmFsdWVzIGluIE1lbWJlci5waHBcclxuTWVtYmVyLkdVRVNUID0gJ0cnOyAgICAgLy8vPCBHdWVzdCB1c2VyIHZpc2l0aW5nIHRoZSBzaXRlXHJcbk1lbWJlci5VU0VSID0gJ1UnOyAgICAgIC8vLzwgU3RhbmRhcmQgdXNlciBmcm9tIFVzZXIsIGRvbid0IHVzZSBmb3IgTWVtYmVyXHJcbk1lbWJlci5EUk9QUEVEID0gJ0QnOyAgIC8vLzwgVXNlciBoYXMgZHJvcHBlZCB0aGUgY291cnNlXHJcbk1lbWJlci5TVFVERU5UID0gJ1QnOyAgIC8vLzwgRW5yb2xsZWQgc3R1ZGVudCBpbiBjb3Vyc2VcclxuTWVtYmVyLlNUQUZGID0gJ1MnOyAgICAgLy8vPCBBbnkgY291cnNlIHN0YWZmXHJcbk1lbWJlci5HUkFERVIgPSAnUic7ICAgIC8vLzwgR3JhZGVyc1xyXG5NZW1iZXIuVUxBID0gJ0wnOyAgICAgICAvLy88IFVuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50XHJcbk1lbWJlci5UQSA9ICdFJzsgICAgICAgIC8vLzwgVGVhY2hpbmcgYXNzaXN0YW50XHJcbk1lbWJlci5JTlNUUlVDVE9SID0gJ0knOyAgICAvLy88IENvdXJzZSBpbnN0cnVjdG9yXHJcbk1lbWJlci5BRE1JTiA9ICdBJzsgICAgIC8vLzwgQWRtaW5cclxuXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0Um9sZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCByb2xlcyA9IHt9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkdVRVNUXSA9IHtuYW1lOiAnR3Vlc3QnLCBwcmlvcml0eTogMX07XHJcbiAgICByb2xlc1tNZW1iZXIuRFJPUFBFRF0gPSB7bmFtZTogJ0Ryb3BwZWQnLCBwcmlvcml0eTogMn07XHJcbiAgICByb2xlc1tNZW1iZXIuVVNFUl0gPSB7bmFtZTogJ1VzZXInLCBwcmlvcml0eTogMywgc2tpcDogdHJ1ZX07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RVREVOVF0gPSB7bmFtZTogJ1N0dWRlbnQnLCBwcmlvcml0eTogNH07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RBRkZdID0ge25hbWU6ICdTdGFmZicsIHByaW9yaXR5OiA1LCBza2lwOiB0cnVlfTtcclxuXHRyb2xlc1tNZW1iZXIuR1JBREVSXSA9IHtuYW1lOiAnR3JhZGVyJywgcHJpb3JpdHk6IDZ9O1xyXG5cdHJvbGVzW01lbWJlci5VTEFdID0ge25hbWU6ICdVbmRlcmdyYWR1YXRlIExlYXJuaW5nIEFzc2lzdGFudCcsIHNob3J0OiAnVUxBJywgcHJpb3JpdHk6IDd9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlRBXSA9IHtuYW1lOiAnVGVhY2hpbmcgQXNzaXN0YW50Jywgc2hvcnQ6ICdUQScsIHByaW9yaXR5OiA4fTtcclxuICAgIHJvbGVzW01lbWJlci5JTlNUUlVDVE9SXSA9IHtuYW1lOiAnSW5zdHJ1Y3RvcicsIHByaW9yaXR5OiA5fTtcclxuICAgIHJvbGVzW01lbWJlci5BRE1JTl0gPSB7bmFtZTogJ0FkbWluJywgcHJpb3JpdHk6IDEwMH07XHJcblxyXG4gICAgcmV0dXJuIHJvbGVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtNZW1iZXJ9O1xyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQ29uc3RhbnRzIHRoYXQgcmVwcmVzZW50IFNlY3Rpb25TdGF0dXMgcG9zc2libGUgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgU2VjdGlvblN0YXR1cyA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vLyBDb25zdGFudHMgbXVzdCBtYXRjaCB0aG9zZSBpbiBTZWN0aW9uU3RhdHVzLnBocFxyXG5TZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQgPSAnTic7XHQvLy88ICVTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXHJcblNlY3Rpb25TdGF0dXMuVklTSVRFRCA9ICdWJztcdCAgICAvLy88ICVTZWN0aW9uIGhhcyBiZWVuIHZpc2l0ZWQsIGJ1dCBpcyBub3QgeWV0IGRvbmVcclxuU2VjdGlvblN0YXR1cy5ET05FID0gJ0QnO1x0XHQgICAgLy8vPCAlU2VjdGlvbiBpcyBjb21wbGV0ZWRcclxuXHJcblNlY3Rpb25TdGF0dXMudG9TdHJpbmcgPSBmdW5jdGlvbihzdGF0dXMpIHtcclxuICAgIGlmKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKHN0YXR1cyl7XHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQ6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdOb3QgeWV0IHZpc2l0ZWQnO1xyXG5cclxuICAgICAgICBjYXNlIFNlY3Rpb25TdGF0dXMuVklTSVRFRDpcclxuICAgICAgICAgICAgcmV0dXJuICdWaXNpdGVkJztcclxuXHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLkRPTkU6XHJcbiAgICAgICAgICAgIHJldHVybiAnQ29tcGxldGVkJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyB0byBmb3JtYXQgdGltZXMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIHRvIGZvcm1hdCB0aW1lcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IFRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSB0aW1lIHRvIHRoZSBmb3JtYXQgd2UgZGlzcGxheVxyXG4gKiBUaW1lIGlzIHJlbGF0aXZlIHRvIGEgc3BlY2lmaWVkIHRpbWUgKG9yIGN1cnJlbnQgdGltZSlcclxuICogQHBhcmFtIHttb21lbnR9IHRpbWUgVGltZSB0byBjb252ZXJ0IChtb21lbnQpXHJcbiAqIEBwYXJhbSB7bW9tZW50fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUgKG1vbWVudClcclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBNb21lbnQgZm9ybWF0XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlID0gZnVuY3Rpb24odGltZSwgY3VycmVudFRpbWUsIGZvcm1hdCkge1xyXG4gICAgaWYoY3VycmVudFRpbWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50VGltZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGN1cnJlbnRUaW1lID0gbW9tZW50Lm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZS5kaWZmKHRpbWUpO1xyXG4gICAgaWYoZWxhcHNlZCA8IDYwMDAwKSB7XHJcbiAgICAgICAgcmV0dXJuICc8MSBtaW4gYWdvJztcclxuICAgIH1cclxuXHJcbiAgICBpZihlbGFwc2VkIDwgMzYwMDAwMCkge1xyXG4gICAgICAgIC8vIFdpdGhpbiBhbiBob3VyIGFnb1xyXG4gICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGVsYXBzZWQgLyA2MDAwMCk7XHJcbiAgICAgICAgcmV0dXJuICcnICsgbWlucyArICcgbWluIGFnbyc7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIERldGVybWluZSBpZiBpdCB3YXMgdG9kYXlcclxuICAgICAqL1xyXG4gICAgaWYodGltZS5kYXRlKCkgPT09IGN1cnJlbnRUaW1lLmRhdGUoKSAmJlxyXG4gICAgICAgIHRpbWUubW9udGgoKSA9PT0gY3VycmVudFRpbWUubW9udGgoKSAmJlxyXG4gICAgICAgIHRpbWUueWVhcigpID09PSBjdXJyZW50VGltZS55ZWFyKCkpIHtcclxuICAgICAgICBsZXQgaG91ciA9IHRpbWUuaG91cigpO1xyXG4gICAgICAgIGxldCBhbSA9ICdhbSc7XHJcbiAgICAgICAgaWYoaG91ciA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VyID0gMTI7XHJcbiAgICAgICAgfSBlbHNlIGlmKGhvdXIgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIGFtID0gJ3BtJ1xyXG4gICAgICAgIH0gZWxzZSBpZihob3VyID4gMTIpIHtcclxuICAgICAgICAgICAgYW0gPSAncG0nO1xyXG4gICAgICAgICAgICBob3VyIC09IDEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWludXRlID0gdGltZS5taW51dGUoKTtcclxuICAgICAgICBpZihtaW51dGUgPCAxMCkge1xyXG4gICAgICAgICAgICBtaW51dGUgPSAnMCcgKyBtaW51dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJUb2RheSBhdCBcIiArIGhvdXIgKyAnOicgKyBtaW51dGUgKyBhbTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvcm1hdCA9ICdNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aW1lLmZvcm1hdChmb3JtYXQpO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheSBhIFVuaXggdGltZSBhcyBhbiBhYnNvbHV0ZSB0aW1lLlxyXG4gKiBAcGFyYW0ge2ludH0gdGltZSBVbml4IHRpbWUgKHNlY29uZHMpXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgTW9tZW50IGZvcm1hdCBvciAnbG9uZycgb3IgJ3Nob3J0JyBmb3IgZGF5cyBpbmNsdXNpb24uXHJcbiAqL1xyXG5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCA9IGZ1bmN0aW9uKHRpbWUsIGZvcm1hdCkge1xyXG4gICAgbGV0IHQgPSBtb21lbnQudW5peCh0aW1lKTtcclxuICAgIGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9ybWF0ID0gJ00tREQtWVlZWSBoOm1tOnNzYSc7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnc2hvcnQnKSB7XHJcblx0ICAgIGZvcm1hdCA9ICdkZGQsIE0tREQtWVlZWSBoOm1tOnNzYSc7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnbG9uZycpIHtcclxuXHQgICAgZm9ybWF0ID0gJ2RkZGQsIE0tREQtWVlZWSBoOm1tOnNzYSc7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnbG9uZy1kYXRlJykge1xyXG5cdCAgICBmb3JtYXQgPSAnZGRkZCwgTS1ERC1ZWVlZJztcclxuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICdzaG9ydC10aW1lJykge1xyXG5cdCAgICBmb3JtYXQgPSAnaDptbWEnO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ2xvbmctdGltZScpIHtcclxuICAgICAgICBmb3JtYXQgPSAnaDptbTpzc2EnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0LmZvcm1hdChmb3JtYXQpO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheSBhIFVuaXggdGltZSBhcyBhIHJlbGF0aXZlIHRpbWUuXHJcbiAqIEBwYXJhbSB7aW50fSB0aW1lIFVuaXggdGltZSAoc2Vjb25kcylcclxuICogQHBhcmFtIHtpbnR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSBhcyBVTklYIHRpbWUgKG9wdGlvbmFsKVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IE1vbWVudCBmb3JtYXQgb3IgJ2xvbmcnIG9yICdzaG9ydCcgZm9yIGRheXMgaW5jbHVzaW9uLlxyXG4gKi9cclxuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVggPSBmdW5jdGlvbih0aW1lLCBjdXJyZW50VGltZSwgZm9ybWF0KSB7XHJcbiAgICBsZXQgdCA9IG1vbWVudC51bml4KHRpbWUpO1xyXG4gICAgbGV0IGMgPSBjdXJyZW50VGltZSAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRUaW1lICE9PSBudWxsID9cclxuICAgICAgICBtb21lbnQudW5peChjdXJyZW50VGltZSkgOiBtb21lbnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZSh0LCBjLCBmb3JtYXQpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBNYWtlIHRoZSBuYXYgYmFyICdzdGlja3knLiBJdCBzdGlja3MgdG8gdGhlIHRvcFxyXG4gKiBvZiB0aGUgcGFnZSBpbnN0ZWFkIG9mIHNjcm9sbGluZyBvZmYuXHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgdG8gZmluZCB0aGUgbmF2IGJhci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3RpY2t5TmF2ID0gZnVuY3Rpb24oc2VsKSB7XHJcbiAgICBsZXQgbmF2cyA9IFtdO1xyXG4gICAgbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGluc3RhbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgIG5hdnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hdjogIGVsc1tpXSxcclxuICAgICAgICAgICAgc3RpY2t5OiBlbHNbaV0ub2Zmc2V0VG9wXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG5hdnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5hdiA9IG5hdnNbaV07XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gbmF2LnN0aWNreSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIWluc3RhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdi5uYXYuY2xhc3NMaXN0LmFkZChcImNsLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBuYXYubmF2LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IG5hdi5uYXYuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGluc3RhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdi5uYXYuY2xhc3NMaXN0LnJlbW92ZShcImNsLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQVJDQVlBQUFBUEZJYm1BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFBRk5KUkVGVWVOck1ra0VLd0RBSUJHZEsvLy9sN2FVQlk2RE5vWWQ2VVdGWVdkVWt2TVhCUnB5alVJZWtRQUNTMkpXOGMxcS9qTE1ERS9Sa1lGS3FZSzIzM1AwZUtsdVB1a0x0TEhYeitOa1hiRUhYQUlIdUdSMEdDaFdZQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQU1BQUFBUkNBWUFBQUFZTmhZdkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFLVDJsRFExQlFhRzkwYjNOb2IzQWdTVU5ESUhCeWIyWnBiR1VBQUhqYW5WTm5WRlBwRmozMzN2UkNTNGlBbEV0dlVoVUlJRkpDaTRBVWtTWXFJUWtRU29naG9ka1ZVY0VSUlVVRUc4aWdpQU9Pam9DTUZWRXNESW9LMkFma0lhS09nNk9JaXNyNzRYdWphOWE4OStiTi9yWFhQdWVzODUyenp3ZkFDQXlXU0ROUk5ZQU1xVUllRWVDRHg4VEc0ZVF1UUlFS0pIQUFFQWl6WkNGei9TTUJBUGgrUER3cklzQUh2Z0FCZU5NTENBREFUWnZBTUJ5SC93L3FRcGxjQVlDRUFjQjBrVGhMQ0lBVUFFQjZqa0ttQUVCR0FZQ2RtQ1pUQUtBRUFHRExZMkxqQUZBdEFHQW5mK2JUQUlDZCtKbDdBUUJibENFVkFhQ1JBQ0FUWlloRUFHZzdBS3pQVm9wRkFGZ3dBQlJtUzhRNUFOZ3RBREJKVjJaSUFMQzNBTURPRUF1eUFBZ01BREJSaUlVcEFBUjdBR0RJSXlONEFJU1pBQlJHOGxjODhTdXVFT2NxQUFCNG1iSTh1U1E1UllGYkNDMXhCMWRYTGg0b3pra1hLeFEyWVFKaG1rQXV3bm1aR1RLQk5BL2c4OHdBQUtDUkZSSGdnL1A5ZU00T3JzN09ObzYyRGw4dDZyOEcveUppWXVQKzVjK3JjRUFBQU9GMGZ0SCtMQyt6R29BN0JvQnQvcUlsN2dSb1hndWdkZmVMWnJJUFFMVUFvT25hVi9OdytINDhQRVdoa0xuWjJlWGs1TmhLeEVKYlljcFhmZjVud2wvQVYvMXMrWDQ4L1BmMTRMN2lKSUV5WFlGSEJQamd3c3owVEtVY3o1SUpoR0xjNW85SC9MY0wvL3dkMHlMRVNXSzVXQ29VNDFFU2NZNUVtb3p6TXFVaWlVS1NLY1VsMHY5azR0OHMrd00rM3pVQXNHbytBWHVSTGFoZFl3UDJTeWNRV0hUQTR2Y0FBUEs3YjhIVUtBZ0RnR2lENGM5My8rOC8vVWVnSlFDQVprbVNjUUFBWGtRa0xsVEtzei9IQ0FBQVJLQ0JLckJCRy9UQkdDekFCaHpCQmR6QkMveGdOb1JDSk1UQ1FoQkNDbVNBSEhKZ0theUNRaWlHemJBZEttQXYxRUFkTk1CUmFJYVRjQTR1d2xXNERqMXdEL3BoQ0o3QktMeUJDUVJCeUFnVFlTSGFpQUZpaWxnampnZ1htWVg0SWNGSUJCS0xKQ0RKaUJSUklrdVJOVWd4VW9wVUlGVklIZkk5Y2dJNWgxeEd1cEU3eUFBeWd2eUd2RWN4bElHeVVUM1VETFZEdWFnM0dvUkdvZ3ZRWkhReG1vOFdvSnZRY3JRYVBZdzJvZWZRcTJnUDJvOCtROGN3d09nWUJ6UEViREF1eHNOQ3NUZ3NDWk5qeTdFaXJBeXJ4aHF3VnF3RHU0bjFZOCt4ZHdRU2dVWEFDVFlFZDBJZ1lSNUJTRmhNV0U3WVNLZ2dIQ1EwRWRvSk53a0RoRkhDSnlLVHFFdTBKcm9SK2NRWVlqSXhoMWhJTENQV0VvOFRMeEI3aUVQRU55UVNpVU15SjdtUUFrbXhwRlRTRXRKRzBtNVNJK2tzcVpzMFNCb2prOG5hWkd1eUJ6bVVMQ0FyeUlYa25lVEQ1RFBrRytRaDhsc0tuV0pBY2FUNFUrSW9Vc3BxU2hubEVPVTA1UVpsbURKQlZhT2FVdDJvb1ZRUk5ZOWFRcTJodGxLdlVZZW9FelIxbWpuTmd4WkpTNld0b3BYVEdtZ1hhUGRwcitoMHVoSGRsUjVPbDlCWDBzdnBSK2lYNkFQMGR3d05oaFdEeDRobktCbWJHQWNZWnhsM0dLK1lUS1laMDRzWngxUXdOekhybU9lWkQ1bHZWVmdxdGlwOEZaSEtDcFZLbFNhVkd5b3ZWS21xcHFyZXFndFY4MVhMVkkrcFhsTjlya1pWTTFQanFRblVscXRWcXAxUTYxTWJVMmVwTzZpSHFtZW9iMVEvcEg1Wi9Za0dXY05NdzA5RHBGR2dzVi9qdk1ZZ0MyTVpzM2dzSVdzTnE0WjFnVFhFSnJITjJYeDJLcnVZL1IyN2l6MnFxYUU1UXpOS00xZXpVdk9VWmo4SDQ1aHgrSngwVGdubktLZVg4MzZLM2hUdktlSXBHNlkwVExreFpWeHJxcGFYbGxpclNLdFJxMGZydlRhdTdhZWRwcjFGdTFuN2dRNUJ4MG9uWENkSFo0L09CWjNuVTlsVDNhY0tweFpOUFRyMXJpNnFhNlVib2J0RWQ3OXVwKzZZbnI1ZWdKNU1iNmZlZWIzbitoeDlMLzFVL1czNnAvVkhERmdHc3d3a0J0c016aGc4eFRWeGJ6d2RMOGZiOFZGRFhjTkFRNlZobFdHWDRZU1J1ZEU4bzlWR2pVWVBqR25HWE9NazQyM0diY2FqSmdZbUlTWkxUZXBON3BwU1RibW1LYVk3VER0TXg4M016YUxOMXBrMW16MHgxekxubStlYjE1dmZ0MkJhZUZvc3RxaTJ1R1ZKc3VSYXBsbnV0cnh1aFZvNVdhVllWVnBkczBhdG5hMGwxcnV0dTZjUnA3bE9rMDZybnRabnc3RHh0c20ycWJjWnNPWFlCdHV1dG0yMmZXRm5ZaGRudDhXdXcrNlR2Wk45dW4yTi9UMEhEWWZaRHFzZFdoMStjN1J5RkRwV090NmF6cHp1UDMzRjlKYnBMMmRZenhEUDJEUGp0aFBMS2NScG5WT2IwMGRuRjJlNWM0UHppSXVKUzRMTExwYytMcHNieHQzSXZlUktkUFZ4WGVGNjB2V2RtN09id3UybzI2L3VOdTVwN29mY244dzBueW1lV1ROejBNUElRK0JSNWRFL0M1K1ZNR3Zmckg1UFEwK0JaN1huSXk5akw1RlhyZGV3dDZWM3F2ZGg3eGMrOWo1eW4rTSs0enczM2pMZVdWL01OOEMzeUxmTFQ4TnZubCtGMzBOL0kvOWsvM3IvMFFDbmdDVUJad09KZ1VHQld3TDcrSHA4SWIrT1B6cmJaZmF5MmUxQmpLQzVRUlZCajRLdGd1WEJyU0ZveU95UXJTSDM1NWpPa2M1cERvVlFmdWpXMEFkaDVtR0x3MzRNSjRXSGhWZUdQNDV3aUZnYTBUR1hOWGZSM0VOejMwVDZSSlpFM3B0bk1VODVyeTFLTlNvK3FpNXFQTm8zdWpTNlA4WXVabG5NMVZpZFdFbHNTeHc1TGlxdU5tNXN2dC84N2ZPSDRwM2lDK043RjVndnlGMXdlYUhPd3ZTRnB4YXBMaElzT3BaQVRJaE9PSlR3UVJBcXFCYU1KZklUZHlXT0NubkNIY0puSWkvUk50R0kyRU5jS2g1TzhrZ3FUWHFTN0pHOE5Ya2t4VE9sTE9XNWhDZXBrTHhNRFV6ZG16cWVGcHAySUcweVBUcTlNWU9Ta1pCeFFxb2hUWk8yWitwbjVtWjJ5NnhsaGJMK3hXNkx0eThlbFFmSmE3T1FyQVZaTFFxMlFxYm9WRm9vMXlvSHNtZGxWMmEvelluS09aYXJuaXZON2N5enl0dVFONXp2bi8vdEVzSVM0WksycFlaTFZ5MGRXT2E5ckdvNXNqeHhlZHNLNHhVRks0WldCcXc4dUlxMkttM1ZUNnZ0VjVldWZyMG1lazFyZ1Y3QnlvTEJ0UUZyNnd0VkN1V0ZmZXZjMSsxZFQxZ3ZXZCsxWWZxR25ScytGWW1LcmhUYkY1Y1ZmOWdvM0hqbEc0ZHZ5citaM0pTMHFhdkV1V1RQWnRKbTZlYmVMWjViRHBhcWwrYVhEbTROMmRxMERkOVd0TzMxOWtYYkw1Zk5LTnU3ZzdaRHVhTy9QTGk4WmFmSnpzMDdQMVNrVlBSVStsUTI3dExkdFdIWCtHN1I3aHQ3dlBZMDdOWGJXN3ozL1Q3SnZ0dFZBVlZOMVdiVlpmdEorN1AzUDY2SnF1bjRsdnR0WGExT2JYSHR4d1BTQS8wSEl3NjIxN25VMVIzU1BWUlNqOVlyNjBjT3h4KysvcDN2ZHkwTk5nMVZqWnpHNGlOd1JIbms2ZmNKMy9jZURUcmFkb3g3ck9FSDB4OTJIV2NkTDJwQ212S2FScHRUbXZ0YllsdTZUOHcrMGRicTNucjhSOXNmRDV3MFBGbDVTdk5VeVduYTZZTFRrMmZ5ejR5ZGxaMTlmaTc1M0dEYm9yWjc1MlBPMzJvUGIrKzZFSFRoMGtYL2krYzd2RHZPWFBLNGRQS3kyK1VUVjdoWG1xODZYMjNxZE9vOC9wUFRUOGU3bkx1YXJybGNhN251ZXIyMWUyYjM2UnVlTjg3ZDlMMTU4UmIvMXRXZU9UM2R2Zk42Yi9mRjkvWGZGdDErY2lmOXpzdTcyWGNuN3EyOFQ3eGY5RUR0UWRsRDNZZlZQMXYrM05qdjNIOXF3SGVnODlIY1IvY0doWVBQL3BIMWp3OURCWStaajh1R0RZYnJuamcrT1RuaVAzTDk2ZnluUTg5a3p5YWVGLzZpL3N1dUZ4WXZmdmpWNjlmTzBaalJvWmZ5bDVPL2JYeWwvZXJBNnhtdjI4YkN4aDYreVhnek1WNzBWdnZ0d1hmY2R4M3ZvOThQVCtSOElIOG8vMmo1c2ZWVDBLZjdreG1Uay84RUE1anovR016TGRzQUFBQWdZMGhTVFFBQWVpVUFBSUNEQUFENS93QUFnT2tBQUhVd0FBRHFZQUFBT3BnQUFCZHZrbC9GUmdBQUFISkpSRUZVZU5wY3k4MEpoRUFVQStDOE4vNnNncUNDNEczNjJETHMwUUlzd3hxOGVMRUYyV1YwNG1sNXcrYjJrUVJWMzlHVkwrYXVZRGJVTFpaMUF3QW9yaTkrMGFzVVE4YmNvUEUyblBKSkdxakIyZit2dVNWQmpORlFpRE9RVEdZd2lJalFlNDhRQXBUemhQM2Q0QmlKWndCOWl5QlBiK3ZHb0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQVJDQVlBQUFENjZnMVdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFBSDFKUkVGVWVOcUV6YkVOd2pBVWhPSC8yY2hJcjBCMjByRUFKUVVMSU5kTXdKeXN3QUNVcVNLbHA3VkVZVDBLSUZGRTRTcy9uZTVFVlEwZzU4enR1bVZ6ZjB3QVhNNUgySFU0dmxGVkdKNExsRklBRmdnaHJPR1hHY3lzQWM2NVJrTkVHbzIvMjFyckdyejNuNjBZb3dHa2xCaTdGOEpwYi9QQW9lYzlBTVdiSHhSdUo5bzlBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFSQ0FZQUFBQVBGSWJtQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUtUMmxEUTFCUWFHOTBiM05vYjNBZ1NVTkRJSEJ5YjJacGJHVUFBSGphblZOblZGUHBGajMzM3ZSQ1M0aUFsRXR2VWhVSUlGSkNpNEFVa1NZcUlRa1FTb2dob2RrVlVjRVJSVVVFRzhpZ2lBT09qb0NNRlZFc0RJb0syQWZrSWFLT2c2T0lpc3I3NFh1amE5YTg5K2JOL3JYWFB1ZXM4NTJ6endmQUNBeVdTRE5STllBTXFVSWVFZUNEeDhURzRlUXVRSUVLSkhBQUVBaXpaQ0Z6L1NNQkFQaCtQRHdySXNBSHZnQUJlTk1MQ0FEQVRadkFNQnlIL3cvcVFwbGNBWUNFQWNCMGtUaExDSUFVQUVCNmprS21BRUJHQVlDZG1DWlRBS0FFQUdETFkyTGpBRkF0QUdBbmYrYlRBSUNkK0psN0FRQmJsQ0VWQWFDUkFDQVRaWWhFQUdnN0FLelBWb3BGQUZnd0FCUm1TOFE1QU5ndEFEQkpWMlpJQUxDM0FNRE9FQXV5QUFnTUFEQlJpSVVwQUFSN0FHRElJeU40QUlTWkFCUkc4bGM4OFN1dUVPY3FBQUI0bWJJOHVTUTVSWUZiQ0MxeEIxZFhMaDRvemtrWEt4UTJZUUpobWtBdXdubVpHVEtCTkEvZzg4d0FBS0NSRlJIZ2cvUDllTTRPcnM3T05vNjJEbDh0NnI4Ry95SmlZdVArNWMrcmNFQUFBT0YwZnRIK0xDK3pHb0E3Qm9CdC9xSWw3Z1JvWGd1Z2RmZUxacklQUUxVQW9PbmFWL053K0g0OFBFV2hrTG5aMmVYazVOaEt4RUpiWWNwWGZmNW53bC9BVi8xcytYNDgvUGYxNEw3aUpJRXlYWUZIQlBqZ3dzejBUS1VjejVJSmhHTGM1bzlIL0xjTC8vd2QweUxFU1dLNVdDb1U0MUVTY1k1RW1venpNcVVpaVVLU0tjVWwwdjlrNHQ4cyt3TSszelVBc0dvK0FYdVJMYWhkWXdQMlN5Y1FXSFRBNHZjQUFQSzdiOEhVS0FnRGdHaUQ0YzkzLys4Ly9VZWdKUUNBWmttU2NRQUFYa1FrTGxUS3N6L0hDQUFBUktDQktyQkJHL1RCR0N6QUJoekJCZHpCQy94Z05vUkNKTVRDUWhCQ0NtU0FISEpnS2F5Q1FpaUd6YkFkS21BdjFFQWROTUJSYUlhVGNBNHV3bFc0RGoxd0QvcGhDSjdCS0x5QkNRUkJ5QWdUWVNIYWlBRmlpbGdqamdnWG1ZWDRJY0ZJQkJLTEpDREppQlJSSWt1Uk5VZ3hVb3BVSUZWSUhmSTljZ0k1aDF4R3VwRTd5QUF5Z3Z5R3ZFY3hsSUd5VVQzVURMVkR1YWczR29SR29ndlFaSFF4bW84V29KdlFjclFhUFl3Mm9lZlFxMmdQMm84K1E4Y3d3T2dZQnpQRWJEQXV4c05Dc1Rnc0NaTmp5N0VpckF5cnhocXdWcXdEdTRuMVk4K3hkd1FTZ1VYQUNUWUVkMElnWVI1QlNGaE1XRTdZU0tnZ0hDUTBFZG9KTndrRGhGSENKeUtUcUV1MEpyb1IrY1FZWWpJeGgxaElMQ1BXRW84VEx4QjdpRVBFTnlRU2lVTXlKN21RQWtteHBGVFNFdEpHMG01U0kra3NxWnMwU0Jvams4bmFaR3V5QnptVUxDQXJ5SVhrbmVURDVEUGtHK1FoOGxzS25XSkFjYVQ0VStJb1VzcHFTaG5sRU9VMDVRWmxtREpCVmFPYVV0Mm9vVlFSTlk5YVFxMmh0bEt2VVllb0V6UjFtam5OZ3haSlM2V3RvcFhUR21nWGFQZHByK2gwdWhIZGxSNU9sOUJYMHN2cFIraVg2QVAwZHd3TmhoV0R4NGhuS0JtYkdBY1laeGwzR0srWVRLWVowNHNaeDFRd056SHJtT2VaRDVsdlZWZ3F0aXA4RlpIS0NwVktsU2FWR3lvdlZLbXFwcXJlcWd0VjgxWExWSStwWGxOOXJrWlZNMVBqcVFuVWxxdFZxcDFRNjFNYlUyZXBPNmlIcW1lb2IxUS9wSDVaL1lrR1djTk13MDlEcEZHZ3NWL2p2TVlnQzJNWnMzZ3NJV3NOcTRaMWdUWEVKckhOMlh4MktydVkvUjI3aXoycXFhRTVRek5LTTFlelV2T1VaajhINDVoeCtKeDBUZ25uS0tlWDgzNkszaFR2S2VJcEc2WTBUTGt4WlZ4cnFwYVhsbGlyU0t0UnEwZnJ2VGF1N2FlZHByMUZ1MW43Z1E1Qngwb25YQ2RIWjQvT0JaM25VOWxUM2FjS3B4Wk5QVHIxcmk2cWE2VWJvYnRFZDc5dXArNllucjVlZ0o1TWI2ZmVlYjNuK2h4OUwvMVUvVzM2cC9WSERGZ0dzd3drQnRzTXpoZzh4VFZ4Ynp3ZEw4ZmI4VkZEWGNOQVE2VmhsV0dYNFlTUnVkRThvOVZHalVZUGpHbkdYT01rNDIzR2JjYWpKZ1ltSVNaTFRlcE43cHBTVGJtbUthWTdURHRNeDgzTXphTE4xcGsxbXoweDF6TG5tK2ViMTV2ZnQyQmFlRm9zdHFpMnVHVkpzdVJhcGxudXRyeHVoVm81V2FWWVZWcGRzMGF0bmEwbDFydXR1NmNScDdsT2swNnJudFpudzdEeHRzbTJxYmNac09YWUJ0dXV0bTIyZldGblloZG50OFd1dys2VHZaTjl1bjJOL1QwSERZZlpEcXNkV2gxK2M3UnlGRHBXT3Q2YXpwenVQMzNGOUpicEwyZFl6eERQMkRQanRoUExLY1JwblZPYjAwZG5GMmU1YzRQemlJdUpTNExMTHBjK0xwc2J4dDNJdmVSS2RQVnhYZUY2MHZXZG03T2J3dTJvMjYvdU51NXA3b2Zjbjh3MG55bWVXVE56ME1QSVErQlI1ZEUvQzUrVk1HdmZySDVQUTArQlo3WG5JeTlqTDVGWHJkZXd0NlYzcXZkaDd4Yys5ajV5bitNKzR6dzMzakxlV1YvTU44QzN5TGZMVDhOdm5sK0YzME4vSS85ay8zci8wUUNuZ0NVQlp3T0pnVUdCV3dMNytIcDhJYitPUHpyYlpmYXkyZTFCaktDNVFSVkJqNEt0Z3VYQnJTRm95T3lRclNIMzU1ak9rYzVwRG9WUWZ1alcwQWRoNW1HTHczNE1KNFdIaFZlR1A0NXdpRmdhMFRHWE5YZlIzRU56MzBUNlJKWkUzcHRuTVU4NXJ5MUtOU28rcWk1cVBObzN1alM2UDhZdVpsbk0xVmlkV0Vsc1N4dzVMaXF1Tm01c3Z0Lzg3Zk9INHAzaUMrTjdGNWd2eUYxd2VhSE93dlNGcHhhcExoSXNPcFpBVEloT09KVHdRUkFxcUJhTUpmSVRkeVdPQ25uQ0hjSm5JaS9STnRHSTJFTmNLaDVPOGtncVRYcVM3Skc4Tlhra3hUT2xMT1c1aENlcGtMeE1EVXpkbXpxZUZwcDJJRzB5UFRxOU1ZT1NrWkJ4UXFvaFRaTzJaK3BuNW1aMnk2eGxoYkwreFc2THR5OGVsUWZKYTdPUXJBVlpMUXEyUXFib1ZGb28xeW9Ic21kbFYyYS96WW5LT1phcm5pdk43Y3l6eXR1UU41enZuLy90RXNJUzRaSzJwWVpMVnkwZFdPYTlyR281c2p4eGVkc0s0eFVGSzRaV0Jxdzh1SXEyS20zVlQ2dnRWNWV1ZnIwbWVrMXJnVjdCeW9MQnRRRnI2d3RWQ3VXRmZldmMxKzFkVDFndldkKzFZZnFHblJzK0ZZbUtyaFRiRjVjVmY5Z28zSGpsRzRkdnlyK1ozSlMwcWF2RXVXVFBadEptNmViZUxaNWJEcGFxbCthWERtNE4yZHEwRGQ5V3RPMzE5a1hiTDVmTktOdTdnN1pEdWFPL1BMaThaYWZKenMwN1AxU2tWUFJVK2xRMjd0TGR0V0hYK0c3UjdodDd2UFkwN05YYlc3ejMvVDdKdnR0VkFWVk4xV2JWWmZ0Sis3UDNQNjZKcXVuNGx2dHRYYTFPYlhIdHh3UFNBLzBISXc2MjE3blUxUjNTUFZSU2o5WXI2MGNPeHgrKy9wM3ZkeTBOTmcxVmpaekc0aU53UkhuazZmY0ozL2NlRFRyYWRveDdyT0VIMHg5MkhXY2RMMnBDbXZLYVJwdFRtdnRiWWx1NlQ4dyswZGJxM25yOFI5c2ZENXcwUEZsNVN2TlV5V25hNllMVGsyZnl6NHlkbFoxOWZpNzUzR0Rib3JaNzUyUE8zMm9QYisrNkVIVGgwa1gvaStjN3ZEdk9YUEs0ZFBLeTIrVVRWN2hYbXE4NlgyM3FkT284L3BQVFQ4ZTduTHVhcnJsY2E3bnVlcjIxZTJiMzZSdWVOODdkOUwxNThSYi8xdFdlT1QzZHZmTjZiL2ZGOS9YZkZ0MStjaWY5enN1NzJYY243cTI4VDd4ZjlFRHRRZGxEM1lmVlAxdiszTmp2M0g5cXdIZWc4OUhjUi9jR2hZUFAvcEgxanc5REJZK1pqOHVHRFlicm5qZytPVG5pUDNMOTZmeW5RODlrenlhZUYvNmkvc3V1RnhZdmZ2alY2OWZPMFpqUm9aZnlsNU8vYlh5bC9lckE2eG12MjhiQ3hoNit5WGd6TVY3MFZ2dnR3WGZjZHgzdm85OFBUK1I4SUg4by8yajVzZlZUMEtmN2t4bVRrLzhFQTVqei9HTXpMZHNBQUFBZ1kwaFNUUUFBZWlVQUFJQ0RBQUQ1L3dBQWdPa0FBSFV3QUFEcVlBQUFPcGdBQUJkdmtsL0ZSZ0FBQUlKSlJFRlVlTnFza1RFS2cxQVFSR2ZrQitNTmhIK0E1SUJlSmJtUTloN0Eya2FFRklHZjRGY21sV0JJc1Z0a3FpbUdmY01zeitWSjI1WWhWZ2pGaXQwZnhYNllCVU1GSEhLRmlJWW1qdGYyWW9aQ2VyeE1YTWhwc1VQTGUvVmNjb1NVSEoyZVU3WjN1bmMzZTZlLy9ZNHhScEVFQUVqQzdyK0tqN1VBSEltLzlNOEE0bWN4aTZXTWZZWUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFSQ0FZQUFBQVBGSWJtQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUtUMmxEUTFCUWFHOTBiM05vYjNBZ1NVTkRJSEJ5YjJacGJHVUFBSGphblZOblZGUHBGajMzM3ZSQ1M0aUFsRXR2VWhVSUlGSkNpNEFVa1NZcUlRa1FTb2dob2RrVlVjRVJSVVVFRzhpZ2lBT09qb0NNRlZFc0RJb0syQWZrSWFLT2c2T0lpc3I3NFh1amE5YTg5K2JOL3JYWFB1ZXM4NTJ6endmQUNBeVdTRE5STllBTXFVSWVFZUNEeDhURzRlUXVRSUVLSkhBQUVBaXpaQ0Z6L1NNQkFQaCtQRHdySXNBSHZnQUJlTk1MQ0FEQVRadkFNQnlIL3cvcVFwbGNBWUNFQWNCMGtUaExDSUFVQUVCNmprS21BRUJHQVlDZG1DWlRBS0FFQUdETFkyTGpBRkF0QUdBbmYrYlRBSUNkK0psN0FRQmJsQ0VWQWFDUkFDQVRaWWhFQUdnN0FLelBWb3BGQUZnd0FCUm1TOFE1QU5ndEFEQkpWMlpJQUxDM0FNRE9FQXV5QUFnTUFEQlJpSVVwQUFSN0FHRElJeU40QUlTWkFCUkc4bGM4OFN1dUVPY3FBQUI0bWJJOHVTUTVSWUZiQ0MxeEIxZFhMaDRvemtrWEt4UTJZUUpobWtBdXdubVpHVEtCTkEvZzg4d0FBS0NSRlJIZ2cvUDllTTRPcnM3T05vNjJEbDh0NnI4Ry95SmlZdVArNWMrcmNFQUFBT0YwZnRIK0xDK3pHb0E3Qm9CdC9xSWw3Z1JvWGd1Z2RmZUxacklQUUxVQW9PbmFWL053K0g0OFBFV2hrTG5aMmVYazVOaEt4RUpiWWNwWGZmNW53bC9BVi8xcytYNDgvUGYxNEw3aUpJRXlYWUZIQlBqZ3dzejBUS1VjejVJSmhHTGM1bzlIL0xjTC8vd2QweUxFU1dLNVdDb1U0MUVTY1k1RW1venpNcVVpaVVLU0tjVWwwdjlrNHQ4cyt3TSszelVBc0dvK0FYdVJMYWhkWXdQMlN5Y1FXSFRBNHZjQUFQSzdiOEhVS0FnRGdHaUQ0YzkzLys4Ly9VZWdKUUNBWmttU2NRQUFYa1FrTGxUS3N6L0hDQUFBUktDQktyQkJHL1RCR0N6QUJoekJCZHpCQy94Z05vUkNKTVRDUWhCQ0NtU0FISEpnS2F5Q1FpaUd6YkFkS21BdjFFQWROTUJSYUlhVGNBNHV3bFc0RGoxd0QvcGhDSjdCS0x5QkNRUkJ5QWdUWVNIYWlBRmlpbGdqamdnWG1ZWDRJY0ZJQkJLTEpDREppQlJSSWt1Uk5VZ3hVb3BVSUZWSUhmSTljZ0k1aDF4R3VwRTd5QUF5Z3Z5R3ZFY3hsSUd5VVQzVURMVkR1YWczR29SR29ndlFaSFF4bW84V29KdlFjclFhUFl3Mm9lZlFxMmdQMm84K1E4Y3d3T2dZQnpQRWJEQXV4c05Dc1Rnc0NaTmp5N0VpckF5cnhocXdWcXdEdTRuMVk4K3hkd1FTZ1VYQUNUWUVkMElnWVI1QlNGaE1XRTdZU0tnZ0hDUTBFZG9KTndrRGhGSENKeUtUcUV1MEpyb1IrY1FZWWpJeGgxaElMQ1BXRW84VEx4QjdpRVBFTnlRU2lVTXlKN21RQWtteHBGVFNFdEpHMG01U0kra3NxWnMwU0Jvams4bmFaR3V5QnptVUxDQXJ5SVhrbmVURDVEUGtHK1FoOGxzS25XSkFjYVQ0VStJb1VzcHFTaG5sRU9VMDVRWmxtREpCVmFPYVV0Mm9vVlFSTlk5YVFxMmh0bEt2VVllb0V6UjFtam5OZ3haSlM2V3RvcFhUR21nWGFQZHByK2gwdWhIZGxSNU9sOUJYMHN2cFIraVg2QVAwZHd3TmhoV0R4NGhuS0JtYkdBY1laeGwzR0srWVRLWVowNHNaeDFRd056SHJtT2VaRDVsdlZWZ3F0aXA4RlpIS0NwVktsU2FWR3lvdlZLbXFwcXJlcWd0VjgxWExWSStwWGxOOXJrWlZNMVBqcVFuVWxxdFZxcDFRNjFNYlUyZXBPNmlIcW1lb2IxUS9wSDVaL1lrR1djTk13MDlEcEZHZ3NWL2p2TVlnQzJNWnMzZ3NJV3NOcTRaMWdUWEVKckhOMlh4MktydVkvUjI3aXoycXFhRTVRek5LTTFlelV2T1VaajhINDVoeCtKeDBUZ25uS0tlWDgzNkszaFR2S2VJcEc2WTBUTGt4WlZ4cnFwYVhsbGlyU0t0UnEwZnJ2VGF1N2FlZHByMUZ1MW43Z1E1Qngwb25YQ2RIWjQvT0JaM25VOWxUM2FjS3B4Wk5QVHIxcmk2cWE2VWJvYnRFZDc5dXArNllucjVlZ0o1TWI2ZmVlYjNuK2h4OUwvMVUvVzM2cC9WSERGZ0dzd3drQnRzTXpoZzh4VFZ4Ynp3ZEw4ZmI4VkZEWGNOQVE2VmhsV0dYNFlTUnVkRThvOVZHalVZUGpHbkdYT01rNDIzR2JjYWpKZ1ltSVNaTFRlcE43cHBTVGJtbUthWTdURHRNeDgzTXphTE4xcGsxbXoweDF6TG5tK2ViMTV2ZnQyQmFlRm9zdHFpMnVHVkpzdVJhcGxudXRyeHVoVm81V2FWWVZWcGRzMGF0bmEwbDFydXR1NmNScDdsT2swNnJudFpudzdEeHRzbTJxYmNac09YWUJ0dXV0bTIyZldGblloZG50OFd1dys2VHZaTjl1bjJOL1QwSERZZlpEcXNkV2gxK2M3UnlGRHBXT3Q2YXpwenVQMzNGOUpicEwyZFl6eERQMkRQanRoUExLY1JwblZPYjAwZG5GMmU1YzRQemlJdUpTNExMTHBjK0xwc2J4dDNJdmVSS2RQVnhYZUY2MHZXZG03T2J3dTJvMjYvdU51NXA3b2Zjbjh3MG55bWVXVE56ME1QSVErQlI1ZEUvQzUrVk1HdmZySDVQUTArQlo3WG5JeTlqTDVGWHJkZXd0NlYzcXZkaDd4Yys5ajV5bitNKzR6dzMzakxlV1YvTU44QzN5TGZMVDhOdm5sK0YzME4vSS85ay8zci8wUUNuZ0NVQlp3T0pnVUdCV3dMNytIcDhJYitPUHpyYlpmYXkyZTFCaktDNVFSVkJqNEt0Z3VYQnJTRm95T3lRclNIMzU1ak9rYzVwRG9WUWZ1alcwQWRoNW1HTHczNE1KNFdIaFZlR1A0NXdpRmdhMFRHWE5YZlIzRU56MzBUNlJKWkUzcHRuTVU4NXJ5MUtOU28rcWk1cVBObzN1alM2UDhZdVpsbk0xVmlkV0Vsc1N4dzVMaXF1Tm01c3Z0Lzg3Zk9INHAzaUMrTjdGNWd2eUYxd2VhSE93dlNGcHhhcExoSXNPcFpBVEloT09KVHdRUkFxcUJhTUpmSVRkeVdPQ25uQ0hjSm5JaS9STnRHSTJFTmNLaDVPOGtncVRYcVM3Skc4Tlhra3hUT2xMT1c1aENlcGtMeE1EVXpkbXpxZUZwcDJJRzB5UFRxOU1ZT1NrWkJ4UXFvaFRaTzJaK3BuNW1aMnk2eGxoYkwreFc2THR5OGVsUWZKYTdPUXJBVlpMUXEyUXFib1ZGb28xeW9Ic21kbFYyYS96WW5LT1phcm5pdk43Y3l6eXR1UU41enZuLy90RXNJUzRaSzJwWVpMVnkwZFdPYTlyR281c2p4eGVkc0s0eFVGSzRaV0Jxdzh1SXEyS20zVlQ2dnRWNWV1ZnIwbWVrMXJnVjdCeW9MQnRRRnI2d3RWQ3VXRmZldmMxKzFkVDFndldkKzFZZnFHblJzK0ZZbUtyaFRiRjVjVmY5Z28zSGpsRzRkdnlyK1ozSlMwcWF2RXVXVFBadEptNmViZUxaNWJEcGFxbCthWERtNE4yZHEwRGQ5V3RPMzE5a1hiTDVmTktOdTdnN1pEdWFPL1BMaThaYWZKenMwN1AxU2tWUFJVK2xRMjd0TGR0V0hYK0c3UjdodDd2UFkwN05YYlc3ejMvVDdKdnR0VkFWVk4xV2JWWmZ0Sis3UDNQNjZKcXVuNGx2dHRYYTFPYlhIdHh3UFNBLzBISXc2MjE3blUxUjNTUFZSU2o5WXI2MGNPeHgrKy9wM3ZkeTBOTmcxVmpaekc0aU53UkhuazZmY0ozL2NlRFRyYWRveDdyT0VIMHg5MkhXY2RMMnBDbXZLYVJwdFRtdnRiWWx1NlQ4dyswZGJxM25yOFI5c2ZENXcwUEZsNVN2TlV5V25hNllMVGsyZnl6NHlkbFoxOWZpNzUzR0Rib3JaNzUyUE8zMm9QYisrNkVIVGgwa1gvaStjN3ZEdk9YUEs0ZFBLeTIrVVRWN2hYbXE4NlgyM3FkT284L3BQVFQ4ZTduTHVhcnJsY2E3bnVlcjIxZTJiMzZSdWVOODdkOUwxNThSYi8xdFdlT1QzZHZmTjZiL2ZGOS9YZkZ0MStjaWY5enN1NzJYY243cTI4VDd4ZjlFRHRRZGxEM1lmVlAxdiszTmp2M0g5cXdIZWc4OUhjUi9jR2hZUFAvcEgxanc5REJZK1pqOHVHRFlicm5qZytPVG5pUDNMOTZmeW5RODlrenlhZUYvNmkvc3V1RnhZdmZ2alY2OWZPMFpqUm9aZnlsNU8vYlh5bC9lckE2eG12MjhiQ3hoNit5WGd6TVY3MFZ2dnR3WGZjZHgzdm85OFBUK1I4SUg4by8yajVzZlZUMEtmN2t4bVRrLzhFQTVqei9HTXpMZHNBQUFBZ1kwaFNUUUFBZWlVQUFJQ0RBQUQ1L3dBQWdPa0FBSFV3QUFEcVlBQUFPcGdBQUJkdmtsL0ZSZ0FBQUh4SlJFRlVlTnFza1NFS2dFQVVST2ZMeW1vV1FkaHE4YlFleEl2WVBJQUdpODBxSW4vWGJ4SVV3OS9ncEFrUDVzRlFabE1KZ1NHVXd5UWVkMytHaG5FVktFa1FrU2pJZEZPclEyVlQ2QkR2WG9jQ2g5K2dVNGZBRVU3SHBzOVJQL2ZxTGNaeS9jOHQ1SndUSWdJQWlBanUvcHBiS2dIdzFQb3FYZ01BYndndDBxL2RGSFFBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBUkNBWUFBQUFQRklibUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFLVDJsRFExQlFhRzkwYjNOb2IzQWdTVU5ESUhCeWIyWnBiR1VBQUhqYW5WTm5WRlBwRmozMzN2UkNTNGlBbEV0dlVoVUlJRkpDaTRBVWtTWXFJUWtRU29naG9ka1ZVY0VSUlVVRUc4aWdpQU9Pam9DTUZWRXNESW9LMkFma0lhS09nNk9JaXNyNzRYdWphOWE4OStiTi9yWFhQdWVzODUyenp3ZkFDQXlXU0ROUk5ZQU1xVUllRWVDRHg4VEc0ZVF1UUlFS0pIQUFFQWl6WkNGei9TTUJBUGgrUER3cklzQUh2Z0FCZU5NTENBREFUWnZBTUJ5SC93L3FRcGxjQVlDRUFjQjBrVGhMQ0lBVUFFQjZqa0ttQUVCR0FZQ2RtQ1pUQUtBRUFHRExZMkxqQUZBdEFHQW5mK2JUQUlDZCtKbDdBUUJibENFVkFhQ1JBQ0FUWlloRUFHZzdBS3pQVm9wRkFGZ3dBQlJtUzhRNUFOZ3RBREJKVjJaSUFMQzNBTURPRUF1eUFBZ01BREJSaUlVcEFBUjdBR0RJSXlONEFJU1pBQlJHOGxjODhTdXVFT2NxQUFCNG1iSTh1U1E1UllGYkNDMXhCMWRYTGg0b3pra1hLeFEyWVFKaG1rQXV3bm1aR1RLQk5BL2c4OHdBQUtDUkZSSGdnL1A5ZU00T3JzN09ObzYyRGw4dDZyOEcveUppWXVQKzVjK3JjRUFBQU9GMGZ0SCtMQyt6R29BN0JvQnQvcUlsN2dSb1hndWdkZmVMWnJJUFFMVUFvT25hVi9OdytINDhQRVdoa0xuWjJlWGs1TmhLeEVKYlljcFhmZjVud2wvQVYvMXMrWDQ4L1BmMTRMN2lKSUV5WFlGSEJQamd3c3owVEtVY3o1SUpoR0xjNW85SC9MY0wvL3dkMHlMRVNXSzVXQ29VNDFFU2NZNUVtb3p6TXFVaWlVS1NLY1VsMHY5azR0OHMrd00rM3pVQXNHbytBWHVSTGFoZFl3UDJTeWNRV0hUQTR2Y0FBUEs3YjhIVUtBZ0RnR2lENGM5My8rOC8vVWVnSlFDQVprbVNjUUFBWGtRa0xsVEtzei9IQ0FBQVJLQ0JLckJCRy9UQkdDekFCaHpCQmR6QkMveGdOb1JDSk1UQ1FoQkNDbVNBSEhKZ0theUNRaWlHemJBZEttQXYxRUFkTk1CUmFJYVRjQTR1d2xXNERqMXdEL3BoQ0o3QktMeUJDUVJCeUFnVFlTSGFpQUZpaWxnampnZ1htWVg0SWNGSUJCS0xKQ0RKaUJSUklrdVJOVWd4VW9wVUlGVklIZkk5Y2dJNWgxeEd1cEU3eUFBeWd2eUd2RWN4bElHeVVUM1VETFZEdWFnM0dvUkdvZ3ZRWkhReG1vOFdvSnZRY3JRYVBZdzJvZWZRcTJnUDJvOCtROGN3d09nWUJ6UEViREF1eHNOQ3NUZ3NDWk5qeTdFaXJBeXJ4aHF3VnF3RHU0bjFZOCt4ZHdRU2dVWEFDVFlFZDBJZ1lSNUJTRmhNV0U3WVNLZ2dIQ1EwRWRvSk53a0RoRkhDSnlLVHFFdTBKcm9SK2NRWVlqSXhoMWhJTENQV0VvOFRMeEI3aUVQRU55UVNpVU15SjdtUUFrbXhwRlRTRXRKRzBtNVNJK2tzcVpzMFNCb2prOG5hWkd1eUJ6bVVMQ0FyeUlYa25lVEQ1RFBrRytRaDhsc0tuV0pBY2FUNFUrSW9Vc3BxU2hubEVPVTA1UVpsbURKQlZhT2FVdDJvb1ZRUk5ZOWFRcTJodGxLdlVZZW9FelIxbWpuTmd4WkpTNld0b3BYVEdtZ1hhUGRwcitoMHVoSGRsUjVPbDlCWDBzdnBSK2lYNkFQMGR3d05oaFdEeDRobktCbWJHQWNZWnhsM0dLK1lUS1laMDRzWngxUXdOekhybU9lWkQ1bHZWVmdxdGlwOEZaSEtDcFZLbFNhVkd5b3ZWS21xcHFyZXFndFY4MVhMVkkrcFhsTjlya1pWTTFQanFRblVscXRWcXAxUTYxTWJVMmVwTzZpSHFtZW9iMVEvcEg1Wi9Za0dXY05NdzA5RHBGR2dzVi9qdk1ZZ0MyTVpzM2dzSVdzTnE0WjFnVFhFSnJITjJYeDJLcnVZL1IyN2l6MnFxYUU1UXpOS00xZXpVdk9VWmo4SDQ1aHgrSngwVGdubktLZVg4MzZLM2hUdktlSXBHNlkwVExreFpWeHJxcGFYbGxpclNLdFJxMGZydlRhdTdhZWRwcjFGdTFuN2dRNUJ4MG9uWENkSFo0L09CWjNuVTlsVDNhY0tweFpOUFRyMXJpNnFhNlVib2J0RWQ3OXVwKzZZbnI1ZWdKNU1iNmZlZWIzbitoeDlMLzFVL1czNnAvVkhERmdHc3d3a0J0c016aGc4eFRWeGJ6d2RMOGZiOFZGRFhjTkFRNlZobFdHWDRZU1J1ZEU4bzlWR2pVWVBqR25HWE9NazQyM0diY2FqSmdZbUlTWkxUZXBON3BwU1RibW1LYVk3VER0TXg4M016YUxOMXBrMW16MHgxekxubStlYjE1dmZ0MkJhZUZvc3RxaTJ1R1ZKc3VSYXBsbnV0cnh1aFZvNVdhVllWVnBkczBhdG5hMGwxcnV0dTZjUnA3bE9rMDZybnRabnc3RHh0c20ycWJjWnNPWFlCdHV1dG0yMmZXRm5ZaGRudDhXdXcrNlR2Wk45dW4yTi9UMEhEWWZaRHFzZFdoMStjN1J5RkRwV090NmF6cHp1UDMzRjlKYnBMMmRZenhEUDJEUGp0aFBMS2NScG5WT2IwMGRuRjJlNWM0UHppSXVKUzRMTExwYytMcHNieHQzSXZlUktkUFZ4WGVGNjB2V2RtN09id3UybzI2L3VOdTVwN29mY244dzBueW1lV1ROejBNUElRK0JSNWRFL0M1K1ZNR3Zmckg1UFEwK0JaN1huSXk5akw1RlhyZGV3dDZWM3F2ZGg3eGMrOWo1eW4rTSs0enczM2pMZVdWL01OOEMzeUxmTFQ4TnZubCtGMzBOL0kvOWsvM3IvMFFDbmdDVUJad09KZ1VHQld3TDcrSHA4SWIrT1B6cmJaZmF5MmUxQmpLQzVRUlZCajRLdGd1WEJyU0ZveU95UXJTSDM1NWpPa2M1cERvVlFmdWpXMEFkaDVtR0x3MzRNSjRXSGhWZUdQNDV3aUZnYTBUR1hOWGZSM0VOejMwVDZSSlpFM3B0bk1VODVyeTFLTlNvK3FpNXFQTm8zdWpTNlA4WXVabG5NMVZpZFdFbHNTeHc1TGlxdU5tNXN2dC84N2ZPSDRwM2lDK043RjVndnlGMXdlYUhPd3ZTRnB4YXBMaElzT3BaQVRJaE9PSlR3UVJBcXFCYU1KZklUZHlXT0NubkNIY0puSWkvUk50R0kyRU5jS2g1TzhrZ3FUWHFTN0pHOE5Ya2t4VE9sTE9XNWhDZXBrTHhNRFV6ZG16cWVGcHAySUcweVBUcTlNWU9Ta1pCeFFxb2hUWk8yWitwbjVtWjJ5NnhsaGJMK3hXNkx0eThlbFFmSmE3T1FyQVZaTFFxMlFxYm9WRm9vMXlvSHNtZGxWMmEvelluS09aYXJuaXZON2N5enl0dVFONXp2bi8vdEVzSVM0WksycFlaTFZ5MGRXT2E5ckdvNXNqeHhlZHNLNHhVRks0WldCcXc4dUlxMkttM1ZUNnZ0VjVldWZyMG1lazFyZ1Y3QnlvTEJ0UUZyNnd0VkN1V0ZmZXZjMSsxZFQxZ3ZXZCsxWWZxR25ScytGWW1LcmhUYkY1Y1ZmOWdvM0hqbEc0ZHZ5citaM0pTMHFhdkV1V1RQWnRKbTZlYmVMWjViRHBhcWwrYVhEbTROMmRxMERkOVd0TzMxOWtYYkw1Zk5LTnU3ZzdaRHVhTy9QTGk4WmFmSnpzMDdQMVNrVlBSVStsUTI3dExkdFdIWCtHN1I3aHQ3dlBZMDdOWGJXN3ozL1Q3SnZ0dFZBVlZOMVdiVlpmdEorN1AzUDY2SnF1bjRsdnR0WGExT2JYSHR4d1BTQS8wSEl3NjIxN25VMVIzU1BWUlNqOVlyNjBjT3h4KysvcDN2ZHkwTk5nMVZqWnpHNGlOd1JIbms2ZmNKMy9jZURUcmFkb3g3ck9FSDB4OTJIV2NkTDJwQ212S2FScHRUbXZ0YllsdTZUOHcrMGRicTNucjhSOXNmRDV3MFBGbDVTdk5VeVduYTZZTFRrMmZ5ejR5ZGxaMTlmaTc1M0dEYm9yWjc1MlBPMzJvUGIrKzZFSFRoMGtYL2krYzd2RHZPWFBLNGRQS3kyK1VUVjdoWG1xODZYMjNxZE9vOC9wUFRUOGU3bkx1YXJybGNhN251ZXIyMWUyYjM2UnVlTjg3ZDlMMTU4UmIvMXRXZU9UM2R2Zk42Yi9mRjkvWGZGdDErY2lmOXpzdTcyWGNuN3EyOFQ3eGY5RUR0UWRsRDNZZlZQMXYrM05qdjNIOXF3SGVnODlIY1IvY0doWVBQL3BIMWp3OURCWStaajh1R0RZYnJuamcrT1RuaVAzTDk2ZnluUTg5a3p5YWVGLzZpL3N1dUZ4WXZmdmpWNjlmTzBaalJvWmZ5bDVPL2JYeWwvZXJBNnhtdjI4YkN4aDYreVhnek1WNzBWdnZ0d1hmY2R4M3ZvOThQVCtSOElIOG8vMmo1c2ZWVDBLZjdreG1Uay84RUE1anovR016TGRzQUFBQWdZMGhTVFFBQWVpVUFBSUNEQUFENS93QUFnT2tBQUhVd0FBRHFZQUFBT3BnQUFCZHZrbC9GUmdBQUFJUkpSRUZVZU5waTVHQm4vZi8zNzIrRy80eWNEQ3hNZnhoZ2JHVEFlUDcybS84TUJBQVRBeEdBS0VXTURJWWxCSzFqRk15NFFWQVJ5OC9QN3doYXgvTHI1MWZDaXY3OCtFRllFY09QajBRb1lucFBoS0xYandtSFU5L0tVNFREaVdweHh5Z3RMZjJma1pHUmdZR0JnZUgvLy84TU1EYUt3NTlLL0dkZ1lFQzJFZE4yd0FDYlR5MzhCMHJiYUFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQVJDQVlBQUFBUEZJYm1BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBS1QybERRMUJRYUc5MGIzTm9iM0FnU1VORElIQnliMlpwYkdVQUFIamFuVk5uVkZQcEZqMzMzdlJDUzRpQWxFdHZVaFVJSUZKQ2k0QVVrU1lxSVFrUVNvZ2hvZGtWVWNFUlJVVUVHOGlnaUFPT2pvQ01GVkVzRElvSzJBZmtJYUtPZzZPSWlzcjc0WHVqYTlhODkrYk4vclhYUHVlczg1Mnp6d2ZBQ0F5V1NETlJOWUFNcVVJZUVlQ0R4OFRHNGVRdVFJRUtKSEFBRUFpelpDRnovU01CQVBoK1BEd3JJc0FIdmdBQmVOTUxDQURBVFp2QU1CeUgvdy9xUXBsY0FZQ0VBY0Iwa1RoTENJQVVBRUI2amtLbUFFQkdBWUNkbUNaVEFLQUVBR0RMWTJMakFGQXRBR0FuZitiVEFJQ2QrSmw3QVFCYmxDRVZBYUNSQUNBVFpZaEVBR2c3QUt6UFZvcEZBRmd3QUJSbVM4UTVBTmd0QURCSlYyWklBTEMzQU1ET0VBdXlBQWdNQURCUmlJVXBBQVI3QUdESUl5TjRBSVNaQUJSRzhsYzg4U3V1RU9jcUFBQjRtYkk4dVNRNVJZRmJDQzF4QjFkWExoNG96a2tYS3hRMllRSmhta0F1d25tWkdUS0JOQS9nODh3QUFLQ1JGUkhnZy9QOWVNNE9yczdPTm82MkRsOHQ2cjhHL3lKaVl1UCs1YytyY0VBQUFPRjBmdEgrTEMrekdvQTdCb0J0L3FJbDdnUm9YZ3VnZGZlTFpySVBRTFVBb09uYVYvTncrSDQ4UEVXaGtMbloyZVhrNU5oS3hFSmJZY3BYZmY1bndsL0FWLzFzK1g0OC9QZjE0TDdpSklFeVhZRkhCUGpnd3N6MFRLVWN6NUlKaEdMYzVvOUgvTGNMLy93ZDB5TEVTV0s1V0NvVTQxRVNjWTVFbW96ek1xVWlpVUtTS2NVbDB2OWs0dDhzK3dNKzN6VUFzR28rQVh1UkxhaGRZd1AyU3ljUVdIVEE0dmNBQVBLN2I4SFVLQWdEZ0dpRDRjOTMvKzgvL1VlZ0pRQ0Faa21TY1FBQVhrUWtMbFRLc3ovSENBQUFSS0NCS3JCQkcvVEJHQ3pBQmh6QkJkekJDL3hnTm9SQ0pNVENRaEJDQ21TQUhISmdLYXlDUWlpR3piQWRLbUF2MUVBZE5NQlJhSWFUY0E0dXdsVzREajF3RC9waENKN0JLTHlCQ1FSQnlBZ1RZU0hhaUFGaWlsZ2pqZ2dYbVlYNEljRklCQktMSkNESmlCUlJJa3VSTlVneFVvcFVJRlZJSGZJOWNnSTVoMXhHdXBFN3lBQXlndnlHdkVjeGxJR3lVVDNVRExWRHVhZzNHb1JHb2d2UVpIUXhtbzhXb0p2UWNyUWFQWXcyb2VmUXEyZ1AybzgrUThjd3dPZ1lCelBFYkRBdXhzTkNzVGdzQ1pOank3RWlyQXlyeGhxd1Zxd0R1NG4xWTgreGR3UVNnVVhBQ1RZRWQwSWdZUjVCU0ZoTVdFN1lTS2dnSENRMEVkb0pOd2tEaEZIQ0p5S1RxRXUwSnJvUitjUVlZakl4aDFoSUxDUFdFbzhUTHhCN2lFUEVOeVFTaVVNeUo3bVFBa214cEZUU0V0SkcwbTVTSStrc3FaczBTQm9qazhuYVpHdXlCem1VTENBcnlJWGtuZVRENURQa0crUWg4bHNLbldKQWNhVDRVK0lvVXNwcVNobmxFT1UwNVFabG1ESkJWYU9hVXQyb29WUVJOWTlhUXEyaHRsS3ZVWWVvRXpSMW1qbk5neFpKUzZXdG9wWFRHbWdYYVBkcHIraDB1aEhkbFI1T2w5Qlgwc3ZwUitpWDZBUDBkd3dOaGhXRHg0aG5LQm1iR0FjWVp4bDNHSytZVEtZWjA0c1p4MVF3TnpIcm1PZVpENWx2VlZncXRpcDhGWkhLQ3BWS2xTYVZHeW92VkttcXBxcmVxZ3RWODFYTFZJK3BYbE45cmtaVk0xUGpxUW5VbHF0VnFwMVE2MU1iVTJlcE82aUhxbWVvYjFRL3BINVovWWtHV2NOTXcwOURwRkdnc1YvanZNWWdDMk1aczNnc0lXc05xNFoxZ1RYRUpySE4yWHgyS3J1WS9SMjdpejJxcWFFNVF6TktNMWV6VXZPVVpqOEg0NWh4K0p4MFRnbm5LS2VYODM2SzNoVHZLZUlwRzZZMFRMa3haVnhycXBhWGxsaXJTS3RScTBmcnZUYXU3YWVkcHIxRnUxbjdnUTVCeDBvblhDZEhaNC9PQlozblU5bFQzYWNLcHhaTlBUcjFyaTZxYTZVYm9idEVkNzl1cCs2WW5yNWVnSjVNYjZmZWViM24raHg5TC8xVS9XMzZwL1ZIREZnR3N3d2tCdHNNemhnOHhUVnhiendkTDhmYjhWRkRYY05BUTZWaGxXR1g0WVNSdWRFOG85VkdqVVlQakduR1hPTWs0MjNHYmNhakpnWW1JU1pMVGVwTjdwcFNUYm1tS2FZN1REdE14ODNNemFMTjFwazFtejB4MXpMbm0rZWIxNXZmdDJCYWVGb3N0cWkydUdWSnN1UmFwbG51dHJ4dWhWbzVXYVZZVlZwZHMwYXRuYTBsMXJ1dHU2Y1JwN2xPazA2cm50Wm53N0R4dHNtMnFiY1pzT1hZQnR1dXRtMjJmV0ZuWWhkbnQ4V3V3KzZUdlpOOXVuMk4vVDBIRFlmWkRxc2RXaDErYzdSeUZEcFdPdDZhenB6dVAzM0Y5SmJwTDJkWXp4RFAyRFBqdGhQTEtjUnBuVk9iMDBkbkYyZTVjNFB6aUl1SlM0TExMcGMrTHBzYnh0M0l2ZVJLZFBWeFhlRjYwdldkbTdPYnd1Mm8yNi91TnU1cDdvZmNuOHcwbnltZVdUTnowTVBJUStCUjVkRS9DNStWTUd2ZnJINVBRMCtCWjdYbkl5OWpMNUZYcmRld3Q2VjNxdmRoN3hjKzlqNXluK00rNHp3MzNqTGVXVi9NTjhDM3lMZkxUOE52bmwrRjMwTi9JLzlrLzNyLzBRQ25nQ1VCWndPSmdVR0JXd0w3K0hwOEliK09QenJiWmZheTJlMUJqS0M1UVJWQmo0S3RndVhCclNGb3lPeVFyU0gzNTVqT2tjNXBEb1ZRZnVqVzBBZGg1bUdMdzM0TUo0V0hoVmVHUDQ1d2lGZ2EwVEdYTlhmUjNFTnozMFQ2UkpaRTNwdG5NVTg1cnkxS05TbytxaTVxUE5vM3VqUzZQOFl1WmxuTTFWaWRXRWxzU3h3NUxpcXVObTVzdnQvODdmT0g0cDNpQytON0Y1Z3Z5RjF3ZWFIT3d2U0ZweGFwTGhJc09wWkFUSWhPT0pUd1FSQXFxQmFNSmZJVGR5V09Dbm5DSGNKbklpL1JOdEdJMkVOY0toNU84a2dxVFhxUzdKRzhOWGtreFRPbExPVzVoQ2Vwa0x4TURVemRtenFlRnBwMklHMHlQVHE5TVlPU2taQnhRcW9oVFpPMlorcG41bVoyeTZ4bGhiTCt4VzZMdHk4ZWxRZkphN09RckFWWkxRcTJRcWJvVkZvbzF5b0hzbWRsVjJhL3pZbktPWmFybml2TjdjeXp5dHVRTjV6dm4vL3RFc0lTNFpLMnBZWkxWeTBkV09hOXJHbzVzanh4ZWRzSzR4VUZLNFpXQnF3OHVJcTJLbTNWVDZ2dFY1ZXVmcjBtZWsxcmdWN0J5b0xCdFFGcjZ3dFZDdVdGZmV2YzErMWRUMWd2V2QrMVlmcUduUnMrRlltS3JoVGJGNWNWZjlnbzNIamxHNGR2eXIrWjNKUzBxYXZFdVdUUFp0Sm02ZWJlTFo1YkRwYXFsK2FYRG00TjJkcTBEZDlXdE8zMTlrWGJMNWZOS051N2c3WkR1YU8vUExpOFphZkp6czA3UDFTa1ZQUlUrbFEyN3RMZHRXSFgrRzdSN2h0N3ZQWTA3TlhiVzd6My9UN0p2dHRWQVZWTjFXYlZaZnRKKzdQM1A2NkpxdW40bHZ0dFhhMU9iWEh0eHdQU0EvMEhJdzYyMTduVTFSM1NQVlJTajlZcjYwY094eCsrL3AzdmR5ME5OZzFWalp6RzRpTndSSG5rNmZjSjMvY2VEVHJhZG94N3JPRUgweDkySFdjZEwycENtdkthUnB0VG12dGJZbHU2VDh3KzBkYnEzbnI4UjlzZkQ1dzBQRmw1U3ZOVXlXbmE2WUxUazJmeXo0eWRsWjE5Zmk3NTNHRGJvclo3NTJQTzMyb1BiKys2RUhUaDBrWC9pK2M3dkR2T1hQSzRkUEt5MitVVFY3aFhtcTg2WDIzcWRPbzgvcFBUVDhlN25MdWFycmxjYTdudWVyMjFlMmIzNlJ1ZU44N2Q5TDE1OFJiLzF0V2VPVDNkdmZONmIvZkY5L1hmRnQxK2NpZjl6c3U3MlhjbjdxMjhUN3hmOUVEdFFkbEQzWWZWUDF2KzNOanYzSDlxd0hlZzg5SGNSL2NHaFlQUC9wSDFqdzlEQlkrWmo4dUdEWWJybmpnK09UbmlQM0w5NmZ5blE4OWt6eWFlRi82aS9zdXVGeFl2ZnZqVjY5Zk8wWmpSb1pmeWw1Ty9iWHlsL2VyQTZ4bXYyOGJDeGg2K3lYZ3pNVjcwVnZ2dHdYZmNkeDN2bzk4UFQrUjhJSDhvLzJqNXNmVlQwS2Y3a3htVGsvOEVBNWp6L0dNekxkc0FBQUFnWTBoU1RRQUFlaVVBQUlDREFBRDUvd0FBZ09rQUFIVXdBQURxWUFBQU9wZ0FBQmR2a2wvRlJnQUFBSU5KUkVGVWVOcGk1R0JuL2YvMzcyK0cvNHljREN4TWZ4aGdiR1RBZVA3Mm0vOE1CQUFUQXhHQUtFVXNjdy9jSkt5SVgxbVBzS0svUDc0Um9lajNMOEtLL3YzOVRZUkpQNGt4aVprWWt6NStKcWlJOGREVnB3U2poWVdYalowNjBjSW9MUzM5bjVHUmtZR0JnWUhoLy8vL0REQTJpblZQSmY0ek1EQWdPd3ZUaVlBQkFDTDFMUEVrbmQyYUFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7U3RlcEZhY3Rvcnl9IGZyb20gJy4vanMvU3RlcC9TdGVwRmFjdG9yeSc7XHJcbmltcG9ydCB7U3RlcENvbnNvbGV9IGZyb20gJy4vanMvQ29uc29sZS9TdGVwQ29uc29sZSdcclxuXHJcbmNvbnN0IFN0ZXAgPSBTdGVwRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuZXhwb3J0IHtTdGVwfTtcclxuXHJcbi8vXHJcbi8vIEluc3RhbGwgdGhlIGNvbnNvbGUgY29tcG9uZW50c1xyXG4vL1xyXG5cclxuXHJcbmlmKFNpdGUuU2l0ZS5jb25zb2xlICE9PSB1bmRlZmluZWQpIHtcclxuXHRTdGVwQ29uc29sZS5zZXR1cChTaXRlLlNpdGUuY29uc29sZSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFN0ZXAgc3lzdGVtIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCBTdGVwU3RhdHVzVnVlIGZyb20gJy4vU3RlcFN0YXR1cy52dWUnO1xyXG5pbXBvcnQgU3RlcFVzZXJTdGF0dXNWdWUgZnJvbSAnLi9TdGVwVXNlclN0YXR1cy52dWUnO1xyXG5cclxuZXhwb3J0IGxldCBTdGVwQ29uc29sZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5TdGVwQ29uc29sZS5zZXR1cCA9IGZ1bmN0aW9uKENvbnNvbGUpIHtcclxuXHJcblx0Q29uc29sZS5jb21wb25lbnRzLmFkZFJvdXRlKFxyXG5cdFx0e3JvdXRlOiAnL3N0ZXAvc3RhdHVzLzphc3NpZ250YWcnLCBjb21wb25lbnQ6IFN0ZXBTdGF0dXNWdWUsIHByb3BzOiB0cnVlfVxyXG5cdCk7XHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRSb3V0ZShcclxuXHRcdHtyb3V0ZTogJy9zdGVwL3N0YXR1cy86YXNzaWdudGFnLzptZW1iZXJpZCcsIGNvbXBvbmVudDogU3RlcFVzZXJTdGF0dXNWdWUsIHByb3BzOiB0cnVlfVxyXG5cdCk7XHJcblxyXG5cdENvbnNvbGUuY291cnNlLmFzc2lnbm1lbnRMaW5rKCdzdGVwJywgJ3N0YXR1cycsICcvc3RlcC9zdGF0dXMvOmFzc2lnbnRhZycpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N0ZXBTdGF0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3ZjFkY2M2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N0ZXBTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdGVwU3RhdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TdGVwU3RhdHVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjdmMWRjYzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjdmMWRjYzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjdmMWRjYzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N0ZXBTdGF0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3ZjFkY2M2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3ZjFkY2M2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc3RlcC9qcy9Db25zb2xlL1N0ZXBTdGF0dXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3RlcFN0YXR1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N0ZXBTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3RlcFN0YXR1cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N0ZXBTdGF0dXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N0ZXBTdGF0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3ZjFkY2M2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdGVwVXNlclN0YXR1cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQyZWE0ZjEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3RlcFVzZXJTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdGVwVXNlclN0YXR1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY0MmVhNGYxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0MmVhNGYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0MmVhNGYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdGVwVXNlclN0YXR1cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQyZWE0ZjEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjQyZWE0ZjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zdGVwL2pzL0NvbnNvbGUvU3RlcFVzZXJTdGF0dXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3RlcFVzZXJTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGVwVXNlclN0YXR1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3RlcFVzZXJTdGF0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0MmVhNGYxJlwiIiwiLyoqXHJcbiAqIFNpbXBsZSBpbWFnZSBsb2FkZXIgdGhhdCBkZXRlcm1pbmVzIHdoZW4gYWxsIGltYWdlcyBoYXZlIGJlZW4gbG9hZGVkXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBJbWFnZUxvYWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGxldCBsb2FkaW5nID0gMDtcclxuICAgIGxldCBmdW5jID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmxvYWQgPSBmdW5jdGlvbihzcmMpIHtcclxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRlZE9uZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRlZE9uZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nLm9uYWJvcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRlZE9uZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZGluZysrO1xyXG4gICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkZWRPbmUoKSB7XHJcbiAgICAgICAgbG9hZGluZy0tO1xyXG5cclxuICAgICAgICBpZihsb2FkaW5nID09PSAwICYmIGZ1bmMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWRlZCA9IGZ1bmN0aW9uKF9mdW5jKSB7XHJcbiAgICAgICAgaWYobG9hZGluZyA9PT0gMCkge1xyXG4gICAgICAgICAgICBfZnVuYygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuYyA9IF9mdW5jO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBQb3B1cCBtZW51IGl0ZW1zLlxyXG4gKi9cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBsZXQgUG9wdXAgPSBmdW5jdGlvbihzZWwsIGRhdGEpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgXHRpbnN0YWxsKGVsZW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbChlbGVtZW50KSB7XHJcbiAgICBcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICBcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgXHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgXHRzcGFuLmlubmVyVGV4dCA9IGpzb24udGl0bGU7XHJcbiAgICBcdGEuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIFx0aW1nLnNyYyA9IGpzb24uaW1nO1xyXG4gICAgXHRhLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgXHRhLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdCAgICBpZiAoISB3aW5kb3cuZm9jdXMpe1xyXG5cdFx0ICAgIFx0cmV0dXJuO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgd2luZG93Lm9wZW4oanNvbi5saW5rLCBqc29uLnRpdGxlLCAnd2lkdGg9JyArIGpzb24ud2lkdGggKyAnLCBoZWlnaHQ9JyArIGpzb24uaGVpZ2h0ICsgJywgc2Nyb2xsYmFycz15ZXMnKTtcclxuXHQgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFN0ZXAgcHJvZ3Jlc3MgaW5kaWNhdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSAnLi9JbWFnZUxvYWRlci5qcyc7XHJcblxyXG5pbXBvcnQgcHJvZ3Jlc3NMZWZ0IGZyb20gJy4uLy4uL2ltZy9wcm9ncmVzcy1sZWZ0LnBuZyc7XHJcbmltcG9ydCBwcm9ncmVzc1JpZ2h0IGZyb20gJy4uLy4uL2ltZy9wcm9ncmVzcy1yaWdodC5wbmcnO1xyXG5pbXBvcnQgcHJvZ3Jlc3NTSSBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3Mtc2kucG5nJztcclxuaW1wb3J0IHByb2dyZXNzU0MgZnJvbSAnLi4vLi4vaW1nL3Byb2dyZXNzLXNjLnBuZyc7XHJcbmltcG9ydCBwcm9ncmVzc1RJIGZyb20gJy4uLy4uL2ltZy9wcm9ncmVzcy10aS5wbmcnO1xyXG5pbXBvcnQgcHJvZ3Jlc3NUQyBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3MtdGMucG5nJztcclxuaW1wb3J0IHByb2dyZXNzQ3VyIGZyb20gJy4uLy4uL2ltZy9wcm9ncmVzcy1jdXIucG5nJztcclxuXHJcblxyXG5leHBvcnQgbGV0IFByb2dyZXNzID0gZnVuY3Rpb24oc2VsLCBkYXRhKSB7XHJcbiAgICBjb25zdCBOT1RWSVNJVEVEID0gJ04nO1x0Ly8vPCAlU2VjdGlvbiBoYXMgbm90IGJlZW4gdmlzaXRlZCBieSB0aGUgdXNlclxyXG4gICAgY29uc3QgVklTSVRFRCA9ICdWJztcdC8vLzwgJVNlY3Rpb24gaGFzIGJlZW4gdmlzaXRlZCwgYnV0IGlzIG5vdCB5ZXQgZG9uZVxyXG4gICAgY29uc3QgRE9ORSA9ICdEJztcdFx0Ly8vPCAlU2VjdGlvbiBpcyBjb21wbGV0ZWRcclxuICAgIGNvbnN0IFNFQ1RJT04gPSAnUyc7ICAgIC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHJlZ3VsYXIgc2VjdGlvblxyXG5cclxuICAgIGNvbnN0IFRBU0sgPSAnVCc7XHRcdC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHRhc2tcclxuICAgIGNvbnN0IFFVSVogPSAnUSc7XHRcdC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHF1aXpcclxuICAgIGNvbnN0IFZJREVPID0gJ1YnO1x0XHQvLy88IEluZGljYXRlcyB0aGlzIHNlY3Rpb24gaXMgYSB2aWRlb1xyXG5cclxuICAgIGNvbnN0IFNQQUNJTkcgPSA2OyAgICAgIC8vLzwgU3BhY2luZyBiZXR3ZWVuIGltYWdlc1xyXG5cclxuICAgIGxldCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoKTtcclxuICAgIGxldCBsZWZ0ID0gbG9hZGVyLmxvYWQocHJvZ3Jlc3NMZWZ0KTtcclxuICAgIGxldCByaWdodCA9IGxvYWRlci5sb2FkKHByb2dyZXNzUmlnaHQpO1xyXG4gICAgbGV0IHNpID0gbG9hZGVyLmxvYWQocHJvZ3Jlc3NTSSk7XHJcbiAgICBsZXQgc2MgPSBsb2FkZXIubG9hZChwcm9ncmVzc1NDKTtcclxuICAgIGxldCB0aSA9IGxvYWRlci5sb2FkKHByb2dyZXNzVEkpO1xyXG4gICAgbGV0IHRjID0gbG9hZGVyLmxvYWQocHJvZ3Jlc3NUQyk7XHJcbiAgICBsZXQgY3VyID0gbG9hZGVyLmxvYWQocHJvZ3Jlc3NDdXIpO1xyXG5cclxuICAgIGxldCBvdmVyWCA9IG51bGw7XHJcblxyXG4gICAgbG9hZGVyLmxvYWRlZCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpID0gZWxzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQ0FOVkFTJyk7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyNTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gbGVmdC53aWR0aCArIHJpZ2h0LndpZHRoICsgU1BBQ0lORyAqIGRhdGEuc2VjdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHggPSAwO1xyXG4gICAgICAgICAgICBsZXQgeSA9IDU7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGxlZnQsIHgsIHkpO1xyXG4gICAgICAgICAgICB4ICs9IGxlZnQud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBjdXJYID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSBkYXRhLnNlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZztcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBzZWN0aW9uLnN0YXR1cyA9PT0gRE9ORSA/IHRjIDogdGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBzZWN0aW9uLnN0YXR1cyA9PT0gRE9ORSA/IHNjIDogc2k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLnRhZyA9PT0gZGF0YS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyWCA9IHggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB4ICs9IFNQQUNJTkc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgbG9jYXRpb25cclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoY3VyLCBjdXJYLCB5KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHJpZ2h0LCB4LCB5KTtcclxuICAgICAgICAgICAgeCArPSByaWdodC53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIG92ZXJYID0gZXZlbnQub2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5yaWdodCA9IChsaS5vZmZzZXRXaWR0aCAtIG92ZXJYIC0gMTApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IChvdmVyWCAtIGxlZnQud2lkdGgpIC8gU1BBQ0lORztcclxuICAgICAgICAgICAgICAgIGlmKHMgPCAwIHx8IHMgPj0gZGF0YS5zZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZGF0YS5zZWN0aW9uc1tNYXRoLmZsb29yKHMpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdmVyWCA9IGV2ZW50Lm9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IChvdmVyWCAtIGxlZnQud2lkdGgpIC8gU1BBQ0lORztcclxuICAgICAgICAgICAgICAgIGlmKHMgPj0gMCAmJiBzIDwgZGF0YS5zZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBkYXRhLnNlY3Rpb25zW01hdGguZmxvb3IocyldLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIG92ZXJYID0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHtTdGVwU2VjdGlvblBhZ2V9IGZyb20gJy4vU3RlcFNlY3Rpb25QYWdlLmpzJztcclxuaW1wb3J0IHtTdGVwUGFnZX0gZnJvbSAnLi9TdGVwUGFnZS5qcyc7XHJcblxyXG5leHBvcnQgbGV0IFN0ZXBGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblN0ZXBGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGxldCBTdGVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2l0ZS5yZWFkeSgoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBlbjtcclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXN0ZXAnKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3IFN0ZXBTZWN0aW9uUGFnZShKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXN0ZXAtcGFnZScpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXcgU3RlcFBhZ2UoSlNPTi5wYXJzZShlbi50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4gU3RlcDtcclxufSIsIi8qKlxyXG4gKiBTdGVwIHBhZ2UgbmF2aWdhdGlvbiBmZWF0dXJlc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgU3RlcE5hdiA9IGZ1bmN0aW9uKHNlbCwgZGF0YSkge1xyXG4gICAgbGV0IHNlY3Rpb25UYWcgPSBkYXRhLmN1cnJlbnQ7XHJcbiAgICBsZXQgYXNzaWduVGFnID0gZGF0YS50YWc7XHJcblxyXG5cdGNvbnN0IFNlY3Rpb25TdGF0dXMgPSBTaXRlLnNpdGUuU2VjdGlvblN0YXR1cztcclxuXHJcblxyXG5cdGxldCBpbnN0YWxsID0gKG5hdikgPT4ge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5jbC1zdGVwLW1hcmstY29tcGxldGVkJyk7XHJcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZmxhZyhTZWN0aW9uU3RhdHVzLkRPTkUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBkYXRhLnVybDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQgPSBuYXYucXVlcnlTZWxlY3RvcignLmNsLXN0ZXAtY2xlYXItY29tcGxldGVkJyk7XHJcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZmxhZyhTZWN0aW9uU3RhdHVzLlZJU0lURUQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBkYXRhLnVybDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQgPSBuYXYucXVlcnlTZWxlY3RvcignLmNsLXN0ZXAtY29tcGxldGVkLW5leHQnKTtcclxuICAgICAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGZsYWcoU2VjdGlvblN0YXR1cy5ET05FLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5ocmVmO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmxhZyA9IChzdGF0dXMsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtzdGF0dXM6IHN0YXR1c307XHJcbiAgICAgICAgU2l0ZS5hcGkucG9zdChgL2FwaS9zdGVwL3N0YXR1cy8ke2Fzc2lnblRhZ30vJHtzZWN0aW9uVGFnfWAsIHBhcmFtcylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgIGluc3RhbGwoZWxzW2ldKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogSmF2YXNjcmlwdCBvYmplY3QgZm9yIG1hbmFnbWVudCBvZiB0aGUgbWFpbiBzdGVwIHBhZ2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtTdGVwU2VjdGlvbnNMaXN0fSBmcm9tICcuL1N0ZXBTZWN0aW9uc0xpc3QuanMnO1xyXG5cclxuZXhwb3J0IGxldCBTdGVwUGFnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIC8vIElzIHRoZXJlIGFueSBxdWl6IGRhdGE/XHJcbiAgICBsZXQgZW4sIHF1aXpSZXN1bHRzID0gbnVsbDtcclxuICAgIGlmKCAoZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtcXVpei1yZXN1bHRzJykpICE9PSBudWxsKSB7XHJcbiAgICAgICAgcXVpelJlc3VsdHMgPSBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgU3RlcFNlY3Rpb25zTGlzdCgnZGl2LmNsLXN0ZXAtc2VjdGlvbnMnLCBkYXRhLCBxdWl6UmVzdWx0cyk7XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogVGhlIGRlZmluaXRpb24gb2YgYSBzdGVwIHNlY3Rpb25cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFN0ZXBTZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vLyBNdXN0IG1hdGNoIHZhbHVlcyBpbiBTdGVwU2VjdGlvbi5waHBcclxuU3RlcFNlY3Rpb24uU0VDVElPTiA9ICdTJzsgICAgLy8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcmVndWxhciBzZWN0aW9uXHJcblN0ZXBTZWN0aW9uLlRBU0sgPSAnVCc7XHRcdC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHRhc2tcclxuU3RlcFNlY3Rpb24uUVVJWiA9ICdRJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcXVpelxyXG5TdGVwU2VjdGlvbi5WSURFTyA9ICdWJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgdmlkZW9cclxuXHJcblN0ZXBTZWN0aW9uLmZsYWcgPSBmdW5jdGlvbihhc3NpZ25UYWcsIHNlY3Rpb25UYWcsIHN0YXR1cywgY2FsbGJhY2spIHtcclxuICAgIGxldCBwYXJhbXMgPSB7c3RhdHVzOiBzdGF0dXN9O1xyXG4gICAgU2l0ZS5hcGkucG9zdChgL2FwaS9zdGVwL3N0YXR1cy8ke2Fzc2lnblRhZ30vJHtzZWN0aW9uVGFnfWAsIHBhcmFtcylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEphdmFzY3JpcHQgb2JqZWN0IGZvciBtYW5hZ2VtZW50IG9mIGEgc3RlcCBzZWN0aW9uIHBhZ2VcclxuICovXHJcblxyXG5pbXBvcnQge1Byb2dyZXNzfSBmcm9tICcuL1Byb2dyZXNzJztcclxuaW1wb3J0IHtTdGlja3lOYXZ9IGZyb20gJ3NpdGUtY2wvanMvVXRpbC9TdGlja3lOYXYnO1xyXG5pbXBvcnQge1N0ZXBOYXZ9IGZyb20gJy4vU3RlcE5hdic7XHJcbmltcG9ydCB7UG9wdXB9IGZyb20gJy4vUG9wdXAnO1xyXG5cclxuZXhwb3J0IGxldCBTdGVwU2VjdGlvblBhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICBuZXcgUG9wdXAoJ3NwYW4uY2wtcG9wdXAtbWVudS1pdGVtJywgZGF0YSk7XHJcbiAgICBuZXcgUHJvZ3Jlc3MoJ2xpLmNsLXN0ZXAtcHJvZ3Jlc3MnLCBkYXRhKTtcclxuICAgIG5ldyBTdGlja3lOYXYoJ25hdi5jbC1zdGVwbmF2Jyk7XHJcbiAgICBuZXcgU3RlcE5hdignbmF2LmNsLXN0ZXBuYXYnLCBkYXRhKTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7U3RlcFNlY3Rpb259IGZyb20gJy4vU3RlcFNlY3Rpb24uanMnO1xyXG5pbXBvcnQge1RpbWVGb3JtYXR0ZXJ9IGZyb20gJ3NpdGUtY2wvanMvVGltZUZvcm1hdHRlcic7XHJcbmltcG9ydCB7U2VjdGlvblN0YXR1c30gZnJvbSAnY291cnNlLWNsL2pzL1NlY3Rpb25TdGF0dXMnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcblxyXG5leHBvcnQgbGV0IFN0ZXBTZWN0aW9uc0xpc3QgPSBmdW5jdGlvbihzZWwsIGRhdGEsIHF1aXpSZXN1bHRzKSB7XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPjxhIGlkPVwic2VjdGlvbnNcIj4ke2RhdGEuc2VjdGlvbnNUaXRsZX08L2E+PC9oMj5gO1xyXG5cclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBkYXRhLnNlY3Rpb25zQmVnaW47XHJcblxyXG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMudGFibGUoKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcclxuICAgICAgICBwLmlubmVySFRNTCA9IGBUaGlzIGFzc2lnbm1lbnQgaXMgYWxzbyBhdmFpbGFibGUgYXMgYSBcclxuPGEgaHJlZj1cIiR7U2l0ZS5yb290ICsgJy9jbC9zdGVwL2FsbC8nICsgZGF0YS50YWd9XCIgdGl0bGU9XCJTaW5nbGUgUGFnZSBWaWV3XCI+c2luZ2xlIHBhZ2U8L2E+LmA7XHJcblxyXG4gICAgICAgIGlmKGRhdGEuZ3JhZGVMaW5rICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0ICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2dyYWRlJyk7XHJcblx0ICAgICAgICBwLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImdyYWRlXCI+PGltZyBzcmM9XCIke1NpdGUucm9vdH0vdmVuZG9yL2NsL2dyYWRlcy9pbWcvZ3JhZGluZy5wbmdcIiB3aWR0aD1cIjExNFwiIGhlaWdodD1cIjUwXCIgYWx0PVwiR3JhZGluZyBJY29uXCI+XHJcblx0XHQgICAgPGEgY2xhc3M9XCJjbC1hdXRvYmFja1wiIGhyZWY9XCIke1NpdGUucm9vdH0ke2RhdGEuZ3JhZGVMaW5rfS8ke2RhdGEudGFnfVwiPkFzc2lnbm1lbnQgR3JhZGluZyBQYWdlPC9hPjwvcD5gO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIGNvbnN0IGVuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbmREaXYpO1xyXG4gICAgICAgIGVuZERpdi5pbm5lckhUTUwgPSBkYXRhLnNlY3Rpb25zRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUQUJMRScpO1xyXG4gICAgICAgIHRhYmxlLnRpdGxlID0gXCJUYWJsZSBvZiBTdGVwIFNlY3Rpb25zXCI7XHJcblxyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RSJyk7XHJcbiAgICAgICAgaWYocXVpelJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdHIuaW5uZXJIVE1MID0gYDx0aD4mbmJzcDs8L3RoPjx0aD5TZWN0aW9uPC90aD48dGg+Jm5ic3A7PC90aD5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyLmlubmVySFRNTCA9IGA8dGg+Jm5ic3A7PC90aD48dGg+U2VjdGlvbjwvdGg+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHNlY3Rpb24gb2YgZGF0YS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICB0ciA9IHRoaXMudGFza1JvdyhkYXRhLCBzZWN0aW9uKTtcclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGFza1JvdyA9IGZ1bmN0aW9uKGRhdGEsIHNlY3Rpb24pIHtcclxuICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUUicpO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIENoZWNrIG1hcmsgY29sdW1uXHJcbiAgICAgICAgLy9cclxuICAgICAgICBsZXQgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEQnKTtcclxuICAgICAgICB0ZDEuY2xhc3NMaXN0LmFkZCgnc3RlcGNoZWNrJyk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQxKTtcclxuXHJcbiAgICAgICAgbGV0IHJvb3QgPSBTaXRlLnJvb3Q7XHJcblxyXG4gICAgICAgIGlmKHNlY3Rpb24uc3RhdHVzID09PSBTZWN0aW9uU3RhdHVzLkRPTkUpIHtcclxuICAgICAgICAgICAgdGQxLmlubmVySFRNTCA9IGA8aW1nIGFsdD1cIkNoZWNrIG1hcmtcIiB3aWR0aD1cIjE5XCIgaGVpZ2h0PVwiMTRcIiBzcmM9XCIke3Jvb3R9L3ZlbmRvci9jbC9zaXRlL2ltZy9jaGVjay5wbmdcIj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQxLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLWRpYWxvZycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gYDxkaXYgY2xhc3M9XCJ0YWJ1bGFyIHNtYWxsXCI+XHJcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5TZWN0aW9uOiA8L3NwYW4+PHNwYW4+JHtzZWN0aW9uLm5hbWV9PC9zcGFuPjwvcD5cclxuPHA+PHNwYW4gY2xhc3M9XCJsYWJlbFwiPlN0YXR1czogPC9zcGFuPjxzcGFuPiR7U2VjdGlvblN0YXR1cy50b1N0cmluZyhzZWN0aW9uLnN0YXR1cyl9PC9zcGFuPjwvcD5gO1xyXG5cclxuICAgICAgICAgICAgaWYoc2VjdGlvbi5zdGF0dXMgIT09IG51bGwgJiYgc2VjdGlvbi5zdGF0dXMgIT09IFNlY3Rpb25TdGF0dXMuTk9UVklTSVRFRCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCArPSBgXHJcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5GaXJzdCBMb29rOiA8L3NwYW4+PHNwYW4+JHtUaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzZWN0aW9uLmxvb2spfTwvc3Bhbj48L3A+XHJcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5MYXN0IEFjY2VzczogPC9zcGFuPjxzcGFuPiR7VGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgoc2VjdGlvbi5hY2Nlc3MpfTwvc3Bhbj48L3A+YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGVudCArPSBgPC9kaXY+YDtcclxuXHJcblxyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRpdixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VjdGlvbiBTdGF0dXMnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoc2VjdGlvbi5zdGF0dXMgPT09IFNlY3Rpb25TdGF0dXMuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XHJcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGVhciBTdGF0dXMnO1xyXG4gICAgICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTdGVwU2VjdGlvbi5mbGFnKGRhdGEudGFnLCBzZWN0aW9uLnRhZywgU2VjdGlvblN0YXR1cy5WSVNJVEVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24uc3RhdHVzID0gU2VjdGlvblN0YXR1cy5WSVNJVEVEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZDEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBUaGUgbGluayBpdHNlbGZcclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURCcpO1xyXG4gICAgICAgIHRkMi5jbGFzc0xpc3QuYWRkKCdzdGVwbmFtZScpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkMik7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBkYXRhLmljb25zW3NlY3Rpb24udHlwZV07XHJcbiAgICAgICAgY29uc3QgaW1nID0gYDxpbWcgYWx0PVwiJHtpY29uLmFsdH1cIiBzcmM9XCIke2ljb24uZmlsZX1cIj5gO1xyXG5cclxuICAgICAgICB0ZDIuaW5uZXJIVE1MID0gYCR7aW1nfSA8YSBocmVmPVwiJHtzZWN0aW9uLnVybH1cIiB0aXRsZT1cIiR7c2VjdGlvbi5uYW1lfVwiIGNsYXNzPVwic3RlcGxpbmtcIj4ke3NlY3Rpb24ubmFtZX08L2E+YDtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBRdWl6IHN0YXR1c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYocXVpelJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1REJyk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkMyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcXVpelJlc3VsdHNbc2VjdGlvbi50YWddO1xyXG4gICAgICAgICAgICBpZihyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGQzLmlubmVySFRNTCA9IHJlc3VsdC5wb2ludHMgKyAnLycgKyByZXN1bHQubWF4cG9pbnRzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGQzLmlubmVySFRNTCA9ICcmbmJzcDsnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0cjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0KCk7XHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBBIG1lbWJlcnNoaXAgYXNzb2NpYXRlZCB3aXRoIGEgdXNlci5cclxuICpcclxuICogVGhpcyBpcyBhIGJhc2Ugb2JqZWN0IHRoYXQgd2lsbCBiZSBpbmhlcml0ZWQgYnlcclxuICogYWN0dWFsIG1lbWJlcnNoaXAgb2JqZWN0cy5cclxuICovXHJcblxyXG52YXIgTWVtYmVyc2hpcCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vLyBUaGUgVXNlciBvYmplY3QgZm9yIHRoaXMgbWVtYmVyc2hpcFxyXG4gICAgdGhpcy51c2VyID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHtNZW1iZXJzaGlwfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==