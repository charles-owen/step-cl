"use strict";
(self["webpackChunkcse335"] = self["webpackChunkcse335"] || []).push([["Step"],{

/***/ "./vendor/cl/step/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/step/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Step_StepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Step/StepFactory */ "./vendor/cl/step/js/Step/StepFactory.js");

if (!Site.Step) {
  Site.Step = _js_Step_StepFactory__WEBPACK_IMPORTED_MODULE_0__.StepFactory.create(Site.Site);
}

/***/ }),

/***/ "./vendor/cl/step/js/Step/ImageLoader.js":
/*!***********************************************!*\
  !*** ./vendor/cl/step/js/Step/ImageLoader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageLoader": () => (/* binding */ ImageLoader)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Progress": () => (/* binding */ Progress)
/* harmony export */ });
/* harmony import */ var _ImageLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLoader.js */ "./vendor/cl/step/js/Step/ImageLoader.js");
/* harmony import */ var _img_progress_left_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/progress-left.png */ "./vendor/cl/step/img/progress-left.png");
/* harmony import */ var _img_progress_right_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/progress-right.png */ "./vendor/cl/step/img/progress-right.png");
/* harmony import */ var _img_progress_si_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/progress-si.png */ "./vendor/cl/step/img/progress-si.png");
/* harmony import */ var _img_progress_sc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/progress-sc.png */ "./vendor/cl/step/img/progress-sc.png");
/* harmony import */ var _img_progress_ti_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/progress-ti.png */ "./vendor/cl/step/img/progress-ti.png");
/* harmony import */ var _img_progress_tc_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/progress-tc.png */ "./vendor/cl/step/img/progress-tc.png");
/* harmony import */ var _img_progress_cur_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/progress-cur.png */ "./vendor/cl/step/img/progress-cur.png");
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

  var loader = new _ImageLoader_js__WEBPACK_IMPORTED_MODULE_0__.ImageLoader();
  var left = loader.load(_img_progress_left_png__WEBPACK_IMPORTED_MODULE_1__);
  var right = loader.load(_img_progress_right_png__WEBPACK_IMPORTED_MODULE_2__);
  var si = loader.load(_img_progress_si_png__WEBPACK_IMPORTED_MODULE_3__);
  var sc = loader.load(_img_progress_sc_png__WEBPACK_IMPORTED_MODULE_4__);
  var ti = loader.load(_img_progress_ti_png__WEBPACK_IMPORTED_MODULE_5__);
  var tc = loader.load(_img_progress_tc_png__WEBPACK_IMPORTED_MODULE_6__);
  var cur = loader.load(_img_progress_cur_png__WEBPACK_IMPORTED_MODULE_7__);
  var overX = null;
  loader.loaded(function () {
    var els = document.querySelectorAll(sel);
    var _loop = function _loop() {
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
      }

      // Draw the current location
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
      _loop();
    }
  });
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepFactory.js":
/*!***********************************************!*\
  !*** ./vendor/cl/step/js/Step/StepFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepFactory": () => (/* binding */ StepFactory)
/* harmony export */ });
/* harmony import */ var _StepSectionPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepSectionPage.js */ "./vendor/cl/step/js/Step/StepSectionPage.js");
/* harmony import */ var _StepPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepPage.js */ "./vendor/cl/step/js/Step/StepPage.js");


var StepFactory = function StepFactory() {};
StepFactory.create = function (site) {
  var Step = function Step() {};
  site.ready(function () {
    var en;
    if ((en = document.getElementById('cl-step')) !== null) {
      new _StepSectionPage_js__WEBPACK_IMPORTED_MODULE_0__.StepSectionPage(JSON.parse(en.textContent));
    }
    if ((en = document.getElementById('cl-step-page')) !== null) {
      new _StepPage_js__WEBPACK_IMPORTED_MODULE_1__.StepPage(JSON.parse(en.textContent));
    }
  });
  return Step;
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepNav.js":
/*!*******************************************!*\
  !*** ./vendor/cl/step/js/Step/StepNav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepNav": () => (/* binding */ StepNav)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepPage": () => (/* binding */ StepPage)
/* harmony export */ });
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
  new _StepSectionsList_js__WEBPACK_IMPORTED_MODULE_0__.StepSectionsList('div.cl-step-sections', data, quizResults);
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepSection.js":
/*!***********************************************!*\
  !*** ./vendor/cl/step/js/Step/StepSection.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepSection": () => (/* binding */ StepSection)
/* harmony export */ });
/**
 * @file
 * The definition of a step section
 */

var StepSection = function StepSection() {};

// Must match values in StepSection.php
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepSectionPage": () => (/* binding */ StepSectionPage)
/* harmony export */ });
/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Progress */ "./vendor/cl/step/js/Step/Progress.js");
/* harmony import */ var site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/Util/StickyNav */ "./vendor/cl/site/js/Util/StickyNav.js");
/* harmony import */ var _StepNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepNav */ "./vendor/cl/step/js/Step/StepNav.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./vendor/cl/step/js/Step/Popup.js");
/**
 * @file
 * Javascript object for management of a step section page
 */





var StepSectionPage = function StepSectionPage(data) {
  new _Popup__WEBPACK_IMPORTED_MODULE_3__.Popup('span.cl-popup-menu-item', data);
  new _Progress__WEBPACK_IMPORTED_MODULE_0__.Progress('li.cl-step-progress', data);
  new site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_1__.StickyNav('nav.cl-stepnav');
  new _StepNav__WEBPACK_IMPORTED_MODULE_2__.StepNav('nav.cl-stepnav', data);
};

/***/ }),

/***/ "./vendor/cl/step/js/Step/StepSectionsList.js":
/*!****************************************************!*\
  !*** ./vendor/cl/step/js/Step/StepSectionsList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepSectionsList": () => (/* binding */ StepSectionsList)
/* harmony export */ });
/* harmony import */ var _StepSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepSection.js */ "./vendor/cl/step/js/Step/StepSection.js");
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
/* harmony import */ var course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! course-cl/js/SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dialog-cl */ "./.yarn/cache/dialog-cl-npm-1.0.7-8976e01c51-eebf4c1e92.zip/node_modules/dialog-cl/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




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
    var columns = 2;
    if (quizResults !== null) {
      tr.innerHTML = "<th>&nbsp;</th><th>Section</th><th>&nbsp;</th>";
      columns = 3;
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
        if (section.checkpoint) {
          var _tr = document.createElement('TR');
          _tr.classList.add('cl-checkpoint');
          _tr.innerHTML = '<td colspan="' + columns + '">CHECKPOINT</td>';
          table.appendChild(_tr);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return table;
  };
  this.taskRow = function (data, section) {
    var tr = document.createElement('TR');

    //
    // Check mark column
    //
    var td1 = document.createElement('TD');
    td1.classList.add('stepcheck');
    tr.appendChild(td1);
    var root = Site.root;
    if (section.status === course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__.SectionStatus.DONE) {
      td1.innerHTML = "<img alt=\"Check mark\" width=\"19\" height=\"14\" src=\"".concat(root, "/vendor/cl/site/img/check16.png\">");
    }
    td1.onclick = function (event) {
      var div = document.createElement('DIV');
      div.classList.add('cl-dialog');
      var content = "<div class=\"tabular small\">\n<p><span class=\"label\">Section: </span><span>".concat(section.name, "</span></p>\n<p><span class=\"label\">Status: </span><span>").concat(course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__.SectionStatus.toString(section.status), "</span></p>");
      if (section.status !== null && section.status !== course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__.SectionStatus.NOTVISITED) {
        content += "\n<p><span class=\"label\">First Look: </span><span>".concat(site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__.TimeFormatter.relativeUNIX(section.look), "</span></p>\n<p><span class=\"label\">Last Access: </span><span>").concat(site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__.TimeFormatter.relativeUNIX(section.access), "</span></p>");
      }
      content += "</div>";
      div.innerHTML = content;
      var dialog = new dialog_cl__WEBPACK_IMPORTED_MODULE_3__["default"]({
        content: div,
        title: 'Section Status'
      });
      if (section.status === course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__.SectionStatus.DONE) {
        var p = document.createElement('P');
        p.classList.add('center');
        div.appendChild(p);
        var button = document.createElement('BUTTON');
        button.textContent = 'Clear Status';
        p.appendChild(button);
        button.onclick = function (event) {
          _StepSection_js__WEBPACK_IMPORTED_MODULE_0__.StepSection.flag(data.tag, section.tag, course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__.SectionStatus.VISITED, function () {
            section.status = course_cl_js_SectionStatus__WEBPACK_IMPORTED_MODULE_2__.SectionStatus.VISITED;
            td1.innerHTML = '';
            dialog.close();
          });
        };
      }
    };

    //
    // The link itself
    //
    var td2 = document.createElement('TD');
    td2.classList.add('stepname');
    tr.appendChild(td2);
    var icon = data.icons[section.type];
    var img = "<img alt=\"".concat(icon.alt, "\" src=\"").concat(icon.file, "\">");
    td2.innerHTML = "".concat(img, " <a href=\"").concat(section.url, "\" title=\"").concat(section.name, "\" class=\"steplink\">").concat(section.name, "</a>");

    //
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

/***/ "./vendor/cl/step/img/progress-cur.png":
/*!*********************************************!*\
  !*** ./vendor/cl/step/img/progress-cur.png ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./vendor/cl/step/img/progress-left.png":
/*!**********************************************!*\
  !*** ./vendor/cl/step/img/progress-left.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./vendor/cl/step/img/progress-right.png":
/*!***********************************************!*\
  !*** ./vendor/cl/step/img/progress-right.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./vendor/cl/step/img/progress-sc.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-sc.png ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./vendor/cl/step/img/progress-si.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-si.png ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./vendor/cl/step/img/progress-tc.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-tc.png ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./vendor/cl/step/img/progress-ti.png":
/*!********************************************!*\
  !*** ./vendor/cl/step/img/progress-ti.png ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor","Course","Users","common"], () => (__webpack_exec__("./vendor/cl/step/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUd4SSxJQUFJLENBQUN5SSxLQUFLLENBQUN0RSxPQUFPLENBQUNDLElBQUksQ0FBQztJQUNyQyxJQUFNOUUsR0FBRyx3QkFBZ0JrSixJQUFJLENBQUNFLEdBQUcsc0JBQVVGLElBQUksQ0FBQ0csSUFBSSxRQUFJO0lBRXhESixHQUFHLENBQUMxSCxTQUFTLGFBQU12QixHQUFHLHdCQUFhNkUsT0FBTyxDQUFDYSxHQUFHLHdCQUFZYixPQUFPLENBQUNXLElBQUksbUNBQXNCWCxPQUFPLENBQUNXLElBQUksU0FBTTs7SUFFOUc7SUFDQTtJQUNBO0lBQ0EsSUFBRzJCLFdBQVcsS0FBSyxJQUFJLEVBQUU7TUFDckIsSUFBSW1DLEdBQUcsR0FBR3pJLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN0Q3lHLEVBQUUsQ0FBQ3hHLFdBQVcsQ0FBQzBILEdBQUcsQ0FBQztNQUVuQixJQUFJQyxNQUFNLEdBQUdwQyxXQUFXLENBQUN0QyxPQUFPLENBQUNHLEdBQUcsQ0FBQztNQUNyQyxJQUFHdUUsTUFBTSxLQUFLdEIsU0FBUyxFQUFFO1FBQ3JCcUIsR0FBRyxDQUFDL0gsU0FBUyxHQUFHZ0ksTUFBTSxDQUFDQyxNQUFNLEdBQUcsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFNBQVM7TUFDMUQsQ0FBQyxNQUFNO1FBQ0hILEdBQUcsQ0FBQy9ILFNBQVMsR0FBRyxRQUFRO01BQzVCO0lBRUo7SUFHQSxPQUFPNkcsRUFBRTtFQUNiLENBQUM7RUFFRCxJQUFJLENBQUNaLEtBQUssRUFBRTtBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1BvcHVwLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9TdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1N0ZXBOYXYuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9TdGVwUGFnZS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1N0ZXBTZWN0aW9uLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvU3RlcFNlY3Rpb25QYWdlLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvU3RlcFNlY3Rpb25zTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0ZXBGYWN0b3J5fSBmcm9tICcuL2pzL1N0ZXAvU3RlcEZhY3RvcnknO1xuXG5pZighU2l0ZS5TdGVwKSB7XG5cdFNpdGUuU3RlcCA9IFN0ZXBGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xufSIsIi8qKlxuICogU2ltcGxlIGltYWdlIGxvYWRlciB0aGF0IGRldGVybWluZXMgd2hlbiBhbGwgaW1hZ2VzIGhhdmUgYmVlbiBsb2FkZWRcbiAqL1xuXG5leHBvcnQgbGV0IEltYWdlTG9hZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgbG9hZGluZyA9IDA7XG4gICAgbGV0IGZ1bmMgPSBudWxsO1xuXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24oc3JjKSB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgbG9hZGVkT25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIGxvYWRlZE9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkZWRPbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRpbmcrKztcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkZWRPbmUoKSB7XG4gICAgICAgIGxvYWRpbmctLTtcblxuICAgICAgICBpZihsb2FkaW5nID09PSAwICYmIGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9hZGVkID0gZnVuY3Rpb24oX2Z1bmMpIHtcbiAgICAgICAgaWYobG9hZGluZyA9PT0gMCkge1xuICAgICAgICAgICAgX2Z1bmMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmMgPSBfZnVuYztcbiAgICB9XG59XG4iLCIvKipcbiAqIEBmaWxlXG4gKiBQb3B1cCBtZW51IGl0ZW1zLlxuICovXG5cblxuXG5cbmV4cG9ydCBsZXQgUG9wdXAgPSBmdW5jdGlvbihzZWwsIGRhdGEpIHtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBcdGluc3RhbGwoZWxlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbChlbGVtZW50KSB7XG4gICAgXHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcbiAgICBcdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuICAgIFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICBcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgXHRzcGFuLmlubmVyVGV4dCA9IGpzb24udGl0bGU7XG4gICAgXHRhLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBcdGltZy5zcmMgPSBqc29uLmltZztcbiAgICBcdGEuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIFx0YS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQgICAgaWYgKCEgd2luZG93LmZvY3VzKXtcblx0XHQgICAgXHRyZXR1cm47XG5cdFx0ICAgIH1cblxuXHRcdCAgICB3aW5kb3cub3Blbihqc29uLmxpbmssIGpzb24udGl0bGUsICd3aWR0aD0nICsganNvbi53aWR0aCArICcsIGhlaWdodD0nICsganNvbi5oZWlnaHQgKyAnLCBzY3JvbGxiYXJzPXllcycpO1xuXHQgICAgfVxuXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpO1xufVxuIiwiLyoqXG4gKiBAZmlsZVxuICogU3RlcCBwcm9ncmVzcyBpbmRpY2F0b3JcbiAqL1xuXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcblxuaW1wb3J0IHByb2dyZXNzTGVmdCBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3MtbGVmdC5wbmcnO1xuaW1wb3J0IHByb2dyZXNzUmlnaHQgZnJvbSAnLi4vLi4vaW1nL3Byb2dyZXNzLXJpZ2h0LnBuZyc7XG5pbXBvcnQgcHJvZ3Jlc3NTSSBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3Mtc2kucG5nJztcbmltcG9ydCBwcm9ncmVzc1NDIGZyb20gJy4uLy4uL2ltZy9wcm9ncmVzcy1zYy5wbmcnO1xuaW1wb3J0IHByb2dyZXNzVEkgZnJvbSAnLi4vLi4vaW1nL3Byb2dyZXNzLXRpLnBuZyc7XG5pbXBvcnQgcHJvZ3Jlc3NUQyBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3MtdGMucG5nJztcbmltcG9ydCBwcm9ncmVzc0N1ciBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3MtY3VyLnBuZyc7XG5cblxuZXhwb3J0IGxldCBQcm9ncmVzcyA9IGZ1bmN0aW9uKHNlbCwgZGF0YSkge1xuICAgIGNvbnN0IE5PVFZJU0lURUQgPSAnTic7XHQvLy88ICVTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXG4gICAgY29uc3QgVklTSVRFRCA9ICdWJztcdC8vLzwgJVNlY3Rpb24gaGFzIGJlZW4gdmlzaXRlZCwgYnV0IGlzIG5vdCB5ZXQgZG9uZVxuICAgIGNvbnN0IERPTkUgPSAnRCc7XHRcdC8vLzwgJVNlY3Rpb24gaXMgY29tcGxldGVkXG4gICAgY29uc3QgU0VDVElPTiA9ICdTJzsgICAgLy8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcmVndWxhciBzZWN0aW9uXG5cbiAgICBjb25zdCBUQVNLID0gJ1QnO1x0XHQvLy88IEluZGljYXRlcyB0aGlzIHNlY3Rpb24gaXMgYSB0YXNrXG4gICAgY29uc3QgUVVJWiA9ICdRJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcXVpelxuICAgIGNvbnN0IFZJREVPID0gJ1YnO1x0XHQvLy88IEluZGljYXRlcyB0aGlzIHNlY3Rpb24gaXMgYSB2aWRlb1xuXG4gICAgY29uc3QgU1BBQ0lORyA9IDY7ICAgICAgLy8vPCBTcGFjaW5nIGJldHdlZW4gaW1hZ2VzXG5cbiAgICBsZXQgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKCk7XG4gICAgbGV0IGxlZnQgPSBsb2FkZXIubG9hZChwcm9ncmVzc0xlZnQpO1xuICAgIGxldCByaWdodCA9IGxvYWRlci5sb2FkKHByb2dyZXNzUmlnaHQpO1xuICAgIGxldCBzaSA9IGxvYWRlci5sb2FkKHByb2dyZXNzU0kpO1xuICAgIGxldCBzYyA9IGxvYWRlci5sb2FkKHByb2dyZXNzU0MpO1xuICAgIGxldCB0aSA9IGxvYWRlci5sb2FkKHByb2dyZXNzVEkpO1xuICAgIGxldCB0YyA9IGxvYWRlci5sb2FkKHByb2dyZXNzVEMpO1xuICAgIGxldCBjdXIgPSBsb2FkZXIubG9hZChwcm9ncmVzc0N1cik7XG5cbiAgICBsZXQgb3ZlclggPSBudWxsO1xuXG4gICAgbG9hZGVyLmxvYWRlZCgoKSA9PiB7XG4gICAgICAgIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpID0gZWxzW2ldO1xuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0NBTlZBUycpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyNTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGxlZnQud2lkdGggKyByaWdodC53aWR0aCArIFNQQUNJTkcgKiBkYXRhLnNlY3Rpb25zLmxlbmd0aDtcblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDU7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShsZWZ0LCB4LCB5KTtcbiAgICAgICAgICAgIHggKz0gbGVmdC53aWR0aDtcbiAgICAgICAgICAgIGxldCBjdXJYID0gMDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSBkYXRhLnNlY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBpbWc7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IHNlY3Rpb24uc3RhdHVzID09PSBET05FID8gdGMgOiB0aTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBzZWN0aW9uLnN0YXR1cyA9PT0gRE9ORSA/IHNjIDogc2k7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbi50YWcgPT09IGRhdGEuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJYID0geCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCB4LCB5KTtcbiAgICAgICAgICAgICAgICB4ICs9IFNQQUNJTkc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGN1ciwgY3VyWCwgeSk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHJpZ2h0LCB4LCB5KTtcbiAgICAgICAgICAgIHggKz0gcmlnaHQud2lkdGg7XG5cbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVyWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5yaWdodCA9IChsaS5vZmZzZXRXaWR0aCAtIG92ZXJYIC0gMTApICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIGxldCBzID0gKG92ZXJYIC0gbGVmdC53aWR0aCkgLyBTUEFDSU5HO1xuICAgICAgICAgICAgICAgIGlmKHMgPCAwIHx8IHMgPj0gZGF0YS5zZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZGF0YS5zZWN0aW9uc1tNYXRoLmZsb29yKHMpXS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJYID0gZXZlbnQub2Zmc2V0WDtcbiAgICAgICAgICAgICAgICBsZXQgcyA9IChvdmVyWCAtIGxlZnQud2lkdGgpIC8gU1BBQ0lORztcbiAgICAgICAgICAgICAgICBpZihzID49IDAgJiYgcyA8IGRhdGEuc2VjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRhdGEuc2VjdGlvbnNbTWF0aC5mbG9vcihzKV0udXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgb3ZlclggPSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cbiIsImltcG9ydCB7U3RlcFNlY3Rpb25QYWdlfSBmcm9tICcuL1N0ZXBTZWN0aW9uUGFnZS5qcyc7XG5pbXBvcnQge1N0ZXBQYWdlfSBmcm9tICcuL1N0ZXBQYWdlLmpzJztcblxuZXhwb3J0IGxldCBTdGVwRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xufVxuXG5TdGVwRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XG4gICAgbGV0IFN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICB9XG5cbiAgICBzaXRlLnJlYWR5KCgpID0+IHtcblxuICAgICAgICBsZXQgZW47XG4gICAgICAgIGlmKCAoZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtc3RlcCcpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3IFN0ZXBTZWN0aW9uUGFnZShKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXN0ZXAtcGFnZScpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3IFN0ZXBQYWdlKEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIFN0ZXA7XG59IiwiLyoqXG4gKiBTdGVwIHBhZ2UgbmF2aWdhdGlvbiBmZWF0dXJlc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBsZXQgU3RlcE5hdiA9IGZ1bmN0aW9uKHNlbCwgZGF0YSkge1xuICAgIGxldCBzZWN0aW9uVGFnID0gZGF0YS5jdXJyZW50O1xuICAgIGxldCBhc3NpZ25UYWcgPSBkYXRhLnRhZztcblxuXHRjb25zdCBTZWN0aW9uU3RhdHVzID0gU2l0ZS5zaXRlLlNlY3Rpb25TdGF0dXM7XG5cblxuXHRsZXQgaW5zdGFsbCA9IChuYXYpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuYXYucXVlcnlTZWxlY3RvcignLmNsLXN0ZXAtbWFyay1jb21wbGV0ZWQnKTtcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZmxhZyhTZWN0aW9uU3RhdHVzLkRPTkUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQgPSBuYXYucXVlcnlTZWxlY3RvcignLmNsLXN0ZXAtY2xlYXItY29tcGxldGVkJyk7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGZsYWcoU2VjdGlvblN0YXR1cy5WSVNJVEVELCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5jbC1zdGVwLWNvbXBsZXRlZC1uZXh0Jyk7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZmxhZyhTZWN0aW9uU3RhdHVzLkRPTkUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZmxhZyA9IChzdGF0dXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7c3RhdHVzOiBzdGF0dXN9O1xuICAgICAgICBTaXRlLmFwaS5wb3N0KGAvYXBpL3N0ZXAvc3RhdHVzLyR7YXNzaWduVGFnfS8ke3NlY3Rpb25UYWd9YCwgcGFyYW1zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbiAgICBmb3IobGV0IGk9MDsgaTxlbHMubGVuZ3RoOyAgaSsrKSB7XG4gICAgICAgIGluc3RhbGwoZWxzW2ldKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBmaWxlXG4gKiBKYXZhc2NyaXB0IG9iamVjdCBmb3IgbWFuYWdtZW50IG9mIHRoZSBtYWluIHN0ZXAgcGFnZS5cbiAqL1xuXG5pbXBvcnQge1N0ZXBTZWN0aW9uc0xpc3R9IGZyb20gJy4vU3RlcFNlY3Rpb25zTGlzdC5qcyc7XG5cbmV4cG9ydCBsZXQgU3RlcFBhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gSXMgdGhlcmUgYW55IHF1aXogZGF0YT9cbiAgICBsZXQgZW4sIHF1aXpSZXN1bHRzID0gbnVsbDtcbiAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXF1aXotcmVzdWx0cycpKSAhPT0gbnVsbCkge1xuICAgICAgICBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpO1xuICAgIH1cblxuICAgIG5ldyBTdGVwU2VjdGlvbnNMaXN0KCdkaXYuY2wtc3RlcC1zZWN0aW9ucycsIGRhdGEsIHF1aXpSZXN1bHRzKTtcbn0iLCIvKipcbiAqIEBmaWxlXG4gKiBUaGUgZGVmaW5pdGlvbiBvZiBhIHN0ZXAgc2VjdGlvblxuICovXG5cbmV4cG9ydCBsZXQgU3RlcFNlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxufVxuXG4vLyBNdXN0IG1hdGNoIHZhbHVlcyBpbiBTdGVwU2VjdGlvbi5waHBcblN0ZXBTZWN0aW9uLlNFQ1RJT04gPSAnUyc7ICAgIC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHJlZ3VsYXIgc2VjdGlvblxuU3RlcFNlY3Rpb24uVEFTSyA9ICdUJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgdGFza1xuU3RlcFNlY3Rpb24uUVVJWiA9ICdRJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcXVpelxuU3RlcFNlY3Rpb24uVklERU8gPSAnVic7XHRcdC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHZpZGVvXG5cblN0ZXBTZWN0aW9uLmZsYWcgPSBmdW5jdGlvbihhc3NpZ25UYWcsIHNlY3Rpb25UYWcsIHN0YXR1cywgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyYW1zID0ge3N0YXR1czogc3RhdHVzfTtcbiAgICBTaXRlLmFwaS5wb3N0KGAvYXBpL3N0ZXAvc3RhdHVzLyR7YXNzaWduVGFnfS8ke3NlY3Rpb25UYWd9YCwgcGFyYW1zKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICB9KTtcbn0iLCIvKipcbiAqIEBmaWxlXG4gKiBKYXZhc2NyaXB0IG9iamVjdCBmb3IgbWFuYWdlbWVudCBvZiBhIHN0ZXAgc2VjdGlvbiBwYWdlXG4gKi9cblxuaW1wb3J0IHtQcm9ncmVzc30gZnJvbSAnLi9Qcm9ncmVzcyc7XG5pbXBvcnQge1N0aWNreU5hdn0gZnJvbSAnc2l0ZS1jbC9qcy9VdGlsL1N0aWNreU5hdic7XG5pbXBvcnQge1N0ZXBOYXZ9IGZyb20gJy4vU3RlcE5hdic7XG5pbXBvcnQge1BvcHVwfSBmcm9tICcuL1BvcHVwJztcblxuZXhwb3J0IGxldCBTdGVwU2VjdGlvblBhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgbmV3IFBvcHVwKCdzcGFuLmNsLXBvcHVwLW1lbnUtaXRlbScsIGRhdGEpO1xuICAgIG5ldyBQcm9ncmVzcygnbGkuY2wtc3RlcC1wcm9ncmVzcycsIGRhdGEpO1xuICAgIG5ldyBTdGlja3lOYXYoJ25hdi5jbC1zdGVwbmF2Jyk7XG4gICAgbmV3IFN0ZXBOYXYoJ25hdi5jbC1zdGVwbmF2JywgZGF0YSk7XG59XG5cblxuIiwiaW1wb3J0IHtTdGVwU2VjdGlvbn0gZnJvbSAnLi9TdGVwU2VjdGlvbi5qcyc7XG5pbXBvcnQge1RpbWVGb3JtYXR0ZXJ9IGZyb20gJ3NpdGUtY2wvanMvVGltZUZvcm1hdHRlcic7XG5pbXBvcnQge1NlY3Rpb25TdGF0dXN9IGZyb20gJ2NvdXJzZS1jbC9qcy9TZWN0aW9uU3RhdHVzJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcblxuZXhwb3J0IGxldCBTdGVwU2VjdGlvbnNMaXN0ID0gZnVuY3Rpb24oc2VsLCBkYXRhLCBxdWl6UmVzdWx0cykge1xuXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPjxhIGlkPVwic2VjdGlvbnNcIj4ke2RhdGEuc2VjdGlvbnNUaXRsZX08L2E+PC9oMj5gO1xuXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gZGF0YS5zZWN0aW9uc0JlZ2luO1xuXG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMudGFibGUoKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuICAgICAgICBwLmlubmVySFRNTCA9IGBUaGlzIGFzc2lnbm1lbnQgaXMgYWxzbyBhdmFpbGFibGUgYXMgYSBcbjxhIGhyZWY9XCIke1NpdGUucm9vdCArICcvY2wvc3RlcC9hbGwvJyArIGRhdGEudGFnfVwiIHRpdGxlPVwiU2luZ2xlIFBhZ2UgVmlld1wiPnNpbmdsZSBwYWdlPC9hPi5gO1xuXG4gICAgICAgIGlmKGRhdGEuZ3JhZGVMaW5rICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHQgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcblx0ICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2dyYWRlJyk7XG5cdCAgICAgICAgcC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJncmFkZVwiPjxpbWcgc3JjPVwiJHtTaXRlLnJvb3R9L3ZlbmRvci9jbC9ncmFkZXMvaW1nL2dyYWRpbmcucG5nXCIgd2lkdGg9XCIxMTRcIiBoZWlnaHQ9XCI1MFwiIGFsdD1cIkdyYWRpbmcgSWNvblwiPlxuXHRcdCAgICA8YSBjbGFzcz1cImNsLWF1dG9iYWNrXCIgaHJlZj1cIiR7U2l0ZS5yb290fSR7ZGF0YS5ncmFkZUxpbmt9LyR7ZGF0YS50YWd9XCI+QXNzaWdubWVudCBHcmFkaW5nIFBhZ2U8L2E+PC9wPmA7XG4gICAgICAgIH1cblxuXHQgICAgY29uc3QgZW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbmREaXYpO1xuICAgICAgICBlbmREaXYuaW5uZXJIVE1MID0gZGF0YS5zZWN0aW9uc0VuZDtcbiAgICB9XG5cbiAgICB0aGlzLnRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJyk7XG4gICAgICAgIHRhYmxlLnRpdGxlID0gXCJUYWJsZSBvZiBTdGVwIFNlY3Rpb25zXCI7XG5cbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVFInKTtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSAyO1xuICAgICAgICBpZihxdWl6UmVzdWx0cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdHIuaW5uZXJIVE1MID0gYDx0aD4mbmJzcDs8L3RoPjx0aD5TZWN0aW9uPC90aD48dGg+Jm5ic3A7PC90aD5gO1xuICAgICAgICAgICAgY29sdW1ucyA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ci5pbm5lckhUTUwgPSBgPHRoPiZuYnNwOzwvdGg+PHRoPlNlY3Rpb248L3RoPmA7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xuXG4gICAgICAgIGZvcihsZXQgc2VjdGlvbiBvZiBkYXRhLnNlY3Rpb25zKSB7XG4gICAgICAgICAgICB0ciA9IHRoaXMudGFza1JvdyhkYXRhLCBzZWN0aW9uKTtcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcblxuICAgICAgICAgICAgaWYoc2VjdGlvbi5jaGVja3BvaW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVFInKTtcbiAgICAgICAgICAgICAgICB0ci5jbGFzc0xpc3QuYWRkKCdjbC1jaGVja3BvaW50JylcbiAgICAgICAgICAgICAgICB0ci5pbm5lckhUTUwgPSAnPHRkIGNvbHNwYW49XCInICsgY29sdW1ucyArICdcIj5DSEVDS1BPSU5UPC90ZD4nXG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cblxuICAgIHRoaXMudGFza1JvdyA9IGZ1bmN0aW9uKGRhdGEsIHNlY3Rpb24pIHtcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVFInKTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBDaGVjayBtYXJrIGNvbHVtblxuICAgICAgICAvL1xuICAgICAgICBsZXQgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEQnKTtcbiAgICAgICAgdGQxLmNsYXNzTGlzdC5hZGQoJ3N0ZXBjaGVjaycpO1xuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZDEpO1xuXG4gICAgICAgIGxldCByb290ID0gU2l0ZS5yb290O1xuXG4gICAgICAgIGlmKHNlY3Rpb24uc3RhdHVzID09PSBTZWN0aW9uU3RhdHVzLkRPTkUpIHtcbiAgICAgICAgICAgIHRkMS5pbm5lckhUTUwgPSBgPGltZyBhbHQ9XCJDaGVjayBtYXJrXCIgd2lkdGg9XCIxOVwiIGhlaWdodD1cIjE0XCIgc3JjPVwiJHtyb290fS92ZW5kb3IvY2wvc2l0ZS9pbWcvY2hlY2sxNi5wbmdcIj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQxLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLWRpYWxvZycpO1xuXG5cbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gYDxkaXYgY2xhc3M9XCJ0YWJ1bGFyIHNtYWxsXCI+XG48cD48c3BhbiBjbGFzcz1cImxhYmVsXCI+U2VjdGlvbjogPC9zcGFuPjxzcGFuPiR7c2VjdGlvbi5uYW1lfTwvc3Bhbj48L3A+XG48cD48c3BhbiBjbGFzcz1cImxhYmVsXCI+U3RhdHVzOiA8L3NwYW4+PHNwYW4+JHtTZWN0aW9uU3RhdHVzLnRvU3RyaW5nKHNlY3Rpb24uc3RhdHVzKX08L3NwYW4+PC9wPmA7XG5cbiAgICAgICAgICAgIGlmKHNlY3Rpb24uc3RhdHVzICE9PSBudWxsICYmIHNlY3Rpb24uc3RhdHVzICE9PSBTZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9IGBcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5GaXJzdCBMb29rOiA8L3NwYW4+PHNwYW4+JHtUaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzZWN0aW9uLmxvb2spfTwvc3Bhbj48L3A+XG48cD48c3BhbiBjbGFzcz1cImxhYmVsXCI+TGFzdCBBY2Nlc3M6IDwvc3Bhbj48c3Bhbj4ke1RpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHNlY3Rpb24uYWNjZXNzKX08L3NwYW4+PC9wPmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRlbnQgKz0gYDwvZGl2PmA7XG5cblxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGxldCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBkaXYsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTZWN0aW9uIFN0YXR1cydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihzZWN0aW9uLnN0YXR1cyA9PT0gU2VjdGlvblN0YXR1cy5ET05FKSB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NsZWFyIFN0YXR1cyc7XG4gICAgICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN0ZXBTZWN0aW9uLmZsYWcoZGF0YS50YWcsIHNlY3Rpb24udGFnLCBTZWN0aW9uU3RhdHVzLlZJU0lURUQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24uc3RhdHVzID0gU2VjdGlvblN0YXR1cy5WSVNJVEVEO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGQxLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIGxpbmsgaXRzZWxmXG4gICAgICAgIC8vXG4gICAgICAgIGxldCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURCcpO1xuICAgICAgICB0ZDIuY2xhc3NMaXN0LmFkZCgnc3RlcG5hbWUnKTtcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcblxuICAgICAgICBjb25zdCBpY29uID0gZGF0YS5pY29uc1tzZWN0aW9uLnR5cGVdO1xuICAgICAgICBjb25zdCBpbWcgPSBgPGltZyBhbHQ9XCIke2ljb24uYWx0fVwiIHNyYz1cIiR7aWNvbi5maWxlfVwiPmA7XG5cbiAgICAgICAgdGQyLmlubmVySFRNTCA9IGAke2ltZ30gPGEgaHJlZj1cIiR7c2VjdGlvbi51cmx9XCIgdGl0bGU9XCIke3NlY3Rpb24ubmFtZX1cIiBjbGFzcz1cInN0ZXBsaW5rXCI+JHtzZWN0aW9uLm5hbWV9PC9hPmA7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gUXVpeiBzdGF0dXNcbiAgICAgICAgLy9cbiAgICAgICAgaWYocXVpelJlc3VsdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURCcpO1xuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQzKTtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHF1aXpSZXN1bHRzW3NlY3Rpb24udGFnXTtcbiAgICAgICAgICAgIGlmKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGQzLmlubmVySFRNTCA9IHJlc3VsdC5wb2ludHMgKyAnLycgKyByZXN1bHQubWF4cG9pbnRzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZDMuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRyO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnQoKTtcbn1cblxuIl0sIm5hbWVzIjpbIlN0ZXBGYWN0b3J5IiwiU2l0ZSIsIlN0ZXAiLCJjcmVhdGUiLCJJbWFnZUxvYWRlciIsImxvYWRpbmciLCJmdW5jIiwibG9hZCIsInNyYyIsImltZyIsIkltYWdlIiwib25sb2FkIiwibG9hZGVkT25lIiwib25lcnJvciIsIm9uYWJvcnQiLCJsb2FkZWQiLCJfZnVuYyIsIlBvcHVwIiwic2VsIiwiZGF0YSIsImluaXRpYWxpemUiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJpbnN0YWxsIiwiZWxlbWVudCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsImEiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzcGFuIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImZvY3VzIiwib3BlbiIsImxpbmsiLCJ3aWR0aCIsImhlaWdodCIsInByb2dyZXNzTGVmdCIsInByb2dyZXNzUmlnaHQiLCJwcm9ncmVzc1NJIiwicHJvZ3Jlc3NTQyIsInByb2dyZXNzVEkiLCJwcm9ncmVzc1RDIiwicHJvZ3Jlc3NDdXIiLCJQcm9ncmVzcyIsIk5PVFZJU0lURUQiLCJWSVNJVEVEIiwiRE9ORSIsIlNFQ1RJT04iLCJUQVNLIiwiUVVJWiIsIlZJREVPIiwiU1BBQ0lORyIsImxvYWRlciIsImxlZnQiLCJyaWdodCIsInNpIiwic2MiLCJ0aSIsInRjIiwiY3VyIiwib3ZlclgiLCJlbHMiLCJsaSIsImNhbnZhcyIsInNlY3Rpb25zIiwiZGl2IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ4IiwieSIsImRyYXdJbWFnZSIsImN1clgiLCJzZWN0aW9uIiwidHlwZSIsInN0YXR1cyIsInRhZyIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib2Zmc2V0WCIsIm9mZnNldFdpZHRoIiwicyIsIk1hdGgiLCJmbG9vciIsIm5hbWUiLCJsb2NhdGlvbiIsInVybCIsIlN0ZXBTZWN0aW9uUGFnZSIsIlN0ZXBQYWdlIiwic2l0ZSIsInJlYWR5IiwiZW4iLCJnZXRFbGVtZW50QnlJZCIsIlN0ZXBOYXYiLCJzZWN0aW9uVGFnIiwiYXNzaWduVGFnIiwiU2VjdGlvblN0YXR1cyIsIm5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJmbGFnIiwiaHJlZiIsImNhbGxiYWNrIiwicGFyYW1zIiwiYXBpIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImhhc0Vycm9yIiwidG9hc3QiLCJlcnJvciIsIlN0ZXBTZWN0aW9uc0xpc3QiLCJxdWl6UmVzdWx0cyIsIlN0ZXBTZWN0aW9uIiwiU3RpY2t5TmF2IiwiVGltZUZvcm1hdHRlciIsIkRpYWxvZyIsInN0YXJ0Iiwic2VjdGlvbnNUaXRsZSIsInNlY3Rpb25zQmVnaW4iLCJ0YWJsZSIsInAiLCJjbGFzc0xpc3QiLCJhZGQiLCJyb290IiwiZ3JhZGVMaW5rIiwidW5kZWZpbmVkIiwiZW5kRGl2Iiwic2VjdGlvbnNFbmQiLCJ0ciIsImNvbHVtbnMiLCJ0YXNrUm93IiwiY2hlY2twb2ludCIsInRkMSIsImNvbnRlbnQiLCJ0b1N0cmluZyIsInJlbGF0aXZlVU5JWCIsImxvb2siLCJhY2Nlc3MiLCJkaWFsb2ciLCJidXR0b24iLCJjbG9zZSIsInRkMiIsImljb24iLCJpY29ucyIsImFsdCIsImZpbGUiLCJ0ZDMiLCJyZXN1bHQiLCJwb2ludHMiLCJtYXhwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9