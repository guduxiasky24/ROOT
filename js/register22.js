$(document)
		.ready(
				function() {
					var e = $skin;
					SetCookie("isCookie", "yes");
					var d = getCookie("isCookie");
					if (d == null || d != "yes") {
						alert("\u6e29\u99a8\u63d0\u793a\uff1a\u60a8\u7684\u6d4f\u89c8\u5668\u5f53\u524d\u4e0d\u652f\u6301Cookies\u529f\u80fd\uff0c\u8bf7\u60a8\u542f\u7528\u6d4f\u89c8\u5668Cookie\u529f\u80fd\u6216\u66f4\u6362\u6d4f\u89c8\u5668\u3002");
						return
					}
					var f = function() {
						var J = $("#j-tips-wrap");
						var aa = /\w+(@{1})$/i, U = [ "qq.com", "sina.com",
								"163.com", "126.com", "139.com", "sohu.com" ], L = "", O = 0;
						var P = function(g) {
							var h = function(j, i, l) {
								var k = new RegExp(i, "g");
								return j.replace(k, l)
							};
							var g = escape(g);
							g = h(g, "\\+", "%2B");
							g = h(g, "/", "%2F");
							return g
						};
						var ab = function(h) {
							var g = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
							return g.test(h)
						};
						var H = function(g) {
							var h = /^(?![A-z]+$)(?!\d+$)(?![\W_]+$)^.{8,20}$/;
							return h.test(g)
						};
						var Z = function(g) {
							var h = /^1\d{10}$/;
							return h.test(g)
						};
						var T = function(g, h) {
							$.PageDialog('<div class="mAltFail"><s></s>' + g
									+ "</div>", {
								W : 300,
								H : 60,
								close : false,
								autoClose : true,
								submit : function() {
									if (h) {
										h()
									}
								}
							})
						};
						var S = function(g, h) {
							$.PageDialog('<div class="mAltOK"><s></s>' + g
									+ "</div>", {
								W : 300,
								H : 60,
								close : false,
								autoClose : true,
								submit : function() {
									if (h) {
										h()
									}
								}
							})
						};
						var I = function() {
							try {
								if (/(msie\s|trident.*rv:)([\w.]+)/
										.test(navigator.userAgent.toLowerCase())
										&& parseInt($.browser.version) == 6) {
									$
											.getScript(
													e
															+ "/js/iepng.js?date=20150215",
													function() {
														if (EvPNG != null
																&& EvPNG != undefined) {
															EvPNG
																	.fix(".transparent-png")
														}
													})
								}
							} catch (g) {
							}
						};
						var W = $("#txtUserName");
						var V = $("#txtPwd");
						var Y = $("#txtConPwd");
						var G = "", F = "", K = "";
						var N = function(h, g) {
							ad(h);
							$(h).parent().addClass("enter-focus error-text");
							$(h).siblings(".orange").html(
									'<i class="passport-icon transparent-png"></i>'
											+ g).show(5, function() {
								I()
							});
							if ($(h).val() == "") {
								$(h).siblings("em").hide()
							}
							Q = false
						};
						var X = function(g) {
							$(g).parent().removeClass("error-text");
							$(g).siblings(".orange").hide()
						};
						var ac = function(g) {
							X(g);
							$(g).parent().removeClass("enter-focus").addClass(
									"correct-text");
							$(g).siblings("s.passport-icon").show()
						};
						var ad = function(g) {
							$(g).parent().removeClass("correct-text");
							$(g).siblings("s.passport-icon").hide()
						};
						var a = null;
						var M = "";
						var b = function() {
							this.checkUserName = function(g, h) {
								G = W.val().trim();
								if (G == "") {
									if (g) {
										W.focus()
									}
									N(W,
											"\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\u5730\u5740");
									M = "";
									return false
								} else {
									if (!Z(G) && !ab(G)) {
										if (g) {
											W.focus()
										}
										N(
												W,
												"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u6216\u90ae\u7bb1\u5730\u5740");
										M = "";
										return false
									} else {
										if (h && (G != M)) {
											M = G;
											a = setTimeout(
													function() {
														$
																.get(
																		"/user/isCheckName.html",
																		{
																			userName : G
																		},
																		function(
																				i) {
																			if (i == "true") {
																				ac(W)
																			} else {
																				N(
																						W,
																						'\u8d26\u53f7\u5df2\u6ce8\u518c\uff0c\u8bf7\u66f4\u6362\u6216<a href="/login/index.html?account='
																								+ escape(G)
																								+ "&forward="
																								+ P($(
																										"#hidRegisterForward")
																										.val())
																								+ '" class="blue">\u7acb\u5373\u767b\u5f55</a>')
																			}
																		})
													}, 200)
										}
										return true
									}
								}
							};
							this.checkPwd = function(g) {
								F = V.val().trim();
								if (F == "") {
									if (g) {
										V.focus()
									}
									N(V,
											"\u8bf7\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801");
									return false
								} else {
									if (!H(F)) {
										if (g) {
											V.focus()
										}
										N(
												V,
												"\u5bc6\u7801\u75318-20\u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u7b26\u53f7\u4e24\u79cd\u6216\u4ee5\u4e0a\u7ec4\u5408");
										return false
									} else {
										ac(V)
									}
								}
								return true
							};
							this.checkConPwd = function(g) {
								F = V.val().trim();
								K = Y.val().trim();
								if (K == "") {
									if (g) {
										Y.focus()
									}
									N(Y,
											"\u8bf7\u8f93\u5165\u786e\u8ba4\u5bc6\u7801");
									return false
								} else {
									if (!H(K)) {
										if (g) {
											Y.focus()
										}
										N(
												Y,
												"\u5bc6\u7801\u75318-20\u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u7b26\u53f7\u4e24\u79cd\u6216\u4ee5\u4e0a\u7ec4\u5408");
										return false
									} else {
										if (F != K) {
											if (g) {
												Y.focus()
											}
											N(Y,
													"\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4");
											return false
										} else {
											ac(Y)
										}
									}
								}
								return true
							}
						};
						
						this.checkCode = function(N) {
			                var M = /^[0-9A-Za-z]{4,6}$/;
			                k = A.val().trim();
			                if (k == "") {
			                    if (N) {
			                        A.focus()
			                    }
			                    v(A, "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");
			                    return false
			                } else {
			                    if (!M.test(k)) {
			                        if (N) {
			                            A.focus().select()
			                        }
			                        v(A, "\u9a8c\u8bc1\u7801\u8f93\u5165\u6709\u8bef");
			                        return false
			                    } else {
			                        e(A)
			                    }
			                }
			                return true
			            }
			        };
						var R = new b();
						W
								.focus(
										function() {
											$(this).parent().addClass(
													"enter-focus");
											$(this)
													.siblings("em")
													.html(
															"\u63a8\u8350\u4f7f\u7528\u624b\u673a\u53f7\u6ce8\u518c")
										})
								.blur(
										function() {
											$(this).parent().removeClass(
													"enter-focus");
											if ($(this).val() == "") {
												$(this)
														.siblings("em")
														.html(
																"\u624b\u673a\u53f7/\u90ae\u7bb1\u5730\u5740")
														.show();
												$(this).css("color", "#bbbbbb");
												X($(this));
												ad($(this));
												return
											}
											R.checkUserName(false, true)
										})
								.click(
										function(g) {
											g = g || window.event;
											g.stopPropagation();
											if (J.children().length > 0
													&& W.val().indexOf("@") !== -1) {
												J.show()
											}
										}).keydown(function() {
									$(this).css("color", "#333333");
									$(this).siblings("em").hide();
									X($(this));
									ad($(this))
								});
						if (W.val() == "") {
							W.siblings("em").bind("click", function() {
								W.focus()
							}).show()
						}
						W
								.keyup(function(j) {
									j = j || window.event;
									j.stopPropagation();
									var p = this.value, l = 0, m = 0, k = U.length, q = j.keyCode, o = "";
									if (aa.test(p)) {
										for (; l < k; l++) {
											L += "<li class='j-tips'>"
													+ (p + U[l]) + "</li>"
										}
										J.show().empty().html(L);
										L = ""
									} else {
										if (p.indexOf("@") !== -1) {
											var i = p.indexOf("@"), n = p
													.slice(0, i + 1), g = p
													.slice(i + 1);
											for (; m < k; m++) {
												if (U[m].indexOf(g) !== -1) {
													o += "<li class='j-tips'>"
															+ (n + U[m])
															+ "</li>"
												}
											}
											if (o !== "") {
												J.show().empty().html(o)
											} else {
												J.hide();
												O = 0
											}
										} else {
											O = 0;
											J.hide()
										}
									}
									if (J.css("display") === "block") {
										var h = J.find("li");
										switch (q) {
										case 13:
											if (O > 0) {
												W
														.val(h.eq(O - 1).text()
																.trim());
												J.hide();
												R.checkUserName(false, true);
												O = 0
											}
											break;
										case 40:
											O = O + 1 > h.length ? 1 : O + 1;
											h.removeClass("selected").eq(O - 1)
													.addClass("selected");
											break;
										case 38:
											O = O - 1 < 1 ? h.length : O - 1;
											h.removeClass("selected").eq(O - 1)
													.addClass("selected");
											break;
										default:
											break
										}
									}
								});
						J.click(function(g) {
							g = g || window.event;
							g.stopPropagation();
							var h = g.target || g.srcElement;
							if (h.tagName.toLowerCase() === "li") {
								W.val($(h).text().trim());
								R.checkUserName(false, true)
							}
							$(this).hide()
						});
						$(window).click(
								function(h) {
									if (J.css("display") !== "block") {
										return
									}
									h = h || window.event;
									var i = h.target || h.srcElement, g = i.id
											.toLowerCase();
									if (g !== "j-tips-wrap"
											|| g !== "txtUserName") {
										J.hide()
									}
								});
						V
								.focus(
										function() {
											$(this).parent().addClass(
													"enter-focus");
											$(this)
													.siblings("em")
													.html(
															"8-20\u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u7b26\u53f7\u4e24\u79cd\u6216\u4ee5\u4e0a\u7ec4\u5408");
											J.hide()
										})
								.blur(
										function() {
											$(this).parent().removeClass(
													"enter-focus");
											if ($(this).val() == "") {
												$(this)
														.siblings("em")
														.html(
																"\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801")
														.show();
												$(this).css("color", "#bbbbbb");
												X($(this));
												ad($(this));
												return
											}
											R.checkPwd(false);
											$("#pwdStrength").hide()
										}).keydown(function() {
									$(this).css("color", "#333333");
									$(this).siblings("em").hide();
									X($(this));
									ad($(this))
								}).bind("keyup", function() {
									c($(this).val())
								});
						if (V.val() == "") {
							V.siblings("em").bind("click", function() {
								V.focus()
							}).show()
						}
						Y.focus(function() {
							$(this).parent().addClass("enter-focus");
							J.hide()
						}).blur(function() {
							$(this).parent().removeClass("enter-focus");
							if ($(this).val() == "") {
								$(this).siblings("em").show();
								$(this).css("color", "#bbbbbb");
								X($(this));
								ad($(this));
								return
							}
							R.checkConPwd(false)
						}).keydown(function() {
							$(this).css("color", "#333333");
							$(this).siblings("em").hide();
							X($(this));
							ad($(this))
						});
						if (Y.val() == "") {
							Y.siblings("em").bind("click", function() {
								Y.focus()
							}).show()
						}
						var c = function(j) {
							var i = $("#pwdStrength");
							var g = [
									"",
									'<p class="orange" ><strong>\u5b89\u5168\u5f3a\u5ea6\uff1a</strong><cite><dfn style="width:33.33%;"></dfn></cite>\u5f31</p>',
									'<p class="yellow" ><strong>\u5b89\u5168\u5f3a\u5ea6\uff1a</strong><cite><dfn style="width:66.66%;"></dfn></cite>\u4e2d</p>',
									'<p class="green" ><strong>\u5b89\u5168\u5f3a\u5ea6\uff1a</strong><cite><dfn style="width:100%;"></dfn></cite>\u5f3a</p>' ];
							var k = function(l) {
								i.html(g[l]).show()
							};
							var h = function(l) {
								if (l.length >= 8) {
									if (/[a-zA-Z]+/.test(l) && /[0-9]+/.test(l)
											&& /[^A-Za-z0-9]+/.test(l)) {
										k(3)
									} else {
										if (/[a-zA-Z]+/.test(l)
												&& /[0-9]+/.test(l)) {
											k(2)
										} else {
											if (/[a-zA-Z]+/.test(l)
													&& /[^A-Za-z0-9]+/.test(l)) {
												k(2)
											} else {
												if (/[0-9]+/.test(l)
														&& /[^A-Za-z0-9]+/
																.test(l)) {
													k(2)
												} else {
													k(1)
												}
											}
										}
									}
								} else {
									k(0)
								}
							};
							h(j)
						};
						var Q = false;
						$("#btnAgreeBtn")
								.bind(
										"click",
										function() {
											if (Q) {
												return
											}
											Q = true;
											if (a != null) {
												clearTimeout(a)
											}
											if (!R.checkUserName(true, false)) {
												return
											}
											var g = $(this);
											$
													.get(
															"/user/isCheckName.html",
															{
																userName : G
															},
															function(h) {
																if (h == "true") {
																	ac(W);
																	if (!R
																			.checkPwd(true)
																			|| !R
																					.checkConPwd(true)) {
																		return
																	}
																	g
																			.addClass(
																					"letter-noSpac")
																			.html(
																					"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u540e...");
																	var i = "str="
																			+ G
																			+ "&userPwd="
																			+ P(F);
																	$
																			.post(
																					"/register/regsiter.html",
																					i,
																					function(
																							j) {
																						if (j.length > 10) {
																							location
																									.replace("/register/registercheck.html?str="
																											+ escape(j)
																											+ "&forward="
																											+ P($(
																													"#hidRegisterForward")
																													.val()))
																						} else {
																							if (j == 1
																									&& j == 2) {
																								T(
																										"\u64cd\u4f5c\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01",
																										function() {
																											location
																													.reload()
																										})
																							} else {
																								T(
																										"\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01",
																										function() {
																											location
																													.reload()
																										})
																							}
																						}
																					})
																} else {
																	N(
																			W,
																			'\u8d26\u53f7\u5df2\u6ce8\u518c\uff0c\u8bf7\u66f4\u6362\u6216<a href="/login/index.html?account='
																					+ escape(G)
																					+ "&forward="
																					+ P($(
																							"#hidRegisterForward")
																							.val())
																					+ '" class="blue">\u7acb\u5373\u767b\u5f55</a>');
																	W.focus()
																}
															})
										});
						$("div.register-form-con").keydown(function(g) {
							var h = (window.event) ? event.keyCode : g.keyCode;
							if (h == 32) {
								return false
							} else {
								if (h == 13) {
									$("#btnAgreeBtn").trigger("click")
								}
							}
							return true
						})
					};
					$.getScript(e + "/js/ajaxfun.js?date=20130123", f)
				});
