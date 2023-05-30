var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main(props) {
		_classCallCheck(this, Main);

		var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

		_this.state = { position: 0 };
		return _this;
	}

	_createClass(Main, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			if (this.state.position == 0) {
				return [React.createElement(
					"div",
					{ className: "box_img" },
					React.createElement("img", { src: "./img/img.jpg" })
				), React.createElement(
					"div",
					{ className: "main_txt" },
					React.createElement(
						"h2",
						null,
						"Frontend-Developer"
					),
					React.createElement(
						"p",
						null,
						"I am a beginner Frontend-developer. On the Internet I often use the nickname SmaF1. At the moment I am studying programming languages used in web development, such as JavaScript, React.js and php. I will be glad to cooperate."
					),
					React.createElement(
						"button",
						{ onClick: function onClick() {
								_this2.setState({ position: 1 });
							}, className: "more_btn" },
						"Read More"
					)
				)];
			} else if (this.state.position == 1) {
				return React.createElement(
					"div",
					{ className: "ach_box" },
					React.createElement(
						"table",
						{ className: "achiev" },
						React.createElement(
							"tr",
							null,
							React.createElement(
								"td",
								null,
								React.createElement(
									"h2",
									null,
									"\u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u044B:"
								)
							),
							React.createElement(
								"td",
								null,
								React.createElement(
									"h2",
									null,
									"\u041A\u043E\u043D\u043A\u0443\u0440\u0441 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u201C\u0422\u0430\u043B\u0430\u043D\u0442 \u041D\u0422\u041E\u201D \u0432 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u044F\u0445:"
								)
							),
							React.createElement(
								"td",
								null,
								React.createElement(
									"h2",
									null,
									"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435:"
								)
							)
						),
						React.createElement(
							"tr",
							null,
							React.createElement(
								"td",
								null,
								React.createElement(
									"div",
									{ className: "prpl_box" },
									React.createElement(
										"div",
										{ className: "txt_box" },
										React.createElement(
											"p",
											null,
											"\u0424\u0438\u043D\u0430\u043B\u0438\u0441\u0442 \u041D\u0422\u041E \u043F\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044E \u201C\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u0438\u043D\u0436\u0438\u043D\u0438\u0440\u0438\u043D\u0433\u201D (2023 \u0433.)"
										)
									)
								)
							),
							React.createElement(
								"td",
								null,
								React.createElement(
									"div",
									{ className: "prpl_box" },
									React.createElement(
										"div",
										{ className: "txt_box" },
										React.createElement(
											"p",
											null,
											"\u201C\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439\u201D - \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C (2023 \u0433.)"
										)
									)
								)
							),
							React.createElement(
								"td",
								null,
								React.createElement(
									"div",
									{ className: "prpl_box" },
									React.createElement(
										"div",
										{ className: "txt_box" },
										React.createElement(
											"p",
											null,
											"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435-\u043E\u0431\u0449\u0435\u0435 \u0413\u041E\u0423 \u042F\u041E \u0421\u0428 \u211633"
										)
									)
								)
							)
						),
						React.createElement(
							"tr",
							null,
							React.createElement("td", null),
							React.createElement(
								"td",
								null,
								React.createElement(
									"div",
									{ className: "prpl_box" },
									React.createElement(
										"div",
										{ className: "txt_box" },
										React.createElement(
											"p",
											null,
											"\u201C\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 Python\u201D - \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C (2023 \u0433.)"
										)
									)
								)
							),
							React.createElement("td", null)
						),
						React.createElement(
							"tr",
							null,
							React.createElement(
								"td",
								null,
								React.createElement(
									"a",
									{ href: "https://ntcontest.ru/", target: "_blank" },
									React.createElement(
										"div",
										{ className: "info_btn" },
										React.createElement(
											"p",
											null,
											"\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u041D\u0422\u041E?"
										)
									)
								)
							),
							React.createElement(
								"td",
								null,
								React.createElement(
									"div",
									{ className: "prpl_box" },
									React.createElement(
										"div",
										{ className: "txt_box" },
										React.createElement(
											"p",
											null,
											"\u201C\u0418\u0441\u043A\u0443\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u201D - \u043F\u0440\u0438\u0437\u0435\u0440 (2023 \u0433.)"
										)
									)
								)
							),
							React.createElement(
								"td",
								null,
								React.createElement(
									"button",
									{ className: "back_btn", onClick: function onClick() {
											_this2.setState({ position: 0 });
										} },
									"\u041D\u0430\u0437\u0430\u0434"
								)
							)
						)
					)
				);
			}
		}
	}]);

	return Main;
}(React.Component);

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));