(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _server = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(5);
	
	var _createMemoryHistory = __webpack_require__(6);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _aspnetPrerendering = __webpack_require__(7);
	
	var _routes = __webpack_require__(8);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _configureStore = __webpack_require__(19);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = (0, _aspnetPrerendering.createServerRenderer)(function (params) {
	    return new Promise(function (resolve, reject) {
	        // Match the incoming request against the list of client-side routes
	        (0, _reactRouter.match)({ routes: _routes2.default, location: params.location }, function (error, redirectLocation, renderProps) {
	            if (error) {
	                throw error;
	            }
	
	            // If there's a redirection, just send this information back to the host application
	            if (redirectLocation) {
	                resolve({ redirectUrl: redirectLocation.pathname });
	                return;
	            }
	
	            // If it didn't match any route, renderProps will be undefined
	            if (!renderProps) {
	                throw new Error('The location \'' + params.url + '\' doesn\'t match any route configured in react-router.');
	            }
	
	            // Build an instance of the application
	            var store = (0, _configureStore2.default)();
	            var app = React.createElement(
	                _reactRedux.Provider,
	                { store: store },
	                React.createElement(_reactRouter.RouterContext, renderProps)
	            );
	
	            // Perform an initial render that will cause any async tasks (e.g., data access) to begin
	            (0, _server.renderToString)(app);
	
	            // Once the tasks are done, we can perform the final render
	            // We also send the redux store state, so the client can continue execution where the server left off
	            params.domainTasks.then(function () {
	                resolve({
	                    html: (0, _server.renderToString)(app),
	                    globals: { initialReduxState: store.getState() }
	                });
	            }, reject); // Also propagate any errors back into the host application
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(250);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("./vendor");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(324);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(41);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(261);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(317);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(35);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _Layout = __webpack_require__(9);
	
	var _Home = __webpack_require__(11);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _FetchData = __webpack_require__(12);
	
	var _FetchData2 = _interopRequireDefault(_FetchData);
	
	var _Counter = __webpack_require__(18);
	
	var _Counter2 = _interopRequireDefault(_Counter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = React.createElement(
	    _reactRouter.Route,
	    { component: _Layout.Layout },
	    React.createElement(_reactRouter.Route, { path: '/', components: { body: _Home2.default } }),
	    React.createElement(_reactRouter.Route, { path: '/counter', components: { body: _Counter2.default } }),
	    React.createElement(
	        _reactRouter.Route,
	        { path: '/fetchdata', components: { body: _FetchData2.default } },
	        React.createElement(_reactRouter.Route, { path: '(:startDateIndex)' }),
	        ' '
	    )
	);
	
	// Enable Hot Module Replacement (HMR)
	
	if (false) {
	    module.hot.accept();
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Layout = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _NavMenu = __webpack_require__(10);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = exports.Layout = function (_React$Component) {
	    _inherits(Layout, _React$Component);
	
	    function Layout() {
	        _classCallCheck(this, Layout);
	
	        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	    }
	
	    _createClass(Layout, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'container-fluid' },
	                React.createElement(
	                    'div',
	                    { className: 'row' },
	                    React.createElement(
	                        'div',
	                        { className: 'col-sm-3' },
	                        React.createElement(_NavMenu.NavMenu, null)
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'col-sm-9' },
	                        this.props.body
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Layout;
	}(React.Component);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NavMenu = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavMenu = exports.NavMenu = function (_React$Component) {
	    _inherits(NavMenu, _React$Component);
	
	    function NavMenu() {
	        _classCallCheck(this, NavMenu);
	
	        return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).apply(this, arguments));
	    }
	
	    _createClass(NavMenu, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'main-nav' },
	                React.createElement(
	                    'div',
	                    { className: 'navbar navbar-inverse' },
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        React.createElement(
	                            'button',
	                            { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
	                            React.createElement(
	                                'span',
	                                { className: 'sr-only' },
	                                'Toggle navigation'
	                            ),
	                            React.createElement('span', { className: 'icon-bar' }),
	                            React.createElement('span', { className: 'icon-bar' }),
	                            React.createElement('span', { className: 'icon-bar' })
	                        ),
	                        React.createElement(
	                            _reactRouter.Link,
	                            { className: 'navbar-brand', to: '/' },
	                            'MagazineWebsite'
	                        )
	                    ),
	                    React.createElement('div', { className: 'clearfix' }),
	                    React.createElement(
	                        'div',
	                        { className: 'navbar-collapse collapse' },
	                        React.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav' },
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/', activeClassName: 'active' },
	                                    React.createElement('span', { className: 'glyphicon glyphicon-home' }),
	                                    ' Home'
	                                )
	                            ),
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/counter', activeClassName: 'active' },
	                                    React.createElement('span', { className: 'glyphicon glyphicon-education' }),
	                                    ' Counter'
	                                )
	                            ),
	                            React.createElement(
	                                'li',
	                                null,
	                                React.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/fetchdata', activeClassName: 'active' },
	                                    React.createElement('span', { className: 'glyphicon glyphicon-th-list' }),
	                                    ' Fetch data'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NavMenu;
	}(React.Component);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);
	
	    function Home() {
	        _classCallCheck(this, Home);
	
	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }
	
	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'Hello, world!'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'Welcome to your new single-page application, built with:'
	                ),
	                React.createElement(
	                    'ul',
	                    null,
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: 'https://get.asp.net/' },
	                            'ASP.NET Core'
	                        ),
	                        ' and ',
	                        React.createElement(
	                            'a',
	                            { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' },
	                            'C#'
	                        ),
	                        ' for cross-platform server-side code'
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: 'https://facebook.github.io/react/' },
	                            'React'
	                        ),
	                        ', ',
	                        React.createElement(
	                            'a',
	                            { href: 'http://redux.js.org' },
	                            'Redux'
	                        ),
	                        ', and ',
	                        React.createElement(
	                            'a',
	                            { href: 'http://www.typescriptlang.org/' },
	                            'TypeScript'
	                        ),
	                        ' for client-side code'
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: 'https://webpack.github.io/' },
	                            'Webpack'
	                        ),
	                        ' for building and bundling client-side resources'
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: 'http://getbootstrap.com/' },
	                            'Bootstrap'
	                        ),
	                        ' for layout and styling'
	                    )
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'To help you get started, we\'ve also set up:'
	                ),
	                React.createElement(
	                    'ul',
	                    null,
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'strong',
	                            null,
	                            'Client-side navigation'
	                        ),
	                        '. For example, click ',
	                        React.createElement(
	                            'em',
	                            null,
	                            'Counter'
	                        ),
	                        ' then ',
	                        React.createElement(
	                            'em',
	                            null,
	                            'Back'
	                        ),
	                        ' to return here.'
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'strong',
	                            null,
	                            'Webpack dev middleware'
	                        ),
	                        '. In development mode, there\'s no need to run the ',
	                        React.createElement(
	                            'code',
	                            null,
	                            'webpack'
	                        ),
	                        ' build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.'
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'strong',
	                            null,
	                            'Hot module replacement'
	                        ),
	                        '. In development mode, you don\'t even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.'
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'strong',
	                            null,
	                            'Efficient production builds'
	                        ),
	                        '. In production mode, development-time features are disabled, and the ',
	                        React.createElement(
	                            'code',
	                            null,
	                            'webpack'
	                        ),
	                        ' build tool produces minified static CSS and JavaScript files.'
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'strong',
	                            null,
	                            'Server-side prerendering'
	                        ),
	                        '. To optimize startup time, your React application is first rendered on the server. The initial HTML and state is then transferred to the browser, where client-side code picks up where the server left off.'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Home;
	}(React.Component);
	
	exports.default = Home;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _reactRedux = __webpack_require__(3);
	
	var _store = __webpack_require__(13);
	
	var _WeatherForecasts = __webpack_require__(14);
	
	var WeatherForecastsState = _interopRequireWildcard(_WeatherForecasts);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FetchData = function (_React$Component) {
	    _inherits(FetchData, _React$Component);
	
	    function FetchData() {
	        _classCallCheck(this, FetchData);
	
	        return _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).apply(this, arguments));
	    }
	
	    _createClass(FetchData, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            // This method runs when the component is first added to the page
	            var startDateIndex = parseInt(this.props.params.startDateIndex) || 0;
	            this.props.requestWeatherForecasts(startDateIndex);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // This method runs when incoming props (e.g., route params) change
	            var startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;
	            this.props.requestWeatherForecasts(startDateIndex);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'Weather forecast'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'This component demonstrates fetching data from the server and working with URL parameters.'
	                ),
	                this.renderForecastsTable(),
	                this.renderPagination()
	            );
	        }
	    }, {
	        key: 'renderForecastsTable',
	        value: function renderForecastsTable() {
	            return React.createElement(
	                'table',
	                { className: 'table' },
	                React.createElement(
	                    'thead',
	                    null,
	                    React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'th',
	                            null,
	                            'Date'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'Temp. (C)'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'Temp. (F)'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            'Summary'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'tbody',
	                    null,
	                    this.props.forecasts.map(function (forecast) {
	                        return React.createElement(
	                            'tr',
	                            { key: forecast.dateFormatted },
	                            React.createElement(
	                                'td',
	                                null,
	                                forecast.dateFormatted
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                forecast.temperatureC
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                forecast.temperatureF
	                            ),
	                            React.createElement(
	                                'td',
	                                null,
	                                forecast.summary
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'renderPagination',
	        value: function renderPagination() {
	            var prevStartDateIndex = this.props.startDateIndex - 5;
	            var nextStartDateIndex = this.props.startDateIndex + 5;
	
	            return React.createElement(
	                'p',
	                { className: 'clearfix text-center' },
	                React.createElement(
	                    _reactRouter.Link,
	                    { className: 'btn btn-default pull-left', to: '/fetchdata/' + prevStartDateIndex },
	                    'Previous'
	                ),
	                React.createElement(
	                    _reactRouter.Link,
	                    { className: 'btn btn-default pull-right', to: '/fetchdata/' + nextStartDateIndex },
	                    'Next'
	                ),
	                this.props.isLoading ? React.createElement(
	                    'span',
	                    null,
	                    'Loading...'
	                ) : []
	            );
	        }
	    }]);
	
	    return FetchData;
	}(React.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state.weatherForecasts;
	}, // Selects which state properties are merged into the component's props
	WeatherForecastsState.actionCreators // Selects which action creators are merged into the component's props
	)(FetchData);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reducers = undefined;
	
	var _WeatherForecasts = __webpack_require__(14);
	
	var WeatherForecasts = _interopRequireWildcard(_WeatherForecasts);
	
	var _Counter = __webpack_require__(17);
	
	var Counter = _interopRequireWildcard(_Counter);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// Whenever an action is dispatched, Redux will update each top-level application state property using
	// the reducer with the matching name. It's important that the names match exactly, and that the reducer
	// acts on the corresponding ApplicationState property type.
	var reducers = exports.reducers = {
	    counter: counter,
	    weatherForecasts: weatherForecasts
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.actionCreators = undefined;
	
	var _domainTask = __webpack_require__(15);
	
	var _redux = __webpack_require__(16);
	
	var _ = __webpack_require__(13);
	
	// ----------------
	// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
	// They don't directly mutate state, but they can have external side-effects (such as loading data).
	
	var actionCreators = exports.actionCreators = {
	    requestWeatherForecasts: function requestWeatherForecasts(startDateIndex) {
	        return function (dispatch, getState) {
	            // Only load data if it's something we don't already have (and are not already loading)
	            if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
	                var fetchTask = (0, _domainTask.fetch)('/api/SampleData/WeatherForecasts?startDateIndex=' + startDateIndex).then(function (response) {
	                    return response.json();
	                }).then(function (data) {
	                    dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
	                });
	
	                (0, _domainTask.addTask)(fetchTask); // Ensure server-side prerendering waits for this to complete
	                dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
	            }
	        };
	    }
	};
	
	// ----------------
	// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
	
	var unloadedState = { startDateIndex: null, forecasts: [], isLoading: false };
	
	exports.default = function (state, action) {
	    switch (action.type) {
	        case 'REQUEST_WEATHER_FORECASTS':
	            return {
	                startDateIndex: action.startDateIndex,
	                forecasts: state.forecasts,
	                isLoading: true
	            };
	        case 'RECEIVE_WEATHER_FORECASTS':
	            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
	            // handle out-of-order responses.
	            if (action.startDateIndex === state.startDateIndex) {
	                return {
	                    startDateIndex: action.startDateIndex,
	                    forecasts: action.forecasts,
	                    isLoading: false
	                };
	            }
	            break;
	        default:
	            // The following line guarantees that every action in the KnownAction union has been covered by a case above
	            var exhaustiveCheck = action;
	    }
	
	    return state || unloadedState;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(209);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(331);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.actionCreators = undefined;
	
	var _redux = __webpack_require__(16);
	
	// ----------------
	// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
	// They don't directly mutate state, but they can have external side-effects (such as loading data).
	
	var actionCreators = exports.actionCreators = {
	    increment: function increment() {
	        type: 'INCREMENT_COUNT';
	    },
	    decrement: function decrement() {
	        type: 'DECREMENT_COUNT';
	    }
	};
	
	var initialState = {
	    count: 0
	};
	
	// ----------------
	// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
	
	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'INCREMENT_COUNT':
	            return { count: state.count + 1 };
	        case 'DECREMENT_COUNT':
	            return { count: state.count - 1 };
	        default:
	            // The following line guarantees that every action in the KnownAction union has been covered by a case above
	            var exhaustiveCheck = action;
	    }
	
	    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
	    //  (or default initial state if none was supplied)
	    return state || { count: 0 };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _reactRedux = __webpack_require__(3);
	
	var _store = __webpack_require__(13);
	
	var _Counter = __webpack_require__(17);
	
	var CounterStore = _interopRequireWildcard(_Counter);
	
	var _WeatherForecasts = __webpack_require__(14);
	
	var WeatherForecasts = _interopRequireWildcard(_WeatherForecasts);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Counter = function (_React$Component) {
	    _inherits(Counter, _React$Component);
	
	    function Counter() {
	        _classCallCheck(this, Counter);
	
	        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
	    }
	
	    _createClass(Counter, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h1',
	                    null,
	                    'Counter'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'This is a simple example of a React component.'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'Current count: ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        this.props.count
	                    )
	                ),
	                React.createElement(
	                    'button',
	                    { onClick: function onClick() {
	                            _this2.props.increment();
	                        } },
	                    'Increment'
	                )
	            );
	        }
	    }]);
	
	    return Counter;
	}(React.Component);
	
	// Wire up the React component to the Redux store
	
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state.counter;
	}, // Selects which state properties are merged into the component's props
	CounterStore.actionCreators // Selects which action creators are merged into the component's props
	)(Counter);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(16);
	
	var _reduxThunk = __webpack_require__(20);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reactRouterRedux = __webpack_require__(21);
	
	var _store = __webpack_require__(13);
	
	var Store = _interopRequireWildcard(_store);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore(initialState) {
	    // Build middleware. These are functions that can process the actions before they reach the store.
	    var windowIfDefined = typeof window === 'undefined' ? null : window;
	    // If devTools is installed, connect to it
	    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
	    var createStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), devToolsExtension ? devToolsExtension() : function (f) {
	        return f;
	    })(_redux.createStore);
	
	    // Combine all reducers and instantiate the app-wide store instance
	    var allReducers = buildRootReducer(Store.reducers);
	    var store = createStoreWithMiddleware(allReducers, initialState);
	
	    // Enable Webpack hot module replacement for reducers
	    if (false) {
	        module.hot.accept('./store', function () {
	            var nextRootReducer = require('./store');
	            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
	        });
	    }
	
	    return store;
	}
	
	function buildRootReducer(allReducers) {
	    return (0, _redux.combineReducers)(Object.assign({}, allReducers, { routing: _reactRouterRedux.routerReducer }));
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(352);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(22);

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTEwODBkZDgxMzUyYWY1NjcwN2MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vdmVuZG9yXCIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9Db3VudGVyLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyb3V0ZXMiLCJsb2NhdGlvbiIsInBhcmFtcyIsImVycm9yIiwicmVkaXJlY3RMb2NhdGlvbiIsInJlbmRlclByb3BzIiwicmVkaXJlY3RVcmwiLCJwYXRobmFtZSIsIkVycm9yIiwidXJsIiwic3RvcmUiLCJhcHAiLCJkb21haW5UYXNrcyIsInRoZW4iLCJodG1sIiwiZ2xvYmFscyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJib2R5IiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiTGF5b3V0IiwicHJvcHMiLCJDb21wb25lbnQiLCJOYXZNZW51IiwiSG9tZSIsIldlYXRoZXJGb3JlY2FzdHNTdGF0ZSIsIkZldGNoRGF0YSIsInN0YXJ0RGF0ZUluZGV4IiwicGFyc2VJbnQiLCJyZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyIsIm5leHRQcm9wcyIsInJlbmRlckZvcmVjYXN0c1RhYmxlIiwicmVuZGVyUGFnaW5hdGlvbiIsImZvcmVjYXN0cyIsIm1hcCIsImZvcmVjYXN0IiwiZGF0ZUZvcm1hdHRlZCIsInRlbXBlcmF0dXJlQyIsInRlbXBlcmF0dXJlRiIsInN1bW1hcnkiLCJwcmV2U3RhcnREYXRlSW5kZXgiLCJuZXh0U3RhcnREYXRlSW5kZXgiLCJpc0xvYWRpbmciLCJzdGF0ZSIsIndlYXRoZXJGb3JlY2FzdHMiLCJhY3Rpb25DcmVhdG9ycyIsIldlYXRoZXJGb3JlY2FzdHMiLCJDb3VudGVyIiwicmVkdWNlcnMiLCJjb3VudGVyIiwiZGlzcGF0Y2giLCJmZXRjaFRhc2siLCJyZXNwb25zZSIsImpzb24iLCJ0eXBlIiwiZGF0YSIsInVubG9hZGVkU3RhdGUiLCJhY3Rpb24iLCJleGhhdXN0aXZlQ2hlY2siLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsIkNvdW50ZXJTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiU3RvcmUiLCJ3aW5kb3dJZkRlZmluZWQiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUiLCJmIiwiYWxsUmVkdWNlcnMiLCJidWlsZFJvb3RSZWR1Y2VyIiwibmV4dFJvb3RSZWR1Y2VyIiwicmVxdWlyZSIsInJlcGxhY2VSZWR1Y2VyIiwiT2JqZWN0IiwiYXNzaWduIiwicm91dGluZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FB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QUVELFlBQU94QyxLQUFQO0FBQ0g7O0FBRUQsVUFBU2dFLGdCQUFULENBQTBCRCxXQUExQixFQUF1QztBQUNuQyxZQUFPLDRCQUFnQkssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JOLFdBQWxCLEVBQStCLEVBQUVPLHdDQUFGLEVBQS9CLENBQWhCLENBQVA7QUFDSCxFOzs7Ozs7QUNoQ0QsZ0Q7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTEwODBkZDgxMzUyYWY1NjcwN2MiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIG1hdGNoKHsgcm91dGVzLCBsb2NhdGlvbjogcGFyYW1zLmxvY2F0aW9uIH0sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICckeyBwYXJhbXMudXJsIH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5yZW5kZXJQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGFuIGluaXRpYWwgcmVuZGVyIHRoYXQgd2lsbCBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAgICAgLy8gT25jZSB0aGUgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDMyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNjEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgzMTcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSGlzdG9yeUJhc2UgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG5pbXBvcnQgRmV0Y2hEYXRhIGZyb20gJy4vY29tcG9uZW50cy9GZXRjaERhdGEnO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvbXBvbmVudHMvQ291bnRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG4gICAgPFJvdXRlIGNvbXBvbmVudD17TGF5b3V0fT5cclxuICAgICAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50cz17eyBib2R5OiBIb21lIH19IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9jb3VudGVyJyBjb21wb25lbnRzPXt7IGJvZHk6IENvdW50ZXIgfX0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nL2ZldGNoZGF0YScgY29tcG9uZW50cz17eyBib2R5OiBGZXRjaERhdGEgfX0+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScoOnN0YXJ0RGF0ZUluZGV4KScgLz4geyAvKiBPcHRpb25hbCByb3V0ZSBzZWdtZW50IHRoYXQgZG9lcyBub3QgYWZmZWN0IE5hdk1lbnUgaGlnaGxpZ2h0aW5nICovfVxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICA8L1JvdXRlPjtcclxuXHJcbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdk1lbnUgfSBmcm9tICcuL05hdk1lbnUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdk1lbnUgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS05Jz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ib2R5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXYnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdmJhci1icmFuZCcgdG89eycvJ30+TWFnYXppbmVXZWJzaXRlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy8nfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9jb3VudGVyJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9mZXRjaGRhdGEnfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUuanMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJz5SZWFjdDwvYT4sIDxhIGhyZWY9J2h0dHA6Ly9yZWR1eC5qcy5vcmcnPlJlZHV4PC9hPiwgYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCByZWJ1aWx0IFJlYWN0IGNvbXBvbmVudHMgd2lsbCBiZSBpbmplY3RlZCBkaXJlY3RseSBpbnRvIHlvdXIgcnVubmluZyBhcHBsaWNhdGlvbiwgcHJlc2VydmluZyBpdHMgbGl2ZSBzdGF0ZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBUbyBvcHRpbWl6ZSBzdGFydHVwIHRpbWUsIHlvdXIgUmVhY3QgYXBwbGljYXRpb24gaXMgZmlyc3QgcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIGluaXRpYWwgSFRNTCBhbmQgc3RhdGUgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3Nlciwgd2hlcmUgY2xpZW50LXNpZGUgY29kZSBwaWNrcyB1cCB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmLjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUuanMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgZnJvbSAnLi4vc3RvcmUvV2VhdGhlckZvcmVjYXN0cyc7XHJcblxyXG5jbGFzcyBGZXRjaERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGFkZGVkIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5wYXJhbXMuc3RhcnREYXRlSW5kZXgpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0V2VhdGhlckZvcmVjYXN0cyhzdGFydERhdGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gaW5jb21pbmcgcHJvcHMgKGUuZy4sIHJvdXRlIHBhcmFtcykgY2hhbmdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQobmV4dFByb3BzLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzKHN0YXJ0RGF0ZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cclxuICAgICAgICAgICAgPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCB3b3JraW5nIHdpdGggVVJMIHBhcmFtZXRlcnMuPC9wPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JlY2FzdHNUYWJsZSgpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJQYWdpbmF0aW9uKCl9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvcmVjYXN0c1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZm9yZWNhc3RzLm1hcChmb3JlY2FzdCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2ZvcmVjYXN0LmRhdGVGb3JtYXR0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZvcmVjYXN0LmRhdGVGb3JtYXR0ZWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmb3JlY2FzdC50ZW1wZXJhdHVyZUN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmb3JlY2FzdC50ZW1wZXJhdHVyZUZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmb3JlY2FzdC5zdW1tYXJ5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUGFnaW5hdGlvbigpIHtcclxuICAgICAgICBsZXQgcHJldlN0YXJ0RGF0ZUluZGV4ID0gdGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCAtIDU7XHJcbiAgICAgICAgbGV0IG5leHRTdGFydERhdGVJbmRleCA9IHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggKyA1O1xyXG5cclxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjbGVhcmZpeCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IHB1bGwtbGVmdCcgdG89e2AvZmV0Y2hkYXRhLyR7cHJldlN0YXJ0RGF0ZUluZGV4fWB9PlByZXZpb3VzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17YC9mZXRjaGRhdGEvJHtuZXh0U3RhcnREYXRlSW5kZXh9YH0+TmV4dDwvTGluaz5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXNMb2FkaW5nID8gPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj4gOiBbXX1cclxuICAgICAgICA8L3A+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS53ZWF0aGVyRm9yZWNhc3RzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoRmV0Y2hEYXRhKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLmpzIiwiaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5pbXBvcnQgKiBhcyBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XHJcblxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGNvdW50ZXIsXHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9pbmRleC5qcyIsImltcG9ydCB7IGZldGNoLCBhZGRUYXNrIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIFRodW5rQWN0aW9uLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICByZXF1ZXN0V2VhdGhlckZvcmVjYXN0czogKHN0YXJ0RGF0ZUluZGV4KSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gT25seSBsb2FkIGRhdGEgaWYgaXQncyBzb21ldGhpbmcgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIChhbmQgYXJlIG5vdCBhbHJlYWR5IGxvYWRpbmcpXHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZUluZGV4ICE9PSBnZXRTdGF0ZSgpLndlYXRoZXJGb3JlY2FzdHMuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGAvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cz9zdGFydERhdGVJbmRleD0keyBzdGFydERhdGVJbmRleCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXgsIGZvcmVjYXN0czogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyAvLyBFbnN1cmUgc2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nIHdhaXRzIGZvciB0aGlzIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZSA9IHsgc3RhcnREYXRlSW5kZXg6IG51bGwsIGZvcmVjYXN0czogW10sIGlzTG9hZGluZzogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGVJbmRleDogYWN0aW9uLnN0YXJ0RGF0ZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBzdGF0ZS5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJzpcclxuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGhlIGluY29taW5nIGRhdGEgaWYgaXQgbWF0Y2hlcyB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdC4gVGhpcyBlbnN1cmVzIHdlIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3V0LW9mLW9yZGVyIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGFydERhdGVJbmRleCA9PT0gc3RhdGUuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdHM6IGFjdGlvbi5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvV2VhdGhlckZvcmVjYXN0cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIwOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzMxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBUaHVua0FjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OIENSRUFUT1JTIC0gVGhlc2UgYXJlIGZ1bmN0aW9ucyBleHBvc2VkIHRvIFVJIGNvbXBvbmVudHMgdGhhdCB3aWxsIHRyaWdnZXIgYSBzdGF0ZSB0cmFuc2l0aW9uLlxyXG4vLyBUaGV5IGRvbid0IGRpcmVjdGx5IG11dGF0ZSBzdGF0ZSwgYnV0IHRoZXkgY2FuIGhhdmUgZXh0ZXJuYWwgc2lkZS1lZmZlY3RzIChzdWNoIGFzIGxvYWRpbmcgZGF0YSkuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBpbmNyZW1lbnQ6ICgpID0+IHsgdHlwZTogJ0lOQ1JFTUVOVF9DT1VOVCcgfSxcclxuICAgIGRlY3JlbWVudDogKCkgPT4geyB0eXBlOiAnREVDUkVNRU5UX0NPVU5UJyB9XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY291bnQ6IDBcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnSU5DUkVNRU5UX0NPVU5UJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50ICsgMSB9O1xyXG4gICAgICAgIGNhc2UgJ0RFQ1JFTUVOVF9DT1VOVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCAtIDEgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgeyBjb3VudDogMCB9O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvQ291bnRlci5qcyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXJTdG9yZSBmcm9tICcuLi9zdG9yZS9Db3VudGVyJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcclxuXHJcbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q291bnRlcjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgYSBSZWFjdCBjb21wb25lbnQuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+Q3VycmVudCBjb3VudDogPHN0cm9uZz57dGhpcy5wcm9wcy5jb3VudH08L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5pbmNyZW1lbnQoKSB9IH0+SW5jcmVtZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLmNvdW50ZXIsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShDb3VudGVyKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZSBmcm9tICcuL3N0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdztcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihTdG9yZS5yZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmUoJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnMoT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzUyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==