"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ManageCarriers = function ManageCarriers(_ref) {
  var ui = _ref.ui,
      api = _ref.api;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      carriers = _useState2[0],
      setCarriers = _useState2[1];

  (0, _react.useEffect)(function () {
    api.collectCarriers( // onReturn
    function (carriers) {
      setCarriers(carriers);
    });
  }, [api]);
  return _react["default"].createElement(ui.layout, null, carriers === null ? _react["default"].createElement(_ui.Container, null, _react["default"].createElement(_ui.LinePlaceholder, null), _react["default"].createElement(_ui.LinePlaceholder, {
    margin: {
      top: 2
    }
  })) : _react["default"].createElement(_ui.Container, null, _react["default"].createElement(_ui.Container, {
    flow: "row"
  }, _react["default"].createElement(_ui.Text, {
    width: 300
  }, "Tipo"), _react["default"].createElement(_ui.Text, {
    width: 100
  }, "Pais"), _react["default"].createElement(_ui.Text, {
    width: 100
  }, "Mcc"), _react["default"].createElement(_ui.Text, {
    width: 100
  }, "Mnc"), _react["default"].createElement(_ui.Text, {
    width: 300
  }, "Nombres")), carriers.map(function (carrier) {
    return _react["default"].createElement(ManageCarrier, {
      key: carrier.id,
      api: {
        typifyCarrier: api.typifyCarrier
      },
      data: carrier
    });
  })));
};

ManageCarriers.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    collectCarriers: _propTypes["default"]
  }).isRequired
};

var ManageCarrier = function ManageCarrier(_ref2) {
  var api = _ref2.api,
      data = _ref2.data,
      props = _objectWithoutProperties(_ref2, ["api", "data"]);

  return _react["default"].createElement(_ui.Container, _extends({
    flow: "row",
    margin: {
      top: 1
    }
  }, props), _react["default"].createElement(ManageType, {
    ui: {
      layout: function layout(_ref3) {
        var children = _ref3.children,
            props = _objectWithoutProperties(_ref3, ["children"]);

        return _react["default"].createElement(_ui.Container, _extends({
          width: 300
        }, props), children);
      }
    },
    api: {
      typifyCarrier: api.typifyCarrier
    },
    id: data.id,
    type: data.type
  }), _react["default"].createElement(_ui.Text, {
    width: 100
  }, data.country), _react["default"].createElement(_ui.Text, {
    width: 100
  }, data.mcc), _react["default"].createElement(_ui.Text, {
    width: 100
  }, data.mnc), _react["default"].createElement(ManageNames, {
    ui: {
      layout: function layout(_ref4) {
        var children = _ref4.children;
        return _react["default"].createElement(_ui.Container, {
          width: 600
        }, children);
      }
    },
    names: data.names
  }));
};

ManageCarrier.propTypes = {
  api: _propTypes["default"].shape({
    typifyCarrier: _propTypes["default"].func.isRequired
  }).isRequired,
  data: _propTypes["default"].shape({
    type: _propTypes["default"].string,
    country: _propTypes["default"].string.isRequired,
    mcc: _propTypes["default"].string.isRequired,
    mnc: _propTypes["default"].string.isRequired,
    names: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
  }).isRequired
};

var ManageType = function ManageType(_ref5) {
  var ui = _ref5.ui,
      api = _ref5.api,
      id = _ref5.id,
      initialType = _ref5.type;

  var _useState3 = (0, _react.useState)(initialType),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  return _react["default"].createElement(ui.layout, {
    flow: "row",
    align: {
      cross: "flex-start"
    }
  }, type && _react["default"].createElement(_ui.Container, {
    width: 50
  }, _react["default"].createElement(_ui.Text, null, type)), _react["default"].createElement(_ui.PrimaryButton, {
    margin: {
      left: type ? 1 : 0
    },
    onClick: function onClick() {
      setType("mobile");
      api.typifyCarrier(id, "mobile", // onReturn
      function () {});
    }
  }, _react["default"].createElement(_ui.Text, null, "Mobile")), _react["default"].createElement(_ui.DangerButton, {
    margin: {
      left: 1
    },
    onClick: function onClick() {
      setType("voip");
      api.typifyCarrier(id, "voip", // onReturn
      function () {});
    }
  }, _react["default"].createElement(_ui.Text, null, "Voip")));
};

var ManageNames = function ManageNames(_ref6) {
  var ui = _ref6.ui,
      names = _ref6.names;
  return _react["default"].createElement(ui.layout, null, names.map(function (name, i) {
    return _react["default"].createElement(_ui.Text, {
      key: name,
      margin: {
        top: i !== 0 ? 1 : 0
      }
    }, name);
  }));
};

ManageNames.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].object.isRequired
  }).isRequired,
  names: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};
var _default = ManageCarriers;
exports["default"] = _default;