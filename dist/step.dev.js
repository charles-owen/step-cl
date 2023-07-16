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
/* harmony export */   ImageLoader: () => (/* binding */ ImageLoader)
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
/* harmony export */   Popup: () => (/* binding */ Popup)
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
/* harmony export */   Progress: () => (/* binding */ Progress)
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
/* harmony export */   StepFactory: () => (/* binding */ StepFactory)
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
/* harmony export */   StepNav: () => (/* binding */ StepNav)
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
/* harmony export */   StepPage: () => (/* binding */ StepPage)
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
/* harmony export */   StepSection: () => (/* binding */ StepSection)
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
/* harmony export */   StepSectionPage: () => (/* binding */ StepSectionPage)
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
/* harmony export */   StepSectionsList: () => (/* binding */ StepSectionsList)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsaUJBQUFxQixNQUFBLENBQVlsQyxPQUFPLENBQUNXLElBQUksNEJBQUF1QixNQUFBLENBQXNCbEMsT0FBTyxDQUFDVyxJQUFJLFNBQU07O0lBRTlHO0lBQ0E7SUFDQTtJQUNBLElBQUc4QixXQUFXLEtBQUssSUFBSSxFQUFFO01BQ3JCLElBQUk0QyxHQUFHLEdBQUd0SixRQUFRLENBQUNjLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDdEM2RyxFQUFFLENBQUM1RyxXQUFXLENBQUN1SSxHQUFHLENBQUM7TUFFbkIsSUFBSUMsTUFBTSxHQUFHN0MsV0FBVyxDQUFDekMsT0FBTyxDQUFDRyxHQUFHLENBQUM7TUFDckMsSUFBR21GLE1BQU0sS0FBSy9CLFNBQVMsRUFBRTtRQUNyQjhCLEdBQUcsQ0FBQzVJLFNBQVMsR0FBRzZJLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxTQUFTO01BQzFELENBQUMsTUFBTTtRQUNISCxHQUFHLENBQUM1SSxTQUFTLEdBQUcsUUFBUTtNQUM1QjtJQUVKO0lBR0EsT0FBT2lILEVBQUU7RUFDYixDQUFDO0VBRUQsSUFBSSxDQUFDWixLQUFLLENBQUMsQ0FBQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1BvcHVwLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9TdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1N0ZXBOYXYuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3N0ZXAvanMvU3RlcC9TdGVwUGFnZS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvc3RlcC9qcy9TdGVwL1N0ZXBTZWN0aW9uLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvU3RlcFNlY3Rpb25QYWdlLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9zdGVwL2pzL1N0ZXAvU3RlcFNlY3Rpb25zTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0ZXBGYWN0b3J5fSBmcm9tICcuL2pzL1N0ZXAvU3RlcEZhY3RvcnknO1xuXG5pZighU2l0ZS5TdGVwKSB7XG5cdFNpdGUuU3RlcCA9IFN0ZXBGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xufSIsIi8qKlxuICogU2ltcGxlIGltYWdlIGxvYWRlciB0aGF0IGRldGVybWluZXMgd2hlbiBhbGwgaW1hZ2VzIGhhdmUgYmVlbiBsb2FkZWRcbiAqL1xuXG5leHBvcnQgbGV0IEltYWdlTG9hZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgbG9hZGluZyA9IDA7XG4gICAgbGV0IGZ1bmMgPSBudWxsO1xuXG4gICAgdGhpcy5sb2FkID0gZnVuY3Rpb24oc3JjKSB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgbG9hZGVkT25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIGxvYWRlZE9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkZWRPbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRpbmcrKztcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkZWRPbmUoKSB7XG4gICAgICAgIGxvYWRpbmctLTtcblxuICAgICAgICBpZihsb2FkaW5nID09PSAwICYmIGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9hZGVkID0gZnVuY3Rpb24oX2Z1bmMpIHtcbiAgICAgICAgaWYobG9hZGluZyA9PT0gMCkge1xuICAgICAgICAgICAgX2Z1bmMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmMgPSBfZnVuYztcbiAgICB9XG59XG4iLCIvKipcbiAqIEBmaWxlXG4gKiBQb3B1cCBtZW51IGl0ZW1zLlxuICovXG5cblxuXG5cbmV4cG9ydCBsZXQgUG9wdXAgPSBmdW5jdGlvbihzZWwsIGRhdGEpIHtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBcdGluc3RhbGwoZWxlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbChlbGVtZW50KSB7XG4gICAgXHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcbiAgICBcdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuICAgIFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICBcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgXHRzcGFuLmlubmVyVGV4dCA9IGpzb24udGl0bGU7XG4gICAgXHRhLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBcdGltZy5zcmMgPSBqc29uLmltZztcbiAgICBcdGEuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIFx0YS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQgICAgaWYgKCEgd2luZG93LmZvY3VzKXtcblx0XHQgICAgXHRyZXR1cm47XG5cdFx0ICAgIH1cblxuXHRcdCAgICB3aW5kb3cub3Blbihqc29uLmxpbmssIGpzb24udGl0bGUsICd3aWR0aD0nICsganNvbi53aWR0aCArICcsIGhlaWdodD0nICsganNvbi5oZWlnaHQgKyAnLCBzY3JvbGxiYXJzPXllcycpO1xuXHQgICAgfVxuXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpO1xufVxuIiwiLyoqXG4gKiBAZmlsZVxuICogU3RlcCBwcm9ncmVzcyBpbmRpY2F0b3JcbiAqL1xuXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcblxuaW1wb3J0IHByb2dyZXNzTGVmdCBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3MtbGVmdC5wbmcnO1xuaW1wb3J0IHByb2dyZXNzUmlnaHQgZnJvbSAnLi4vLi4vaW1nL3Byb2dyZXNzLXJpZ2h0LnBuZyc7XG5pbXBvcnQgcHJvZ3Jlc3NTSSBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3Mtc2kucG5nJztcbmltcG9ydCBwcm9ncmVzc1NDIGZyb20gJy4uLy4uL2ltZy9wcm9ncmVzcy1zYy5wbmcnO1xuaW1wb3J0IHByb2dyZXNzVEkgZnJvbSAnLi4vLi4vaW1nL3Byb2dyZXNzLXRpLnBuZyc7XG5pbXBvcnQgcHJvZ3Jlc3NUQyBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3MtdGMucG5nJztcbmltcG9ydCBwcm9ncmVzc0N1ciBmcm9tICcuLi8uLi9pbWcvcHJvZ3Jlc3MtY3VyLnBuZyc7XG5cblxuZXhwb3J0IGxldCBQcm9ncmVzcyA9IGZ1bmN0aW9uKHNlbCwgZGF0YSkge1xuICAgIGNvbnN0IE5PVFZJU0lURUQgPSAnTic7XHQvLy88ICVTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXG4gICAgY29uc3QgVklTSVRFRCA9ICdWJztcdC8vLzwgJVNlY3Rpb24gaGFzIGJlZW4gdmlzaXRlZCwgYnV0IGlzIG5vdCB5ZXQgZG9uZVxuICAgIGNvbnN0IERPTkUgPSAnRCc7XHRcdC8vLzwgJVNlY3Rpb24gaXMgY29tcGxldGVkXG4gICAgY29uc3QgU0VDVElPTiA9ICdTJzsgICAgLy8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcmVndWxhciBzZWN0aW9uXG5cbiAgICBjb25zdCBUQVNLID0gJ1QnO1x0XHQvLy88IEluZGljYXRlcyB0aGlzIHNlY3Rpb24gaXMgYSB0YXNrXG4gICAgY29uc3QgUVVJWiA9ICdRJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcXVpelxuICAgIGNvbnN0IFZJREVPID0gJ1YnO1x0XHQvLy88IEluZGljYXRlcyB0aGlzIHNlY3Rpb24gaXMgYSB2aWRlb1xuXG4gICAgY29uc3QgU1BBQ0lORyA9IDY7ICAgICAgLy8vPCBTcGFjaW5nIGJldHdlZW4gaW1hZ2VzXG5cbiAgICBsZXQgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKCk7XG4gICAgbGV0IGxlZnQgPSBsb2FkZXIubG9hZChwcm9ncmVzc0xlZnQpO1xuICAgIGxldCByaWdodCA9IGxvYWRlci5sb2FkKHByb2dyZXNzUmlnaHQpO1xuICAgIGxldCBzaSA9IGxvYWRlci5sb2FkKHByb2dyZXNzU0kpO1xuICAgIGxldCBzYyA9IGxvYWRlci5sb2FkKHByb2dyZXNzU0MpO1xuICAgIGxldCB0aSA9IGxvYWRlci5sb2FkKHByb2dyZXNzVEkpO1xuICAgIGxldCB0YyA9IGxvYWRlci5sb2FkKHByb2dyZXNzVEMpO1xuICAgIGxldCBjdXIgPSBsb2FkZXIubG9hZChwcm9ncmVzc0N1cik7XG5cbiAgICBsZXQgb3ZlclggPSBudWxsO1xuXG4gICAgbG9hZGVyLmxvYWRlZCgoKSA9PiB7XG4gICAgICAgIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpID0gZWxzW2ldO1xuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0NBTlZBUycpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyNTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGxlZnQud2lkdGggKyByaWdodC53aWR0aCArIFNQQUNJTkcgKiBkYXRhLnNlY3Rpb25zLmxlbmd0aDtcblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDU7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShsZWZ0LCB4LCB5KTtcbiAgICAgICAgICAgIHggKz0gbGVmdC53aWR0aDtcbiAgICAgICAgICAgIGxldCBjdXJYID0gMDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSBkYXRhLnNlY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBpbWc7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IHNlY3Rpb24uc3RhdHVzID09PSBET05FID8gdGMgOiB0aTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBzZWN0aW9uLnN0YXR1cyA9PT0gRE9ORSA/IHNjIDogc2k7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbi50YWcgPT09IGRhdGEuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJYID0geCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCB4LCB5KTtcbiAgICAgICAgICAgICAgICB4ICs9IFNQQUNJTkc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGN1ciwgY3VyWCwgeSk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHJpZ2h0LCB4LCB5KTtcbiAgICAgICAgICAgIHggKz0gcmlnaHQud2lkdGg7XG5cbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVyWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5yaWdodCA9IChsaS5vZmZzZXRXaWR0aCAtIG92ZXJYIC0gMTApICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIGxldCBzID0gKG92ZXJYIC0gbGVmdC53aWR0aCkgLyBTUEFDSU5HO1xuICAgICAgICAgICAgICAgIGlmKHMgPCAwIHx8IHMgPj0gZGF0YS5zZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZGF0YS5zZWN0aW9uc1tNYXRoLmZsb29yKHMpXS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIG92ZXJYID0gZXZlbnQub2Zmc2V0WDtcbiAgICAgICAgICAgICAgICBsZXQgcyA9IChvdmVyWCAtIGxlZnQud2lkdGgpIC8gU1BBQ0lORztcbiAgICAgICAgICAgICAgICBpZihzID49IDAgJiYgcyA8IGRhdGEuc2VjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRhdGEuc2VjdGlvbnNbTWF0aC5mbG9vcihzKV0udXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgb3ZlclggPSBudWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cbiIsImltcG9ydCB7U3RlcFNlY3Rpb25QYWdlfSBmcm9tICcuL1N0ZXBTZWN0aW9uUGFnZS5qcyc7XG5pbXBvcnQge1N0ZXBQYWdlfSBmcm9tICcuL1N0ZXBQYWdlLmpzJztcblxuZXhwb3J0IGxldCBTdGVwRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xufVxuXG5TdGVwRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XG4gICAgbGV0IFN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICB9XG5cbiAgICBzaXRlLnJlYWR5KCgpID0+IHtcblxuICAgICAgICBsZXQgZW47XG4gICAgICAgIGlmKCAoZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtc3RlcCcpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3IFN0ZXBTZWN0aW9uUGFnZShKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXN0ZXAtcGFnZScpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3IFN0ZXBQYWdlKEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIFN0ZXA7XG59IiwiLyoqXG4gKiBTdGVwIHBhZ2UgbmF2aWdhdGlvbiBmZWF0dXJlc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBsZXQgU3RlcE5hdiA9IGZ1bmN0aW9uKHNlbCwgZGF0YSkge1xuICAgIGxldCBzZWN0aW9uVGFnID0gZGF0YS5jdXJyZW50O1xuICAgIGxldCBhc3NpZ25UYWcgPSBkYXRhLnRhZztcblxuXHRjb25zdCBTZWN0aW9uU3RhdHVzID0gU2l0ZS5zaXRlLlNlY3Rpb25TdGF0dXM7XG5cblxuXHRsZXQgaW5zdGFsbCA9IChuYXYpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuYXYucXVlcnlTZWxlY3RvcignLmNsLXN0ZXAtbWFyay1jb21wbGV0ZWQnKTtcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZmxhZyhTZWN0aW9uU3RhdHVzLkRPTkUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQgPSBuYXYucXVlcnlTZWxlY3RvcignLmNsLXN0ZXAtY2xlYXItY29tcGxldGVkJyk7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGZsYWcoU2VjdGlvblN0YXR1cy5WSVNJVEVELCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5jbC1zdGVwLWNvbXBsZXRlZC1uZXh0Jyk7XG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZmxhZyhTZWN0aW9uU3RhdHVzLkRPTkUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZmxhZyA9IChzdGF0dXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7c3RhdHVzOiBzdGF0dXN9O1xuICAgICAgICBTaXRlLmFwaS5wb3N0KGAvYXBpL3N0ZXAvc3RhdHVzLyR7YXNzaWduVGFnfS8ke3NlY3Rpb25UYWd9YCwgcGFyYW1zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbiAgICBmb3IobGV0IGk9MDsgaTxlbHMubGVuZ3RoOyAgaSsrKSB7XG4gICAgICAgIGluc3RhbGwoZWxzW2ldKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBmaWxlXG4gKiBKYXZhc2NyaXB0IG9iamVjdCBmb3IgbWFuYWdtZW50IG9mIHRoZSBtYWluIHN0ZXAgcGFnZS5cbiAqL1xuXG5pbXBvcnQge1N0ZXBTZWN0aW9uc0xpc3R9IGZyb20gJy4vU3RlcFNlY3Rpb25zTGlzdC5qcyc7XG5cbmV4cG9ydCBsZXQgU3RlcFBhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gSXMgdGhlcmUgYW55IHF1aXogZGF0YT9cbiAgICBsZXQgZW4sIHF1aXpSZXN1bHRzID0gbnVsbDtcbiAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXF1aXotcmVzdWx0cycpKSAhPT0gbnVsbCkge1xuICAgICAgICBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpO1xuICAgIH1cblxuICAgIG5ldyBTdGVwU2VjdGlvbnNMaXN0KCdkaXYuY2wtc3RlcC1zZWN0aW9ucycsIGRhdGEsIHF1aXpSZXN1bHRzKTtcbn0iLCIvKipcbiAqIEBmaWxlXG4gKiBUaGUgZGVmaW5pdGlvbiBvZiBhIHN0ZXAgc2VjdGlvblxuICovXG5cbmV4cG9ydCBsZXQgU3RlcFNlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxufVxuXG4vLyBNdXN0IG1hdGNoIHZhbHVlcyBpbiBTdGVwU2VjdGlvbi5waHBcblN0ZXBTZWN0aW9uLlNFQ1RJT04gPSAnUyc7ICAgIC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHJlZ3VsYXIgc2VjdGlvblxuU3RlcFNlY3Rpb24uVEFTSyA9ICdUJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgdGFza1xuU3RlcFNlY3Rpb24uUVVJWiA9ICdRJztcdFx0Ly8vPCBJbmRpY2F0ZXMgdGhpcyBzZWN0aW9uIGlzIGEgcXVpelxuU3RlcFNlY3Rpb24uVklERU8gPSAnVic7XHRcdC8vLzwgSW5kaWNhdGVzIHRoaXMgc2VjdGlvbiBpcyBhIHZpZGVvXG5cblN0ZXBTZWN0aW9uLmZsYWcgPSBmdW5jdGlvbihhc3NpZ25UYWcsIHNlY3Rpb25UYWcsIHN0YXR1cywgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyYW1zID0ge3N0YXR1czogc3RhdHVzfTtcbiAgICBTaXRlLmFwaS5wb3N0KGAvYXBpL3N0ZXAvc3RhdHVzLyR7YXNzaWduVGFnfS8ke3NlY3Rpb25UYWd9YCwgcGFyYW1zKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICB9KTtcbn0iLCIvKipcbiAqIEBmaWxlXG4gKiBKYXZhc2NyaXB0IG9iamVjdCBmb3IgbWFuYWdlbWVudCBvZiBhIHN0ZXAgc2VjdGlvbiBwYWdlXG4gKi9cblxuaW1wb3J0IHtQcm9ncmVzc30gZnJvbSAnLi9Qcm9ncmVzcyc7XG5pbXBvcnQge1N0aWNreU5hdn0gZnJvbSAnc2l0ZS1jbC9qcy9VdGlsL1N0aWNreU5hdic7XG5pbXBvcnQge1N0ZXBOYXZ9IGZyb20gJy4vU3RlcE5hdic7XG5pbXBvcnQge1BvcHVwfSBmcm9tICcuL1BvcHVwJztcblxuZXhwb3J0IGxldCBTdGVwU2VjdGlvblBhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgbmV3IFBvcHVwKCdzcGFuLmNsLXBvcHVwLW1lbnUtaXRlbScsIGRhdGEpO1xuICAgIG5ldyBQcm9ncmVzcygnbGkuY2wtc3RlcC1wcm9ncmVzcycsIGRhdGEpO1xuICAgIG5ldyBTdGlja3lOYXYoJ25hdi5jbC1zdGVwbmF2Jyk7XG4gICAgbmV3IFN0ZXBOYXYoJ25hdi5jbC1zdGVwbmF2JywgZGF0YSk7XG59XG5cblxuIiwiaW1wb3J0IHtTdGVwU2VjdGlvbn0gZnJvbSAnLi9TdGVwU2VjdGlvbi5qcyc7XG5pbXBvcnQge1RpbWVGb3JtYXR0ZXJ9IGZyb20gJ3NpdGUtY2wvanMvVGltZUZvcm1hdHRlcic7XG5pbXBvcnQge1NlY3Rpb25TdGF0dXN9IGZyb20gJ2NvdXJzZS1jbC9qcy9TZWN0aW9uU3RhdHVzJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcblxuZXhwb3J0IGxldCBTdGVwU2VjdGlvbnNMaXN0ID0gZnVuY3Rpb24oc2VsLCBkYXRhLCBxdWl6UmVzdWx0cykge1xuXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbiAgICAgICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPjxhIGlkPVwic2VjdGlvbnNcIj4ke2RhdGEuc2VjdGlvbnNUaXRsZX08L2E+PC9oMj5gO1xuXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gZGF0YS5zZWN0aW9uc0JlZ2luO1xuXG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMudGFibGUoKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuICAgICAgICBwLmlubmVySFRNTCA9IGBUaGlzIGFzc2lnbm1lbnQgaXMgYWxzbyBhdmFpbGFibGUgYXMgYSBcbjxhIGhyZWY9XCIke1NpdGUucm9vdCArICcvY2wvc3RlcC9hbGwvJyArIGRhdGEudGFnfVwiIHRpdGxlPVwiU2luZ2xlIFBhZ2UgVmlld1wiPnNpbmdsZSBwYWdlPC9hPi5gO1xuXG4gICAgICAgIGlmKGRhdGEuZ3JhZGVMaW5rICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHQgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcblx0ICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2dyYWRlJyk7XG5cdCAgICAgICAgcC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJncmFkZVwiPjxpbWcgc3JjPVwiJHtTaXRlLnJvb3R9L3ZlbmRvci9jbC9ncmFkZXMvaW1nL2dyYWRpbmcucG5nXCIgd2lkdGg9XCIxMTRcIiBoZWlnaHQ9XCI1MFwiIGFsdD1cIkdyYWRpbmcgSWNvblwiPlxuXHRcdCAgICA8YSBjbGFzcz1cImNsLWF1dG9iYWNrXCIgaHJlZj1cIiR7U2l0ZS5yb290fSR7ZGF0YS5ncmFkZUxpbmt9LyR7ZGF0YS50YWd9XCI+QXNzaWdubWVudCBHcmFkaW5nIFBhZ2U8L2E+PC9wPmA7XG4gICAgICAgIH1cblxuXHQgICAgY29uc3QgZW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbmREaXYpO1xuICAgICAgICBlbmREaXYuaW5uZXJIVE1MID0gZGF0YS5zZWN0aW9uc0VuZDtcbiAgICB9XG5cbiAgICB0aGlzLnRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJyk7XG4gICAgICAgIHRhYmxlLnRpdGxlID0gXCJUYWJsZSBvZiBTdGVwIFNlY3Rpb25zXCI7XG5cbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVFInKTtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSAyO1xuICAgICAgICBpZihxdWl6UmVzdWx0cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdHIuaW5uZXJIVE1MID0gYDx0aD4mbmJzcDs8L3RoPjx0aD5TZWN0aW9uPC90aD48dGg+Jm5ic3A7PC90aD5gO1xuICAgICAgICAgICAgY29sdW1ucyA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ci5pbm5lckhUTUwgPSBgPHRoPiZuYnNwOzwvdGg+PHRoPlNlY3Rpb248L3RoPmA7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xuXG4gICAgICAgIGZvcihsZXQgc2VjdGlvbiBvZiBkYXRhLnNlY3Rpb25zKSB7XG4gICAgICAgICAgICB0ciA9IHRoaXMudGFza1JvdyhkYXRhLCBzZWN0aW9uKTtcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcblxuICAgICAgICAgICAgaWYoc2VjdGlvbi5jaGVja3BvaW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVFInKTtcbiAgICAgICAgICAgICAgICB0ci5jbGFzc0xpc3QuYWRkKCdjbC1jaGVja3BvaW50JylcbiAgICAgICAgICAgICAgICB0ci5pbm5lckhUTUwgPSAnPHRkIGNvbHNwYW49XCInICsgY29sdW1ucyArICdcIj5DSEVDS1BPSU5UPC90ZD4nXG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cblxuICAgIHRoaXMudGFza1JvdyA9IGZ1bmN0aW9uKGRhdGEsIHNlY3Rpb24pIHtcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVFInKTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBDaGVjayBtYXJrIGNvbHVtblxuICAgICAgICAvL1xuICAgICAgICBsZXQgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEQnKTtcbiAgICAgICAgdGQxLmNsYXNzTGlzdC5hZGQoJ3N0ZXBjaGVjaycpO1xuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZDEpO1xuXG4gICAgICAgIGxldCByb290ID0gU2l0ZS5yb290O1xuXG4gICAgICAgIGlmKHNlY3Rpb24uc3RhdHVzID09PSBTZWN0aW9uU3RhdHVzLkRPTkUpIHtcbiAgICAgICAgICAgIHRkMS5pbm5lckhUTUwgPSBgPGltZyBhbHQ9XCJDaGVjayBtYXJrXCIgd2lkdGg9XCIxOVwiIGhlaWdodD1cIjE0XCIgc3JjPVwiJHtyb290fS92ZW5kb3IvY2wvc2l0ZS9pbWcvY2hlY2sxNi5wbmdcIj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQxLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NsLWRpYWxvZycpO1xuXG5cbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gYDxkaXYgY2xhc3M9XCJ0YWJ1bGFyIHNtYWxsXCI+XG48cD48c3BhbiBjbGFzcz1cImxhYmVsXCI+U2VjdGlvbjogPC9zcGFuPjxzcGFuPiR7c2VjdGlvbi5uYW1lfTwvc3Bhbj48L3A+XG48cD48c3BhbiBjbGFzcz1cImxhYmVsXCI+U3RhdHVzOiA8L3NwYW4+PHNwYW4+JHtTZWN0aW9uU3RhdHVzLnRvU3RyaW5nKHNlY3Rpb24uc3RhdHVzKX08L3NwYW4+PC9wPmA7XG5cbiAgICAgICAgICAgIGlmKHNlY3Rpb24uc3RhdHVzICE9PSBudWxsICYmIHNlY3Rpb24uc3RhdHVzICE9PSBTZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9IGBcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5GaXJzdCBMb29rOiA8L3NwYW4+PHNwYW4+JHtUaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzZWN0aW9uLmxvb2spfTwvc3Bhbj48L3A+XG48cD48c3BhbiBjbGFzcz1cImxhYmVsXCI+TGFzdCBBY2Nlc3M6IDwvc3Bhbj48c3Bhbj4ke1RpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHNlY3Rpb24uYWNjZXNzKX08L3NwYW4+PC9wPmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRlbnQgKz0gYDwvZGl2PmA7XG5cblxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGxldCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBkaXYsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTZWN0aW9uIFN0YXR1cydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihzZWN0aW9uLnN0YXR1cyA9PT0gU2VjdGlvblN0YXR1cy5ET05FKSB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NsZWFyIFN0YXR1cyc7XG4gICAgICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN0ZXBTZWN0aW9uLmZsYWcoZGF0YS50YWcsIHNlY3Rpb24udGFnLCBTZWN0aW9uU3RhdHVzLlZJU0lURUQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24uc3RhdHVzID0gU2VjdGlvblN0YXR1cy5WSVNJVEVEO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGQxLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIGxpbmsgaXRzZWxmXG4gICAgICAgIC8vXG4gICAgICAgIGxldCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURCcpO1xuICAgICAgICB0ZDIuY2xhc3NMaXN0LmFkZCgnc3RlcG5hbWUnKTtcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcblxuICAgICAgICBjb25zdCBpY29uID0gZGF0YS5pY29uc1tzZWN0aW9uLnR5cGVdO1xuICAgICAgICBjb25zdCBpbWcgPSBgPGltZyBhbHQ9XCIke2ljb24uYWx0fVwiIHNyYz1cIiR7aWNvbi5maWxlfVwiPmA7XG5cbiAgICAgICAgdGQyLmlubmVySFRNTCA9IGAke2ltZ30gPGEgaHJlZj1cIiR7c2VjdGlvbi51cmx9XCIgdGl0bGU9XCIke3NlY3Rpb24ubmFtZX1cIiBjbGFzcz1cInN0ZXBsaW5rXCI+JHtzZWN0aW9uLm5hbWV9PC9hPmA7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gUXVpeiBzdGF0dXNcbiAgICAgICAgLy9cbiAgICAgICAgaWYocXVpelJlc3VsdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURCcpO1xuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQzKTtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHF1aXpSZXN1bHRzW3NlY3Rpb24udGFnXTtcbiAgICAgICAgICAgIGlmKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGQzLmlubmVySFRNTCA9IHJlc3VsdC5wb2ludHMgKyAnLycgKyByZXN1bHQubWF4cG9pbnRzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZDMuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRyO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnQoKTtcbn1cblxuIl0sIm5hbWVzIjpbIlN0ZXBGYWN0b3J5IiwiU2l0ZSIsIlN0ZXAiLCJjcmVhdGUiLCJJbWFnZUxvYWRlciIsImxvYWRpbmciLCJmdW5jIiwibG9hZCIsInNyYyIsImltZyIsIkltYWdlIiwib25sb2FkIiwibG9hZGVkT25lIiwib25lcnJvciIsIm9uYWJvcnQiLCJsb2FkZWQiLCJfZnVuYyIsIlBvcHVwIiwic2VsIiwiZGF0YSIsImluaXRpYWxpemUiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJpbnN0YWxsIiwiZWxlbWVudCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsImEiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzcGFuIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImZvY3VzIiwib3BlbiIsImxpbmsiLCJ3aWR0aCIsImhlaWdodCIsInByb2dyZXNzTGVmdCIsInByb2dyZXNzUmlnaHQiLCJwcm9ncmVzc1NJIiwicHJvZ3Jlc3NTQyIsInByb2dyZXNzVEkiLCJwcm9ncmVzc1RDIiwicHJvZ3Jlc3NDdXIiLCJQcm9ncmVzcyIsIk5PVFZJU0lURUQiLCJWSVNJVEVEIiwiRE9ORSIsIlNFQ1RJT04iLCJUQVNLIiwiUVVJWiIsIlZJREVPIiwiU1BBQ0lORyIsImxvYWRlciIsImxlZnQiLCJyaWdodCIsInNpIiwic2MiLCJ0aSIsInRjIiwiY3VyIiwib3ZlclgiLCJlbHMiLCJfbG9vcCIsImxpIiwiY2FudmFzIiwic2VjdGlvbnMiLCJkaXYiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIngiLCJ5IiwiZHJhd0ltYWdlIiwiY3VyWCIsInNlY3Rpb24iLCJ0eXBlIiwic3RhdHVzIiwidGFnIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZzZXRYIiwib2Zmc2V0V2lkdGgiLCJzIiwiTWF0aCIsImZsb29yIiwibmFtZSIsImxvY2F0aW9uIiwidXJsIiwiU3RlcFNlY3Rpb25QYWdlIiwiU3RlcFBhZ2UiLCJzaXRlIiwicmVhZHkiLCJlbiIsImdldEVsZW1lbnRCeUlkIiwiU3RlcE5hdiIsIl90aGlzMiIsInNlY3Rpb25UYWciLCJhc3NpZ25UYWciLCJTZWN0aW9uU3RhdHVzIiwibmF2IiwicXVlcnlTZWxlY3RvciIsImZsYWciLCJfdGhpcyIsImhyZWYiLCJjYWxsYmFjayIsInBhcmFtcyIsImFwaSIsInBvc3QiLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYXNFcnJvciIsInRvYXN0IiwiZXJyb3IiLCJTdGVwU2VjdGlvbnNMaXN0IiwicXVpelJlc3VsdHMiLCJTdGVwU2VjdGlvbiIsIlN0aWNreU5hdiIsIlRpbWVGb3JtYXR0ZXIiLCJEaWFsb2ciLCJzdGFydCIsInNlY3Rpb25zVGl0bGUiLCJzZWN0aW9uc0JlZ2luIiwidGFibGUiLCJwIiwiY2xhc3NMaXN0IiwiYWRkIiwicm9vdCIsImdyYWRlTGluayIsInVuZGVmaW5lZCIsImVuZERpdiIsInNlY3Rpb25zRW5kIiwidHIiLCJjb2x1bW5zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIm4iLCJkb25lIiwidmFsdWUiLCJ0YXNrUm93IiwiY2hlY2twb2ludCIsImVyciIsImUiLCJmIiwidGQxIiwiY29udGVudCIsInRvU3RyaW5nIiwicmVsYXRpdmVVTklYIiwibG9vayIsImFjY2VzcyIsImRpYWxvZyIsImJ1dHRvbiIsImNsb3NlIiwidGQyIiwiaWNvbiIsImljb25zIiwiYWx0IiwiZmlsZSIsInRkMyIsInJlc3VsdCIsInBvaW50cyIsIm1heHBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=