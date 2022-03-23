/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  var initHeaderFixed = function initHeaderFixed() {
    var getCurrentScroll = function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    },
        shrinkHeader = 5;

    var scroll = getCurrentScroll();
    scroll >= shrinkHeader ? document.querySelector('#header').classList.add('is-fixed') : document.querySelector('#header').classList.remove('is-fixed');
    window.addEventListener('scroll', function () {
      var scroll = getCurrentScroll();
      scroll >= shrinkHeader ? document.querySelector('#header').classList.add('is-fixed') : document.querySelector('#header').classList.remove('is-fixed');
    });
  };

  var smoothScrollAnchor = function smoothScrollAnchor() {
    var btn = document.querySelector("[hamburger-js]"),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]"),
        overlayNode = document.querySelector('#overlay');
    document.querySelectorAll('.header__nav a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (ev) {
        ev.preventDefault();
        document.querySelectorAll('.header__nav a').forEach(function (val, idx) {
          val.classList.remove('is-active');
        });
        ev.currentTarget.classList.add('is-active');

        if (ev.currentTarget.closest('.header')) {
          document.querySelectorAll('.header__nav a[href="' + this.getAttribute('href') + '"]')[1].classList.add('is-active');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });

        if (ev.currentTarget.closest('.menu')) {
          btn.classList.remove("is-active");
          mobileContainer.classList.remove("is-open");
          mobileContainer.classList.add("is-animated");
          overlayNode.style.display = 'none';
          hideScrollContainer.forEach(function (val, idx) {
            val.classList.remove("is-hideScroll");
          });
          document.querySelectorAll('.header__nav a[href="' + this.getAttribute('href') + '"]')[0].classList.add('is-active');
          setTimeout(function () {
            mobileContainer.classList.remove("is-animated");
          }, 300);
        }
      });
    });
  };

  var floatingAnimation = function floatingAnimation() {
    function random(min, max) {
      return min + Math.random() * (max - min);
    }

    function randomFloat(element, positions, duration) {
      var tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
        delay: Math.random() * duration
      });

      for (var i = 0; i < positions; i++) {
        tl.to(element, duration, {
          x: random(xMin, xMax),
          y: random(yMin, yMax),
          ease: Sine.easeInOut
        });
      }

      return tl;
    }

    var xMin = -20,
        xMax = 20,
        yMin = -30,
        yMax = 30,
        positionsPerElement = 5,
        secondsPerIteration = 4,
        elements = $("[floating-node-js]");

    for (var i = 0; i < elements.length; i++) {
      randomFloat(elements[i], positionsPerElement, secondsPerIteration);
    }
  };

  var gaspAnimation = function gaspAnimation() {
    $(".main").mousemove(function (e) {
      parallaxIt(e, "#welcome", "#welcomeAnimationImg1", -5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg2", 5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg3", -5);
      parallaxIt(e, "#welcome", "#welcomeAnimationImg4", 5);
      parallaxIt(e, "#togetherAnimation", "#togetherAnimationImg4", -6);
      parallaxIt(e, "#togetherAnimation", "#togetherAnimationImg5", 10);
    });

    function parallaxIt(e, currentEl, target, movement) {
      var $this = $(currentEl);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
  };

  var customCursor = function customCursor() {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),
      init: function init() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        this.setupEventListeners();
        this.animateDotOutline();
      },
      setupEventListeners: function setupEventListeners() {
        var self = this; // Anchor hovering

        document.querySelectorAll('a').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        }); // Click events

        document.addEventListener('mousedown', function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
        document.addEventListener('mousemove', function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility(); // Position the dot

          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
        }); // Hide/show cursor

        document.addEventListener('mouseenter', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });
        document.addEventListener('mouseleave', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },
      animateDotOutline: function animateDotOutline() {
        var self = this;
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        requestAnimationFrame(this.animateDotOutline.bind(self));
      },
      toggleCursorSize: function toggleCursorSize() {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },
      toggleCursorVisibility: function toggleCursorVisibility() {
        var self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      }
    };
    cursor.init();
  };

  var hamburgerMenu = function hamburgerMenu() {
    var btn = document.querySelector("[hamburger-js]"),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]"),
        overlayNode = document.querySelector('#overlay');
    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;

      if (elem.classList.contains('is-active')) {
        elem.classList.remove("is-active");
        mobileContainer.classList.remove("is-open");
        mobileContainer.classList.add("is-animated");
        overlayNode.style.display = 'none';
        hideScrollContainer.forEach(function (val, idx) {
          val.classList.remove("is-hideScroll");
        });
        setTimeout(function () {
          mobileContainer.classList.remove("is-animated");
        }, 300);
      } else {
        elem.classList.add("is-active");
        mobileContainer.classList.add("is-open");
        overlayNode.style.display = 'block';
        hideScrollContainer.forEach(function (val, idx) {
          val.classList.add("is-hideScroll");
        });
      }
    });
  };

  var wowScrollAnimation = function wowScrollAnimation() {
    new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated'
    }).init();
  };

  initHeaderFixed();
  smoothScrollAnchor();
  floatingAnimation();
  gaspAnimation();
  customCursor();
  hamburgerMenu();
  wowScrollAnimation();
  var daysBox = document.querySelector(".days");
  var hrsBox = document.querySelector(".hrs");
  var minBox = document.querySelector(".min");
  var secBox = document.querySelector(".sec");
  var countDownDate = new Date("Mar 22, 2022 23:47:00").getTime(); // COUNT DOWN FUNCTION

  var x = setInterval(function () {
    // GET DATE
    var now = new Date().getTime(); // TIME BETWEEN NOW AND DATE

    var distance = countDownDate - now; // CALCULATION TIME

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    daysBox.innerHTML = days < 10 ? '0' + days + "<span>Days</span>" : days + "<span>Days</span>";
    hrsBox.innerHTML = hours < 10 ? '0' + hours + "<span>Hrs</span>" : hours + "<span>Hrs</span>";
    minBox.innerHTML = minutes < 10 ? '0' + minutes + "<span>Min</span>" : minutes + "<span>Min</span>";
    secBox.innerHTML = seconds < 10 ? '0' + seconds + "<span>Sec</span>" : seconds + "<span>Sec</span>"; // IF FINISH

    if (distance < 0) {
      clearInterval(x);
      document.querySelectorAll('.get__footer > div')[2].style.display = 'none';
      document.querySelector('.get__footer .c-btn').removeAttribute('disabled');
    }
  }, 1000);
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;