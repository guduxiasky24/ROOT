var PagePOPLoginOK = null;
$(function() {
	var a2 = $skin;
	var aK = $www;
	var a4 = $www;
	var aP = true;
	var aY = parseInt($("#hidBalance").val());
	var aV = parseInt($("#hidCountMoney").val());
	var aZ = parseInt($("#hidPoints").val());
	var aB = parseInt($("#hidAvailablePoints").val());
	var bq = parseInt($("#hidUsePaypwd").val());
	var a8 = parseInt($("#hidSmallMoney").val());
	var aD = $("#checkPoint");
	var bb = $("#txtUsePoint");
	var a3 = $("#spPoint");
	var ay = $("#ddBalanceBox");
	var bn = $("#checkBalance");
	var aX = $("#spBalance");
	var bk = $("#divBankBox");
	var ba = $("#iBankPay");
	var bm = $("#hidCheckSN");
	var at = $("#txtPaypwd");
	var bo = $("#submitOK");
	var aF = $("#divGetPoint");
	var av = /^\d+$/;
	var aN = $("#pageDialog");
	var be = -1;
	var aJ = 0;
	var a5 = 0;
	var bd = 0;
	var a7 = false;
	var bh = false;
	var aT = '<b class="z-comms"></b>';
	var aw = /^\d{6}$/;
	var bs = function(a) {
		if (a8 == 0) {
			return '<span class="gray3">' + a + "</span>"
		}
		return '<p class="gray3">'
				+ a
				+ '</p><cite class="gray9">\u60a8\u5df2\u5f00\u542f\u5c0f\u989d\u514d\u5bc6\u652f\u4ed8\uff0c\u2264'
				+ a8 + ".00\u5143\u65e0\u9700\u652f\u4ed8\u5bc6\u7801</cite>"
	};
	var aL = function(a, d) {
		var c = "";
		switch (a) {
		case "allOutDate":
			c = '<div class="z-popUp z-pop-box"><span class="gray3">\u60a8\u7684\u8ba2\u5355\u4e2d\u6240\u6709\u5546\u54c1\u5df2\u5931\u6548\uff01</span><a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u6e05\u7a7a\u8d2d\u7269\u8f66\u5e76\u8fd4\u56de\u7ee7\u7eed\u8d2d\u7269" class="z-btn-determine">\u6e05\u7a7a\u8d2d\u7269\u8f66\u5e76\u8fd4\u56de\u7ee7\u7eed\u8d2d\u7269</a></div>';
			var b = function() {
				aN.find("a.z-btn-cancel").click(function() {
					$.PageDialog.close();
					return false
				});
				aN.find("a.z-btn-determine").click(function() {
					d();
					return false
				})
			};
			$.PageDialog(c, {
				W : 512,
				H : 197,
				close : true,
				autoClose : false,
				ready : b
			});
			break;
		case "accountEmpty":
			c = '<div class="z-popUp z-pop-box"><span class="gray3">\u8bf7\u9009\u62e9\u652f\u4ed8\u65b9\u5f0f\uff01</span><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
			var b = function() {
				aN.find("a.z-btn-determine").click(function() {
					$.PageDialog.close();
					return false
				})
			};
			$.PageDialog(c, {
				W : 314,
				H : 180,
				close : true,
				autoClose : false,
				ready : b
			});
			break;
		case "cartEmpty":
			c = '<div class="z-popUp z-pop-box"><span class="gray3">\u4eb2\uff0c\u60a8\u7684\u8d2d\u7269\u8f66\u4e2d\u6ca1\u6709\u5546\u54c1\u54e6\uff0c\u53bb\u9009\u8d2d\u4e00\u4e9b\u5427\uff01</span><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
			var b = function() {
				aN.find("a.z-btn-determine").click(function() {
					$.PageDialog.close();
					location.replace("/list/hot20.html");
					return false
				})
			};
			$.PageDialog(c, {
				W : 380,
				H : 197,
				close : true,
				autoClose : false,
				ready : b
			});
			break;
		case "usePoint":
			c = '<div class="z-popUp z-pop-box">'
					+ bs("\u60a8\u786e\u5b9a\u4f7f\u7528\u798f\u5206\u62b5\u6263\u5417\uff1f")
					+ '<a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
			var b = function() {
				aN
						.find("a.z-btn-determine")
						.one(
								"click",
								function() {
									$(this).prev("a").hide();
									$(this)
											.html(
													"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u5019")
											.attr("class", "z-btn-cancel")
											.attr("title",
													"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u5019");
									d();
									return false
								});
				aN.find("a.z-btn-cancel").click(function() {
					$.PageDialog.close();
					return false
				})
			};
			$.PageDialog(c, {
				W : 368,
				H : a8 == 0 ? 170 : 197,
				close : true,
				autoClose : false,
				ready : b
			});
			break;
		case "usePB":
			c = '<div class="z-popUp z-pop-box">'
					+ bs("\u60a8\u786e\u5b9a\u4f7f\u7528\u798f\u5206+\u4f59\u989d\u652f\u4ed8\u5417\uff1f")
					+ '<a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
			var b = function() {
				aN
						.find("a.z-btn-determine")
						.one(
								"click",
								function() {
									$(this).prev("a").hide();
									$(this)
											.html(
													"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u5019")
											.attr("class", "z-btn-cancel")
											.attr("title",
													"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u5019");
									d();
									return false
								});
				aN.find("a.z-btn-cancel").click(function() {
					$.PageDialog.close();
					return false
				})
			};
			$.PageDialog(c, {
				W : 385,
				H : a8 == 0 ? 170 : 197,
				close : true,
				autoClose : false,
				ready : b
			});
			break;
		case "useBalance":
			c = '<div class="z-popUp z-pop-box">'
					+ bs("\u60a8\u786e\u5b9a\u4f7f\u7528\u8d26\u6237\u4f59\u989d\u652f\u4ed8\u5417\uff1f")
					+ '<a href="javascript:;" title="\u53d6\u6d88" class="z-btn-cancel">\u53d6\u6d88</a><a href="javascript:;" title="\u786e\u5b9a" class="z-btn-determine">\u786e\u5b9a</a></div>';
			var b = function() {
				aN
						.find("a.z-btn-determine")
						.one(
								"click",
								function() {
									$(this).prev("a").hide();
									$(this)
											.html(
													"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u5019")
											.attr("class", "z-btn-cancel")
											.attr("title",
													"\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u5019");
									d();
									return false
								});
				aN.find("a.z-btn-cancel").click(function() {
					$.PageDialog.close();
					return false
				})
			};
			$.PageDialog(c, {
				W : 370,
				H : a8 == 0 ? 170 : 197,
				close : true,
				autoClose : false,
				ready : b
			});
			break;
		case "pointErr":
			c = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u4f7f\u7528\u798f\u5206\u8f93\u5165\u4e0d\u5bf9\u54e6\uff01</div>';
			$.PageDialog(c, {
				W : 210,
				H : 65,
				close : false,
				autoClose : true,
				autoTime : 1000,
				submit : d
			});
			break;
		case "pointEmpty":
			c = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u8bf7\u8f93\u5165\u9700\u8981\u62b5\u6263\u7684\u798f\u5206\uff01</div>';
			$.PageDialog(c, {
				W : 226,
				H : 65,
				close : false,
				autoClose : true,
				autoTime : 1000,
				submit : d
			});
			break;
		case "submitErr":
			c = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u63d0\u4ea4\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01</div>';
			$.PageDialog(c, {
				W : 210,
				H : 65,
				close : false,
				autoClose : true,
				autoTime : 1000,
				submit : function() {
					location.reload()
				}
			});
			break;
		case "paypwdLock":
			c = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u9519\u8bef\u6b21\u6570\u8fc7\u591a\uff0c\u652f\u4ed8\u5bc6\u7801\u5df2\u88ab\u51bb\u7ed3\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\uff01</div>';
			$.PageDialog(c, {
				W : 405,
				H : 65,
				close : false,
				autoClose : true,
				autoTime : 3000
			});
			break;
		case "paypwdEmpty":
			c = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u8bf7\u5148\u8f93\u5165\u652f\u4ed8\u5bc6\u7801\uff01</div>';
			$.PageDialog(c, {
				W : 200,
				H : 65,
				close : false,
				autoClose : true,
				autoTime : 2000
			});
			break;
		case "paypwdError":
			c = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u652f\u4ed8\u5bc6\u7801\u4e3a6\u4f4d\u6570\u5b57\uff01</div>';
			$.PageDialog(c, {
				W : 200,
				H : 65,
				close : false,
				autoClose : true,
				autoTime : 2000
			});
			break;
		case "paypwdError2":
			c = '<div class="z-popUp z-sold-out"><i class="z-arrows"></i>\u60a8\u7684\u652f\u4ed8\u5bc6\u7801\u8f93\u5165\u9519\u8bef\uff01</div>';
			$.PageDialog(c, {
				W : 230,
				H : 65,
				close : false,
				autoClose : true,
				autoTime : 2000
			});
			break
		}
	};
	var aH = function(b) {
		be = -1;
		var a = 0;
		aJ = 0;
		aP = true;
		a3.html("-\uffe50.00");
		if (aZ > 0) {
			if (a7) {
				var d = bb.val();
				if (d != "") {
					if (av.test(d) && parseInt(d) <= aZ
							&& parseInt(d) % 100 == 0
							&& parseInt(d) / 100 <= aV) {
						aJ = parseInt(d);
						a = parseInt(aJ / 100);
						a3.html("-\uffe5" + a + ".00").show();
						be = 0
					} else {
						aP = false
					}
				}
			}
			if (aY > 0) {
				ay.removeClass("f-pay-grayBg")
			}
		}
		a5 = 0;
		aX.html("-\uffe50.00");
		if (aY > 0) {
			if (bh) {
				var c = aV > a ? aV - a : a - aV;
				a5 = c > aY ? aY : c;
				if (a5 > 0) {
					aX.html("-\uffe5" + a5 + ".00").show();
					if (a > 0) {
						be = 1
					} else {
						be = 3
					}
					ay.removeClass("f-pay-grayBg")
				} else {
					bh = false;
					bn.html("");
					ay.addClass("f-pay-grayBg")
				}
			} else {
				if (a >= aV) {
					ay.addClass("f-pay-grayBg")
				}
			}
		}
		bd = aV - a5 - a;
		if (bd > 0) {
			if (be == -1) {
				be = 5;
				if (aY <= 0) {
					$("#spPayTitle")
							.html(
									"\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3\uff0c\u8bf7\u9009\u62e9\u4ee5\u4e0b\u65b9\u5f0f\u5b8c\u6210\u652f\u4ed8")
				}
			} else {
				if (be == 0) {
					be = 2
				} else {
					if (be == 1) {
						be = 6
					} else {
						if (be == 3) {
							be = 4
						}
					}
				}
			}
			bk.show();
			ba.html("\uffe5" + bd + ".00");
			$("#bankMoney").val(bd)
		} else {
			bk.hide();
			ba.html("\uffe50.00")
		}
		if (aV - a > 0) {
			aF.html("\u6210\u529f\u652f\u4ed8\u5373\u53ef\u83b7\u5f97"
					+ (aV - a) + "\u798f\u5206")
		} else {
			aF.html("")
		}
		br(b)
	};
	if (aY > 0) {
		ay.removeClass("f-pay-grayBg");
		a5 = aV > aY ? aY : aV;
		bh = true;
		bn.html(aT).click(function() {
			if (!ay.hasClass("f-pay-grayBg")) {
				if ($(this).find("b").length > 0) {
					bh = false;
					$(this).html("");
					aX.hide()
				} else {
					bh = true;
					$(this).html(aT);
					aX.show()
				}
				aH()
			}
			return false
		})
	}
	if (aZ >= 100) {
		var bg = 0;
		$("#ddPointBox").removeClass("f-pay-grayBg");
		var aC = aV - a5;
		if (aC > 0) {
			a7 = true;
			aD.html(aT).parent().prevAll("cite").show();
			aD.parent().prev("span").html(
					"\u60a8\u7684\u798f\u5206<i>" + aZ
							+ "</i>\uff0c\u4f7f\u7528\u798f\u5206");
			var aS = parseInt(aB / 100);
			var aW = (aC > aS ? aS : aC) * 100;
			bb.val(aW)
		}
		aD.click(function() {
			var a = true;
			if ($(this).find("b").length > 0) {
				a7 = false;
				$(this).html("").parent().prevAll("cite").hide();
				$(this).parent().prev("span").html(
						"\u4f7f\u7528\u798f\u5206\u652f\u4ed8\uff0c\u60a8\u7684\u798f\u5206<i>"
								+ aZ + "</i>");
				bb.val("")
			} else {
				a7 = true;
				$(this).html(aT).parent().prevAll("cite").show();
				$(this).parent().prev("span").html(
						"\u60a8\u7684\u798f\u5206<i>" + aZ
								+ "</i>\uff0c\u4f7f\u7528\u798f\u5206");
				var b = aV - a5;
				if (b > 0) {
					var c = parseInt(aB / 100);
					c = (b > c ? c : b) * 100;
					bb.val(c);
					bg = c
				} else {
					bb.val("");
					a = false
				}
				bb.focus()
			}
			aH(a);
			return false
		});
		var bc = function(a) {
			a3.next("span").html("<em><b></b></em>" + a)
		};
		bb
				.keyup(function(a) {
					var c = false;
					var d = bb.val();
					if (d == "") {
						bg = 0
					} else {
						if (!av.test(d)) {
							if (bg == 0) {
								bb.val("")
							} else {
								bb.val(bg)
							}
						} else {
							if (parseInt(d) == 0) {
								bb.val("0")
							} else {
								var b = aV > parseInt(aZ / 100) ? parseInt(aZ / 100)
										: aV;
								if (parseInt(d) % 100 == 0
										|| parseInt(d) >= b * 100) {
									if (parseInt(d) / 100 > b) {
										d = b * 100;
										bb.val(d);
										bc("\u6700\u591a\u53ef\u4f7f\u7528" + d
												+ "\u798f\u5206")
									}
									bg = d;
									c = true
								} else {
									if (parseInt(d) % 100 != 0) {
										bc("\u5fc5\u987b\u4e3a100\u7684\u6574\u6570\u500d")
									}
								}
							}
						}
					}
					aH(c)
				})
	}
	var bf = $("#divPaypwd");
	var a1 = false;
	var br = function(a) {
		a1 = false;
		if (be != 5) {
			if (bq == 1) {
				if (a8 <= 0) {
					a1 = true
				} else {
					var b = parseInt(aJ / 100);
					if ((b + parseInt(a5)) > a8) {
						a1 = true
					}
				}
			}
		}
		if (a1) {
			bf.show();
			if (a != false) {
				at.focus().addClass("borcolor")
			}
			bi(false)
		} else {
			bm.val("");
			at.val("").next("s").hide();
			bf.hide();
			bi(true)
		}
	};
	var bi = function(a) {
		if (a) {
			bo.parent().removeClass("f-grayButton")
		} else {
			bo.parent().addClass("f-grayButton")
		}
	};
	aH();
	var ar = false, aM = false;
	var au = $("#emTip");
	if (bq == 1) {
		var aE = "", aO = "";
		var aG = false;
		var a0 = function(a) {
			if (aG) {
				return
			}
			ao(-1);
			aG = true;
			ar = false;
			aM = false;
			at.attr("readonly", "readonly")
		};
		var ao = function(a) {
			if (a == -1) {
				at.next("s").attr("class", "").show()
			} else {
				if (a == 0) {
					at.next("s").hide()
				} else {
					if (a == 1) {
						at.next("s").attr("class", "tips_txt_Correct").show()
					} else {
						if (a == 2) {
							at.next("s").attr("class", "tips_txt_Wrong").show()
						}
					}
				}
			}
		};
		at.keyup(function(a) {
			au.hide();
			var b = $(this).val();
			var c = window.event ? event.keyCode : a.keyCode;
			if ((c >= 48 && c <= 57) || (c >= 96 && c <= 105)) {
				if (/^\d+$/.test(b)) {
					if (aw.test(b)) {
						if (aE != b) {
							aE = b;
							a0(b)
						}
					}
					aO = b;
					if (b.length == 1) {
						aE = ""
					}
				}
			} else {
				if (c != 37 && c != 39) {
					if (c == 8 || c == 46) {
						bm.val("");
						ao(2);
						aO = $(this).val();
						aE = aO
					} else {
						aO = /^\d+/.exec(b);
						if (aO == null) {
							aO = ""
						}
						$(this).val(aO);
						aE = aO
					}
					if (!aw.test(b)) {
						bi(false)
					}
				}
			}
			if (aO.toString().length < 1) {
				ao(0)
			}
		}).blur(function() {
			if (!aG) {
				var a = $(this).val();
				if (a == "") {
					ao(0);
					au.show()
				} else {
					if (!aw.test(a)) {
						ao(2)
					} else {
						if (!ar) {
							ao(2)
						}
					}
				}
			}
			$(this).removeClass("borcolor")
		}).focus(function() {
			$(this).addClass("borcolor")
		});
		au.click(function() {
			$(this).hide();
			at.focus();
			return false
		})
	} else {
		bi(true)
	}
	var a6 = $("#divExpand");
	if (a6.length > 0) {
		var ax = $("#divCartList");
		var aq = $("#btnExpand");
		var bj = $("#divPayWayBox");
		var bp = false;
		var aR = parseInt($("#hidTotalCount").val());
		var az = aR * 60 + 26;
		var aI = 200;
		var ap = false;
		bj.css("margin-top", "-60px");
		if (aR > 5) {
			ax.css("height", "331px");
			aq.html('<b class="z-arrows"></b>\u5c55\u5f00\u5168\u90e8' + aR
					+ "\u4ef6\u5546\u54c1")
		} else {
			a6.addClass("g-pay-unfold2")
		}
		a6
				.click(function() {
					if (ap) {
						return
					}
					ap = true;
					if (bp) {
						ax
								.animate(
										{
											height : 331
										},
										{
											queue : false,
											duration : aI,
											complete : function() {
												bp = false;
												bj.css("margin-top", "-60px");
												a6.removeClass("g-pay-unfold2");
												aq
														.html('<b class="z-arrows"></b>\u5c55\u5f00\u5168\u90e8'
																+ aR
																+ "\u4ef6\u5546\u54c1");
												ap = false
											}
										})
					} else {
						ax
								.animate(
										{
											height : az
										},
										{
											queue : false,
											duration : aI,
											complete : function() {
												bp = true;
												a6.addClass("g-pay-unfold2");
												aq
														.html('<b class="z-arrows z-arrows2"></b>\u6536\u8d77');
												bj.css("margin-top", "0px");
												ap = false
											}
										})
					}
					return false
				})
	}
	var bl = $("#dlCXK");
	var aU = $("#dlXYK");
	var aA = $("#dlPayForm");
	$("#btnCXK").click(
			function() {
				$(this).parent().addClass("current").next("span").removeClass(
						"current");
				bl.show().next("dl").hide()
			});
	$("#btnXYK").click(
			function() {
				$(this).parent().addClass("current").prev("span").removeClass(
						"current");
				aU.show().prev("dl").hide()
			});
	bl.children("dd").each(function() {
		$(this).click(function() {
			$(this).addClass("checked").siblings().removeClass("checked");
			$(this).find("input").attr("checked", "checked");
			aU.children("dd").each(function() {
				$(this).removeClass("checked")
			});
			aA.children("dd").each(function() {
				$(this).removeClass("checked")
			})
		})
	});
	aU.children("dd").each(function() {
		$(this).click(function() {
			$(this).addClass("checked").siblings().removeClass("checked");
			$(this).find("input").attr("checked", "checked");
			bl.children("dd").each(function() {
				$(this).removeClass("checked")
			});
			aA.children("dd").each(function() {
				$(this).removeClass("checked")
			})
		})
	});
	aA.children("dd").each(function() {
		$(this).click(function() {
			$(this).addClass("checked").siblings().removeClass("checked");
			$(this).find("input").attr("checked", "checked");
			aU.children("dd").each(function() {
				$(this).removeClass("checked")
			});
			bl.children("dd").each(function() {
				$(this).removeClass("checked")
			})
		})
	});
	var aQ = function(a, c, b) {
		$.getJSON("http://account.1yyg.com/JPData/API.ashx?action=" + a + "&"
				+ c + "&fun=?", b)
	};
	var a9 = function() {
		var a = function() {
			bb.focus()
		};
		bo.bind("click", function() {
			if ($(this).parent().hasClass("f-grayButton")) {
				return false
			}
			if (!aP) {
				aL("pointErr", a);
				return false
			}
			if (a1) {
				var f = at.val();
				if (f == "") {
					aL("paypwdEmpty");
					return false
				} else {
					if (!aw.test(f)) {
						aL("paypwdError");
						return false
					} else {
						if (!ar) {
							if (aM) {
								aL("paypwdLock")
							} else {
								aL("paypwdError2")
							}
							return false
						}
					}
				}
			}
			var h = false;
			var c = bm.val();
			$("#hidIntegral").val(aJ);
			var j = function() {
				var k = function() {
					$("#btnBuyOk", "#pageDialog").bind("click", function() {
						location.replace("/user/UserBuyList.html")
					});
					$("#btnReSelect", "#pageDialog").bind("click", function() {
						bm.val("");
						$.PageDialog.close()
					})
				};
				$.PageDialog($("#payAltBox").html(), {
					W : 490,
					H : 237,
					ready : k
				})
			};
			var e = function(l) {
				var k = "";
				$("input[name=account]").each(function() {
					if ($(this).attr("checked")) {
						k = $(this).val()
					}
				});
				if (k == "") {
					aL("accountEmpty");
					h = false;
					return false
				}
				if (/^\d{3,4}$/.test(k)) {
					$("#hidPayName").val("Chinabank");
					$("#hidPayBank").val(k)
				} else {
					$("#hidPayName").val(k);
					$("#hidPayBank").val("0")
				}
				$("#hidUseBalance").val(l);
				if (a1) {
					at.val("").next("s").hide();
					au.show();
					bi(false)
				}
				if ($("#hidPayName").val() != "jdpay") {
					j()
				}
			};
			var i = function() {
				$
						.ajax({
							url : "/mycart/goPay.action",
							data : "integral=" + aJ + "&moneyCount=" + aV
									+ "&hidUseBalance=" + a5 + "&bankMoney="
									+ bd + "&id=" + $("#ids").val(),
							success : function(l) {
								if (l.error) {
									alert(l.error);
								}else if (l.length > 5) {
									location.replace(aK
											+ "/mycart/shopok.html?id=" + l)
								} else {
									if (l == "1") {
										aL("cartEmpty")
									} else {
										if (l == "10") {
											var k = new popLogin();
											PagePOPLoginOK = function() {
												k.hide()
											};
											k.show()
										} else {
											aL("submitErr")
										}
									}
								}
							},
							error : function() {
								aL("submitErr")
							}
						})
			};
			var d = function(k) {
				if (a1) {
					i()
				} else {
					aL(k, i)
				}
			};
			var g = function(k) {
				if (a1) {
					e(k)
				} else {
					e(k)
				}
			};
			if (be == -1) {
				aL("accountEmpty");
				h = false
			} else {
				if (be == 0) {
					if (aJ <= 0) {
						aL("pointErr", a)
					} else {
						d("usePoint")
					}
				} else {
					if (be == 1) {
						if (aJ <= 0) {
							aL("pointErr", a)
						} else {
							d("usePB")
						}
					} else {
						if (be == 3) {
							d("useBalance")
						} else {
							h = true;
							if (be == 4 || be == 6) {
								g(1)
							} else {
								if (be == 2) {
									g(0)
								} else {
									e(0)
								}
							}
						}
					}
				}
			}
			/*if ($("#hidPayName").val() == "jdpay") {
				h = false;
				var b = function() {
					$("body,html").animate({
						scrollTop : 0
					}, 0);
					WYPLUS.open({
						formId : "submitOK",
						iframeId : "iframeLayer"
					})
				};
				$.getScript(a2 + "/js/wyplusctrl.js?date=20150520", b)
			}*/
			return h
		});
		if (isNaN(aV)) {
			aL("cartEmpty")
		}
	};
	$.getScript(a2 + "/js/poplogin.js?date=150703", a9)
});
