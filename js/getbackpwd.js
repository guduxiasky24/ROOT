$(document)
		.ready(
				function() {
					var d = $skin;
					var c = function() {
						var K = function(e) {
							var f = function(h, g, j) {
								var i = new RegExp(g, "g");
								return h.replace(i, j)
							};
							var e = escape(e);
							e = f(e, "\\+", "%2B");
							e = f(e, "/", "%2F");
							return e
						};
						var Z = function(f) {
							var e = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
							return e.test(f)
						};
						var X = function(e) {
							var f = /^1\d{10}$/;
							return f.test(e)
						};
						var Q = function(e, f) {
							$.PageDialog('<div class="mAltFail"><s></s>' + e
									+ "</div>", {
								W : 300,
								H : 60,
								close : false,
								autoClose : true,
								submit : function() {
									if (f) {
										f()
									}
								}
							})
						};
						var P = function(e, f) {
							$.PageDialog('<div class="mAltOK"><s></s>' + e
									+ "</div>", {
								W : 300,
								H : 60,
								close : false,
								autoClose : true,
								submit : function() {
									if (f) {
										f()
									}
								}
							})
						};
						var J = function() {
							try {
								if (/(msie\s|trident.*rv:)([\w.]+)/
										.test(navigator.userAgent.toLowerCase())
										&& parseInt($.browser.version) == 6) {
									$
											.getScript(
													d
															+ "/js/iepng.js?date=20150215",
													function() {
														if (EvPNG != null
																&& EvPNG != undefined) {
															EvPNG
																	.fix(".transparent-png")
														}
													})
								}
							} catch (e) {
							}
						};
						var G = $("#j-tips-wrap");
						var Y = /\w+(@{1})$/i, S = [ "qq.com", "sina.com",
								"163.com", "126.com", "139.com", "sohu.com" ], M = "", b = 0;
						var T = $("#txtUserName");
						var F = $("#txtCode");
						var R = $("#imgCode");
						var I = function(f, e) {
							ab(f);
							if ($(f).siblings(".orange").length > 0) {
								$(f).parent().addClass("error-text");
								$(f).siblings(".orange").html(
										'<i class="passport-icon transparent-png"></i>'
												+ e).show(5, function() {
									J()
								})
							} else {
								$(f).parent().parent().addClass("error-text");
								$(f).parent().next(".orange").html(
										'<i class="passport-icon transparent-png"></i>'
												+ e).show(5, function() {
									J()
								})
							}
							if ($(f).val() == "") {
								$(f).siblings("em").hide()
							}
							N = false
						};
						var V = function(e) {
							if ($(e).siblings(".orange").length > 0) {
								$(e).parent().removeClass("error-text");
								$(e).siblings(".orange").hide()
							} else {
								$(e).parent().parent()
										.removeClass("error-text");
								$(e).parent().next(".orange").hide()
							}
						};
						var aa = function(e) {
							V(e);
							$(e).parent().removeClass("enter-focus").addClass(
									"correct-text");
							$(e).siblings("s.passport-icon").show()
						};
						var ab = function(e) {
							$(e).parent().removeClass("correct-text");
							$(e).siblings("s.passport-icon").hide()
						};
						var O = null;
						var H = "";
						var a = "";
						var W = -1;
						var E = function(e, f) {
							H = T.val().trim();
							if (H == "") {
								if (e) {
									T.focus()
								}
								I(T,
										"\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\u5730\u5740")
							} else {
								if (!X(H) && !Z(H)) {
									if (e) {
										T.focus()
									}
									I(
											T,
											"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u6216\u90ae\u7bb1\u5730\u5740")
								} else {
									var g = function(h) {
										if (h == 0) {
											if (e) {
												T.focus()
											}
											I(T,
													"\u8d26\u53f7\u4e0d\u5b58\u5728")
										} else {
											aa(T);
											if (f) {
												f()
											}
										}
									};
									if (H != a) {
										O = setTimeout(function() {
											a = H;
											$.get("/user/isCheckName.html", {
												userName : H
											}, function(h) {
												if (h == "true") {
													W = 0;
													g(0)
												} else {
													W = 1;
													g(1)
												}
											})
										}, 200)
									} else {
										g(W)
									}
								}
							}
						};
						var U = "";
						var L = function(e) {
							var f = /^[0-9A-Za-z]{4,6}$/;
							U = F.val().trim();
							if (U == "") {
								if (e) {
									F.focus()
								}
								I(F, "\u8bf7\u586b\u5199\u9a8c\u8bc1\u7801");
								return false
							} else {
								if (!f.test(U)) {
									if (e) {
										F.focus().select()
									}
									I(F,
											"\u9a8c\u8bc1\u7801\u586b\u5199\u6709\u8bef");
									return false
								} else {
									aa(F)
								}
							}
							return true
						};
						T.focus(function() {
							$(this).parent().addClass("enter-focus")
						}).blur(function() {
							$(this).parent().removeClass("enter-focus");
							if ($(this).val() == "") {
								$(this).css("color", "#bbbbbb");
								V($(this));
								ab($(this));
								$(this).siblings("em").show();
								return
							}
							E(false)
						}).click(
								function(e) {
									e = e || window.event;
									e.stopPropagation();
									if (G.children().length > 0
											&& T.val().indexOf("@") !== -1) {
										G.show()
									}
								}).keydown(function() {
							$(this).css("color", "#333333");
							$(this).siblings("em").hide();
							V($(this));
							ab($(this))
						});
						if (T.val() == "") {
							T.siblings("em").bind("click", function() {
								T.focus()
							}).show()
						}
						T
								.keyup(function(i) {
									i = i || window.event;
									i.stopPropagation();
									var o = this.value, k = 0, l = 0, j = S.length, e = i.keyCode, n = "";
									if (Y.test(o)) {
										for (; k < j; k++) {
											M += "<li class='j-tips'>"
													+ (o + S[k]) + "</li>"
										}
										G.show().empty().html(M);
										M = ""
									} else {
										if (o.indexOf("@") !== -1) {
											var h = o.indexOf("@"), m = o
													.slice(0, h + 1), f = o
													.slice(h + 1);
											for (; l < j; l++) {
												if (S[l].indexOf(f) !== -1) {
													n += "<li class='j-tips'>"
															+ (m + S[l])
															+ "</li>"
												}
											}
											if (n !== "") {
												G.show().empty().html(n)
											} else {
												G.hide();
												b = 0
											}
										} else {
											b = 0;
											G.hide()
										}
									}
									if (G.css("display") === "block") {
										var g = G.find("li");
										switch (e) {
										case 13:
											if (b > 0) {
												T
														.val(g.eq(b - 1).text()
																.trim());
												G.hide();
												E(true);
												b = 0
											}
											break;
										case 40:
											b = b + 1 > g.length ? 1 : b + 1;
											g.removeClass("selected").eq(b - 1)
													.addClass("selected");
											break;
										case 38:
											b = b - 1 < 1 ? g.length : b - 1;
											g.removeClass("selected").eq(b - 1)
													.addClass("selected");
											break;
										default:
											break
										}
									}
								});
						G.click(function(e) {
							e = e || window.event;
							e.stopPropagation();
							var f = e.target || e.srcElement;
							if (f.tagName.toLowerCase() === "li") {
								T.val($(f).text().trim());
								E(true)
							}
							$(this).hide()
						});
						$(window).click(
								function(f) {
									if (G.css("display") !== "block") {
										return
									}
									f = f || window.event;
									var g = f.target || f.srcElement, e = g.id
											.toLowerCase();
									if (e !== "j-tips-wrap"
											|| e !== "txtUserName") {
										G.hide()
									}
								});
						F.focus(function() {
							$(this).parent().parent().addClass("enter-focus");
							G.hide()
						}).blur(
								function() {
									$(this).parent().parent().removeClass(
											"enter-focus");
									if ($(this).val() == "") {
										$(this).siblings("em").show();
										$(this).css("color", "#bbbbbb");
										V($(this));
										ab($(this));
										return
									}
									L(false)
								}).keydown(function() {
							$(this).css("color", "#333333");
							$(this).siblings("em").hide();
							V($(this));
							ab($(this))
						}).siblings("em").bind("click", function() {
							F.focus()
						}).show();
						R
								.click(function() {
									$(this)
											.attr(
													"src",
													$www
															+ "/getbackpwd/getRandomCode.html?rnd="
															+ new Date()
																	.getTime());
									return false
								});
						$("#btnChangeCode")
								.click(
										function() {
											R
													.attr(
															"src",
															$www
																	+ "/getbackpwd/getRandomCode.html?rnd="
																	+ new Date()
																			.getTime());
											return false
										});
						var D = function() {
							N = false;
							$("#btnNext").removeClass("letter-noSpac").html(
									"\u4e0b\u4e00\u6b65");
							R.attr("src", $www
									+ "/getbackpwd/getRandomCode.html?rnd="
									+ new Date().getTime());
							ab(F);
							F.val("").focus().siblings("em").hide()
						};
						var N = false;
						$("#btnNext")
								.bind(
										"click",
										function() {
											if (N) {
												return
											}
											N = true;
											if (O != null) {
												clearTimeout(O);
												O = null
											}
											var e = $(this);
											E(
													true,
													function() {
														if (L(true)) {
															e
																	.addClass(
																			"letter-noSpac")
																	.html(
																			"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u540e...");
															$
																	.post(
																			"/getbackpwd/getBackPwd.html",
																			{
																				mail : H,
																				rnd : U
																			},
																			function(
																					f) {
																				if (f == "3") {
																					I(
																							F,
																							"\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165");
																					D()
																				} else {
																					if (f == "1") {
																						if (X(H)) {
																							location
																									.replace("/getbackpwd/findmobilecheck.html?mail="
																											+ H
																											+ "&rnd="
																											+ U)
																						} else {
																							location
																									.replace("/getbackpwd/findemailcheck.html?mail="
																											+ H
																											+ "&rnd="
																											+ U)
																						}
																					} else {
																						Q(
																								"\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01",
																								function() {
																									location
																											.reload()
																								})
																					}
																				}
																			})
														}
													})
										});
						$("div.register-form-con").keydown(function(e) {
							var f = (window.event) ? event.keyCode : e.keyCode;
							if (f == 32) {
								return false
							} else {
								if (f == 13) {
									$("#btnNext").trigger("click")
								}
							}
							return true
						})
					};
					$.getScript(d + "/js/ajaxfun.js?date=20130123", c)
				});
