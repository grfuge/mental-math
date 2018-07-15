// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js\\views\\ElementsView.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Elements = exports.Elements = {
  question: document.querySelector('.question'),
  answer: document.querySelector('.answer'),
  clearnBtn: document.querySelector('.clear-btn'),
  operations: [document.querySelector('.checkbox-addition'), document.querySelector('.checkbox-subtraction'), document.querySelector('.checkbox-multiplication'), document.querySelector('.checkbox-division')],
  difficulty: [document.querySelector('.difficulty-easy'), document.querySelector('.difficulty-medium'), document.querySelector('.difficulty-hard')],
  score: {
    correct: document.querySelector('.score-correct'),
    incorrect: document.querySelector('.score-incorrect')
  }
};
},{}],"js\\models\\OperationsModel.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ElementsView = require('../views/ElementsView');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Operations = function () {
  function Operations() {
    _classCallCheck(this, Operations);

    this.operations = [];
    this.localStorage = JSON.parse(localStorage.getItem('operations'));
  }

  _createClass(Operations, [{
    key: 'getOperations',
    value: function getOperations() {
      if (this.localStorage !== null) this.operations = this.localStorage;
      _ElementsView.Elements.operations.forEach(function (operation) {
        operation.checked = false;
      });
      return this.operations;
    }
  }, {
    key: 'updateOperations',
    value: function updateOperations() {
      var _this = this;

      this.operations = [];
      _ElementsView.Elements.operations.forEach(function (operation) {
        if (operation.checked) _this.operations.push(operation.value);
      });
      if (this.operations.length !== 0) localStorage.setItem('operations', JSON.stringify(this.operations));
    }
  }]);

  return Operations;
}();

exports.default = Operations;
},{"../views/ElementsView":"js\\views\\ElementsView.js"}],"js\\views\\QuestionsView.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayQuestion = displayQuestion;

var _ElementsView = require('./ElementsView');

function displayQuestion(question) {
  _ElementsView.Elements.question.innerHTML = question;
}
},{"./ElementsView":"js\\views\\ElementsView.js"}],"js\\views\\DifficultyView.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayDifficulty = displayDifficulty;

var _ElementsView = require('./ElementsView');

function displayDifficulty(difficulty) {
  _ElementsView.Elements.difficulty.forEach(function (option) {
    if (option.value === difficulty) option.selected = true;
  });
}
},{"./ElementsView":"js\\views\\ElementsView.js"}],"js\\models\\DifficultyModel.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ElementsView = require('../views/ElementsView');

var _QuestionsView = require('../views/QuestionsView');

var _DifficultyView = require('../views/DifficultyView');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Difficulty = function () {
  function Difficulty(difficulty) {
    _classCallCheck(this, Difficulty);

    this.difficulty = difficulty;
  }

  _createClass(Difficulty, [{
    key: 'initDifficulty',
    value: function initDifficulty() {
      if (localStorage.getItem('difficulty') !== null) {
        this.difficulty = localStorage.getItem('difficulty');
        (0, _DifficultyView.displayDifficulty)(this.difficulty);
      }
    }
  }, {
    key: 'addDifficultyEvents',
    value: function addDifficultyEvents(question, operations) {
      var _this = this;

      document.querySelector('.difficulty').addEventListener('click', function (e) {
        var value = e.target.value;
        if (value !== _this.difficulty) (0, _QuestionsView.displayQuestion)(question.generateQuestion(operations, value));
        _this.getDifficulty();
      });
    }
  }, {
    key: 'getDifficulty',
    value: function getDifficulty() {
      var _this2 = this;

      _ElementsView.Elements.difficulty.forEach(function (selection) {
        if (selection.selected === true) _this2.difficulty = selection.value;
      });
      localStorage.setItem('difficulty', this.difficulty);
      return this.difficulty;
    }
  }]);

  return Difficulty;
}();

exports.default = Difficulty;
},{"../views/ElementsView":"js\\views\\ElementsView.js","../views/QuestionsView":"js\\views\\QuestionsView.js","../views/DifficultyView":"js\\views\\DifficultyView.js"}],"js\\models\\QuestionsModel.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function () {
  function Question(question, answer) {
    _classCallCheck(this, Question);

    this.question = question;
    this.answer = answer;
  }

  _createClass(Question, [{
    key: 'generateQuestion',
    value: function generateQuestion(operations, difficulty) {
      function randomArrayItem(array) {
        return array[Math.floor(Math.random() * array.length)];
      }

      var operation = randomArrayItem(operations);
      var limit = void 0;

      if (difficulty === 'easy') {
        if (operation == 2) limit = 12;else if (operation == 3) limit = 6;else limit = 12;
      } else if (difficulty === 'medium') {
        if (operation == 2) limit = 24;else if (operation == 3) limit = 12;else limit = 44;
      } else if (difficulty === 'hard') {
        if (operation == 2) limit = 64;else if (operation == 3) limit = 24;else limit = 128;
      }

      function randomNumber(num) {
        num = Math.ceil(Math.random() * limit);
        return num;
      }

      var a = void 0;
      var b = randomNumber(b);
      if (operation == 3) a = randomNumber(a) * b;else a = randomNumber(a);

      if (operation == 0) {
        this.question = a + ' + ' + b + ' =';
        this.answer = a + b;
      } else if (operation == 1) {
        this.question = a + ' - ' + b + ' =';
        this.answer = a - b;
      } else if (operation == 2) {
        this.question = a + ' &#215; ' + b + ' =';
        this.answer = a * b;
      } else if (operation == 3) {
        this.question = a + ' &#247; ' + b + ' =';
        this.answer = a / b;
      }

      return this.question;
    }
  }]);

  return Question;
}();

exports.default = Question;
},{}],"js\\views\\OperationsView.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationsView = undefined;

var _ElementsView = require('./ElementsView');

var OperationsView = exports.OperationsView = {
  updateSelection: function updateSelection(operations) {
    operations.forEach(function (operation) {
      _ElementsView.Elements.operations[parseInt(operation)].checked = true;
    });
  }
};
},{"./ElementsView":"js\\views\\ElementsView.js"}],"js\\controllers\\OperationsController.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlOperations = controlOperations;

var _ElementsView = require('../views/ElementsView');

var _OperationsView = require('../views/OperationsView');

function controlOperations(operations) {

  _OperationsView.OperationsView.updateSelection(operations.getOperations());

  _ElementsView.Elements.operations.forEach(function (operation) {
    operation.addEventListener('click', function () {
      operations.updateOperations();
    });
  });
}
},{"../views/ElementsView":"js\\views\\ElementsView.js","../views/OperationsView":"js\\views\\OperationsView.js"}],"js\\controllers\\InputController.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInput = getInput;

var _ElementsView = require('../views/ElementsView');

var _QuestionsView = require('../views/QuestionsView');

function getInput(question, operations, difficulty, score) {
  _ElementsView.Elements.answer.addEventListener('keypress', function (e) {
    if (e.keyCode == 13 && _ElementsView.Elements.answer.value.length > 0) {
      if (_ElementsView.Elements.answer.value == question.answer) score.correct += 1;else score.incorrect += 1;
      score.saveScore();

      question.generateQuestion(operations, difficulty);
      (0, _QuestionsView.displayQuestion)(question.question);

      _ElementsView.Elements.answer.value = null;
    }
  });

  _ElementsView.Elements.clearnBtn.addEventListener('click', function () {
    score.resetScore();
  });
}
},{"../views/ElementsView":"js\\views\\ElementsView.js","../views/QuestionsView":"js\\views\\QuestionsView.js"}],"js\\views\\ScoreView.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayScore = displayScore;

var _ElementsView = require('./ElementsView');

function displayScore(correct, incorrect) {
  _ElementsView.Elements.score.correct.innerHTML = correct;
  _ElementsView.Elements.score.incorrect.innerHTML = incorrect;
}
},{"./ElementsView":"js\\views\\ElementsView.js"}],"js\\models\\ScoreModel.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ScoreView = require('../views/ScoreView');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(correct, incorrect) {
    _classCallCheck(this, Score);

    this.correct = correct;
    this.incorrect = incorrect;
  }

  _createClass(Score, [{
    key: 'resetScore',
    value: function resetScore() {
      this.correct = 0;
      this.incorrect = 0;
      this.saveScore();
    }
  }, {
    key: 'loadScore',
    value: function loadScore() {
      if (localStorage.getItem('score') !== null) {
        var score = JSON.parse(localStorage.getItem('score'));
        this.correct = score.correct;
        this.incorrect = score.incorrect;
      } else {
        this.correct = 0;
        this.incorrect = 0;
      }
      (0, _ScoreView.displayScore)(this.correct, this.incorrect);
    }
  }, {
    key: 'saveScore',
    value: function saveScore() {
      localStorage.setItem('score', JSON.stringify(this));
      (0, _ScoreView.displayScore)(this.correct, this.incorrect);
    }
  }]);

  return Score;
}();

exports.default = Score;
},{"../views/ScoreView":"js\\views\\ScoreView.js"}],"js\\controllers\\AppController.js":[function(require,module,exports) {
'use strict';

var _OperationsModel = require('../models/OperationsModel');

var _OperationsModel2 = _interopRequireDefault(_OperationsModel);

var _DifficultyModel = require('../models/DifficultyModel');

var _DifficultyModel2 = _interopRequireDefault(_DifficultyModel);

var _QuestionsModel = require('../models/QuestionsModel');

var _QuestionsModel2 = _interopRequireDefault(_QuestionsModel);

var _OperationsController = require('./OperationsController');

var _QuestionsView = require('../views/QuestionsView');

var _InputController = require('./InputController');

var _ScoreModel = require('../models/ScoreModel');

var _ScoreModel2 = _interopRequireDefault(_ScoreModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  // Get and display math operations
  var operations = new _OperationsModel2.default();
  (0, _OperationsController.controlOperations)(operations);

  // Get difficulty
  var difficulty = new _DifficultyModel2.default();
  difficulty.initDifficulty();
  difficulty.getDifficulty();

  // Generate and display question based on operations and difficulty
  var question = new _QuestionsModel2.default();
  question.generateQuestion(operations.operations, difficulty.difficulty);
  (0, _QuestionsView.displayQuestion)(question.question);

  // Update question based on difficulty
  difficulty.addDifficultyEvents(question, operations.operations);

  // Get input
  var score = new _ScoreModel2.default();
  score.loadScore();
  (0, _InputController.getInput)(question, operations.operations, difficulty.difficulty, score);
})();
},{"../models/OperationsModel":"js\\models\\OperationsModel.js","../models/DifficultyModel":"js\\models\\DifficultyModel.js","../models/QuestionsModel":"js\\models\\QuestionsModel.js","./OperationsController":"js\\controllers\\OperationsController.js","../views/QuestionsView":"js\\views\\QuestionsView.js","./InputController":"js\\controllers\\InputController.js","../models/ScoreModel":"js\\models\\ScoreModel.js"}],"C:\\Users\\JJ\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '12070' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\JJ\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","js\\controllers\\AppController.js"], null)
//# sourceMappingURL=/AppController.e87367cb.map